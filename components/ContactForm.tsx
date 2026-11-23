"use client";
import { useState } from "react";
import site from "@/data/site.json";

const giros = ["Restaurante", "Heladería", "Cafetería", "Otro negocio de comida"];
const necesidades = ["Marca", "Sitio y menú digital", "Pedidos en línea con pago", "No sé, quiero que me orienten"];

export default function ContactForm() {
  const [f, setF] = useState({ nombre: "", giro: giros[0], necesito: necesidades[3], detalle: "" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const msg = `Hola, soy ${f.nombre || "[mi nombre]"}. Tengo un negocio: ${f.giro}. Me interesa: ${f.necesito}.${f.detalle ? " " + f.detalle : ""}`;
  const field = "mt-1 w-full rounded-sm border border-line bg-surface px-3 py-3 text-ink placeholder:text-mute";
  return (
    <form onSubmit={(e) => { e.preventDefault(); window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank"); }} className="space-y-4">
      <label className="block text-sm">Tu nombre
        <input required className={field} value={f.nombre} onChange={set("nombre")} autoComplete="name" />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">Tipo de negocio
          <select className={field} value={f.giro} onChange={set("giro")}>{giros.map((g) => <option key={g}>{g}</option>)}</select>
        </label>
        <label className="block text-sm">Qué necesitas
          <select className={field} value={f.necesito} onChange={set("necesito")}>{necesidades.map((g) => <option key={g}>{g}</option>)}</select>
        </label>
      </div>
      <label className="block text-sm">Cuéntame en una línea (opcional)
        <textarea rows={3} className={field} value={f.detalle} onChange={set("detalle")} placeholder="Ej. Vendemos por Instagram y quiero recibir pedidos con pago." />
      </label>
      <button className="w-full rounded-sm bg-brass px-5 py-3.5 font-medium text-[var(--brass-ink)] transition hover:brightness-110 sm:w-auto">Enviar por WhatsApp</button>
      <p className="text-sm text-mute">Se abre WhatsApp con tu mensaje listo. También puedes escribir a <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>
    </form>
  );
}
