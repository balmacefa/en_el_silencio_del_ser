import { Cinzel, Cormorant_Garamond } from 'next/font/google';
import { getMoonData, getNextPhaseDate, SYNODIC_MONTH_DAYS } from './moonUtils';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Estado Actual de la Luna | En el silencio del ser',
  description: 'Consulta la fase lunar actual, su porcentaje de iluminación y las próximas lunas llena y nueva, en una experiencia visual que cambia según la fase.',
};

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '600', '700'] });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'] });

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
  const { theme } = moon;

  const moonSize = 200;
  const shadowOffset = (moon.isWaxing ? -1 : 1) * moonSize * moon.illumination;

  return (
    <div className={`luna-stage -mx-4 sm:-mx-6 lg:-mx-8 -my-8 md:-my-12 px-4 sm:px-6 lg:px-8 py-16 ${cormorant.className}`}>
      <div
        className="luna-bg"
        style={{ background: `linear-gradient(160deg, ${theme.gradient[0]} 0%, ${theme.gradient[1]} 55%, ${theme.gradient[2]} 100%)` }}
      />
      <div className="luna-stars luna-stars-a" />
      <div className="luna-stars luna-stars-b" />

      <div className="relative max-w-4xl mx-auto space-y-16 text-slate-100">
        <section className="text-center space-y-6">
          <div className="inline-block mb-2 px-4 py-1.5 rounded-full border" style={{ borderColor: theme.accentSoft, background: 'rgba(255,255,255,0.04)' }}>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase" style={{ color: theme.accent }}>Estado actual</span>
          </div>
          <h1 className={`${cinzel.className} text-3xl sm:text-4xl font-bold tracking-wide text-slate-50 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]`}>
            Estado Actual de la Luna
          </h1>

          <div
            className="luna-panel rounded-[2.5rem] p-8 sm:p-14 flex flex-col items-center gap-6"
            style={{ borderColor: theme.accentSoft }}
          >
            <div className="luna-moon-wrap" style={{ width: moonSize, height: moonSize }}>
              <div className="luna-moon-glow" style={{ background: `radial-gradient(circle, ${theme.glow} 0%, transparent 70%)` }} />
              <div
                className="luna-moon"
                style={{
                  width: moonSize,
                  height: moonSize,
                  background: `radial-gradient(circle at 32% 30%, rgba(255,255,255,0.35), transparent 42%), radial-gradient(circle at 68% 62%, rgba(0,0,0,0.15), transparent 38%), ${theme.moonLit}`,
                  boxShadow: `inset -14px -14px 46px rgba(0,0,0,0.35), 0 0 70px ${theme.accentSoft}`,
                }}
              >
                <div
                  className="luna-moon-shadow"
                  style={{
                    width: moonSize,
                    height: moonSize * 1.2,
                    top: -moonSize * 0.1,
                    left: shadowOffset,
                    background: theme.moonShadow,
                  }}
                />
              </div>
            </div>

            <h2 className={`${cinzel.className} text-2xl sm:text-3xl font-semibold tracking-wide`} style={{ color: theme.accent }}>
              {moon.emoji} {moon.name}
            </h2>
            <p className="italic text-lg sm:text-xl text-slate-300 max-w-md leading-relaxed">{moon.description}</p>

            <div className="w-full max-w-sm pt-2">
              <div className="flex justify-between text-sm font-medium text-slate-400 mb-1 tracking-wide">
                <span>Iluminación</span>
                <span>{illuminationPct}%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${illuminationPct}%`, background: `linear-gradient(90deg, ${theme.glow}, ${theme.accent})` }}
                />
              </div>
            </div>

            <p className="text-slate-400 text-sm pt-1 tracking-wide">
              Día {moon.age.toFixed(1)} de un ciclo de {SYNODIC_MONTH_DAYS.toFixed(1)} días
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="luna-panel rounded-2xl p-8 flex flex-col h-full text-center items-center" style={{ borderColor: theme.accentSoft }}>
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
              style={{ background: 'rgba(255,255,255,0.06)', color: theme.accent }}
            >
              🌕
            </div>
            <h3 className={`${cinzel.className} text-xl font-semibold mb-3 tracking-wide text-slate-50`}>Próxima Luna Llena</h3>
            <p className="text-slate-300 text-base leading-relaxed capitalize italic">{formatDate(nextFullMoon)}</p>
          </div>

          <div className="luna-panel rounded-2xl p-8 flex flex-col h-full text-center items-center" style={{ borderColor: theme.accentSoft }}>
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
              style={{ background: 'rgba(255,255,255,0.06)', color: theme.accent }}
            >
              🌑
            </div>
            <h3 className={`${cinzel.className} text-xl font-semibold mb-3 tracking-wide text-slate-50`}>Próxima Luna Nueva</h3>
            <p className="text-slate-300 text-base leading-relaxed capitalize italic">{formatDate(nextNewMoon)}</p>
          </div>
        </section>
      </div>

      <style>{`
        .luna-stage {
          position: relative;
          isolation: isolate;
          overflow: hidden;
        }
        .luna-bg {
          position: absolute;
          inset: 0;
          z-index: -3;
          transition: background 1s ease;
        }
        .luna-stars {
          position: absolute;
          inset: -10% -10%;
          z-index: -2;
          background-repeat: repeat;
          opacity: 0.75;
        }
        .luna-stars-a {
          background-image:
            radial-gradient(1.6px 1.6px at 8% 22%, #fff 60%, transparent 100%),
            radial-gradient(1.2px 1.2px at 24% 66%, #fff 60%, transparent 100%),
            radial-gradient(1.8px 1.8px at 42% 12%, #fff 60%, transparent 100%),
            radial-gradient(1.2px 1.2px at 58% 44%, #fff 60%, transparent 100%),
            radial-gradient(1.6px 1.6px at 73% 78%, #fff 60%, transparent 100%),
            radial-gradient(1.2px 1.2px at 88% 28%, #fff 60%, transparent 100%),
            radial-gradient(1.4px 1.4px at 15% 88%, #fff 60%, transparent 100%),
            radial-gradient(1.2px 1.2px at 95% 60%, #fff 60%, transparent 100%);
          background-size: 340px 340px;
          animation: luna-twinkle 5s ease-in-out infinite;
        }
        .luna-stars-b {
          background-image:
            radial-gradient(1px 1px at 12% 50%, #fff 60%, transparent 100%),
            radial-gradient(1.3px 1.3px at 33% 30%, #fff 60%, transparent 100%),
            radial-gradient(1px 1px at 50% 82%, #fff 60%, transparent 100%),
            radial-gradient(1.3px 1.3px at 66% 10%, #fff 60%, transparent 100%),
            radial-gradient(1px 1px at 80% 52%, #fff 60%, transparent 100%),
            radial-gradient(1.3px 1.3px at 92% 90%, #fff 60%, transparent 100%);
          background-size: 260px 260px;
          animation: luna-twinkle 7s ease-in-out infinite reverse;
        }
        @keyframes luna-twinkle {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.9; }
        }
        .luna-panel {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid;
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        }
        .luna-moon-wrap {
          position: relative;
          margin: 0 auto;
          animation: luna-float 6s ease-in-out infinite;
        }
        @keyframes luna-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .luna-moon-glow {
          position: absolute;
          inset: -46px;
          border-radius: 9999px;
          filter: blur(38px);
          opacity: 0.6;
        }
        .luna-moon {
          position: relative;
          border-radius: 9999px;
          overflow: hidden;
        }
        .luna-moon-shadow {
          position: absolute;
          border-radius: 9999px;
          filter: blur(5px);
          opacity: 0.94;
          transition: left 1s ease;
        }
      `}</style>
    </div>
  );
}
