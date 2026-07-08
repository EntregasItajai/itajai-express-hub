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
 * Envia um evento para o Google Ads via gtag.
 * - whatsapp_click dispara também a conversão configurada no Google Ads.
 * - Demais eventos são enviados como eventos regulares com valor em BRL.
 */
export function trackEvent(eventName: TrackedEvent, value?: number): void {
  const w = window as any;
  if (typeof w.gtag !== "function") return;

  const eventValue =
    value ?? EVENT_VALUES[eventName as keyof typeof EVENT_VALUES] ?? 0;

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

    // Botão / link WhatsApp (prioridade alta)
    const whatsappEl = target.closest<HTMLElement>(
      'a[href*="wa.me"], a[href*="whatsapp.com"], [data-track="whatsapp"]'
    );
    if (whatsappEl) {
      trackEvent("whatsapp_click");
      return;
    }

    // CTA explícito
    const ctaEl = target.closest<HTMLElement>('[data-track="cta"]');
    if (ctaEl) {
      trackEvent("cta_click");
      return;
    }

    // Navegação principal (header)
    const navEl = target.closest<HTMLElement>("header a, nav a");
    if (navEl) {
      trackEvent("nav_click");
      return;
    }

    // Cliques em seções sinalizadas
    const sectionEl = target.closest<HTMLElement>('[data-track="section"]');
    if (sectionEl) {
      trackEvent("section_click");
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
