import { BUSINESS, WHATSAPP_BASE } from "./constants";

export function openWhatsApp(message) {
  if (!BUSINESS.whatsappNumber || BUSINESS.whatsappNumber.includes("X")) {
    return { ok: false, message: "Please configure the WhatsApp number in src/lib/constants.js before using this form." };
  }
  const url = `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
  return { ok: true };
}
