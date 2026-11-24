"use client";
import { useState } from "react";
import site from "@/data/site.json";

const giros = ["Restaurante", "Heladería", "Cafetería", "Otro negocio de comida"];
const necesidades = ["Marca", "Sitio y menú digital", "Sistema de pedidos", "No sé, quiero que me orienten"];

type Estado = "libre" | "enviando" | "enviado" | "error";

export default function ContactForm() {
  const [f, setF] = useState({ nombre: "", contacto: "", giro: giros[0], necesito: necesidades[3], detalle: "", "bot-field": "" });
  const [estado, setEstado] = useState<Estado>("libre");
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const msg = `Hola, soy ${f.nombre || "[mi nombre]"}. Tengo un negocio: ${f.giro}. Me interesa: ${f.necesito}.${f.detalle ? " " + f.detalle : ""}`;
  const wsp = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
  const field = "mt-1 w-full rounded-2xl border border-line bg-surface px-4 py-3 text-ink placeholder:text-mute";

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    setEstado("enviando");
    try {
      const r = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "contacto", ...f }).toString(),
      });
      setEstado(r.ok ? "enviado" : "error");
    } catch {
      setEstado("error");
    }
  }

  if (estado === "enviado") {
    return (
      <div className="rounded-3xl border border-line bg-surface p-8" role="status">
        <h3 className="text-3xl">Recibido, gracias{f.nombre ? `, ${f.nombre.split(" ")[0]}` : ""}.</h3>
        <p className="mt-4 text-mute">Te respondo el mismo día hábil. Si quieres adelantar la conversación, escríbeme por WhatsApp y ya tendré tu mensaje armado.</p>
        <a href={wsp} className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-[15px] font-normal text-bg transition hover:bg-white">Continuar por WhatsApp</a>
      </div>
    );
  }

  return (
    <form onSubmit={enviar} className="space-y-4">
      <p className="hidden" aria-hidden="true"><label>No llenar: <input name="bot-field" tabIndex={-1} autoComplete="off" value={f["bot-field"]} onChange={set("bot-field")} /></label></p>
      <label className="block text-sm">Tu nombre
        <input required className={field} value={f.nombre} onChange={set("nombre")} autoComplete="name" />
      </label>
      <label className="block text-sm">Tu WhatsApp o correo
        <input required className={field} value={f.contacto} onChange={set("contacto")} autoComplete="email" placeholder="Para responderte" />
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
      <button disabled={estado === "enviando"} className="w-full rounded-full bg-ink px-6 py-3 text-[15px] font-normal text-bg transition hover:bg-white disabled:opacity-60 sm:w-auto">{estado === "enviando" ? "Enviando…" : "Enviar mensaje"}</button>
      {estado === "error" && (
        <p className="text-sm text-ink" role="alert">No se pudo enviar. Escríbeme directo a <a className="underline" href={`mailto:${site.email}`}>{site.email}</a> o por <a className="underline" href={wsp}>WhatsApp</a>.</p>
      )}
      <p className="text-sm text-mute">También puedes escribir a <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>
    </form>
  );
}
