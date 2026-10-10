"use client";

import { useEffect, useMemo, useState } from 'react';
import { TONES } from '../../yoga/historia_del_yoga/tones';
import { ASANAS, CATS, PIECES, PIECE_IDS, asanaName, asanasWith } from './sanscritoData';

const toneOf = (pieceId) => TONES[CATS[PIECES[pieceId].cat].color];

/* ---------- 1. Descomponedor ---------- */
function Decomposer() {
  const [id, setId] = useState('adho_mukha_svanasana');
  const a = ASANAS.find((x) => x.id === id);
  const pieceIds = [...new Set(a.words.flat().map(([, p]) => p))];

  return (
    <div>
      <label htmlFor="asana-pick" className="mb-2 block text-sm font-semibold text-slate-700">Elige una asana</label>
      <select
        id="asana-pick"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="mb-6 min-h-[44px] w-full rounded-xl border border-slate-200 bg-white px-3 text-base text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      >
        {ASANAS.map((x) => (
          <option key={x.id} value={x.id}>{asanaName(x)} — {x.es}</option>
        ))}
      </select>

      <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
        <p className="flex flex-wrap items-baseline gap-x-3 gap-y-2 text-3xl font-bold md:text-4xl [font-family:var(--font-playfair)]">
          {a.words.map((word, wi) => (
            <span key={wi} className="inline-flex">
              {word.map(([text, pid], pi) => (
                <span key={pi} className={`rounded-md px-0.5 ${toneOf(pid).tile}`}>{text}</span>
              ))}
            </span>
          ))}
        </p>
        <p className="mt-2 text-lg text-slate-700">{a.es}</p>

        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {pieceIds.map((pid) => {
            const p = PIECES[pid];
            const t = toneOf(pid);
            return (
              <li key={pid} className={`rounded-xl border px-3 py-2 ${t.chip}`}>
                <span className="font-semibold">{p.sa}</span> = {p.es}
                <span className="block text-xs opacity-80">{CATS[p.cat].label}</span>
              </li>
            );
          })}
        </ul>

        <div className="mt-5 rounded-xl bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-700">
          <span className="font-semibold">Para recordarla: </span>{a.image}
        </div>
        {a.note && (
          <p className="mt-3 text-sm text-slate-600"><span className="font-semibold">Unión de sonidos: </span>{a.note}</p>
        )}
      </div>
    </div>
  );
}

/* ---------- 2. Glosario por piezas ---------- */
function Glossary() {
  const [cat, setCat] = useState('dir');
  const [sel, setSel] = useState(null);
  const ids = PIECE_IDS.filter((pid) => PIECES[pid].cat === cat);
  const family = sel ? asanasWith(sel) : [];

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2" role="tablist" aria-label="Categorías de piezas">
        {Object.entries(CATS).map(([key, c]) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={cat === key}
            onClick={() => { setCat(key); setSel(null); }}
            className={`min-h-[44px] rounded-full border px-4 text-sm font-medium transition-colors ${
              cat === key ? 'border-indigo-500 bg-indigo-500 text-white' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>
      <p className="mb-4 text-sm text-slate-600">{CATS[cat].desc}. Toca una pieza para ver en qué asanas aparece.</p>

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {ids.map((pid) => {
          const p = PIECES[pid];
          const t = toneOf(pid);
          const count = asanasWith(pid).length;
          return (
            <li key={pid}>
              <button
                type="button"
                aria-pressed={sel === pid}
                onClick={() => setSel(sel === pid ? null : pid)}
                className={`w-full min-h-[72px] rounded-2xl border p-3 text-left transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${t.chip} ${sel === pid ? 'shadow-md ring-2 ring-offset-1 ring-indigo-400' : ''}`}
              >
                <span className="block text-base font-semibold">{p.sa}</span>
                <span className="block text-sm">{p.es}</span>
                <span className="block text-xs opacity-70">{count} {count === 1 ? 'asana' : 'asanas'}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {sel && (
        <div className="mt-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-600">{PIECES[sel].hint}</p>
          <p className="mb-2 mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Asanas con «{PIECES[sel].sa}»
          </p>
          <ul className="space-y-1.5">
            {family.map((a) => (
              <li key={a.id} className="text-base text-slate-800">
                <span className="font-semibold">{asanaName(a)}</span>
                <span className="text-slate-600"> · {a.es}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ---------- 3. Quiz de piezas ---------- */
function shuffle(arr) {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function Quiz() {
  // Se baraja solo en el cliente tras montar, para evitar diferencias de hidratación.
  const [deck, setDeck] = useState(null);
  const [n, setN] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);

  const start = () => {
    setDeck(shuffle(PIECE_IDS.filter((p) => p !== 'asana')));
    setN(0); setPicked(null); setScore(0);
  };
  useEffect(start, []);

  const q = deck ? deck[n % deck.length] : null;
  const options = useMemo(() => {
    if (!q) return [];
    const distractors = shuffle(PIECE_IDS.filter((p) => p !== q && p !== 'asana' && PIECES[p].es !== PIECES[q].es)).slice(0, 3);
    return shuffle([q, ...distractors]);
  }, [q]);

  if (!q) return <p className="text-slate-600">Preparando preguntas…</p>;

  const answered = picked !== null;
  const done = n >= deck.length;
  if (done) {
    return (
      <div className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm">
        <p className="text-2xl font-bold text-slate-800">{score} / {deck.length}</p>
        <button type="button" onClick={start} className="mt-4 min-h-[44px] rounded-full bg-indigo-500 px-6 text-white hover:bg-indigo-600">Reiniciar</button>
      </div>
    );
  }

  const related = asanasWith(q).slice(0, 3).map(asanaName).join(' · ');

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <p className="text-xs uppercase tracking-wide text-slate-500">Pregunta {n + 1} de {deck.length} · aciertos {score}</p>
      <p className="mb-4 mt-2 text-lg text-slate-700">¿Qué significa <span className="text-3xl font-bold text-indigo-700 [font-family:var(--font-playfair)]">{PIECES[q].sa}</span>?</p>
      <ul className="grid gap-2 sm:grid-cols-2">
        {options.map((o) => {
          const right = o === q;
          const state = !answered ? 'border-slate-200 bg-white hover:bg-slate-50'
            : right ? 'border-emerald-400 bg-emerald-50 text-emerald-900'
            : picked === o ? 'border-rose-300 bg-rose-50 text-rose-900'
            : 'border-slate-200 bg-white opacity-60';
          return (
            <li key={o}>
              <button
                type="button"
                disabled={answered}
                onClick={() => { setPicked(o); if (right) setScore((s) => s + 1); }}
                className={`min-h-[44px] w-full rounded-xl border px-3 py-2 text-left text-base ${state}`}
              >
                {PIECES[o].es}
              </button>
            </li>
          );
        })}
      </ul>
      {answered && (
        <div className="mt-4">
          <p className="text-sm text-slate-600">{PIECES[q].hint}{related && <> Aparece en: <span className="font-medium">{related}</span>.</>}</p>
          <button type="button" onClick={() => { setN(n + 1); setPicked(null); }} className="mt-3 min-h-[44px] rounded-full bg-indigo-500 px-6 text-white hover:bg-indigo-600">
            {n + 1 >= deck.length ? 'Ver resultado' : 'Siguiente'}
          </button>
        </div>
      )}
    </div>
  );
}

export default function SanscritoExplorer({ section }) {
  if (section === 'decomposer') return <Decomposer />;
  if (section === 'glossary') return <Glossary />;
  if (section === 'quiz') return <Quiz />;
  return null;
}
