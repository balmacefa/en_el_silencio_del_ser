"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import SectionDivider from '../components/SectionDivider';

const RHYTHMS = [
  {
    key: 'box',
    badge: 'Enfoque',
    title: 'Box Breathing',
    subtitle: '4s · 4s · 4s · 4s',
    desc: 'Usada por Navy SEALs para mantener la calma bajo presión. Inhala, retén, exhala y descansa en vacío, cada tramo con la misma duración.',
    phases: [
      { name: 'Inhalar', dur: 4 },
      { name: 'Retener', dur: 4 },
      { name: 'Exhalar', dur: 4 },
      { name: 'Vacío', dur: 4 },
    ],
    bg: 'from-teal-950 via-teal-900 to-emerald-950',
    orb: 'bg-teal-300',
  },
  {
    key: '478',
    badge: 'Sueño',
    title: '4-7-8',
    subtitle: '4s · 7s · 8s',
    desc: 'El ansiolítico natural del Dr. Weil. Inhala 4s, retén 7s y exhala muy lento durante 8s. Ideal antes de dormir.',
    phases: [
      { name: 'Inhalar', dur: 4 },
      { name: 'Retener', dur: 7 },
      { name: 'Exhalar', dur: 8 },
    ],
    bg: 'from-indigo-950 via-indigo-900 to-slate-950',
    orb: 'bg-indigo-300',
  },
  {
    key: 'wimhof',
    badge: 'Energía',
    title: 'Wim Hof (rítmica)',
    subtitle: '2s · 2s',
    desc: 'Ciclos cortos y profundos para activar tu energía. Evita practicarla en el agua o conduciendo.',
    phases: [
      { name: 'Inhalar', dur: 2 },
      { name: 'Exhalar', dur: 2 },
    ],
    bg: 'from-orange-950 via-amber-900 to-rose-950',
    orb: 'bg-amber-300',
  },
  {
    key: 'coherente',
    badge: 'Coherencia',
    title: 'Respiración Coherente',
    subtitle: '5.5s · 5.5s',
    desc: 'El ritmo de ~5.5 respiraciones por minuto asociado a la máxima coherencia entre corazón y mente.',
    phases: [
      { name: 'Inhalar', dur: 5.5 },
      { name: 'Exhalar', dur: 5.5 },
    ],
    bg: 'from-sky-950 via-cyan-900 to-blue-950',
    orb: 'bg-sky-300',
  },
  {
    key: '4422',
    badge: 'Transición',
    title: '4-4-2-2',
    subtitle: '4s · 4s · 2s · 2s',
    desc: 'Un ciclo asimétrico y suave: inhala y retén con calma, luego libera en un tramo más corto. Útil entre una actividad y otra.',
    phases: [
      { name: 'Inhalar', dur: 4 },
      { name: 'Retener', dur: 4 },
      { name: 'Exhalar', dur: 2 },
      { name: 'Vacío', dur: 2 },
    ],
    bg: 'from-violet-950 via-purple-900 to-fuchsia-950',
    orb: 'bg-violet-300',
  },
  {
    key: 'resonante',
    badge: 'Meditación',
    title: 'Respiración Resonante',
    subtitle: '6s · 6s',
    desc: 'Un ritmo lento y estable de 5 respiraciones por minuto, sin pausas. Ideal para meditaciones largas.',
    phases: [
      { name: 'Inhalar', dur: 6 },
      { name: 'Exhalar', dur: 6 },
    ],
    bg: 'from-emerald-950 via-green-900 to-teal-950',
    orb: 'bg-emerald-300',
  },
  {
    key: 'relajacion',
    badge: 'Relajación',
    title: 'Respiración Relajante',
    subtitle: '4s · 6s',
    desc: 'Al exhalar más tiempo del que inhalas, activas tu sistema nervioso parasimpático y sueltas tensión acumulada.',
    phases: [
      { name: 'Inhalar', dur: 4 },
      { name: 'Exhalar', dur: 6 },
    ],
    bg: 'from-rose-950 via-pink-900 to-slate-950',
    orb: 'bg-rose-300',
  },
];

function buildKeyframeStops(phases) {
  const total = phases.reduce((sum, p) => sum + p.dur, 0);
  let acc = 0;
  let scale = 1;
  const stops = [{ pct: 0, scale }];
  phases.forEach((p) => {
    let end = scale;
    if (p.name === 'Inhalar') end = 1.45;
    else if (p.name === 'Exhalar') end = 1;
    acc += p.dur;
    stops.push({ pct: (acc / total) * 100, scale: end });
    scale = end;
  });
  return { total, stops };
}

const RHYTHM_ANIMATIONS = new Map(
  RHYTHMS.map((r) => [r.key, buildKeyframeStops(r.phases)])
);

const KEYFRAMES_CSS = RHYTHMS.map((r) => {
  const { stops } = RHYTHM_ANIMATIONS.get(r.key);
  const body = stops.map((s) => `${s.pct.toFixed(3)}% { transform: scale(${s.scale}); }`).join(' ');
  return `@keyframes breathe-${r.key} { ${body} }`;
}).join('\n');

function phaseAt(phases, total, elapsed) {
  let t = elapsed % total;
  for (const p of phases) {
    if (t < p.dur) return { name: p.name, remaining: p.dur - t };
    t -= p.dur;
  }
  return { name: phases[0].name, remaining: phases[0].dur };
}

const PHASE_FREQ = {
  Inhalar: 392, // G4
  Retener: 523.25, // C5
  Exhalar: 293.66, // D4
  Vacío: 220, // A3
};

let sharedAudioCtx = null;
function getAudioContext() {
  if (typeof window === 'undefined') return null;
  // @ts-ignore - Safari fallback
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return null;
  if (!sharedAudioCtx) sharedAudioCtx = new Ctx();
  return sharedAudioCtx;
}

function playPhaseTone(phaseName, volume) {
  const ctx = getAudioContext();
  if (!ctx || volume <= 0) return;
  if (ctx.state === 'suspended') ctx.resume();
  const freq = PHASE_FREQ[phaseName] || 330;
  const now = ctx.currentTime;
  const peak = 0.05 + volume * 0.25;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, now);
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(peak, now + 0.15);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 1.1);
  osc.connect(gain).connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 1.2);
}

function BreathSlide({ id, rhythm, active, registerRef, soundOn, volume }) {
  const { total } = RHYTHM_ANIMATIONS.get(rhythm.key);
  const [phase, setPhase] = useState(rhythm.phases[0].name);
  const [secondsLeft, setSecondsLeft] = useState(Math.ceil(rhythm.phases[0].dur));
  const rafRef = useRef(null);

  useEffect(() => {
    if (!active) return undefined;
    const start = performance.now();
    const tick = (now) => {
      const elapsed = (now - start) / 1000;
      const { name, remaining } = phaseAt(rhythm.phases, total, elapsed);
      setPhase(name);
      setSecondsLeft(Math.ceil(remaining));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, rhythm, total]);

  useEffect(() => {
    if (!active || !soundOn) return;
    playPhaseTone(phase, volume);
  }, [phase, active, soundOn, volume]);

  const animationStyle = {
    animationName: `breathe-${rhythm.key}`,
    animationDuration: `${total}s`,
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
    animationPlayState: active ? 'running' : 'paused',
  };

  return (
    <section
      ref={(el) => registerRef(id, el)}
      data-id={id}
      className={`snap-start shrink-0 w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br ${rhythm.bg} text-white px-6 text-center`}
    >
      <span className="absolute top-6 text-xs uppercase tracking-[0.2em] text-white/50 font-semibold">
        {rhythm.badge}
      </span>

      <div className="relative flex items-center justify-center" style={{ width: 200, height: 200 }}>
        <div className={`absolute inset-0 rounded-full ${rhythm.orb} blur-2xl opacity-50`} style={animationStyle} />
        <div className={`absolute inset-6 rounded-full ${rhythm.orb} opacity-90`} style={animationStyle} />
        <div className="relative z-10">
          <div className="text-4xl font-bold tabular-nums">{secondsLeft}s</div>
          <div className="text-sm font-medium tracking-wide mt-1 opacity-90">{phase}</div>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-10">{rhythm.title}</h3>
      <p className="text-white/70 text-sm mt-2">{rhythm.subtitle}</p>
      <p className="text-white/60 text-xs mt-4 max-w-xs leading-relaxed">{rhythm.desc}</p>

      <div className="absolute bottom-6 flex flex-col items-center gap-1 text-white/40 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest">Desliza</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

export default function RespiraSinFin() {
  const containerRef = useRef(null);
  const slideRefs = useRef(new Map());
  const sentinelRef = useRef(null);
  const nextIdRef = useRef(RHYTHMS.length);

  const [items, setItems] = useState(() => RHYTHMS.map((_, i) => ({ id: i, patternIndex: i })));
  const [activeId, setActiveId] = useState(0);
  const [soundOn, setSoundOn] = useState(true);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const savedOn = window.localStorage.getItem('respira-sin-fin-sound-on');
    const savedVolume = window.localStorage.getItem('respira-sin-fin-volume');
    if (savedOn !== null) setSoundOn(savedOn === 'true');
    if (savedVolume !== null) setVolume(Number(savedVolume));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('respira-sin-fin-sound-on', String(soundOn));
  }, [soundOn]);

  useEffect(() => {
    window.localStorage.setItem('respira-sin-fin-volume', String(volume));
  }, [volume]);

  const toggleSound = useCallback(() => {
    setSoundOn((prev) => {
      const next = !prev;
      if (next) {
        const ctx = getAudioContext();
        if (ctx && ctx.state === 'suspended') ctx.resume();
      }
      return next;
    });
  }, []);

  const registerSlide = useCallback((id, el) => {
    if (el) slideRefs.current.set(id, el);
    else slideRefs.current.delete(id);
  }, []);

  useEffect(() => {
    const el = sentinelRef.current;
    const root = containerRef.current;
    if (!el || !root) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setItems((prev) => {
            const more = Array.from({ length: RHYTHMS.length }, (_, i) => {
              const id = nextIdRef.current + i;
              return { id, patternIndex: id % RHYTHMS.length };
            });
            nextIdRef.current += RHYTHMS.length;
            return [...prev, ...more];
          });
        }
      },
      { root, rootMargin: '600px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            setActiveId(Number(entry.target.getAttribute('data-id')));
          }
        });
      },
      { root, threshold: [0.6] }
    );
    slideRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items.length]);

  const handleKeyDown = useCallback((e) => {
    const root = containerRef.current;
    if (!root) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      root.scrollBy({ top: root.clientHeight, behavior: 'smooth' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      root.scrollBy({ top: -root.clientHeight, behavior: 'smooth' });
    }
  }, []);

  const renderedItems = useMemo(() => items, [items]);

  return (
    <div className="max-w-md mx-auto">
      <style>{KEYFRAMES_CSS}</style>

      <div className="text-center space-y-4 mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-indigo-600 tracking-tight">
          Respira sin Fin
        </h1>
        <SectionDivider tone="indigo" />
        <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
          Un feed infinito de ritmos de respiración. Desliza entre tarjetas que respiran a su propio compás — quédate en la que resuene contigo.
        </p>

        <div className="flex items-center justify-center gap-3 pt-1">
          <button
            type="button"
            onClick={toggleSound}
            aria-pressed={soundOn}
            aria-label={soundOn ? 'Desactivar sonido' : 'Activar sonido'}
            className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center bg-slate-900 text-white shadow-md hover:bg-slate-700 transition-colors"
          >
            <span aria-hidden="true">{soundOn ? '🔊' : '🔇'}</span>
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            disabled={!soundOn}
            aria-label="Volumen del sonido"
            className="w-32 accent-indigo-500 disabled:opacity-40"
          />
        </div>
      </div>

      <div
        ref={containerRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="relative mx-auto w-full max-w-[420px] h-[75vh] max-h-[760px] overflow-y-scroll snap-y snap-mandatory rounded-[2rem] border-8 border-slate-900/90 shadow-[0_20px_60px_rgba(0,0,0,0.35)] outline-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {renderedItems.map((item) => (
          <BreathSlide
            key={item.id}
            id={item.id}
            rhythm={RHYTHMS[item.patternIndex]}
            active={activeId === item.id}
            registerRef={registerSlide}
            soundOn={soundOn}
            volume={volume}
          />
        ))}
        <div ref={sentinelRef} className="h-1 w-full" />
      </div>
    </div>
  );
}
