"use client";

import { useRef, useState } from 'react';
import Link from 'next/link';
import { eras } from './erasData';
import { TONES } from './tones';

function EraPanel({ era, open }) {
  const tone = TONES[era.color];
  return (
    <div
      id={`era-panel-${era.id}`}
      role="region"
      aria-labelledby={`era-btn-${era.id}`}
      className={`era-panel ${open ? 'is-open' : ''}`}
      inert={open ? undefined : ''}
    >
      <div>
        <div className={`${open ? 'stagger-on' : ''} px-4 pb-5 pt-1 sm:px-5`}>
          <div className="space-y-3 border-t border-slate-100 pt-4 text-base leading-relaxed text-slate-700">
            {era.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ul className="mt-4 flex flex-wrap gap-2">
            {era.keys.map((k) => (
              <li key={k} className={`rounded-full border px-3 py-1 text-xs font-semibold ${tone.chip}`}>
                {k}
              </li>
            ))}
          </ul>

          <p className="mb-2 mt-5 text-xs font-semibold uppercase tracking-wide text-slate-500">Para profundizar</p>
          <ul className="space-y-2.5 text-base leading-relaxed text-slate-700">
            {era.ideas.map((idea, i) => (
              <li key={idea} className="stagger flex gap-3" style={{ '--i': i }}>
                <span className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${tone.bullet}`} aria-hidden="true" />
                <span>{idea}</span>
              </li>
            ))}
          </ul>

          <div className="stagger mt-5 rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-800" style={{ '--i': era.ideas.length }}>
            <span className="font-semibold">En tu práctica de hoy: </span>
            {era.legacy}
          </div>

          {era.link && (
            <Link href={era.link.href} className={`mt-3 inline-flex min-h-[44px] items-center text-sm font-semibold hover:underline ${tone.link}`}>
              {era.link.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ErasTimeline() {
  const [openId, setOpenId] = useState(null);
  const refs = useRef({});

  const toggle = (id) => {
    const next = openId === id ? null : id;
    setOpenId(next);
    if (next) {
      // Tras plegarse la etapa anterior, trae la nueva a la vista.
      setTimeout(() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        refs.current[id]?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'nearest' });
      }, 560);
    }
  };

  return (
    <ol className="era-list relative ml-3 space-y-5 border-l-2 border-slate-200 md:ml-4">
      {eras.map((era, i) => {
        const tone = TONES[era.color];
        const open = openId === era.id;
        const behind = openId !== null && !open;
        return (
          <li
            key={era.id}
            id={era.id}
            ref={(el) => (refs.current[era.id] = el)}
            className={`era-item ml-6 scroll-mt-24 md:ml-8 ${open ? 'is-open' : ''} ${behind ? 'is-behind' : ''}`}
          >
            <span
              className={`absolute -left-[13px] flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white ring-4 ring-white transition-transform duration-500 ${tone.dot} ${open ? 'scale-125' : ''}`}
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <div className="era-card rounded-2xl border border-slate-200/70 bg-white">
              <button
                type="button"
                id={`era-btn-${era.id}`}
                aria-expanded={open}
                aria-controls={`era-panel-${era.id}`}
                onClick={() => toggle(era.id)}
                className="group flex w-full items-start gap-4 rounded-2xl p-4 text-left sm:p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              >
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ${tone.tile}`} aria-hidden="true">
                  {era.icon}
                </span>
                <span className="block min-w-0 flex-1">
                  <span className={`mb-1.5 inline-block rounded-full border px-3 py-0.5 text-xs font-semibold ${tone.chip}`}>{era.period}</span>
                  <span className="block text-xl font-bold leading-snug text-slate-900 [font-family:var(--font-playfair)]">{era.title}</span>
                  <span className={`block text-sm font-semibold ${tone.link}`}>{era.subtitle}</span>
                  {!open && <span className="mt-2 line-clamp-2 block text-sm leading-relaxed text-slate-600">{era.summary}</span>}
                </span>
                <svg
                  className={`mt-1 h-5 w-5 shrink-0 text-slate-500 transition-transform duration-500 ${open ? 'rotate-90' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
              <EraPanel era={era} open={open} />
            </div>
          </li>
        );
      })}
    </ol>
  );
}
