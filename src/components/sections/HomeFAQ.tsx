import { faqs } from "@/data/faqs";

export default function HomeFAQ() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">Preguntas frecuentes</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">{f.q}</h3>
            <p className="mt-2 text-sm text-zinc-700">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
