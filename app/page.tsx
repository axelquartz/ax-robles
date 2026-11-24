import Link from "next/link";
import Image from "next/image";
import site from "@/data/site.json";
import services from "@/data/services.json";
import brand from "@/data/brand.json";
import sitios from "@/data/sitios.json";
import BrandGallery from "@/components/BrandGallery";
import v from "@/data/vaqueros.json";
import SavingsCalc from "@/components/SavingsCalc";
import DeviceShowcase from "@/components/DeviceShowcase";
import ContactForm from "@/components/ContactForm";
import { Header, Footer, Metric, wa, btnPrimary, btnGhost } from "@/components/Chrome";

const wrap = "mx-auto max-w-6xl px-5";
const sec = "py-24 sm:py-36";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-glow">
          <div className={`${wrap} grid items-center gap-16 py-20 sm:py-32 lg:grid-cols-[1.4fr_1fr]`}>
            <div>
              <h1 className="text-5xl leading-[1.02] sm:text-7xl lg:text-8xl">Te ayudo a vender más en línea.</h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-mute sm:text-xl">
                Marca, sitio y pedidos con pago para restaurantes, heladerías y cafeterías. Vende más, entrega a domicilio y no pagues comisión por pedido a las apps. Soy diseñador y desarrollador en {site.ciudad}, con {site.anios} años de oficio.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={wa("Hola, quiero vender más en línea.")} className={btnPrimary}>Escríbeme por WhatsApp</a>
                <Link href="/casos/vaqueros" className={btnGhost}>Ver un sistema funcionando</Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end"><SavingsCalc /></div>
          </div>
        </section>

        <section id="caso" className="border-y border-line bg-surface py-24 sm:py-36">
          <div className={wrap}>
            <h2 className="max-w-4xl text-4xl leading-[1.04] sm:text-6xl lg:text-7xl">Vaquero&apos;s dejó de pagar comisiones a las apps.</h2>
            <p className="mt-6 max-w-2xl text-lg text-mute">{v.resumen}</p>
            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
              {[
                ["0%", "Comisión por pedido a plataformas de reparto."],
                ["Domicilio", "Con tu propia operación: zonas, costos y repartidor con GPS."],
                ["Pago digital", "Un menú atractivo que cobra con tarjeta en el momento."],
              ].map(([t, d]) => (
                <div key={t} className="bg-bg p-7 sm:p-8">
                  <div className="text-3xl font-light tracking-tight text-accent sm:text-4xl">{t}</div>
                  <p className="mt-3 text-mute">{d}</p>
                </div>
              ))}
            </div>
            <figure className="mt-12 max-w-3xl">
              <blockquote className="text-2xl leading-snug tracking-tight sm:text-3xl">“{v.cita.texto}”</blockquote>
              <figcaption className="mt-4 text-mute">{v.cita.autor}</figcaption>
            </figure>
            {v.metricas.some((m) => m.valor) && (
              <div className="mt-12 grid grid-cols-3 gap-4">{v.metricas.map((m) => <Metric key={m.etiqueta} {...m} />)}</div>
            )}
          </div>
          <DeviceShowcase className="mt-16 sm:mt-24" />
          <div className={`${wrap} mt-4 flex flex-wrap gap-3`}>
            <Link href="/casos/vaqueros" className={btnPrimary}>Leer el caso completo</Link>
            <a href={site.demoUrl} target="_blank" rel="noreferrer" className={btnGhost}>Probar el menú</a>
          </div>
        </section>

        <section id="servicios" className={`${wrap} ${sec}`}>
          <h2 className="max-w-2xl text-4xl sm:text-6xl">Empieza por lo que necesitas hoy. Crece cuando el negocio lo pida.</h2>
          <div className="mt-12 divide-y divide-line border-y border-line">
            {services.map((s) => (
              <article key={s.id} className="grid gap-6 py-8 lg:grid-cols-[1fr_1.2fr_auto] lg:gap-12">
                <div>
                  <h3 className="text-3xl">{s.nombre}</h3>
                  <p className="mt-2 text-mute">{s.para}</p>
                </div>
                <ul className="space-y-1.5">{s.entrego.map((e) => <li key={e} className="flex gap-2"><span className="text-accent">+</span>{e}</li>)}</ul>
                <div className="lg:text-right">
                  <div className="text-2xl font-light tracking-tight">{s.precio}</div>
                  <div className="text-sm text-mute">{s.tiempo}</div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-mute">Precios de referencia. Cada proyecto se cotiza según lo que necesite tu negocio. ¿Tienes una tienda en línea? También la cotizo a la medida.</p>
        </section>

        <section id="yo" className={`border-y border-line bg-surface ${sec}`}>
          <div className={`${wrap} grid gap-12 lg:grid-cols-[1fr_1.3fr]`}>
            <Image src="/axel-2.jpg" alt="Axel Robles" width={1200} height={1594} className="aspect-[4/5] w-full max-w-sm rounded-3xl object-cover object-[50%_38%]" />
            <div>
              <h2 className="text-4xl sm:text-6xl">Trabajas conmigo, no con una agencia.</h2>
              <p className="mt-5 max-w-xl text-mute">Llevo {site.anios} años diseñando y programando desde {site.ciudad}. Me enfoco en dos cosas: que todo sea simple de usar y que se vea con alta calidad. Si algo no ayuda a vender, no lo pongo.</p>
              <ol className="mt-8 space-y-5">
                {[
                  ["Platicamos", "Entiendo tu negocio, tus números y qué te está frenando."],
                  ["Te propongo", "Alcance, tiempo y precio claros por escrito, antes de empezar."],
                  ["Construyo", "Ves avances cada semana y decides con prototipos reales."],
                  ["Te acompaño", "Lanzamos, medimos y ajustamos con lo que pase en la operación."],
                ].map(([t, d], n) => (
                  <li key={t} className="grid grid-cols-[2rem_1fr] gap-3">
                    <span className="font-mono text-sm text-accent">{String(n + 1).padStart(2, "0")}</span>
                    <p><strong className="font-normal text-ink">{t}.</strong> <span className="text-mute">{d}</span></p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="marca" className={`${wrap} ${sec}`}>
          <h2 className="max-w-3xl text-4xl sm:text-6xl">También hago marca.</h2>
          <p className="mt-4 max-w-xl text-mute">Identidades para heladerías, cafeterías y restaurantes. Toca cada proyecto para verlo completo.</p>
          <BrandGallery brands={brand} />
        </section>

        <section id="sitios" className="border-y border-line bg-surface py-24 sm:py-36">
          <div className={wrap}>
            <h2 className="max-w-3xl text-4xl sm:text-6xl">Sitios que se ven y se cargan a la altura de tu producto.</h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {sitios.map((x) => (
                <Link key={x.slug} href={`/casos/${x.slug}`} className="group block">
                  <div className="overflow-hidden rounded-2xl border border-line bg-bg">
                    <div className="flex gap-1.5 border-b border-line px-4 py-3"><span className="h-2.5 w-2.5 rounded-full bg-line" /><span className="h-2.5 w-2.5 rounded-full bg-line" /><span className="h-2.5 w-2.5 rounded-full bg-line" /></div>
                    <Image src={x.img} alt={`Sitio de ${x.nombre}`} width={1800} height={1125} sizes="(min-width:1024px) 560px, 100vw" className="aspect-[16/10] w-full object-cover object-top transition duration-700 group-hover:scale-[1.02] motion-reduce:transition-none" />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <div className="text-2xl tracking-tight">{x.nombre}</div>
                    <div className="text-sm text-accent">Ver el caso</div>
                  </div>
                  <p className="mt-2 text-sm text-mute">{x.giro}</p>
                  <p className="mt-3 max-w-xl leading-relaxed text-mute">{x.resumen}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-ink/90">
                    {x.incluye.map((i) => <li key={i} className="flex gap-2"><span className="text-accent">+</span>{i}</li>)}
                  </ul>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className={`border-t border-line bg-surface ${sec}`}>
          <div className={`${wrap} grid gap-12 lg:grid-cols-2`}>
            <div>
              <h2 className="text-4xl sm:text-6xl">Cuéntame de tu negocio.</h2>
              <p className="mt-5 max-w-md text-mute">Respondo el mismo día hábil. La primera llamada no cuesta y sales con una idea clara, aunque no trabajemos juntos.</p>
              <a href={wa("Hola, quiero cotizar.")} className="mt-8 inline-block text-accent underline underline-offset-4">O escríbeme directo por WhatsApp</a>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
