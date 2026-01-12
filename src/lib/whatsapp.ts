export function buildWhatsAppUrl(phoneE164: string, message: string) {
  const text = encodeURIComponent(message);
  const phone = phoneE164.replace(/\+/g, "").replace(/\s/g, "");
  return `https://wa.me/${phone}?text=${text}`;
}
