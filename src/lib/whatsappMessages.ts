/**
 * Mensagem pronta do WhatsApp para cada página.
 * Usada pelo botão flutuante, que aparece em todas as páginas e precisa acompanhar a página aberta.
 * São as mesmas mensagens dos botões que ficam dentro de cada página.
 */

const WHATSAPP_NUMBER = "5547991508563";

const DEFAULT_MESSAGE = "Olá! Gostaria de solicitar um orçamento.";

const MESSAGES_BY_PATH: Record<string, string> = {
  "/diligencias": "Olá! Gostaria de solicitar uma diligência técnica na região de Itajaí.",
  "/apoio-juridico": "Olá! Gostaria de solicitar uma diligência jurídica na região de Itajaí.",
  "/assistencia-pessoal": "Olá! Gostaria de solicitar uma Assistência Pessoal.",
  "/casos-reais": "Vi os casos reais no site e gostaria de um orçamento para uma vistoria similar.",
};

function normalizePath(pathname: string): string {
  const lower = pathname.toLowerCase();
  return lower.length > 1 ? lower.replace(/\/+$/, "") : lower;
}

export function whatsappMessageForPath(pathname: string): string {
  return MESSAGES_BY_PATH[normalizePath(pathname)] ?? DEFAULT_MESSAGE;
}

export function whatsappUrlForPath(pathname: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessageForPath(pathname))}`;
}
