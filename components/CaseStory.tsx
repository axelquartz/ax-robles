"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type Chapter = {
  titulo: string; dolor: string; solucion: string; puntos: string[];
  img: string; label: string; tipo: "movil" | "escritorio"; nota?: string;
};

function Frame({ ch, priority = false }: { ch: Chapter; priority?: boolean }) {
  if (ch.tipo === "escritorio") {
    return (
      <div className="w-full overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_50px_140px_-40px_rgba(120,169,255,.28)]">
        <div className="flex gap-1.5 border-b border-line px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-line" /><span className="h-2.5 w-2.5 rounded-full bg-line" /><span className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
        <Image src={ch.img} alt={ch.label} width={2000} height={900} priority={priority} className="w-full" sizes="(min-width:1024px) 60vw, 100vw" />
      </div>
    );
  }
  return (
    <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-[2.4rem] border border-line bg-surface p-2 shadow-[0_50px_140px_-40px_rgba(120,169,255,.28)]">
      <Image src={ch.img} alt={ch.label} width={780} height={1688} priority={priority} className="w-full rounded-[1.9rem]" sizes="280px" />
    </div>
  );
}

export default function CaseStory({ chapters }: { chapters: Chapter[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(Number((e.target as HTMLElement).dataset.i))),
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((r) => r && io.observe(r));
    return () => io.disconnect();
  }, []);
  const cur = chapters[active];

  return (
    <div className="mx-auto grid max-w-7xl gap-x-16 px-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.3fr)]">
      <div>
        {chapters.map((ch, i) => (
          <article key={ch.titulo} data-i={i} ref={(el) => { refs.current[i] = el; }} className="flex min-h-[85vh] flex-col justify-center border-t border-line py-16 first:border-t-0 lg:py-0">
            <p className="font-mono text-sm text-accent">Problema {i + 1} de {chapters.length}</p>
            <p className="mt-5 text-3xl leading-tight text-mute line-through decoration-accent/60 decoration-2 sm:text-5xl">{ch.dolor}</p>
            <h2 className="mt-10 text-4xl leading-[1.04] sm:text-6xl">{ch.titulo}</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/90">{ch.solucion}</p>
            <ul className="mt-6 space-y-2 text-mute">
              {ch.puntos.map((p) => <li key={p} className="flex gap-3"><span className="text-accent">+</span>{p}</li>)}
            </ul>
            <div className="mt-10 lg:hidden">
              <Frame ch={ch} />
              {ch.nota && <p className="mt-3 text-center text-xs text-mute">{ch.nota}</p>}
            </div>
          </article>
        ))}
      </div>

      <div className="relative hidden lg:block">
        <div className="sticky top-20 flex h-[calc(100vh-6rem)] flex-col justify-center">
          <div className="relative h-[min(72vh,760px)]">
            {chapters.map((ch, i) => (
              <div key={ch.titulo} aria-hidden={i !== active} className={`absolute inset-0 flex items-center justify-center transition-all duration-700 motion-reduce:transition-none ${i === active ? "scale-100 opacity-100" : "pointer-events-none scale-[0.97] opacity-0"}`}>
                {ch.tipo === "movil" ? (
                  <div className="h-full"><Image src={ch.img} alt={ch.label} width={780} height={1688} className="h-full w-auto rounded-[2.4rem] border border-line bg-surface p-2 shadow-[0_50px_140px_-40px_rgba(120,169,255,.35)]" /></div>
                ) : <Frame ch={ch} />}
              </div>
            ))}
          </div>
          <div className="mt-6 h-5 text-center text-xs text-mute">{cur.nota}</div>
          <div className="mx-auto mt-2 flex gap-2" aria-hidden>
            {chapters.map((c, i) => <span key={c.titulo} className={`h-1 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-accent" : "w-2 bg-line"}`} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
