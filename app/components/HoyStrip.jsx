"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getMoonData } from '../luna/moonUtils';

const SALUDOS = [
  [5, 'Buenos días'],
  [12, 'Buenas tardes'],
  [19, 'Buenas noches'],
];

function saludo(hour) {
  if (hour >= 19 || hour < 5) return 'Buenas noches';
  return SALUDOS.filter(([h]) => hour >= h).pop()[1];
}

// Franja "Hoy": se calcula en el navegador al montar, así nunca queda congelada
// con la fecha del build y no provoca diferencias de hidratación.
export default function HoyStrip() {
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  // Reserva la altura para que la página no salte al montar.
  if (!now) return <div className="h-14" aria-hidden="true" />;

  const moon = getMoonData(now);
  const fecha = now.toLocaleDateString('es', { weekday: 'long', day: 'numeric', month: 'long' });

  return (
    <div className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-1 rounded-full border border-slate-200 bg-white/70 backdrop-blur-sm px-5 py-3 text-sm text-slate-600 min-h-[44px]">
      <span className="font-semibold text-slate-800">{saludo(now.getHours())}</span>
      <span className="capitalize">{fecha}</span>
      <Link href="/luna" className="inline-flex items-center gap-1.5 text-indigo-700 hover:text-indigo-900 underline-offset-4 hover:underline">
        <span aria-hidden="true">{moon.emoji}</span>
        {moon.name} · {Math.round(moon.illumination * 100)}%
      </Link>
    </div>
  );
}
