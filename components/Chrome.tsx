import Link from "next/link";
import Image from "next/image";
import site from "@/data/site.json";

export const wa = (t: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t)}`;

export const btnPrimary = "inline-flex items-center rounded-full bg-ink px-6 py-3 text-[15px] font-normal text-bg transition hover:bg-white";
export const btnGhost = "inline-flex items-center rounded-full border border-line px-6 py-3 text-[15px] font-normal text-ink transition hover:border-mute";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/70 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" aria-label={`${site.marca}, inicio`}><Image src="/logo-ax-robles.png" alt={site.marca} width={1200} height={130} priority className="h-[15px] w-auto sm:h-[17px]" /></Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/#servicios" className="hidden text-mute transition hover:text-ink sm:inline">Servicios</Link>
          <Link href="/casos/vaqueros" className="hidden text-mute transition hover:text-ink sm:inline">Caso Vaquero&apos;s</Link>
          <Link href="/#contacto" className="rounded-full bg-ink px-4 py-1.5 font-normal text-bg transition hover:bg-white">Escríbeme</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 text-sm text-mute">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3">
        <span className="flex items-center gap-3"><Image src="/logo-ax.png" alt="" width={600} height={248} className="h-4 w-auto opacity-70" />© 2026 {site.marca}, {site.ciudad}</span>
        <a className="transition hover:text-ink" href={wa("Hola, vi tu sitio.")}>WhatsApp</a>
      </div>
    </footer>
  );
}

export function Metric({ etiqueta, valor }: { etiqueta: string; valor: string | null }) {
  return (
    <div>
      <div className={valor ? "text-5xl font-light tracking-tight" : "text-5xl font-light tracking-tight text-mute/50"}>{valor ?? "—"}</div>
      <div className="mt-2 text-sm text-mute">{etiqueta}{valor ? "" : " (por definir)"}</div>
    </div>
  );
}

export function Shot({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center justify-center rounded-3xl border border-dashed border-line bg-surface p-4 text-center font-mono text-xs text-mute ${className}`}>
      [Captura: {label}]
    </div>
  );
}
