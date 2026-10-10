import Link from 'next/link';
import HoyStrip from './components/HoyStrip';
import LoUltimo from './components/LoUltimo';
import Reveal from './components/Reveal';
import { bySection, pensamientoDelDia } from './content/pages';
import { getMoonData } from './luna/moonUtils';

// Dinámica: la luna, el pensamiento del día y la insignia "Nuevo" se calculan en cada visita.
export const dynamic = 'force-dynamic';

const TILE = 'rounded-[28px] border border-white/70 p-7 sm:p-9 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_20px_40px_-24px_rgba(15,23,42,0.18)]';

export default function Home() {
  const now = new Date();
  const moon = getMoonData(now);
  const pensamiento = pensamientoDelDia(now);
  const [g1, g2, g3] = moon.theme.gradient;

  return (
    <div className="home-page space-y-28 sm:space-y-36 pb-8">
      {/* Hero */}
      <section className="flex flex-col items-center text-center pt-10 sm:pt-20 space-y-8">
        <p className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-500">En el silencio del ser</p>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.02] text-slate-900">
          Encuentra<br />
          <span className="bg-gradient-to-r from-indigo-700 to-rose-600 bg-clip-text text-transparent">tu paz interior.</span>
        </h1>
        <p className="max-w-2xl text-lg sm:text-2xl text-slate-600 leading-relaxed">
          Yoga, respiración consciente y reflexiones para acompañar tu cuerpo y tu mente, un día a la vez.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2">
          <Link href="/respira_sin_fin" className="inline-flex items-center justify-center min-h-[48px] px-8 rounded-full bg-slate-900 text-white font-semibold text-base hover:bg-slate-700 active:scale-[0.98] transition motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Empezar a respirar
          </Link>
          <a href="#explorar" className="inline-flex items-center gap-1.5 min-h-[48px] px-4 rounded-full text-indigo-700 font-semibold text-base hover:text-indigo-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Explorar el sitio
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
        <div className="pt-6"><HoyStrip /></div>
      </section>

      {/* Pensamiento del día */}
      <Reveal>
        <figure className="mx-auto max-w-3xl text-center space-y-5">
          <figcaption className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-500">Para hoy</figcaption>
          <blockquote className="text-3xl sm:text-5xl font-medium tracking-tight leading-tight text-slate-900 [font-family:var(--font-playfair)] italic">
            “{pensamiento.texto}”
          </blockquote>
          <p className="text-slate-500">{pensamiento.fuente}</p>
        </figure>
      </Reveal>

      <Reveal><LoUltimo count={4} /></Reveal>

      {/* Bento */}
      <section id="explorar" aria-labelledby="explorar-h" className="scroll-mt-24 space-y-8">
        <Reveal>
          <h2 id="explorar-h" className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">Explora.</h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
          <Reveal className="lg:col-span-4">
            <Tile className="bg-gradient-to-br from-indigo-100/80 to-white" title="Yoga" lead="Conecta con tu cuerpo." section="yoga" cols />
          </Reveal>

          {/* Luna viva: el elemento distintivo de la portada */}
          <Reveal className="lg:col-span-2 lg:row-span-2" delay={80}>
            <Link
              href="/luna"
              style={{ backgroundImage: `radial-gradient(120% 80% at 50% 0%, ${moon.theme.glow}55, transparent 60%), linear-gradient(160deg, ${g1}, ${g2} 60%, ${g3})` }}
              className={`${TILE} border-white/10 group relative flex h-full min-h-[360px] flex-col justify-between overflow-hidden text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            >
              <div>
                <p className="text-sm font-semibold tracking-[0.18em] uppercase text-white/70">Esta noche</p>
                <h3 className="mt-2 text-3xl font-bold tracking-tight">{moon.name}</h3>
                <p className="mt-1 text-white/80">{Math.round(moon.illumination * 100)}% iluminada</p>
              </div>
              <div className="flex justify-center py-6" aria-hidden="true">
                <span
                  className="text-[8rem] leading-none transition-transform duration-700 motion-reduce:transition-none group-hover:scale-105"
                  style={{ filter: `drop-shadow(0 0 40px ${moon.theme.accentSoft})` }}
                >
                  {moon.emoji}
                </span>
              </div>
              <p className="text-white/85 text-sm leading-relaxed">{moon.description}</p>
            </Link>
          </Reveal>

          <Reveal className="lg:col-span-4" delay={40}>
            <Tile className="bg-gradient-to-br from-teal-100/80 to-white" title="Respiración" lead="Regula tu sistema nervioso." section="respiracion" />
          </Reveal>

          <Reveal className="lg:col-span-6" delay={40}>
            <Tile className="bg-gradient-to-br from-rose-100/70 to-white" title="Bienestar y reflexiones" lead="Alimenta tu mente, fortalece tu ser." section="bienestar" cols skip="/luna" />
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function Tile({ title, lead, section, className = '', cols = false, skip }) {
  const pages = bySection(section).filter((p) => p.href !== skip);
  return (
    <div className={`${TILE} h-full ${className}`}>
      <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">{title}</h3>
      <p className="mt-1 text-lg text-slate-600">{lead}</p>
      <ul className={`mt-6 grid gap-1 ${cols ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2'}`}>
        {pages.map((p) => (
          <li key={p.href}>
            <Link
              href={p.href}
              className="group flex items-center gap-3 min-h-[48px] rounded-2xl px-3 py-2 hover:bg-white/80 transition-colors motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-indigo-600"
            >
              <span className="text-xl w-7 text-center" aria-hidden="true">{p.icon}</span>
              <span className="font-semibold text-slate-800 group-hover:text-indigo-700 transition-colors">{p.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
