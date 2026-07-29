"use client";

import { useEffect, useMemo, useState } from 'react';
import SectionDivider from '../components/SectionDivider';
import { asanas } from './asanasData';

function AsanaCard({ asana, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(asana)}
      className="text-left rounded-3xl bg-white/75 backdrop-blur-md border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-6 sm:p-7 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:border-teal-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
    >
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

      <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
        {asana.origin ? (
          <span className="text-[11px] font-semibold text-slate-400">{asana.origin.tag}</span>
        ) : (
          <span />
        )}
        <span className="text-xs font-semibold text-teal-600">Ver más detalles →</span>
      </div>
    </button>
  );
}

function DetailSection({ title, children }) {
  return (
    <div className="mb-5">
      <h4 className="text-xs font-bold uppercase tracking-wide text-teal-600 mb-1.5">{title}</h4>
      <div className="text-slate-600 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function AsanaModal({ asana, onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!asana) return null;
  const d = asana.details;

  return (
    <div
      className="fixed inset-0 z-[100] bg-slate-900/50 backdrop-blur-sm flex items-start sm:items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl my-8 sm:my-0 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-slate-50 border-b border-slate-100 p-6 sm:p-7">
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300 flex items-center justify-center transition-colors"
          >
            ✕
          </button>
          <span className="text-[11px] font-semibold text-indigo-400">#{asana.order} de la Primera Serie</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">{asana.sanskrit}</h2>
          <p className="text-slate-500">{asana.popular}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {asana.sides && (
              <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 border border-slate-200 rounded-full px-2.5 py-1">
                Ambos lados
              </span>
            )}
            {asana.origin && (
              <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 border border-slate-200 rounded-full px-2.5 py-1">
                {asana.origin.tag}
              </span>
            )}
          </div>
        </div>

        <div className="p-6 sm:p-7 max-h-[70vh] overflow-y-auto">
          <img src={asana.image} alt={asana.sanskrit} className="max-w-full max-h-56 object-contain mx-auto mb-6" />

          {d ? (
            <>
              <DetailSection title="Cómo entrar">{d.entrada}</DetailSection>
              <DetailSection title="Cómo mantenerla">{d.mantenimiento}</DetailSection>
              <DetailSection title="Cómo salir">{d.salida}</DetailSection>
              <DetailSection title="Fallos comunes">
                <ul className="list-disc list-inside space-y-1">
                  {d.mistakes.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </DetailSection>
              <DetailSection title="Visualización">{d.visualization}</DetailSection>
              <DetailSection title="Descripción histórica">{d.history}</DetailSection>
              <DetailSection title="Descripción energética">{d.energetics}</DetailSection>
            </>
          ) : (
            <p className="text-slate-600 text-sm leading-relaxed mb-4">{asana.description}</p>
          )}

          {asana.next && (
            <p className="pt-4 border-t border-slate-100 text-xs text-slate-400">
              ↳ Continúa hacia <span className="font-semibold text-slate-500">{asana.next}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AsanasCatalogoPage() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

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
          Las {asanas.length} posturas de la Primera Serie de Ashtanga, en orden, con fotografía real de cada una. Hacé clic en
          cualquiera para ver cómo entrar, mantener y salir de la postura, fallos comunes, una visualización guiada, y su
          descripción histórica y energética.
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
            <AsanaCard key={asana.slug} asana={asana} onOpen={setSelected} />
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
        . El contenido ampliado (historia, mitología y lectura energética) está investigado a partir de Yoga Journal, Yoga Basics,
        MyYogaTeacher, Samyak Yoga y Wikipedia, y se presenta como enseñanza tradicional del hatha yoga, no como hecho médico o
        científico. Practica dentro de tu rango de movimiento y consulta a un instructor certificado ante cualquier lesión o
        condición médica.
      </p>

      {selected && <AsanaModal asana={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
