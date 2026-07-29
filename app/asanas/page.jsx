"use client";

import { useMemo, useState } from 'react';
import SectionDivider from '../components/SectionDivider';
import PoseFigure from '../components/PoseFigure';
import { asanas, categories } from './asanasData';

const TONE_CLASSES = {
  amber: { chip: 'bg-amber-50 text-amber-700 border-amber-200', chipActive: 'bg-amber-600 text-white border-amber-600', dot: 'bg-amber-500' },
  teal: { chip: 'bg-teal-50 text-teal-700 border-teal-200', chipActive: 'bg-teal-600 text-white border-teal-600', dot: 'bg-teal-500' },
  indigo: { chip: 'bg-indigo-50 text-indigo-700 border-indigo-200', chipActive: 'bg-indigo-600 text-white border-indigo-600', dot: 'bg-indigo-500' },
};

const STEP_LABELS = [
  { key: 'entrada', label: 'Entrada', icon: '↗' },
  { key: 'mantenimiento', label: 'Mantenimiento', icon: '◎' },
  { key: 'salida', label: 'Salida', icon: '↘' },
];

function CategoryTag({ id }) {
  const cat = categories.find((c) => c.id === id);
  if (!cat) return null;
  const tone = TONE_CLASSES[cat.tone] || TONE_CLASSES.indigo;
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${tone.chip}`}>
      <span>{cat.emoji}</span> {cat.label}
    </span>
  );
}

function AsanaCard({ asana }) {
  const [step, setStep] = useState('mantenimiento');
  const figure = asana.figures[step];

  return (
    <div className="rounded-3xl bg-white/75 backdrop-blur-md border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-6 sm:p-7 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-800">{asana.sanskrit}</h3>
          <p className="text-slate-500 text-sm">{asana.popular}</p>
        </div>
        <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wide text-slate-400 border border-slate-200 rounded-full px-2.5 py-1">
          {asana.shape}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {asana.tags.map((t) => (
          <CategoryTag key={t} id={t} />
        ))}
      </div>

      <div className="rounded-2xl bg-slate-50/80 border border-slate-100 p-4 mb-5">
        <div className="w-28 h-28 mx-auto">
          <PoseFigure {...figure} className="w-full h-full" />
        </div>
        <div className="flex justify-center gap-2 mt-3">
          {STEP_LABELS.map((s) => (
            <button
              key={s.key}
              onClick={() => setStep(s.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                step === s.key ? 'bg-slate-800 text-white' : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span className="mr-1">{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <p className="text-slate-600 text-sm leading-relaxed mb-4">{asana.steps[step]}</p>

      <div className="mt-auto pt-4 border-t border-slate-100 space-y-3">
        <p className="text-slate-500 text-xs leading-relaxed italic">
          <span className="not-italic font-semibold text-slate-600">Origen del nombre: </span>
          {asana.symbolism}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {asana.benefits.map((b) => (
            <span key={b} className="text-[11px] text-slate-500 bg-slate-50 border border-slate-100 rounded-full px-2.5 py-1">
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AsanasCatalogoPage() {
  const [activeFilters, setActiveFilters] = useState([]);
  const [query, setQuery] = useState('');

  const toggleFilter = (id) => {
    setActiveFilters((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));
  };

  const filtered = useMemo(() => {
    return asanas.filter((a) => {
      const matchesFilter = activeFilters.length === 0 || activeFilters.every((f) => a.tags.includes(f));
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q || a.sanskrit.toLowerCase().includes(q) || a.popular.toLowerCase().includes(q) || a.symbolism.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [activeFilters, query]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-teal-600 tracking-tight">
          Catálogo de Asanas
        </h1>
        <SectionDivider tone="teal" />
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Un recorrido ilustrado por posturas cuyos nombres nacen de animales, elementos de la naturaleza y formas geométricas.
          Cada tarjeta muestra cómo <strong className="text-slate-600">entrar</strong>, <strong className="text-slate-600">mantener</strong> y{' '}
          <strong className="text-slate-600">salir</strong> de la postura con seguridad.
        </p>
      </div>

      <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-5 mb-10 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => {
            const tone = TONE_CLASSES[cat.tone] || TONE_CLASSES.indigo;
            const active = activeFilters.includes(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => toggleFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-colors ${active ? tone.chipActive : tone.chip} hover:opacity-90`}
              >
                {cat.emoji} {cat.label}
              </button>
            );
          })}
          {activeFilters.length > 0 && (
            <button
              onClick={() => setActiveFilters([])}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-500 hover:text-slate-700 underline underline-offset-2"
            >
              Limpiar
            </button>
          )}
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar asana…"
          className="w-full sm:w-64 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-200"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-slate-500 py-16">No se encontraron asanas con esos criterios.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((asana) => (
            <AsanaCard key={asana.slug} asana={asana} />
          ))}
        </div>
      )}

      <p className="text-center text-slate-400 text-xs mt-16 max-w-2xl mx-auto leading-relaxed">
        Contenido elaborado a partir de fuentes de referencia como Yoga Journal, Yoga Basics, Inside Yoga, MyYogaTeacher, Tummee y Wikipedia
        sobre la etimología, alineación y simbolismo de cada asana. Las ilustraciones son diagramas geométricos originales, no fotografías.
        Practica dentro de tu rango de movimiento y consulta a un instructor certificado ante cualquier lesión o condición médica.
      </p>
    </div>
  );
}
