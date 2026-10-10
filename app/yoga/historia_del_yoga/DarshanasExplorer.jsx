"use client";

import { createPortal } from 'react-dom';
import Link from 'next/link';
import { darshanas, GROUPS } from './darshanasData';
import { TONES } from './tones';
import { GlassSheet, useSheet } from './Sheet';

const IDS = darshanas.map((d) => d.id);

function DarshanaCard({ d, onOpen }) {
  const tone = TONES[d.color];

  // La inclinación escribe variables CSS directamente: sin re-render por movimiento del puntero.
  const onMove = (e) => {
    if (e.pointerType !== 'mouse') return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty('--ry', `${(px - 0.5) * 9}deg`);
    el.style.setProperty('--rx', `${(0.5 - py) * 9}deg`);
    el.style.setProperty('--mx', `${px * 100}%`);
    el.style.setProperty('--my', `${py * 100}%`);
  };
  const onLeave = (e) => {
    e.currentTarget.style.removeProperty('--ry');
    e.currentTarget.style.removeProperty('--rx');
  };

  return (
    <button
      type="button"
      data-sheet-item={d.id}
      aria-haspopup="dialog"
      onClick={() => onOpen(d.id)}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="spatial-card group w-full min-h-[96px] rounded-2xl border border-slate-200/70 bg-white p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
    >
      <span className={`spatial-layer mb-3 flex h-11 w-11 items-center justify-center rounded-xl text-xl ${tone.tile}`} aria-hidden="true">
        {d.icon}
      </span>
      <span className="spatial-layer-soft block text-base font-semibold text-slate-900">{d.name}</span>
      <span className="spatial-layer-soft block text-sm text-slate-600">{d.note}</span>
    </button>
  );
}

function DarshanaDetail({ d, onClose }) {
  const tone = TONES[d.color];
  return (
    <>
      <p className="mt-5 text-base leading-relaxed text-slate-800">{d.summary}</p>

      <dl className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-white/70 px-4 py-3">
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Fundador / voz principal</dt>
          <dd className="mt-0.5 text-sm text-slate-800">{d.founder}</dd>
        </div>
        <div className="rounded-2xl bg-white/70 px-4 py-3">
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Texto clave</dt>
          <dd className="mt-0.5 text-sm text-slate-800">{d.text}</dd>
        </div>
      </dl>

      <p className="mb-2 mt-6 text-xs font-semibold uppercase tracking-wide text-slate-500">Ideas centrales</p>
      <ul className="space-y-2.5 text-base leading-relaxed text-slate-800">
        {d.ideas.map((idea, i) => (
          <li key={idea} className="stagger flex gap-3" style={{ '--i': i }}>
            <span className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${tone.bullet}`} aria-hidden="true" />
            <span>{idea}</span>
          </li>
        ))}
      </ul>

      <div className="stagger mt-6 rounded-2xl bg-white/80 px-4 py-3 text-sm leading-relaxed text-slate-800" style={{ '--i': d.ideas.length }}>
        <span className="font-semibold">Relación con el yoga: </span>
        {d.yogaLink}
      </div>

      {d.link && (
        <Link href={d.link.href} onClick={() => onClose(true)} className={`mt-4 inline-flex min-h-[44px] items-center text-sm font-semibold hover:underline ${tone.link}`}>
          {d.link.label}
        </Link>
      )}
    </>
  );
}

export default function DarshanasExplorer() {
  const sheet = useSheet(IDS);
  const { open, openIndex, closing } = sheet;
  const current = open ? darshanas[openIndex] : null;

  return (
    <div>
      {/* Capa de contenido: retrocede en Z cuando la ficha de vidrio avanza. */}
      <div className={`spatial-stage ${open && !closing ? 'is-receded' : ''}`} inert={open && !closing ? '' : undefined}>
        <p className="mb-5 text-sm text-slate-600">Toca una escuela para abrir su ficha.</p>
        {Object.entries(GROUPS).map(([key, g]) => (
          <section key={key} className="mb-6 last:mb-0" aria-labelledby={`grp-${key}`}>
            <h3 id={`grp-${key}`} className="mb-3 flex flex-wrap items-baseline gap-x-2 !font-sans text-sm font-semibold text-slate-900">
              {g.label} · {g.count}
              <span className="font-normal text-slate-600">{g.desc}</span>
            </h3>
            <ul className="spatial-grid grid grid-cols-2 gap-3 sm:grid-cols-3">
              {darshanas.filter((d) => d.group === key).map((d) => (
                <li key={d.id}>
                  <DarshanaCard d={d} onOpen={sheet.openById} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {open &&
        createPortal(
          <GlassSheet
            tone={current.color}
            badge={GROUPS[current.group].label}
            meta={current.era}
            icon={current.icon}
            title={current.name}
            subtitle={current.note}
            index={openIndex}
            total={darshanas.length}
            contentKey={current.id}
            closing={closing}
            dir={sheet.dir}
            origin={sheet.origin}
            onClose={sheet.close}
            onStep={sheet.step}
          >
            <DarshanaDetail d={current} onClose={sheet.close} />
          </GlassSheet>,
          document.body
        )}
    </div>
  );
}
