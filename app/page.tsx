import Link from "next/link";
import site from "@/data/site.json";
import services from "@/data/services.json";
import brand from "@/data/brand.json";
import v from "@/data/vaqueros.json";
import Ticket from "@/components/Ticket";
import ContactForm from "@/components/ContactForm";
import { Header, Footer, Metric, Shot, wa } from "@/components/Chrome";

const wrap = "mx-auto max-w-6xl px-5";
const sec = "py-20 sm:py-28";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={`${wrap} grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.3fr_1fr]`}>
          <div>
            <h1 className="text-5xl leading-[1.02] sm:text-7xl">Te ayudo a vender más en línea.</h1>
            <p className="mt-6 max-w-xl text-lg text-mute">
              Marca, sitio y pedidos con pago para restaurantes, heladerías y cafeterías. Soy diseñador y desarrollador en {site.ciudad}, con {site.anios} años de oficio.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={wa("Hola, quiero vender más en línea.")} className="rounded-sm bg-brass px-5 py-3.5 font-medium text-[var(--brass-ink)]">Escríbeme por WhatsApp</a>
              <Link href="/casos/vaqueros" className="rounded-sm border border-line px-5 py-3.5 hover:border-mute">Ver un sistema funcionando</Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end"><Ticket /></div>
        </section>

        <section id="caso" className={`border-y border-line bg-surface ${sec}`}>
          <div className={`${wrap} grid gap-12 lg:grid-cols-2`}>
            <div>
              <h2 className="text-3xl sm:text-5xl">Vaquero&apos;s ya recibe pedidos con su propio sistema.</h2>
              <p className="mt-5 max-w-lg text-mute">{v.resumen}</p>
              <div className="mt-10 grid grid-cols-3 gap-4">
                {v.metricas.map((m) => <Metric key={m.etiqueta} {...m} />)}
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/casos/vaqueros" className="rounded-sm bg-brass px-5 py-3 font-medium text-[var(--brass-ink)]">Leer el caso completo</Link>
                <a href={site.demoUrl} target="_blank" rel="noreferrer" className="rounded-sm border border-line px-5 py-3 hover:border-mute">Probar el menú</a>
              </div>
            </div>
            <Shot label="menú de Vaquero's en celular" className="min-h-72 lg:min-h-96" />
          </div>
        </section>

        <section id="servicios" className={`${wrap} ${sec}`}>
          <h2 className="max-w-2xl text-3xl sm:text-5xl">Empieza por lo que necesitas hoy. Crece cuando el negocio lo pida.</h2>
          <div className="mt-12 divide-y divide-line border-y border-line">
            {services.map((s) => (
              <article key={s.id} className="grid gap-6 py-8 lg:grid-cols-[1fr_1.2fr_auto] lg:gap-12">
                <div>
                  <h3 className="text-2xl">{s.nombre}</h3>
                  <p className="mt-2 text-mute">{s.para}</p>
                </div>
                <ul className="space-y-1.5">{s.entrego.map((e) => <li key={e} className="flex gap-2"><span className="text-brass">+</span>{e}</li>)}</ul>
                <div className="lg:text-right">
                  <div className="font-display text-2xl">{s.precio}</div>
                  <div className="text-sm text-mute">{s.tiempo}</div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-mute">Precios de referencia. Cada proyecto se cotiza según lo que necesite tu negocio. ¿Tienes una tienda en línea? También la cotizo a la medida.</p>
        </section>

        <section id="yo" className={`border-y border-line bg-surface ${sec}`}>
          <div className={`${wrap} grid gap-12 lg:grid-cols-[1fr_1.3fr]`}>
            <Shot label="tu foto" className="aspect-[4/5] max-w-sm" />
            <div>
              <h2 className="text-3xl sm:text-5xl">Trabajas conmigo, no con una agencia.</h2>
              <p className="mt-5 max-w-xl text-mute">Llevo más de {site.anios} años diseñando y programando desde {site.ciudad}. Me enfoco en dos cosas: que todo sea simple de usar y que se vea con alta calidad. Si algo no ayuda a vender, no lo pongo.</p>
              <ol className="mt-8 space-y-5">
                {[
                  ["Platicamos", "Entiendo tu negocio, tus números y qué te está frenando."],
                  ["Te propongo", "Alcance, tiempo y precio claros por escrito, antes de empezar."],
                  ["Construyo", "Ves avances cada semana y decides con prototipos reales."],
                  ["Te acompaño", "Lanzamos, medimos y ajustamos con lo que pase en la operación."],
                ].map(([t, d], n) => (
                  <li key={t} className="grid grid-cols-[2rem_1fr] gap-3">
                    <span className="font-display text-brass">{n + 1}</span>
                    <p><strong className="font-medium">{t}.</strong> <span className="text-mute">{d}</span></p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="marca" className={`${wrap} ${sec}`}>
          <h2 className="text-3xl sm:text-5xl">También hago marca.</h2>
          <p className="mt-4 max-w-xl text-mute">Identidades para heladerías, cafeterías y restaurantes.</p>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {brand.map((b) => (
              <figure key={b.nombre}>
                <Shot label={b.nombre} className="aspect-square" />
                <figcaption className="mt-2 text-sm text-mute">{b.giro}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="contacto" className={`border-t border-line bg-surface ${sec}`}>
          <div className={`${wrap} grid gap-12 lg:grid-cols-2`}>
            <div>
              <h2 className="text-3xl sm:text-5xl">Cuéntame de tu negocio.</h2>
              <p className="mt-5 max-w-md text-mute">Respondo el mismo día hábil. La primera llamada no cuesta y sales con una idea clara, aunque no trabajemos juntos.</p>
              <a href={wa("Hola, quiero cotizar.")} className="mt-6 inline-block underline decoration-brass underline-offset-4">O escríbeme directo por WhatsApp</a>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
