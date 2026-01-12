export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-600">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Biofilia. Huertas verticales.</p>
          <p>Instalación · Mantenimiento · Reposición</p>
        </div>
      </div>
    </footer>
  );
}
