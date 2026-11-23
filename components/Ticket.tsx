"use client";
import { useEffect, useState } from "react";

const pasos = ["Recibido", "En cocina", "En camino", "Entregado"];

export default function Ticket() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setI(2); return; }
    const t = setInterval(() => setI((n) => (n + 1) % pasos.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <figure className="ticket-in w-full max-w-sm rounded-sm bg-ink p-6 text-bg shadow-[0_30px_80px_-30px_rgba(0,0,0,.8)]" aria-label="Ejemplo de pedido avanzando en el panel">
      <div className="flex items-baseline justify-between border-b border-dashed border-bg/30 pb-3">
        <span className="font-display text-xl">Pedido #0142</span>
        <span className="text-sm opacity-60">Ejemplo</span>
      </div>
      <ul className="space-y-1 py-4 text-sm">
        <li className="flex justify-between"><span>2 × Alitas BBQ</span><span>$198</span></li>
        <li className="flex justify-between"><span>1 × Papas</span><span>$55</span></li>
        <li className="flex justify-between"><span>Envío</span><span>$30</span></li>
      </ul>
      <ol className="space-y-2 border-t border-dashed border-bg/30 pt-4">
        {pasos.map((p, n) => (
          <li key={p} className={`flex items-center gap-3 text-sm transition-opacity duration-500 ${n <= i ? "opacity-100" : "opacity-30"}`}>
            <span className={`h-2.5 w-2.5 rounded-full ${n === i ? "bg-[#a8741f] ring-4 ring-[#a8741f]/25" : n < i ? "bg-bg" : "border border-bg"}`} />
            {p}
          </li>
        ))}
      </ol>
    </figure>
  );
}
