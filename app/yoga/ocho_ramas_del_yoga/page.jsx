"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
    grad: 'from-rose-500 via-fuchsia-500 to-rose-600',
    glow: 'shadow-rose-200/60',
    hoverGlow: 'hover:shadow-rose-200/50',
    ring: 'focus-visible:ring-rose-300',
    bar: '#f43f5e',
  },
  amber: {
    dot: 'bg-amber-500',
    text: 'text-amber-600',
    chip: 'bg-amber-50 text-amber-600 border-amber-200',
    border: 'hover:border-amber-200',
    borderPlain: 'border-amber-200',
    grad: 'from-amber-500 via-orange-400 to-amber-600',
    glow: 'shadow-amber-200/60',
    hoverGlow: 'hover:shadow-amber-200/50',
    ring: 'focus-visible:ring-amber-300',
    bar: '#f59e0b',
  },
  teal: {
    dot: 'bg-teal-500',
    text: 'text-teal-600',
    chip: 'bg-teal-50 text-teal-600 border-teal-200',
    border: 'hover:border-teal-200',
    borderPlain: 'border-teal-200',
    grad: 'from-teal-500 via-cyan-500 to-teal-600',
    glow: 'shadow-teal-200/60',
    hoverGlow: 'hover:shadow-teal-200/50',
    ring: 'focus-visible:ring-teal-300',
    bar: '#14b8a6',
  },
  cyan: {
    dot: 'bg-cyan-500',
    text: 'text-cyan-600',
    chip: 'bg-cyan-50 text-cyan-600 border-cyan-200',
    border: 'hover:border-cyan-200',
    borderPlain: 'border-cyan-200',
    grad: 'from-cyan-500 via-sky-500 to-cyan-600',
    glow: 'shadow-cyan-200/60',
    hoverGlow: 'hover:shadow-cyan-200/50',
    ring: 'focus-visible:ring-cyan-300',
    bar: '#06b6d4',
  },
  violet: {
    dot: 'bg-violet-500',
    text: 'text-violet-600',
    chip: 'bg-violet-50 text-violet-600 border-violet-200',
    border: 'hover:border-violet-200',
    borderPlain: 'border-violet-200',
    grad: 'from-violet-500 via-purple-500 to-violet-600',
    glow: 'shadow-violet-200/60',
    hoverGlow: 'hover:shadow-violet-200/50',
    ring: 'focus-visible:ring-violet-300',
    bar: '#8b5cf6',
  },
  indigo: {
    dot: 'bg-indigo-500',
    text: 'text-indigo-600',
    chip: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    border: 'hover:border-indigo-200',
    borderPlain: 'border-indigo-200',
    grad: 'from-indigo-500 via-blue-500 to-indigo-600',
    glow: 'shadow-indigo-200/60',
    hoverGlow: 'hover:shadow-indigo-200/50',
    ring: 'focus-visible:ring-indigo-300',
    bar: '#6366f1',
  },
  fuchsia: {
    dot: 'bg-fuchsia-500',
    text: 'text-fuchsia-600',
    chip: 'bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200',
    border: 'hover:border-fuchsia-200',
    borderPlain: 'border-fuchsia-200',
    grad: 'from-fuchsia-500 via-pink-500 to-fuchsia-600',
    glow: 'shadow-fuchsia-200/60',
    hoverGlow: 'hover:shadow-fuchsia-200/50',
    ring: 'focus-visible:ring-fuchsia-300',
    bar: '#d946ef',
  },
  emerald: {
    dot: 'bg-emerald-500',
    text: 'text-emerald-600',
    chip: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    border: 'hover:border-emerald-200',
    borderPlain: 'border-emerald-200',
    grad: 'from-emerald-500 via-green-400 to-emerald-600',
    glow: 'shadow-emerald-200/60',
    hoverGlow: 'hover:shadow-emerald-200/50',
    ring: 'focus-visible:ring-emerald-300',
    bar: '#10b981',
  },
};

const FIREFLY_COLORS = Object.values(THEME).map((t) => t.bar);
const FIREFLIES = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 41 + 7) % 100,
  top: (i * 67 + 13) % 100,
  size: 2 + (i % 3),
  delay: (i % 9) * 0.7,
  duration: 7 + (i % 5) * 1.6,
  color: FIREFLY_COLORS[i % FIREFLY_COLORS.length],
}));

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

function AuroraLayer({ ambientRef }) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div ref={ambientRef} className="absolute inset-0 transition-[background] duration-[1400ms] ease-out" />
      <div
        className="ramas-anim absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-violet-400/25 blur-3xl"
        style={{ animation: 'ramasAuroraA 22s ease-in-out infinite' }}
      />
      <div
        className="ramas-anim absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full bg-rose-400/20 blur-3xl"
        style={{ animation: 'ramasAuroraB 27s ease-in-out infinite' }}
      />
      <div
        className="ramas-anim absolute bottom-0 left-1/4 w-[24rem] h-[24rem] rounded-full bg-teal-400/20 blur-3xl"
        style={{ animation: 'ramasAuroraC 31s ease-in-out infinite' }}
      />
      <div
        className="ramas-anim absolute bottom-1/4 right-1/5 w-72 h-72 rounded-full bg-amber-300/20 blur-3xl"
        style={{ animation: 'ramasAuroraA 19s ease-in-out infinite reverse' }}
      />
    </div>
  );
}

function Fireflies() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {FIREFLIES.map((p, i) => (
        <span
          key={i}
          className="ramas-anim absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 6px 2px ${p.color}66`,
            animation: `ramasTwinkle ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

function LimbCard({ limb, index, onOpen }) {
  const [ref, inView] = useInView();
  const [pulsing, setPulsing] = useState(false);
  const theme = THEME[limb.color];
  const tiltHover = index % 2 === 0 ? 'hover:-rotate-1' : 'hover:rotate-1';
  const hiddenTilt = index % 2 === 0 ? '-rotate-2' : 'rotate-2';

  const handleClick = () => {
    setPulsing(true);
    onOpen(limb);
    setTimeout(() => setPulsing(false), 600);
  };

  return (
    <div
      ref={ref}
      data-limb-color={theme.bar}
      className={`group relative pl-16 sm:pl-24 transition-all duration-700 ease-out ${
        inView ? `opacity-100 translate-y-0 scale-100 rotate-0` : `opacity-0 translate-y-14 scale-95 ${hiddenTilt}`
      }`}
    >
      <div
        className="ramas-anim absolute -inset-4 sm:-inset-6 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-45 transition-opacity duration-500 pointer-events-none"
        style={{ background: theme.bar, animation: `ramasAuroraA ${16 + index}s ease-in-out infinite` }}
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={handleClick}
        aria-label={`Explorar ${limb.sanskrit}`}
        className={`ramas-anim absolute left-0 sm:left-2 top-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full text-white flex items-center justify-center text-xl sm:text-2xl border-4 border-white shadow-lg ${theme.glow} transition-transform duration-300 hover:scale-110 focus:outline-none ${theme.ring} focus-visible:ring-2`}
        style={{
          background: `radial-gradient(circle at 32% 28%, #ffffff, ${theme.bar} 62%)`,
          animation: `ramasPulseGlow 3s ease-in-out infinite`,
          ['--glow-color']: `${theme.bar}55`,
        }}
      >
        {pulsing && (
          <span className={`absolute inset-0 rounded-full ${theme.dot} opacity-60 animate-ping`} aria-hidden="true" />
        )}
        <span className="relative drop-shadow-sm">{limb.icon}</span>
      </button>

      <button
        type="button"
        onClick={handleClick}
        className={`relative w-full text-left rounded-3xl bg-white/80 backdrop-blur-md border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${theme.hoverGlow} ${theme.border} ${tiltHover}`}
      >
        <span className={`inline-block text-[11px] font-semibold uppercase tracking-wide rounded-full px-2.5 py-1 border ${theme.chip} mb-3`}>
          Rama {limb.n} de 8
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">
          {limb.sanskrit} <span className="text-slate-400 font-medium text-lg sm:text-xl">— {limb.translation}</span>
        </h3>
        <p className={`mt-2 text-sm sm:text-base font-semibold ${theme.text}`}>{limb.tagline}</p>
        <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">{limb.description}</p>
        <span className={`inline-block mt-4 text-xs font-semibold ${theme.text}`}>✨ Tocar para explorar →</span>
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
      className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-start sm:items-center justify-center p-4 overflow-y-auto animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl my-8 sm:my-0 overflow-hidden animate-[popIn_0.3s_cubic-bezier(0.34,1.56,0.64,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`ramas-anim relative overflow-hidden bg-gradient-to-br ${theme.grad} text-white p-6 sm:p-8`}
          style={{ backgroundSize: '220% 220%', animation: 'ramasGradientMove 7s ease-in-out infinite' }}
        >
          <span
            className="ramas-anim absolute -top-8 -right-8 text-6xl opacity-30"
            style={{ animation: 'ramasSpinSlow 40s linear infinite' }}
            aria-hidden="true"
          >
            ✦
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            ✕
          </button>
          <span className="text-4xl sm:text-5xl inline-block ramas-anim" style={{ animation: 'float 3s ease-in-out infinite' }}>
            {limb.icon}
          </span>
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
  const orbRef = useRef(null);
  const timelineRef = useRef(null);
  const ambientRef = useRef(null);
  const tickingRef = useRef(false);

  const sparkles = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        left: 10 + ((i * 29) % 80),
        top: 5 + ((i * 37) % 70),
        delay: (i % 5) * 0.6,
        duration: 3 + (i % 4),
      })),
    []
  );

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
        if (orbRef.current) orbRef.current.style.top = `${pct}%`;
      }

      tickingRef.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const els = document.querySelectorAll('[data-limb-color]');
    if (!els.length) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && ambientRef.current) {
            const color = entry.target.getAttribute('data-limb-color');
            ambientRef.current.style.background = `radial-gradient(1100px 700px at 50% 30%, ${color}2e, transparent 60%)`;
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4">
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes popIn { from { opacity: 0; transform: scale(0.9) translateY(12px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes ramasAuroraA { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(40px, 55px) scale(1.15); } }
        @keyframes ramasAuroraB { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-55px, 40px) scale(1.1); } }
        @keyframes ramasAuroraC { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(35px, -45px) scale(1.2); } }
        @keyframes ramasTwinkle { 0%, 100% { opacity: 0.15; transform: scale(0.7); } 50% { opacity: 0.9; transform: scale(1.3); } }
        @keyframes ramasSpinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes ramasTextShine { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes ramasGradientMove { 0%, 100% { background-position: 0% 30%; } 50% { background-position: 100% 70%; } }
        @keyframes ramasPulseGlow { 0%, 100% { box-shadow: 0 0 0 0 var(--glow-color, rgba(99,102,241,0.45)); } 50% { box-shadow: 0 0 0 12px rgba(99,102,241,0); } }
        @media (prefers-reduced-motion: reduce) {
          .ramas-anim { animation: none !important; }
        }
      `}</style>

      <AuroraLayer ambientRef={ambientRef} />
      <Fireflies />

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

        <svg
          className="ramas-anim absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[26rem] h-[26rem] sm:w-[34rem] sm:h-[34rem] opacity-[0.12] pointer-events-none"
          style={{ animation: 'ramasSpinSlow 90s linear infinite' }}
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <circle cx="100" cy="100" r="95" fill="none" stroke="#6366f1" strokeWidth="0.6" />
          <circle cx="100" cy="100" r="75" fill="none" stroke="#d946ef" strokeWidth="0.6" />
          <circle cx="100" cy="100" r="55" fill="none" stroke="#10b981" strokeWidth="0.6" />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            const x2 = 100 + Math.cos(angle) * 95;
            const y2 = 100 + Math.sin(angle) * 95;
            return <line key={i} x1="100" y1="100" x2={x2} y2={y2} stroke="#8b5cf6" strokeWidth="0.4" />;
          })}
        </svg>

        {sparkles.map((s, i) => (
          <span
            key={i}
            className="ramas-anim absolute text-amber-300 pointer-events-none select-none"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              animation: `ramasTwinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            }}
            aria-hidden="true"
          >
            ✦
          </span>
        ))}

        <span className="ramas-anim relative text-4xl sm:text-5xl inline-block" style={{ animation: 'float 4s ease-in-out infinite' }}>
          ☸️
        </span>
        <h1
          className="ramas-anim relative text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-fuchsia-600 to-emerald-600 tracking-tight mt-4"
          style={{ backgroundSize: '200% auto', animation: 'ramasTextShine 6s ease-in-out infinite' }}
        >
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
        <div
          ref={orbRef}
          className="ramas-anim absolute left-6 sm:left-8 -translate-x-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full z-10 pointer-events-none"
          style={{
            top: '0%',
            background: 'radial-gradient(circle at 30% 30%, #fff, #a78bfa 45%, #f472b6 75%, #34d399 100%)',
            boxShadow: '0 0 14px 4px rgba(167,139,250,0.55)',
            animation: 'ramasPulseGlow 2.2s ease-in-out infinite',
            ['--glow-color']: 'rgba(167,139,250,0.55)',
          }}
        />

        <div className="space-y-12 sm:space-y-16">
          {limbs.map((limb, index) => (
            <LimbCard key={limb.n} limb={limb} index={index} onOpen={setSelected} />
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
