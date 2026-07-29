"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import SectionDivider from '../../components/SectionDivider';
import { limbs } from './limbsData';

const THEME = {
  rose: {
    dot: 'bg-rose-500',
    text: 'text-rose-600',
    chip: 'bg-rose-50 text-rose-600 border-rose-200',
    border: 'hover:border-rose-200',
    borderPlain: 'border-rose-200',
    grad: 'from-rose-500 to-rose-600',
    glow: 'shadow-rose-200/60',
    ring: 'focus-visible:ring-rose-300',
    bar: '#f43f5e',
  },
  amber: {
    dot: 'bg-amber-500',
    text: 'text-amber-600',
    chip: 'bg-amber-50 text-amber-600 border-amber-200',
    border: 'hover:border-amber-200',
    borderPlain: 'border-amber-200',
    grad: 'from-amber-500 to-amber-600',
    glow: 'shadow-amber-200/60',
    ring: 'focus-visible:ring-amber-300',
    bar: '#f59e0b',
  },
  teal: {
    dot: 'bg-teal-500',
    text: 'text-teal-600',
    chip: 'bg-teal-50 text-teal-600 border-teal-200',
    border: 'hover:border-teal-200',
    borderPlain: 'border-teal-200',
    grad: 'from-teal-500 to-teal-600',
    glow: 'shadow-teal-200/60',
    ring: 'focus-visible:ring-teal-300',
    bar: '#14b8a6',
  },
  cyan: {
    dot: 'bg-cyan-500',
    text: 'text-cyan-600',
    chip: 'bg-cyan-50 text-cyan-600 border-cyan-200',
    border: 'hover:border-cyan-200',
    borderPlain: 'border-cyan-200',
    grad: 'from-cyan-500 to-cyan-600',
    glow: 'shadow-cyan-200/60',
    ring: 'focus-visible:ring-cyan-300',
    bar: '#06b6d4',
  },
  violet: {
    dot: 'bg-violet-500',
    text: 'text-violet-600',
    chip: 'bg-violet-50 text-violet-600 border-violet-200',
    border: 'hover:border-violet-200',
    borderPlain: 'border-violet-200',
    grad: 'from-violet-500 to-violet-600',
    glow: 'shadow-violet-200/60',
    ring: 'focus-visible:ring-violet-300',
    bar: '#8b5cf6',
  },
  indigo: {
    dot: 'bg-indigo-500',
    text: 'text-indigo-600',
    chip: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    border: 'hover:border-indigo-200',
    borderPlain: 'border-indigo-200',
    grad: 'from-indigo-500 to-indigo-600',
    glow: 'shadow-indigo-200/60',
    ring: 'focus-visible:ring-indigo-300',
    bar: '#6366f1',
  },
  fuchsia: {
    dot: 'bg-fuchsia-500',
    text: 'text-fuchsia-600',
    chip: 'bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200',
    border: 'hover:border-fuchsia-200',
    borderPlain: 'border-fuchsia-200',
    grad: 'from-fuchsia-500 to-fuchsia-600',
    glow: 'shadow-fuchsia-200/60',
    ring: 'focus-visible:ring-fuchsia-300',
    bar: '#d946ef',
  },
  emerald: {
    dot: 'bg-emerald-500',
    text: 'text-emerald-600',
    chip: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    border: 'hover:border-emerald-200',
    borderPlain: 'border-emerald-200',
    grad: 'from-emerald-500 to-emerald-600',
    glow: 'shadow-emerald-200/60',
    ring: 'focus-visible:ring-emerald-300',
    bar: '#10b981',
  },
};

function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '-40px', ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

function LimbCard({ limb, onOpen }) {
  const [ref, inView] = useInView();
  const [pulsing, setPulsing] = useState(false);
  const theme = THEME[limb.color];

  const handleClick = () => {
    setPulsing(true);
    onOpen(limb);
    setTimeout(() => setPulsing(false), 600);
  };

  return (
    <div
      ref={ref}
      className={`relative pl-16 sm:pl-24 transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <button
        type="button"
        onClick={handleClick}
        aria-label={`Explorar ${limb.sanskrit}`}
        className={`absolute left-0 sm:left-2 top-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full ${theme.dot} text-white flex items-center justify-center text-xl sm:text-2xl border-4 border-white shadow-lg ${theme.glow} transition-transform duration-300 hover:scale-110 focus:outline-none ${theme.ring} focus-visible:ring-2`}
      >
        {pulsing && (
          <span className={`absolute inset-0 rounded-full ${theme.dot} opacity-60 animate-ping`} aria-hidden="true" />
        )}
        <span className="relative">{limb.icon}</span>
      </button>

      <button
        type="button"
        onClick={handleClick}
        className={`w-full text-left rounded-3xl bg-white/80 backdrop-blur-md border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] ${theme.border}`}
      >
        <span className={`inline-block text-[11px] font-semibold uppercase tracking-wide rounded-full px-2.5 py-1 border ${theme.chip} mb-3`}>
          Rama {limb.n} de 8
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">
          {limb.sanskrit} <span className="text-slate-400 font-medium text-lg sm:text-xl">— {limb.translation}</span>
        </h3>
        <p className={`mt-2 text-sm sm:text-base font-semibold ${theme.text}`}>{limb.tagline}</p>
        <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">{limb.description}</p>
        <span className={`inline-block mt-4 text-xs font-semibold ${theme.text}`}>Tocar para explorar →</span>
      </button>
    </div>
  );
}

function LimbModal({ limb, onClose }) {
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

  if (!limb) return null;
  const theme = THEME[limb.color];

  return (
    <div
      className="fixed inset-0 z-[100] bg-slate-900/50 backdrop-blur-sm flex items-start sm:items-center justify-center p-4 overflow-y-auto animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl my-8 sm:my-0 overflow-hidden animate-[popIn_0.25s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`relative bg-gradient-to-br ${theme.grad} text-white p-6 sm:p-8`}>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            ✕
          </button>
          <span className="text-4xl sm:text-5xl inline-block animate-[float_3s_ease-in-out_infinite]">{limb.icon}</span>
          <p className="text-xs font-semibold uppercase tracking-wide text-white/80 mt-3">Rama {limb.n} de 8</p>
          <h2 className="text-2xl sm:text-3xl font-bold">
            {limb.sanskrit} <span className="font-medium text-white/90">— {limb.translation}</span>
          </h2>
          <p className="mt-2 text-white/90 text-sm sm:text-base">{limb.tagline}</p>
        </div>

        <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto">
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">{limb.description}</p>

          <h4 className={`text-xs font-bold uppercase tracking-wide ${theme.text} mb-2`}>Prácticas y matices</h4>
          <ul className="space-y-2 mb-6">
            {limb.practices.map((p) => (
              <li key={p} className="text-slate-600 text-sm leading-relaxed flex gap-2">
                <span className={theme.text}>●</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <blockquote className={`border-l-4 ${theme.borderPlain} pl-4 italic text-slate-500 text-sm`}>
            {limb.quote}
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default function OchoRamasDelYoga() {
  const [selected, setSelected] = useState(null);
  const heroRef = useRef(null);
  const blobARef = useRef(null);
  const blobBRef = useRef(null);
  const blobCRef = useRef(null);
  const progressRef = useRef(null);
  const fillRef = useRef(null);
  const timelineRef = useRef(null);
  const tickingRef = useRef(false);

  const handleScroll = useCallback(() => {
    if (tickingRef.current) return;
    tickingRef.current = true;

    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pageProgress = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;
      if (progressRef.current) {
        progressRef.current.style.width = `${pageProgress * 100}%`;
      }

      if (blobARef.current) blobARef.current.style.transform = `translate3d(0, ${scrollY * 0.08}px, 0)`;
      if (blobBRef.current) blobBRef.current.style.transform = `translate3d(0, ${scrollY * -0.06}px, 0)`;
      if (blobCRef.current) blobCRef.current.style.transform = `translate3d(0, ${scrollY * 0.04}px, 0)`;

      if (timelineRef.current && fillRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const viewportCenter = window.innerHeight * 0.6;
        const total = rect.height;
        const covered = Math.min(total, Math.max(0, viewportCenter - rect.top));
        const pct = total > 0 ? (covered / total) * 100 : 0;
        fillRef.current.style.height = `${pct}%`;
      }

      tickingRef.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="max-w-5xl mx-auto px-4">
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes popIn { from { opacity: 0; transform: scale(0.94) translateY(8px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
      `}</style>

      <div className="fixed top-[70px] left-0 w-full h-[3px] bg-transparent z-40 pointer-events-none">
        <div
          ref={progressRef}
          className="h-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400 transition-[width] duration-100 ease-out"
          style={{ width: '0%' }}
        />
      </div>

      <header ref={heroRef} className="relative text-center py-10 sm:py-16 overflow-hidden">
        <div
          ref={blobARef}
          className="absolute -top-10 -left-10 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-indigo-300/25 blur-3xl pointer-events-none"
        />
        <div
          ref={blobBRef}
          className="absolute top-10 -right-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-rose-300/20 blur-3xl pointer-events-none"
        />
        <div
          ref={blobCRef}
          className="absolute bottom-0 left-1/3 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-emerald-300/20 blur-3xl pointer-events-none"
        />

        <span className="relative text-4xl sm:text-5xl inline-block animate-[float_4s_ease-in-out_infinite]">☸️</span>
        <h1 className="relative text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-fuchsia-600 to-emerald-600 tracking-tight mt-4">
          Las 8 Ramas del Yoga
        </h1>
        <SectionDivider className="relative mt-5" tone="indigo" />
        <p className="relative text-slate-500 max-w-2xl mx-auto leading-relaxed mt-4 text-sm sm:text-base">
          Ashtanga —del sánscrito <em>ashta</em> (ocho) y <em>anga</em> (rama, miembro)— es el camino de ocho pasos que
          Patañjali describió en los Yoga Sutras hace más de dos mil años: un mapa que va desde la ética y el cuerpo
          hasta la disolución del yo en la meditación absoluta. Desplázate para recorrerlo, y toca cada rama para
          descubrir sus prácticas.
        </p>
        <p className="relative text-slate-400 text-xs mt-4">
          ¿Buscabas la secuencia física de posturas?{' '}
          <Link href="/yoga/ashtanga_serie_basica_1" className="underline hover:text-slate-500">
            Ashtanga: Serie Básica
          </Link>{' '}
          o el{' '}
          <Link href="/asanas" className="underline hover:text-slate-500">
            Catálogo de Asanas
          </Link>
          .
        </p>
      </header>

      <div ref={timelineRef} className="relative mt-8 mb-16">
        <div className="absolute left-6 sm:left-8 top-2 bottom-2 w-0.5 bg-slate-200 rounded-full" />
        <div
          ref={fillRef}
          className="absolute left-6 sm:left-8 top-2 w-0.5 rounded-full bg-gradient-to-b from-indigo-400 via-fuchsia-400 to-emerald-400"
          style={{ height: '0%' }}
        />

        <div className="space-y-12 sm:space-y-16">
          {limbs.map((limb) => (
            <LimbCard key={limb.n} limb={limb} onOpen={setSelected} />
          ))}
        </div>
      </div>

      <div className="text-center pb-16">
        <p className="text-slate-500 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
          Las ocho ramas no son pasos que se completan y abandonan, sino aspectos de una misma práctica que crecen
          juntos. Se vuelve al primero una y otra vez, con más profundidad cada vez.
        </p>
      </div>

      {selected && <LimbModal limb={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
