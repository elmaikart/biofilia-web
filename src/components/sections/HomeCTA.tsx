import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14">
      <div className="rounded-3xl border border-black/10 bg-emerald-50 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">¿Querés tu pared viva?</h2>
        <p className="mt-2 max-w-2xl text-zinc-700">
          Contanos si es para hogar o negocio y te armamos una propuesta modular con instalación y soporte.
        </p>
        <div className="mt-6">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-800"
          >
            Hablemos
          </Link>
        </div>
      </div>
    </section>
  );
}
