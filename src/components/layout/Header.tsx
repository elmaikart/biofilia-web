import Link from "next/link";

const nav = [
  { href: "/como-funciona", label: "Cómo funciona" },
  { href: "/hogar", label: "Hogar" },
  { href: "/negocios", label: "Negocios" },
  { href: "/galeria", label: "Galería" },
  { href: "/precios", label: "Precios" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#5b5c4a] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight md:text-2xl text-white"
        >
          Biofilia <span className="text-[#a9af95]">•</span>
        </Link>

        <nav className="hidden items-center gap-4 text-sm md:flex">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="hover:text-[#a9af95] transition"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contacto"
          className="rounded-full border border-white px-4 py-2 text-sm font-medium text-white hover:bg-[#a9af95] hover:text-[#23231e] transition"
        >
          Pedir presupuesto
        </Link>
      </div>
    </header>
  );
}
