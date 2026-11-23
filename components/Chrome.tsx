import Link from "next/link";
import site from "@/data/site.json";

export const wa = (t: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t)}`;

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link href="/" className="font-display text-xl">{site.marca}</Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link href="/#servicios" className="hidden text-mute hover:text-ink sm:inline">Servicios</Link>
          <Link href="/casos/vaqueros" className="hidden text-mute hover:text-ink sm:inline">Caso Vaquero&apos;s</Link>
          <a href="/#contacto" className="rounded-sm bg-brass px-4 py-2 font-medium text-[var(--brass-ink)]">Escríbeme</a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 text-sm text-mute">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3">
        <span>© 2026 {site.marca}, {site.ciudad}</span>
        <a className="hover:text-ink" href={wa("Hola, vi tu sitio.")}>WhatsApp</a>
      </div>
    </footer>
  );
}

export function Metric({ etiqueta, valor }: { etiqueta: string; valor: string | null }) {
  return (
    <div>
      <div className={valor ? "font-display text-4xl" : "font-display text-4xl text-mute/60"}>{valor ?? "[por definir]"}</div>
      <div className="mt-1 text-sm text-mute">{etiqueta}</div>
    </div>
  );
}

export function Shot({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center justify-center rounded-sm border border-dashed border-line bg-surface p-4 text-center text-sm text-mute ${className}`}>
      [Captura: {label}]
    </div>
  );
}
