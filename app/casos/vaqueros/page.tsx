import Link from "next/link";
import site from "@/data/site.json";
import v from "@/data/vaqueros.json";
import { Header, Footer, Metric, Shot, wa } from "@/components/Chrome";

const wrap = "mx-auto max-w-4xl px-5";

export const metadata = { title: "Vaquero's · Caso de estudio · AX Robles" };

export default function Caso() {
  return (
    <>
      <Header />
      <main>
        <section className={`${wrap} py-16 sm:py-24`}>
          <Link href="/" className="text-sm text-mute hover:text-ink">Volver al inicio</Link>
          <h1 className="mt-6 text-5xl sm:text-7xl">{v.nombre}</h1>
          <p className="mt-4 text-lg text-mute">{v.giro}. {v.resumen}</p>
          <div className="mt-10 grid grid-cols-3 gap-4">{v.metricas.map((m) => <Metric key={m.etiqueta} {...m} />)}</div>
          <a href={site.demoUrl} target="_blank" rel="noreferrer" className="mt-10 inline-block rounded-sm bg-brass px-5 py-3.5 font-medium text-[var(--brass-ink)]">Probar el menú en vivo</a>
        </section>

        <section className={`${wrap} grid gap-3 pb-16 sm:grid-cols-3`}>
          <Shot label="menú en celular" className="aspect-[9/16]" />
          <Shot label="checkout por pasos" className="aspect-[9/16]" />
          <Shot label="seguimiento del pedido" className="aspect-[9/16]" />
        </section>

        <section className={`${wrap} space-y-12 border-t border-line py-16`}>
          <div>
            <h2 className="text-3xl">El reto</h2>
            <p className="mt-3 max-w-xl text-mute">[Por completar: cómo vendía Vaquero&apos;s antes, qué comisiones o fricciones tenía, qué quería lograr.]</p>
          </div>
          <div>
            <h2 className="text-3xl">Lo que construí</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">{v.funciones.map((f) => <li key={f} className="flex gap-2"><span className="text-brass">+</span>{f}</li>)}</ul>
          </div>
          <div>
            <h2 className="text-3xl">Con qué lo hice</h2>
            <p className="mt-3 text-mute">{v.stack.join(", ")}.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Shot label="panel de cocina" className="aspect-video" />
            <Shot label="dashboard de ventas" className="aspect-video" />
          </div>
          <div>
            <h2 className="text-3xl">El resultado</h2>
            <p className="mt-3 max-w-xl text-mute">[Por completar con cifras reales: pedidos, tiempo de entrega, ticket promedio y una frase del dueño.]</p>
          </div>
        </section>

        <section className="border-t border-line bg-surface py-16">
          <div className={`${wrap} flex flex-wrap items-center justify-between gap-6`}>
            <h2 className="max-w-md text-3xl">¿Quieres algo así para tu negocio?</h2>
            <a href={wa("Hola, vi el caso de Vaquero's y quiero algo similar.")} className="rounded-sm bg-brass px-5 py-3.5 font-medium text-[var(--brass-ink)]">Escríbeme por WhatsApp</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
