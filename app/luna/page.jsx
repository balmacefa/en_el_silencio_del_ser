import { getMoonData, getNextPhaseDate, SYNODIC_MONTH_DAYS } from './moonUtils';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Estado Actual de la Luna | En el silencio del ser',
  description: 'Consulta la fase lunar actual, su porcentaje de iluminación y las próximas lunas llena y nueva.',
};

function formatDate(date) {
  return date.toLocaleDateString('es-AR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
}

export default function Luna() {
  const now = new Date();
  const moon = getMoonData(now);
  const nextFullMoon = getNextPhaseDate(SYNODIC_MONTH_DAYS / 2, now);
  const nextNewMoon = getNextPhaseDate(0, now);
  const illuminationPct = Math.round(moon.illumination * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-16">
      <section className="text-center space-y-6">
        <div className="inline-block mb-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100">
          <span className="text-indigo-600 text-sm font-semibold tracking-wide uppercase">Estado actual</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">🌙 Estado Actual de la Luna</h1>

        <div className="rounded-[2rem] bg-white/70 backdrop-blur-sm border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-8 sm:p-12 flex flex-col items-center gap-4">
          <div className="text-8xl drop-shadow-sm">{moon.emoji}</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">{moon.name}</h2>
          <p className="text-slate-500 max-w-md leading-relaxed">{moon.description}</p>

          <div className="w-full max-w-sm pt-4">
            <div className="flex justify-between text-sm font-medium text-slate-500 mb-1">
              <span>Iluminación</span>
              <span>{illuminationPct}%</span>
            </div>
            <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 transition-all"
                style={{ width: `${illuminationPct}%` }}
              />
            </div>
          </div>

          <p className="text-slate-400 text-sm pt-2">
            Día {moon.age.toFixed(1)} de un ciclo de {SYNODIC_MONTH_DAYS.toFixed(1)} días
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="group rounded-2xl bg-white/70 backdrop-blur-sm p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-indigo-200 flex flex-col h-full text-center">
          <div className="bg-indigo-50 text-indigo-600 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto">🌕</div>
          <h3 className="text-xl font-bold text-slate-800 mb-3">Próxima Luna Llena</h3>
          <p className="text-slate-500 text-sm leading-relaxed capitalize">{formatDate(nextFullMoon)}</p>
        </div>

        <div className="group rounded-2xl bg-white/70 backdrop-blur-sm p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-indigo-200 flex flex-col h-full text-center">
          <div className="bg-indigo-50 text-indigo-600 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto">🌑</div>
          <h3 className="text-xl font-bold text-slate-800 mb-3">Próxima Luna Nueva</h3>
          <p className="text-slate-500 text-sm leading-relaxed capitalize">{formatDate(nextNewMoon)}</p>
        </div>
      </section>
    </div>
  );
}
