import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import sitios from "@/data/sitios.json";
import SiteShowcase, { BrowserFrame, PhoneFrame } from "@/components/SiteShowcase";
import { Header, Footer, wa, btnPrimary, btnGhost } from "@/components/Chrome";

export function generateStaticParams() {
  return sitios.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = sitios.find((x) => x.slug === slug);
  return { title: s ? `${s.nombre} · Caso de estudio · AX Robles` : "Caso de estudio · AX Robles" };
}

export default async function SiteCase({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = sitios.find((x) => x.slug === slug);
  if (!s) notFound();
  const otro = sitios.find((x) => x.slug !== slug);

  return (
    <>
      <Header />
      <main>
        <section className="hero-glow overflow-hidden">
          <div className="mx-auto max-w-6xl px-5 pt-14 text-center sm:pt-24">
            <Link href="/#sitios" className="text-sm text-mute transition hover:text-ink">Volver a los sitios</Link>
            <p className="mt-8 text-lg text-mute">{s.nombre} · {s.giro} · {s.anio}</p>
            <h1 className="mx-auto mt-4 max-w-5xl text-5xl leading-[0.98] sm:text-7xl lg:text-8xl">{s.titular}</h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-mute sm:text-2xl">{s.subtitulo}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={s.url} target="_blank" rel="noreferrer" className={btnPrimary}>Visitar el sitio en vivo</a>
              <a href="#recorrido" className={btnGhost}>Ver el recorrido</a>
            </div>
          </div>
          <SiteShowcase desktop={s.hero.img} phone={s.movil[0].img} w={s.hero.w} h={s.hero.h} nombre={s.nombre} className="mt-14 sm:mt-24" />
        </section>

        <section className="border-y border-line bg-surface py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="max-w-3xl text-4xl sm:text-6xl">El proyecto, en tres partes.</h2>
            <div className="mt-14 grid gap-12 lg:grid-cols-3">
              {([["El cliente y el reto", s.reto], ["La solución", s.solucion], ["El resultado", s.resultado]] as const).map(([t, parrafos]) => (
                <div key={t}>
                  <h3 className="text-2xl font-normal tracking-tight">{t}</h3>
                  {parrafos.map((p) => <p key={p} className="mt-4 leading-relaxed text-mute">{p}</p>)}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="recorrido" className="py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="max-w-3xl text-4xl sm:text-6xl">Un recorrido por el sitio.</h2>
            <div className="mt-16 space-y-24 sm:space-y-32">
              {s.galeria.map((g, i) => (
                <figure key={g.img} className="grid items-center gap-8 lg:grid-cols-[1fr_1.7fr] lg:gap-14">
                  <figcaption className={i % 2 ? "lg:order-2" : ""}>
                    <h3 className="text-3xl leading-tight sm:text-4xl">{g.titulo}</h3>
                    <p className="mt-4 max-w-md leading-relaxed text-mute">{g.texto}</p>
                  </figcaption>
                  <BrowserFrame src={g.img} alt={g.titulo} w={g.w} h={g.h} className={i % 2 ? "lg:order-1" : ""} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-surface py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="max-w-3xl text-4xl sm:text-6xl">Y en el celular, igual de cuidado.</h2>
            <p className="mt-6 max-w-xl text-lg text-mute">{s.textoMovil}</p>
            <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-5 sm:gap-10">
              {s.movil.map((m) => <PhoneFrame key={m.img} src={m.img} alt={`${s.nombre} en celular`} />)}
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-16 px-5 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl sm:text-5xl">Qué incluye.</h2>
              <ul className="mt-8 space-y-3 text-lg text-ink/90">
                {s.incluye.map((i) => <li key={i} className="flex gap-3"><span className="text-accent">+</span>{i}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="text-4xl sm:text-5xl">Hecho con.</h2>
              <ul className="mt-8 flex flex-wrap gap-2">
                {s.stack.map((t) => <li key={t} className="rounded-full border border-line px-4 py-2 text-sm text-ink/90">{t}</li>)}
              </ul>
              <a href={s.url} target="_blank" rel="noreferrer" className={`mt-10 ${btnGhost}`}>Abrir {new URL(s.url).host}</a>
            </div>
          </div>
        </section>

        <section className="hero-glow border-t border-line py-28 text-center sm:py-44">
          <div className="mx-auto max-w-4xl px-5">
            <h2 className="text-5xl leading-[0.98] sm:text-7xl lg:text-8xl">¿Necesitas un sitio así para tu negocio?</h2>
            <p className="mx-auto mt-8 max-w-xl text-lg text-mute sm:text-xl">Cuéntame qué vendes y a quién quieres llegar. Te propongo alcance, tiempo y precio por escrito.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={wa(`Hola, vi el caso de ${s.nombre} y quiero un sitio similar.`)} className={btnPrimary}>Escríbeme por WhatsApp</a>
              {otro && <Link href={`/casos/${otro.slug}`} className={btnGhost}>Ver el caso de {otro.nombre}</Link>}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
