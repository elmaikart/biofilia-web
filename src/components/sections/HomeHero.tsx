"use client";

export default function HomeHero() {
  return (
    <section className="bg-[#faf8f9] py-20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <p className="uppercase text-sm tracking-wider text-[#5b5c4a] font-semibold">
          Biofilia + Diseño + Sustentabilidad
        </p>
        <h1 className="mt-2 text-4xl font-bold text-[#23231e]">
          Cultiva Calidad de Vida
        </h1>
        <p className="mt-4 text-lg text-[#5b5c4a]">
          Transformá tu entorno en un ecosistema vivo e inteligente; mejorá tu calidad de vida con Biofilia. <br /> Conectate con la naturaleza y disfrutá los beneficios en el instante.
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="/contacto"
            className="rounded-full bg-[#5b5c4a] px-6 py-2 text-white text-sm hover:bg-[#23231e]"
          >
            Pedir presupuesto
          </a>
          <a
            href="/como-funciona"
            className="rounded-full border border-[#5b5c4a] px-6 py-2 text-sm text-[#5b5c4a] hover:bg-[#a9af95]/30"
          >
            Ver cómo funciona
          </a>
        </div>
      </div>
    </section>
  );
}
