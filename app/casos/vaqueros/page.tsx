import Link from "next/link";
import Image from "next/image";
import site from "@/data/site.json";
import v from "@/data/vaqueros.json";
import DeviceShowcase from "@/components/DeviceShowcase";
import CaseStory, { type Chapter } from "@/components/CaseStory";
import { Header, Footer, Metric, wa, btnPrimary, btnGhost } from "@/components/Chrome";

export const metadata = { title: "Vaquero's · Caso de estudio · AX Robles" };

// Borrador de dolores y soluciones: confirmar con la operación real de Vaquero's.
const capitulos: Chapter[] = [
  {
    titulo: "Un menú propio que vende en línea.",
    dolor: "No tenían ventas en línea: cada pedido dependía del mostrador o de un tercero.",
    solucion: "Un menú hecho para el celular, con fotos grandes, categorías a un toque y el estado del restaurante a la vista.",
    puntos: ["Abierto o cerrado en tiempo real", "Pausa de pedidos cuando la cocina se satura"],
    img: "/vaqueros/menu.jpg", label: "Menú de Vaquero's en celular", tipo: "movil",
  },
  {
    titulo: "Pedidos que llegan completos.",
    solucion: "Cada producto pide sus opciones antes de agregarse: sabor, dip, totopos. Si falta algo, no avanza.",
    puntos: ["Opciones obligatorias por producto", "Cantidades y extras sin errores de captura"],
    img: "/vaqueros/producto.jpg", label: "Ficha de producto con opciones", tipo: "movil",
  },
  {
    titulo: "El cliente paga directo, sin intermediarios.",
    dolor: "Las plataformas de reparto se quedaban con una comisión excesiva de cada pedido.",
    solucion: "Un checkout de cuatro pasos —resumen, entrega, datos y pago— con tarjeta a través de Mercado Pago. Solo se paga la tarifa de la pasarela.",
    puntos: ["Cero comisión por pedido a plataformas", "Recoger, mesa o domicilio", "Cupones y promociones"],
    img: "/vaqueros/checkout.jpg", label: "Checkout por pasos", tipo: "movil",
  },
  {
    titulo: "Una cocina que se entera al instante.",
    solucion: "Un tablero donde cada pedido aparece al momento, en columnas por estatus, y avanza con un toque.",
    puntos: ["Aviso sonoro y notificaciones push", "Notas del cliente destacadas", "Tiempo de entrega promedio de 15 minutos"],
    img: "/vaqueros/cocina-2.jpg", label: "Panel de cocina", tipo: "escritorio", nota: "Pantalla con pedidos de ejemplo.",
  },
  {
    titulo: "Domicilio con repartidor propio y seguimiento.",
    dolor: "Dependían de repartidores externos que cobraban comisiones excesivas y les quitaban control de la entrega.",
    solucion: "Envío calculado por distancia, repartidor propio con GPS y seguimiento en vivo para el cliente, de principio a fin.",
    puntos: ["Vista propia para el repartidor", "Historial de pedidos del cliente", "Reseñas después de la entrega"],
    img: "/vaqueros/seguimiento.jpg", label: "Seguimiento del pedido", tipo: "movil", nota: "Pantalla con un pedido de ejemplo.",
  },
  {
    titulo: "Devoluciones ordenadas y un negocio que se ve.",
    dolor: "Las devoluciones se resolvían a mano y las ventas se llevaban a ojo.",
    solucion: "El cliente solicita el reembolso desde su pedido y el dueño lo aprueba desde el panel, con registro. Un tablero de ventas muestra horas pico y lo más vendido.",
    puntos: ["Reembolsos aprobados desde el panel", "Ventas por hora, día y mes", "Exportación a CSV"],
    img: "/vaqueros/dashboard-2.jpg", label: "Tablero de ventas", tipo: "escritorio", nota: "Pantalla con datos de ejemplo.",
  },
];

const corto = ["Sin ventas en línea", "Comisiones excesivas", "Repartidores externos", "Devoluciones a mano"];

export default function Caso() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-glow overflow-hidden">
          <div className="mx-auto max-w-6xl px-5 pt-14 text-center sm:pt-24">
            <Link href="/" className="text-sm text-mute transition hover:text-ink">Volver al inicio</Link>
            <p className="mt-8 text-lg text-mute">Caso de estudio: Vaquero Wings</p>
            <h1 className="mx-auto mt-4 max-w-5xl text-5xl leading-[0.98] sm:text-7xl lg:text-8xl">Vaquero Wings dejó de depender de las apps.</h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-mute sm:text-2xl">
              {v.resumen}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={site.demoUrl} target="_blank" rel="noreferrer" className={btnPrimary}>Probar el menú en vivo</a>
              <a href="#recorrido" className={btnGhost}>Ver el recorrido</a>
            </div>
          </div>

          <DeviceShowcase priority className="mt-14 sm:mt-24" />
        </section>

        {v.metricas.some((m) => m.valor) && (
          <section className="border-y border-line bg-surface">
            <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-3">
              {v.metricas.map((m) => <Metric key={m.etiqueta} {...m} />)}
            </div>
          </section>
        )}

        <section className="border-y border-line bg-surface py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="max-w-3xl text-4xl leading-[1.04] sm:text-6xl">Más ventas, más control y cero comisiones por pedido.</h2>
            <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-3">
              <div className="flex flex-col justify-between gap-10 bg-bg p-8 sm:p-10">
                <div className="font-display text-8xl font-light leading-none tracking-tighter text-accent sm:text-9xl">0%</div>
                <div>
                  <h3 className="text-2xl sm:text-3xl">Sin comisión por pedido a las apps de reparto.</h3>
                  <p className="mt-4 text-mute">Cada pedido llega directo a tu cocina y el cliente es tuyo. Solo pagas la tarifa de la pasarela de pago, no un porcentaje a una plataforma.</p>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-10 bg-bg p-8 sm:p-10">
                <ul className="space-y-3 text-lg text-ink/90">
                  {["Envío calculado por distancia", "Repartidor con GPS en el mapa", "Seguimiento en vivo para el cliente"].map((t) => <li key={t} className="flex gap-3"><span className="text-accent">+</span>{t}</li>)}
                </ul>
                <div>
                  <h3 className="text-2xl sm:text-3xl">Vende a domicilio con tu propia operación.</h3>
                  <p className="mt-4 text-mute">Tú decides zonas, costos y tiempos, y el cliente sabe en todo momento dónde va su pedido.</p>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-10 bg-bg p-8 sm:p-10">
                <ul className="space-y-3 text-lg text-ink/90">
                  {["Menú con fotos que da hambre", "Opciones claras en cada producto", "Pago con tarjeta en el mismo flujo"].map((t) => <li key={t} className="flex gap-3"><span className="text-accent">+</span>{t}</li>)}
                </ul>
                <div>
                  <h3 className="text-2xl sm:text-3xl">Un menú atractivo que cobra en el momento.</h3>
                  <p className="mt-4 text-mute">Menos pasos entre el antojo y el pedido pagado: el cliente elige, paga por la pasarela y listo.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="max-w-3xl text-4xl sm:text-6xl">El proyecto, en tres partes.</h2>
            <div className="mt-14 grid gap-12 lg:grid-cols-3">
              <div>
                <h3 className="text-2xl font-normal tracking-tight">El reto</h3>
                <p className="mt-4 leading-relaxed text-mute">Vaquero Wings no vendía en línea. Los pedidos a domicilio dependían de repartidores externos que cobraban comisiones excesivas y dejaban al restaurante sin control sobre la entrega. Las devoluciones se resolvían a mano y no había forma sencilla de saber cuánto, a qué hora y qué se vendía.</p>
                <p className="mt-4 leading-relaxed text-mute">La meta: vender más sin regalar el margen y ofrecer una experiencia a la altura del producto.</p>
              </div>
              <div>
                <h3 className="text-2xl font-normal tracking-tight">La solución</h3>
                <p className="mt-4 leading-relaxed text-mute">Diseñé y desarrollé un sistema propio, de punta a punta: menú digital pensado para el celular, pago con tarjeta por Mercado Pago, panel de cocina en tiempo real, envío calculado por distancia con repartidor propio y GPS, y seguimiento en vivo para el cliente.</p>
                <p className="mt-4 leading-relaxed text-mute">Sumé cupones, reseñas, reembolsos aprobados desde el panel, notificaciones push y un tablero de ventas con exportación a CSV.</p>
              </div>
              <div>
                <h3 className="text-2xl font-normal tracking-tight">El resultado</h3>
                <p className="mt-4 leading-relaxed text-mute">Hoy el restaurante recibe {v.metricas[0].valor} pedidos al mes con un ticket promedio de {v.metricas[2].valor} y un tiempo de entrega de {v.metricas[1].valor} en promedio.</p>
                <p className="mt-4 leading-relaxed text-mute">No paga comisión por pedido a plataformas de reparto, controla toda la operación y conoce sus números. Es el mismo sistema que puedo construir para tu negocio.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="recorrido" className="py-24 sm:py-32">
          <div className="mx-auto mb-12 max-w-6xl px-5 sm:mb-20">
            <h2 className="max-w-3xl text-4xl sm:text-6xl">Así se resolvió, paso por paso.</h2>
            <p className="mt-6 max-w-xl text-lg text-mute">Desde que el cliente abre el menú hasta que el dueño revisa sus ventas.</p>
          </div>
          <CaseStory chapters={capitulos} />
        </section>

        <section className="border-t border-line py-24 sm:py-36">
          <figure className="mx-auto max-w-4xl px-5 text-center">
            <blockquote className="text-3xl leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">“{v.cita.texto}”</blockquote>
            
          </figure>
        </section>

        <section className="border-t border-line bg-surface py-24 sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-16 px-5 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl sm:text-6xl">Hecho para operar, no solo para verse bien.</h2>
              <p className="mt-6 max-w-md text-mute">Tecnología moderna y probada, con pagos reales y base de datos propia.</p>
            </div>
            <ul className="flex flex-wrap content-start gap-2">
              {v.stack.map((t) => <li key={t} className="rounded-full border border-line px-4 py-2 text-sm text-ink/90">{t}</li>)}
            </ul>
          </div>
        </section>

        <section className="border-t border-line py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="max-w-2xl text-3xl sm:text-5xl">Lo que dolía, ya está resuelto.</h2>
            <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
              {corto.map((t) => (
                <li key={t} className="flex flex-col justify-between gap-6 bg-bg p-5 sm:p-7">
                  <span className="text-lg leading-snug text-mute line-through decoration-accent/60 decoration-2 sm:text-2xl">{t}</span>
                  <span className="inline-flex items-center gap-2 text-sm text-accent"><span className="grid h-5 w-5 place-items-center rounded-full bg-accent/15 text-xs">✓</span>Resuelto</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="hero-glow border-t border-line py-28 text-center sm:py-44">
          <div className="mx-auto max-w-4xl px-5">
            <h2 className="text-5xl leading-[0.98] sm:text-7xl lg:text-8xl">¿Y si tus pedidos fueran tuyos?</h2>
            <p className="mx-auto mt-8 max-w-xl text-lg text-mute sm:text-xl">Un sistema propio para tu restaurante: más ventas, domicilio bajo tu control y cero comisiones por pedido a las apps. Platicamos y te digo qué necesita tu negocio.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={wa("Hola, vi el caso de Vaquero's y quiero algo similar.")} className={btnPrimary}>Escríbeme por WhatsApp</a>
              <Link href="/#servicios" className={btnGhost}>Ver servicios y precios</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
