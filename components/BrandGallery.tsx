"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export type Brand = { slug: string; nombre: string; giro: string; lugar: string; anio: string; servicios: string[]; cliente: string; objetivo: string; solucion: string; resultado: string; entregables: string[]; n: number; portada?: number };

export default function BrandGallery({ brands }: { brands: Brand[] }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [cur, setCur] = useState<Brand | null>(null);

  const open = (b: Brand) => {
    setCur(b);
    document.body.style.overflow = "hidden";
    ref.current?.showModal();
    ref.current?.scrollTo({ top: 0 });
  };
  const close = () => ref.current?.close();

  return (
    <>
      <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-3 lg:gap-x-6">
        {brands.map((b) => (
          <li key={b.slug}>
            <button onClick={() => open(b)} className="group block w-full text-left" aria-label={`Ver el caso de ${b.nombre}`}>
              <div className="overflow-hidden rounded-2xl border border-line bg-surface">
                <Image src={`/marcas/${b.slug}/${b.portada ?? 1}.jpg`} alt={`${b.nombre}, ${b.giro}`} width={1080} height={1080} sizes="(min-width:1024px) 380px, 45vw" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.04] motion-reduce:transition-none" />
              </div>
              <div className="mt-4 text-xl font-normal tracking-tight sm:text-2xl">{b.nombre}</div>
              <div className="mt-1 text-sm text-mute">{b.giro}</div>
            </button>
          </li>
        ))}
      </ul>

      <dialog ref={ref} onClose={() => { document.body.style.overflow = ""; }} aria-label={cur ? `Caso de ${cur.nombre}` : "Caso"} className="fixed inset-0 m-0 h-dvh max-h-none w-dvw max-w-none overflow-y-auto bg-bg p-0 text-ink backdrop:bg-black">
        {cur && (
          <div className="mx-auto max-w-5xl px-5 pb-24">
            <div className="sticky top-0 z-10 flex justify-end bg-bg/80 py-4 backdrop-blur">
              <button onClick={close} className="rounded-full border border-line px-5 py-2 text-sm transition hover:border-mute">Cerrar</button>
            </div>
            <h3 className="mt-4 text-5xl leading-[1.02] sm:text-7xl">{cur.nombre}</h3>
            <p className="mt-4 text-lg text-mute">{cur.giro} · {cur.lugar} · {cur.anio}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {cur.servicios.map((x) => <li key={x} className="rounded-full border border-line px-4 py-1.5 text-sm text-ink/90">{x}</li>)}
            </ul>
            <div className="mt-12 grid gap-x-12 gap-y-10 lg:grid-cols-2">
              {([["El cliente", cur.cliente], ["El objetivo", cur.objetivo], ["La solución", cur.solucion], ["El resultado", cur.resultado]] as const).map(([t, d]) => (
                <section key={t}>
                  <h4 className="text-xl font-normal tracking-tight">{t}</h4>
                  <p className="mt-3 leading-relaxed text-mute">{d}</p>
                </section>
              ))}
            </div>
            <section className="mt-10">
              <h4 className="text-xl font-normal tracking-tight">Qué se entregó</h4>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cur.entregables.map((x) => <li key={x} className="rounded-full bg-surface px-4 py-2 text-sm text-ink/90">{x}</li>)}
              </ul>
            </section>
            <div className="mt-12 grid gap-3 sm:grid-cols-2">
              {Array.from({ length: cur.n }, (_, i) => (
                <Image key={i} src={`/marcas/${cur.slug}/${i + 1}.jpg`} alt={`${cur.nombre}, imagen ${i + 1}`} width={1080} height={1080} sizes="(min-width:1024px) 500px, 100vw" className={`w-full rounded-2xl border border-line object-cover ${i === 0 ? "sm:col-span-2" : ""}`} />
              ))}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
