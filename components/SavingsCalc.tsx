"use client";
import { useState } from "react";
import site from "@/data/site.json";

const mx = (n: number) => n.toLocaleString("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });

function Slider({ id, label, value, min, max, step, fmt, onChange }: { id: string; label: string; value: number; min: number; max: number; step: number; fmt: (n: number) => string; onChange: (n: number) => void }) {
  return (
    <div>
      <div className="flex items-baseline justify-between text-sm">
        <label htmlFor={id} className="text-mute">{label}</label>
        <output htmlFor={id} className="text-base font-normal text-ink tabular-nums">{fmt(value)}</output>
      </div>
      <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-line accent-[var(--accent)]" />
    </div>
  );
}

export default function SavingsCalc() {
  const [pedidos, setPedidos] = useState(430);
  const [ticket, setTicket] = useState(250);
  const [comision, setComision] = useState(35);
  const mes = Math.round(pedidos * ticket * (comision / 100));
  const msg = `Hola, hice el cálculo en tu sitio: con ${pedidos} pedidos al mes, ticket de ${mx(ticket)} y ${comision}% de comisión, pago unos ${mx(mes)} al mes a las apps. Quiero un sistema propio.`;

  return (
    <div className="console-in w-full max-w-md rounded-3xl border border-line bg-surface/80 p-6 shadow-[0_40px_120px_-40px_rgba(240,184,107,.3)] backdrop-blur sm:p-8">
      <h2 className="text-2xl leading-tight sm:text-3xl">¿Cuánto le regalas a las apps cada mes?</h2>
      <div className="mt-7 space-y-5">
        <Slider id="c-pedidos" label="Pedidos al mes por apps" value={pedidos} min={50} max={1500} step={10} fmt={(n) => n.toLocaleString("es-MX")} onChange={setPedidos} />
        <Slider id="c-ticket" label="Ticket promedio" value={ticket} min={80} max={600} step={10} fmt={mx} onChange={setTicket} />
        <Slider id="c-comision" label="Comisión que te cobra la app" value={comision} min={10} max={40} step={1} fmt={(n) => `${n}%`} onChange={setComision} />
      </div>
      <div className="mt-8 border-t border-line pt-6">
        <div className="text-sm text-mute">Con tu propio sistema recuperas</div>
        <div className="mt-1 text-5xl font-display font-light tracking-tight text-accent tabular-nums sm:text-6xl" aria-live="polite">{mx(mes)}</div>
        <div className="mt-1 text-mute">al mes, <span className="text-ink tabular-nums">{mx(mes * 12)}</span> al año.</div>
      </div>
      <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`} className="mt-7 flex w-full items-center justify-center rounded-full bg-ink px-6 py-3 text-[15px] font-normal text-bg transition hover:bg-white">Quiero recuperar ese dinero</a>
      <p className="mt-4 text-xs leading-relaxed text-mute">Cálculo de ejemplo: ajusta la comisión a la de tu plataforma. Con tu sistema solo pagas la tarifa de la pasarela de pago.</p>
    </div>
  );
}
