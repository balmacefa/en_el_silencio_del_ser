"use client";

import { useMemo, useState } from 'react';
import SectionDivider from '../components/SectionDivider';
import { asanas } from './asanasData';

function AsanaCard({ asana }) {
  return (
    <div className="rounded-3xl bg-white/75 backdrop-blur-md border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-6 sm:p-7 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <span className="text-[11px] font-semibold text-indigo-400">#{asana.order}</span>
          <h3 className="text-xl font-bold text-slate-800">{asana.sanskrit}</h3>
          <p className="text-slate-500 text-sm">{asana.popular}</p>
        </div>
        {asana.sides && (
          <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wide text-slate-400 border border-slate-200 rounded-full px-2.5 py-1">
            Ambos lados
          </span>
        )}
      </div>

      <div className="rounded-2xl bg-slate-50/80 border border-slate-100 p-4 mb-5">
        <img src={asana.image} alt={asana.sanskrit} className="max-w-full max-h-48 object-contain mx-auto" />
      </div>

      <p className="text-slate-600 text-sm leading-relaxed mb-4">{asana.description}</p>

      {asana.origin && (
        <p className="text-slate-500 text-xs leading-relaxed italic mb-4">
          <span className="not-italic font-semibold text-slate-600">{asana.origin.tag} — Origen del nombre: </span>
          {asana.origin.note}
        </p>
      )}

      {asana.next && (
        <p className="mt-auto pt-4 border-t border-slate-100 text-xs text-slate-400">
          ↳ Continúa hacia <span className="font-semibold text-slate-500">{asana.next}</span>
        </p>
      )}
    </div>
  );
}

export default function AsanasCatalogoPage() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return asanas;
    return asanas.filter(
      (a) =>
        a.sanskrit.toLowerCase().includes(q) ||
        a.popular.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-teal-600 tracking-tight">
          Catálogo de Asanas
        </h1>
        <SectionDivider tone="teal" />
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Las {asanas.length} posturas de la Primera Serie de Ashtanga, en orden, con fotografía real de cada una. Varias llevan
          nombres inspirados en animales, la naturaleza o formas geométricas — marcados con una nota de origen.
        </p>
      </div>

      <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-5 mb-10 flex justify-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar asana por nombre…"
          className="w-full sm:w-96 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-200"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-slate-500 py-16">No se encontraron asanas con ese nombre.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((asana) => (
            <AsanaCard key={asana.slug} asana={asana} />
          ))}
        </div>
      )}

      <p className="text-center text-slate-400 text-xs mt-16 max-w-2xl mx-auto leading-relaxed">
        Secuencia y fotografías compartidas con la página de{' '}
        <a href="/yoga/ashtanga_serie_basica_1" className="underline hover:text-slate-500">
          Ashtanga: Serie Básica
        </a>{' '}
        — imágenes obtenidas originalmente del sitio web{' '}
        <a href="https://www.keenonyoga.com/ashtanga-yoga-primary-series/" target="_blank" rel="noreferrer" className="underline hover:text-slate-500">
          Keen on Yoga
        </a>
        . Las notas de origen del nombre están investigadas a partir de Yoga Journal, Yoga Basics y Wikipedia. Practica dentro de tu
        rango de movimiento y consulta a un instructor certificado ante cualquier lesión o condición médica.
      </p>
    </div>
  );
}
