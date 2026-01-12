"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { site } from "@/lib/site";

const DEFAULT_MSG =
  "Hola! Quiero una huerta vertical Biofilia. ¿Me asesorás? (Hogar/Negocio)";

export default function WhatsAppButton() {
  const href = buildWhatsAppUrl(site.phoneE164, DEFAULT_MSG);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-3 text-sm font-medium text-white shadow-lg hover:bg-emerald-800"
      aria-label="WhatsApp Biofilia"
    >
      <MessageCircle size={18} />
      WhatsApp
    </a>
  );
}
