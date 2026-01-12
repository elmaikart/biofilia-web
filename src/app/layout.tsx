import "@/app/globals.css"; // tu css propio

import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Biofilia | Huertas verticales",
  description: "Instalación de huertas hidropónicas verticales para hogares y negocios.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#fbfaf6] text-zinc-900">
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
