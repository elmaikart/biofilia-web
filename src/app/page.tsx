import HomeHero from "@/components/sections/HomeHero";
import HomeTracks from "@/components/sections/HomeTracks";
import HomeFAQ from "@/components/sections/HomeFAQ";
import HomeCTA from "@/components/sections/HomeCTA";
import BasicSlider from "@/components/sliders/BasicSlider";
import { biofiliaSlides } from "@/data/slides.biofilia";
import { hidroponiaSlides } from "@/data/slides.hidroponia";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <HomeHero />

      {/* Tracks / pasos */}
      <HomeTracks />

      {/* Qué es Biofilia */}
      <section className="mx-auto max-w-6xl px-4 pt-10">
        <h2 className="text-2xl font-semibold">¿Qué es Biofilia?</h2>
        <p className="mt-1 text-zinc-700">
          Huertas verticales con estética joven y familiar, pensadas para usar todos los días.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* CARD 1 - Hogar */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <img
              src="/images/cards/hogar.png"
              alt="Huerta vertical en casa"
              className="rounded-lg object-cover w-full h-auto"
            />
            <p className="text-sm text-emerald-700 mt-2">Hogar</p>
            <h3 className="font-semibold">Huerta vertical en casa</h3>
            <p className="text-sm text-gray-600">
              Una pared que produce verdes frescos. Limpio, ordenado y lindo.
            </p>
          </div>

          {/* CARD 2 - Negocios */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <img
              src="/images/cards/negocios.png"
              alt="Verdulerías con pared viva"
              className="rounded-lg object-cover w-full h-auto"
            />
            <p className="text-sm text-emerald-700 mt-2">Negocios</p>
            <h3 className="font-semibold">Verdulerías con pared viva</h3>
            <p className="text-sm text-gray-600">
              El cliente retira la bandeja (tipo maple). Reposición rápida.
            </p>
          </div>

          {/* CARD 3 - Servicio */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <img
              src="/images/cards/servicio.png"
              alt="Instalación y soporte"
              className="rounded-lg object-cover w-full h-auto"
            />
            <p className="text-sm text-emerald-700 mt-2">Servicio</p>
            <h3 className="font-semibold">Instalación + soporte</h3>
            <p className="text-sm text-gray-600">
              Te dejamos el sistema andando y te acompañamos con el mantenimiento.
            </p>
          </div>

          {/* CARD 4 - Modular */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <img
              src="/images/cards/modular.png"
              alt="Sistema modular"
              className="rounded-lg object-cover w-full h-auto"
            />
            <p className="text-sm text-emerald-700 mt-2">Modular</p>
            <h3 className="font-semibold">Escalable por módulos</h3>
            <p className="text-sm text-gray-600">
              Arrancás chico y sumás paneles cuando quieras.
            </p>
          </div>
        </div>

      </section>

      {/* Productos */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Biofilia Aplicada</h2>
        <p className="mt-1 text-zinc-700">
          Productos de diseño consciente.
        </p>
        <div className="mt-6">
          <BasicSlider slides={hidroponiaSlides} />
        </div>
      </section>

      {/* FAQ + CTA */}
      <HomeFAQ />
      <HomeCTA />
    </main>
  );
}
