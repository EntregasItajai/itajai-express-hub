/**
 * Atribuição de leads (Método Sniper).
 *
 * 1. Ao chegar no site, guarda gclid/gbraid/wbraid e utm_* da URL (30 dias).
 * 2. No clique em um link do WhatsApp com mensagem pronta, acrescenta "Código: EI-XXXXX"
 *    ao texto e avisa o n8n (sem esperar resposta) para gravar o lead em leads_site.
 * 3. Quando a mensagem chega pela uazapi, o Orquestrador liga o código ao número do WhatsApp.
 *
 * Regra de ouro: NUNCA atrapalhar o clique. Tudo fica dentro de try/catch, não espera a rede
 * e, se algo falhar, o link original do WhatsApp continua funcionando.
 */

const STORAGE_KEY = "ei_attr_v1";
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;
const LEAD_WEBHOOK = "https://assistent-n8n.gmmg0l.easypanel.host/webhook/sniper-lead";
// Sem 0, O, 1, I e L para o código não ser confundido ao ser lido ou digitado.
const CODE_ALPHABET = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";
const ORIGINAL_HREF_ATTR = "data-ei-original-href";
const TRACKED_PARAMS = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

type TrackedParam = (typeof TRACKED_PARAMS)[number];
type Attribution = Partial<Record<TrackedParam, string>> & { landing?: string; ts: number };

function readStoredAttribution(): Attribution | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Attribution;
    if (!parsed || typeof parsed.ts !== "number") return null;
    if (Date.now() - parsed.ts > MAX_AGE_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

/**
 * Lê os parâmetros de campanha da URL e guarda. A última visita com parâmetros vence.
 * Visita sem parâmetros não apaga o que já estava guardado.
 */
export function captureAttribution(): void {
  try {
    const params = new URLSearchParams(window.location.search);
    const found: Attribution = { ts: Date.now() };
    let hasAny = false;

    for (const key of TRACKED_PARAMS) {
      const value = params.get(key);
      if (value) {
        found[key] = value.slice(0, 200);
        hasAny = true;
      }
    }

    if (!hasAny) return;
    found.landing = window.location.pathname;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(found));
  } catch {
    // Armazenamento bloqueado (aba anônima, por exemplo): segue sem guardar.
  }
}

function newLeadCode(): string {
  const length = 5;
  let code = "EI-";
  try {
    const bytes = new Uint8Array(length);
    window.crypto.getRandomValues(bytes);
    for (let i = 0; i < length; i += 1) {
      code += CODE_ALPHABET.charAt(bytes[i] % CODE_ALPHABET.length);
    }
  } catch {
    for (let i = 0; i < length; i += 1) {
      code += CODE_ALPHABET.charAt(Math.floor(Math.random() * CODE_ALPHABET.length));
    }
  }
  return code;
}

/**
 * Devolve o link do WhatsApp com "Código: EI-XXXXX" no fim da mensagem.
 * Devolve null se o link não for um wa.me com mensagem pronta.
 */
function withLeadCode(originalHref: string, code: string): string | null {
  let url: URL;
  try {
    url = new URL(originalHref, window.location.href);
  } catch {
    return null;
  }
  if (url.hostname !== "wa.me") return null;

  const text = url.searchParams.get("text");
  if (!text) return null;

  const newText = `${text.trim()}\n\nCódigo: ${code}`;
  let query = `text=${encodeURIComponent(newText)}`;
  url.searchParams.forEach((value, key) => {
    if (key !== "text") query += `&${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
  });
  return `${url.origin}${url.pathname}?${query}`;
}

function registerLead(code: string, link: HTMLAnchorElement): void {
  const stored = readStoredAttribution();
  const pagePath = window.location.pathname;
  const label = (link.innerText || link.getAttribute("aria-label") || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 60);

  const body = new URLSearchParams();
  body.set("codigo", code);
  body.set("pagina_entrada", (stored && stored.landing) || pagePath);
  body.set("botao", `${pagePath} | ${label || "WhatsApp"}`);
  if (stored) {
    for (const key of TRACKED_PARAMS) {
      const value = stored[key];
      if (value) body.set(key, value);
    }
  }

  try {
    // no-cors com corpo em formato de formulário é um pedido "simples": sem preflight,
    // sem depender de CORS e sem esperar resposta. keepalive deixa o envio terminar
    // mesmo se a aba do WhatsApp abrir na hora.
    void fetch(LEAD_WEBHOOK, {
      method: "POST",
      body,
      mode: "no-cors",
      credentials: "omit",
      keepalive: true,
    }).catch(() => undefined);
  } catch {
    try {
      navigator.sendBeacon(LEAD_WEBHOOK, body);
    } catch {
      // Sem registro: o lead continua chegando pelo WhatsApp, só sem origem.
    }
  }
}

/**
 * Chamar no início de cada clique (fase de captura). Se o clique foi em um link do WhatsApp
 * com mensagem pronta, troca o href pela versão com código e registra o lead.
 */
export function prepareWhatsAppClick(target: EventTarget | null): void {
  try {
    if (!(target instanceof Element)) return;
    const link = target.closest("a");
    if (!(link instanceof HTMLAnchorElement)) return;

    const originalHref = link.getAttribute(ORIGINAL_HREF_ATTR) || link.getAttribute("href") || "";
    const code = newLeadCode();
    const newHref = withLeadCode(originalHref, code);
    if (!newHref) return;

    link.setAttribute(ORIGINAL_HREF_ATTR, originalHref);
    link.setAttribute("href", newHref);
    registerLead(code, link);
  } catch {
    // Nunca atrapalhar o clique.
  }
}
