"use client";

import { useMemo, useState } from 'react';
import { Cinzel, Cormorant_Garamond } from 'next/font/google';
import { getMoonData, getNextPhaseDate, SYNODIC_MONTH_DAYS } from './moonUtils';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '600', '700'] });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'] });

function formatDate(date) {
  return date.toLocaleDateString('es-AR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
}

function formatFullDate(date) {
  return date.toLocaleDateString('es-AR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function toInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

const REFERENCES = [
  {
    text: 'Belleville, G., Foldes-Busque, G., Dixon, M., Marquis-Pelletier, É., Barbeau, S., Poitras, J., Chauny, J.-M., Diodati, J. G., Fleet, R., & Marchand, A. (2013). Impact of seasonal and lunar cycles on psychological symptoms in the ED: An empirical investigation of widely spread beliefs. General Hospital Psychiatry, 35(2), 192–194.',
    url: 'https://doi.org/10.1016/j.genhosppsych.2012.10.011',
  },
  {
    text: 'Bischof, R., Vallejo-Vargas, A., Semper-Pascual, A., Schowanek, S. D., Beaudrot, L., Turek, D., Jansen, P. A., Rovero, F., Johnson, S. E., Guimarães Moreira Lima, M., Santos, F., Uzabaho, E., Espinosa, S., Ahumada, J. A., Bitariho, R., Salvador, J., Mugerwa, B., Sainge, M. N., & Sheil, D. (2024). The moon’s influence on the activity of tropical forest mammals. Proceedings of the Royal Society B, 291(2033), 20240683.',
    url: 'https://doi.org/10.1098/rspb.2024.0683',
  },
  {
    text: 'Cajochen, C., Altanay-Ekici, S., Münch, M., Frey, S., Knoblauch, V., & Wirz-Justice, A. (2013). Evidence that the lunar cycle influences human sleep. Current Biology, 23(15), 1485–1488.',
    url: 'https://doi.org/10.1016/j.cub.2013.06.029',
  },
  {
    text: 'Casiraghi, L., Spiousas, I., Dunster, G. P., McGlothlen, K., Fernández-Duque, E., Valeggia, C., & de la Iglesia, H. O. (2021). Moonstruck sleep: Synchronization of human sleep with the moon cycle under field conditions. Science Advances, 7(5), eabe0465.',
    url: 'https://doi.org/10.1126/sciadv.abe0465',
  },
  {
    text: 'Mayoral, O., Solbes, J., Cantó, J., & Pina, T. (2020). What has been thought and taught on the lunar influence on plants in agriculture? Perspective from physics and biology. Agronomy, 10(7), 955.',
    url: 'https://doi.org/10.3390/agronomy10070955',
  },
  {
    text: 'Sergeyev, M., Lombardi, J. V., Tewes, M. E., Campbell, T. A., & Romanach, S. S. (2023). Ocelots in the moonlight: Influence of lunar phase on habitat selection and movement of two sympatric felids. PLOS ONE, 18(11), e0286393.',
    url: 'https://doi.org/10.1371/journal.pone.0286393',
  },
];

const INFLUENCE_SECTIONS = [
  {
    icon: '🐺',
    title: 'Animales',
    body: 'La luz de la luna, más que su fuerza gravitatoria, es lo que más afecta a la fauna. Estudios con cámaras trampa en decenas de especies muestran que muchos depredadores mamíferos —como los leones— cazan mejor en las noches oscuras, aprovechando el sigilo, mientras que aves nocturnas como los búhos suelen aumentar su actividad con más luz. Algunas presas, como los armadillos, reducen su actividad en luna llena para evitar ser vistas ("lunafóbicas"), mientras otras especies, como los pecaríes, se activan más con la luna alta ("lunafílicas"). En los océanos, muchos corales sincronizan su desove masivo con las fases lunares, y varias especies de anfibios ajustan su canto reproductivo a la luz de la luna.',
  },
  {
    icon: '🌱',
    title: 'Plantas',
    body: 'La agricultura biodinámica y muchas tradiciones campesinas sostienen desde hace siglos que sembrar, podar o cosechar según la fase lunar mejora el crecimiento de las plantas. Sin embargo, la evidencia científica revisada por pares no encuentra un mecanismo físico plausible ni resultados consistentes que sostengan esta práctica: las revisiones más rigurosas concluyen que no existe una relación confiable entre las fases lunares y la fisiología vegetal. Es una creencia culturalmente muy arraigada, pero hoy se considera folclore agrícola más que ciencia establecida.',
  },
  {
    icon: '🧑‍🤝‍🧑',
    title: 'Seres humanos',
    body: 'Aquí la ciencia es más matizada. Un estudio de 2013 en condiciones de laboratorio estrictamente controladas encontró que, cerca de la luna llena, la actividad cerebral de sueño profundo (ondas delta) caía cerca de un 30%, costaba más conciliar el sueño y la melatonina disminuía, aunque las personas no sabían en qué fase lunar estaban. Estudios de campo posteriores, con sensores de muñeca en comunidades rurales y urbanas, observaron que las noches previas a la luna llena —cuando hay más luz disponible— las personas se duermen más tarde y descansan menos. Aun así, la magnitud del efecto es pequeña y otros estudios no logran replicarlo, por lo que se considera un fenómeno real pero sutil, y no una explicación de cambios drásticos de conducta.',
  },
  {
    icon: '🏙️',
    title: 'Sociedad y cultura',
    body: 'La creencia de que la luna llena dispara crímenes, urgencias psiquiátricas, nacimientos o comportamientos "de locura" está muy extendida —incluso entre personal de salud— pero decenas de estudios con miles de registros hospitalarios, policiales y psiquiátricos no encuentran una correlación real. Se explica principalmente por el sesgo de confirmación: recordamos las noches de luna llena que fueron intensas y olvidamos las que no lo fueron. Donde la luna sí tuvo, y sigue teniendo, una influencia innegable es cultural: calendarios lunares, festividades religiosas (como la Pascua o el Ramadán), la navegación y la pesca ligadas a las mareas, y por supuesto las prácticas espirituales que asocian cada fase con una intención distinta.',
  },
];

export default function MoonExplorer({ initialDateISO }) {
  const [selectedDate, setSelectedDate] = useState(() => new Date(initialDateISO));

  const today = useMemo(() => new Date(initialDateISO), [initialDateISO]);
  const isToday = isSameDay(selectedDate, today);

  const moon = useMemo(() => getMoonData(selectedDate), [selectedDate]);
  const nextFullMoon = useMemo(() => getNextPhaseDate(SYNODIC_MONTH_DAYS / 2, selectedDate), [selectedDate]);
  const nextNewMoon = useMemo(() => getNextPhaseDate(0, selectedDate), [selectedDate]);
  const illuminationPct = Math.round(moon.illumination * 100);
  const { theme } = moon;

  const moonSize = 200;
  const shadowOffset = (moon.isWaxing ? -1 : 1) * moonSize * moon.illumination;

  function shiftDay(delta) {
    setSelectedDate((prev) => {
      const next = new Date(prev);
      next.setDate(next.getDate() + delta);
      return next;
    });
  }

  function handleDateInput(event) {
    const value = event.target.value;
    if (!value) return;
    const [year, month, day] = value.split('-').map(Number);
    setSelectedDate(new Date(year, month - 1, day, 12, 0, 0));
  }

  function goToToday() {
    setSelectedDate(new Date(today));
  }

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
            <span className="text-sm font-semibold tracking-[0.2em] uppercase" style={{ color: theme.accent }}>
              {isToday ? 'Estado actual' : 'Estado en fecha seleccionada'}
            </span>
          </div>
          <h1 className={`${cinzel.className} text-3xl sm:text-4xl font-bold tracking-wide text-slate-50 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]`}>
            Estado de la Luna
          </h1>

          <div className="luna-datebar flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => shiftDay(-1)}
              aria-label="Día anterior"
              className="luna-btn w-11 h-11 rounded-full flex items-center justify-center text-lg"
              style={{ borderColor: theme.accentSoft, color: theme.accent }}
            >
              ‹
            </button>

            <label className="luna-date-input flex items-center gap-2 px-4 py-2 rounded-full" style={{ borderColor: theme.accentSoft }}>
              <span aria-hidden="true">📅</span>
              <input
                type="date"
                value={toInputValue(selectedDate)}
                onChange={handleDateInput}
                className="bg-transparent outline-none text-slate-100 text-sm sm:text-base"
              />
            </label>

            <button
              type="button"
              onClick={() => shiftDay(1)}
              aria-label="Día siguiente"
              className="luna-btn w-11 h-11 rounded-full flex items-center justify-center text-lg"
              style={{ borderColor: theme.accentSoft, color: theme.accent }}
            >
              ›
            </button>

            {!isToday && (
              <button
                type="button"
                onClick={goToToday}
                className="luna-btn px-5 py-2 rounded-full text-sm font-semibold tracking-wide"
                style={{ borderColor: theme.accentSoft, color: theme.accent }}
              >
                Volver a hoy
              </button>
            )}
          </div>

          <p className="text-slate-400 text-sm capitalize italic">{formatFullDate(selectedDate)}</p>

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

        <section className="space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-block px-4 py-1.5 rounded-full border" style={{ borderColor: theme.accentSoft, background: 'rgba(255,255,255,0.04)' }}>
              <span className="text-sm font-semibold tracking-[0.2em] uppercase" style={{ color: theme.accent }}>Descripción</span>
            </div>
            <h2 className={`${cinzel.className} text-2xl sm:text-3xl font-bold tracking-wide text-slate-50`}>
              La luna y la vida en la Tierra
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed italic">
              Desde hace milenios se le atribuyen a la luna efectos sobre los animales, las plantas, las personas y la sociedad.
              Esto es lo que muestra hoy la investigación científica al respecto, junto con las tradiciones que la acompañan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {INFLUENCE_SECTIONS.map((item) => (
              <div key={item.title} className="luna-panel rounded-2xl p-7 sm:p-8 flex flex-col h-full" style={{ borderColor: theme.accentSoft }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ background: 'rgba(255,255,255,0.06)', color: theme.accent }}>
                    {item.icon}
                  </span>
                  <h3 className={`${cinzel.className} text-lg font-semibold tracking-wide text-slate-50`}>{item.title}</h3>
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-500 text-xs sm:text-sm text-center max-w-2xl mx-auto leading-relaxed">
            Nota: la fuerza gravitatoria de la luna sobre un cuerpo humano es diminuta, muchísimo menor que la de objetos cercanos como
            un edificio. Sus efectos mejor documentados están ligados a la luz nocturna que emite y a las mareas oceánicas; muchas otras
            creencias, como su influencia sobre cultivos o la conducta humana extrema, no cuentan con respaldo científico sólido, aunque
            siguen vivas como parte importante de la cultura y la tradición.
          </p>

          <div className="luna-panel rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto" style={{ borderColor: theme.accentSoft }}>
            <h3 className={`${cinzel.className} text-sm font-semibold tracking-[0.15em] uppercase mb-4`} style={{ color: theme.accent }}>
              Referencias
            </h3>
            <ol className="space-y-3 text-slate-400 text-xs sm:text-sm leading-relaxed list-decimal list-inside">
              {REFERENCES.map((ref) => (
                <li key={ref.url}>
                  {ref.text}{' '}
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-dotted underline-offset-2 hover:text-slate-200 transition-colors"
                    style={{ color: theme.accent }}
                  >
                    {ref.url}
                  </a>
                </li>
              ))}
            </ol>
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
        .luna-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .luna-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: translateY(-1px);
        }
        .luna-date-input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid;
        }
        .luna-date-input input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(1);
          opacity: 0.75;
          cursor: pointer;
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
