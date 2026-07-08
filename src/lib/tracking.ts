/**
 * Central tracking utility for Google Ads (AW-871515514).
 * Sends events + conversions via gtag with realistic BRL values.
 */

const GOOGLE_ADS_ID = "AW-871515514";
const CONVERSION_LABEL = "hF_WCNj04IEcEPqKyZ8D"; // Clique WhatsApp

// Valores realistas para motoboy (ticket médio baixo)
export const EVENT_VALUES = {
  whatsapp_click: 2.5,
  cta_click: 2.01,
  video_play: 1.0,
  section_click: 0.5,
  nav_click: 0.5,
} as const;

export type TrackedEvent = keyof typeof EVENT_VALUES | string;

/**
 * Retorna o texto visível de um elemento, incluindo atributos comuns de acessibilidade.
 */
function getElementText(el: HTMLElement): string {
  const raw =
    el.innerText ||
    el.getAttribute("aria-label") ||
    el.getAttribute("title") ||
    el.getAttribute("value") ||
    "";
  return raw.toLowerCase().trim();
}

/**
 * Retorna as classes e atributos relevantes de um elemento como string única.
 */
function getElementSignature(el: HTMLElement): string {
  const className = (el.className || "").toString().toLowerCase();
  const onclick = (el.getAttribute("onclick") || "").toLowerCase();
  const ariaLabel = (el.getAttribute("aria-label") || "").toLowerCase();
  const title = (el.getAttribute("title") || "").toLowerCase();
  return `${className} ${onclick} ${ariaLabel} ${title}`;
}

/**
 * Detecta se um elemento é um botão/link de WhatsApp.
 */
function isWhatsAppElement(el: HTMLElement): boolean {
  const tag = el.tagName.toLowerCase();
  if (!["a", "button"].includes(tag) && !el.closest("a") && !el.closest("button")) {
    return false;
  }

  const signature = getElementSignature(el);
  const text = getElementText(el);

  // href ou data-track explícito
  const href = (el.getAttribute("href") || "").toLowerCase();
  if (href.includes("wa.me") || href.includes("whatsapp.com")) return true;
  if (el.getAttribute("data-track") === "whatsapp") return true;

  // onClick com openWhatsApp
  if (signature.includes("openwhatsapp")) return true;

  // Texto ou aria-label com termos de WhatsApp
  const whatsappTerms = ["whatsapp", "whats", "zap", "chame no whatsapp", "chamar no whatsapp"];
  if (whatsappTerms.some((term) => text.includes(term))) return true;

  // Classes com whatsapp
  if (signature.includes("whatsapp")) return true;

  return false;
}

/**
 * Detecta se um elemento é um botão de CTA principal.
 */
function isCTAElement(el: HTMLElement): boolean {
  const tag = el.tagName.toLowerCase();
  if (!["a", "button"].includes(tag) && !el.closest("a") && !el.closest("button")) {
    return false;
  }

  // CTA explícito por data attribute
  if (el.getAttribute("data-track") === "cta") return true;

  const signature = getElementSignature(el);
  const text = getElementText(el);

  // Botões com classe "button" + texto de ação comercial
  const actionTerms = [
    "solicitar",
    "pedir",
    "orçamento",
    "agendar",
    "contratar",
    "chamar",
    "fale",
    "falar",
    "saiba mais",
    "começar",
    "quero",
    "reserve",
    "whatsapp",
    "whats",
    "zap",
  ];
  const hasButtonClass = signature.includes("button");
  const hasActionText = actionTerms.some((term) => text.includes(term) || signature.includes(term));
  if (hasButtonClass && hasActionText) return true;

  // Texto com CTA clássico (mesmo sem classe button)
  const ctaPhrases = ["solicitar", "pedir orçamento", "fale conosco", "falar conosco", "saiba mais", "agendar", "contratar"];
  if (ctaPhrases.some((phrase) => text.includes(phrase))) return true;

  return false;
}

/**
 * Envia um evento para o Google Ads via gtag.
 * - whatsapp_click dispara também a conversão configurada no Google Ads.
 * - Demais eventos são enviados como eventos regulares com valor em BRL.
 */
export function trackEvent(eventName: TrackedEvent, value?: number): void {
  const w = window as any;
  if (typeof w.gtag !== "function") {
    console.warn(`[tracking] gtag não disponível — evento "${eventName}" não enviado`);
    return;
  }

  const eventValue =
    value ?? EVENT_VALUES[eventName as keyof typeof EVENT_VALUES] ?? 0;

  console.log(`[tracking] disparando "${eventName}" — R$ ${eventValue.toFixed(2)} BRL`);

  // Conversão principal: clique no WhatsApp
  if (eventName === "whatsapp_click") {
    w.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABEL}`,
      value: eventValue,
      currency: "BRL",
    });
  }

  // Evento nomeado (para relatórios e segmentação)
  w.gtag("event", eventName, {
    send_to: GOOGLE_ADS_ID,
    value: eventValue,
    currency: "BRL",
  });
}

/**
 * Inicializa listeners globais de tracking baseados em delegação de eventos.
 * Retorna função de cleanup.
 */
export function initGlobalTracking(): () => void {
  const trackedVideos = new WeakSet<HTMLVideoElement>();

  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;

    // Sobe na árvore até encontrar um elemento clicável relevante
    let el: HTMLElement | null = target;
    while (el && el !== document.body) {
      // Botão / link WhatsApp (prioridade alta)
      if (isWhatsAppElement(el)) {
        trackEvent("whatsapp_click");
        return;
      }

      // CTA principal
      if (isCTAElement(el)) {
        trackEvent("cta_click");
        return;
      }

      // Navegação principal (header / nav)
      if (el.matches("header a, nav a")) {
        trackEvent("nav_click");
        return;
      }

      // Seções sinalizadas
      if (el.matches('[data-track="section"]')) {
        trackEvent("section_click");
        return;
      }

      el = el.parentElement;
    }
  };

  const handlePlay = (e: Event) => {
    const el = e.target as HTMLElement | null;
    if (!(el instanceof HTMLVideoElement)) return;
    if (trackedVideos.has(el)) return;
    trackedVideos.add(el);
    trackEvent("video_play");
  };

  document.addEventListener("click", handleClick, true);
  document.addEventListener("play", handlePlay, true);

  return () => {
    document.removeEventListener("click", handleClick, true);
    document.removeEventListener("play", handlePlay, true);
  };
}
