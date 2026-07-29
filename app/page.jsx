import Link from 'next/link';
import SectionDivider from './components/SectionDivider';
import DynamicBackground from './components/DynamicBackground';
import ScrollProgressBar from './components/ScrollProgressBar';
import Reveal from './components/Reveal';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      <DynamicBackground ambient />
      <ScrollProgressBar />

      {/* Hero Section */}
      <section data-ambient-color="#6366f1" className="text-center space-y-6 pt-10">
        <Reveal index={0}>
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100">
            <span className="text-indigo-600 text-sm font-semibold tracking-wide uppercase">Bienvenido</span>
          </div>
        </Reveal>
        <Reveal index={1} as="h1" className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-indigo-800 to-slate-800 tracking-tight leading-tight drop-shadow-sm pb-2 animate-text-shine">
          Encuentra tu paz interior
        </Reveal>
        <Reveal index={2} as="p" className="text-lg sm:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          Explora prácticas de yoga, meditaciones guiadas y herramientas de respiración consciente diseñadas para transformar tu bienestar físico y mental.
        </Reveal>
        <SectionDivider />
        <Reveal index={3} className="pt-4">
          <a href="#explorar" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-indigo-600 rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300 transition-all duration-300 hover:-translate-y-1 active:scale-95 animate-glow-pulse" style={{ '--glow-color': 'rgba(99,102,241,0.35)' }}>
            Explorar Prácticas
            <svg className="w-5 h-5 ml-2 -mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </a>
        </Reveal>
      </section>

      <div id="explorar" className="w-full space-y-20">
        {/* Yoga Section */}
        <section data-ambient-color="#6366f1" className="space-y-8">
          <Reveal className="text-center sm:text-left border-b border-slate-100 pb-4">
            <h2 className="text-3xl font-bold text-slate-800 flex items-center justify-center sm:justify-start gap-3">
              <span className="text-4xl">🧘</span> Prácticas de Yoga
            </h2>
            <p className="mt-2 text-slate-500 text-lg">Conecta con tu cuerpo a través de diferentes enfoques y rutinas.</p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Reveal index={0}>
              <Link href="/yoga/experiencia_personal" className="group rounded-2xl bg-white/70 backdrop-blur-sm p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:rotate-1 hover:border-indigo-200 active:scale-95 flex flex-col h-full">
                <div className="animate-glow-pulse bg-indigo-50 text-indigo-600 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-indigo-100 transition-all duration-300" style={{ '--glow-color': 'rgba(99,102,241,0.3)' }}>🌱</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">Experiencia Personal</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-grow">Conoce mi viaje con el yoga, aprendizajes y cómo integrarlo en la vida diaria.</p>
              </Link>
            </Reveal>

            <Reveal index={1}>
              <Link href="/yoga/ashtanga_serie_basica_1" className="group rounded-2xl bg-white/70 backdrop-blur-sm p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:-rotate-1 hover:border-indigo-200 active:scale-95 flex flex-col h-full">
                <div className="animate-glow-pulse bg-indigo-50 text-indigo-600 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-indigo-100 transition-all duration-300" style={{ '--glow-color': 'rgba(99,102,241,0.3)' }}>🕉️</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">Ashtanga: Serie Básica</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-grow">Guía detallada de la primera serie de Ashtanga Yoga para desarrollar fuerza y flexibilidad.</p>
              </Link>
            </Reveal>

            <Reveal index={2}>
              <Link href="/yoga/youtube" className="group rounded-2xl bg-white/70 backdrop-blur-sm p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:rotate-1 hover:border-indigo-200 active:scale-95 flex flex-col h-full">
                <div className="animate-glow-pulse bg-indigo-50 text-indigo-600 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-indigo-100 transition-all duration-300" style={{ '--glow-color': 'rgba(99,102,241,0.3)' }}>📺</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">Recomendaciones YouTube</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-grow">Selección de los mejores canales y videos para practicar yoga desde casa.</p>
              </Link>
            </Reveal>

            <Reveal index={3}>
              <Link href="/asanas" className="group rounded-2xl bg-white/70 backdrop-blur-sm p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:-rotate-1 hover:border-indigo-200 active:scale-95 flex flex-col h-full">
                <div className="animate-glow-pulse bg-indigo-50 text-indigo-600 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-indigo-100 transition-all duration-300" style={{ '--glow-color': 'rgba(99,102,241,0.3)' }}>🐾</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">Catálogo de Asanas</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-grow">Las posturas completas de la Primera Serie de Ashtanga, con fotografía y notas sobre nombres inspirados en animales y naturaleza.</p>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Respiración Section */}
        <section data-ambient-color="#14b8a6" className="space-y-8">
          <Reveal className="text-center sm:text-left border-b border-slate-100 pb-4">
            <h2 className="text-3xl font-bold text-slate-800 flex items-center justify-center sm:justify-start gap-3">
              <span className="text-4xl">🌬️</span> Respiración Consciente
            </h2>
            <p className="mt-2 text-slate-500 text-lg">Regula tu sistema nervioso a través del poder de tu respiración.</p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Reveal index={0}>
              <Link href="/respiracion_conciente" className="group rounded-2xl bg-white/70 backdrop-blur-sm p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:rotate-1 hover:border-teal-200 active:scale-95 flex flex-col h-full">
                <div className="animate-glow-pulse bg-teal-50 text-teal-600 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-teal-100 transition-all duration-300" style={{ '--glow-color': 'rgba(20,184,166,0.3)' }}>🍃</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors">Próposito y Teoría</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-grow">Conceptos fundamentales e importancia de respirar adecuadamente para la salud mental y física.</p>
              </Link>
            </Reveal>

            <Reveal index={1}>
              <Link href="/respiracion_conciente_auto_guiadas" className="group rounded-2xl bg-white/70 backdrop-blur-sm p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:-rotate-1 hover:border-teal-200 active:scale-95 flex flex-col h-full">
                <div className="animate-glow-pulse bg-teal-50 text-teal-600 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-teal-100 transition-all duration-300" style={{ '--glow-color': 'rgba(20,184,166,0.3)' }}>🎧</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors">Prácticas Auto Guiadas</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-grow">Herramientas interactivas para guiar tu regulación del prana vital de manera diaria.</p>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Reflexiones Section */}
        <section data-ambient-color="#f43f5e" className="space-y-8">
          <Reveal className="text-center sm:text-left border-b border-slate-100 pb-4">
            <h2 className="text-3xl font-bold text-slate-800 flex items-center justify-center sm:justify-start gap-3">
              <span className="text-4xl">🌌</span> Bienestar y Reflexiones
            </h2>
            <p className="mt-2 text-slate-500 text-lg">Alimenta tu mente con conocimiento y fortalece tu ser interior.</p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Reveal index={0}>
              <Link href="/reflexiones/cuatro_sendas_al_silencio" className="group rounded-2xl bg-white/70 backdrop-blur-sm p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:rotate-1 hover:border-rose-200 active:scale-95 flex flex-col h-full">
                <div className="animate-glow-pulse bg-rose-50 text-rose-600 w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:bg-rose-100 transition-all duration-300" style={{ '--glow-color': 'rgba(244,63,94,0.3)' }}>✍️</div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-rose-600 transition-colors">4 Sendas al Silencio</h3>
                <p className="text-slate-500 text-xs leading-relaxed flex-grow">Explora el cultivo de las cuatro moradas divinas para la paz interior.</p>
              </Link>
            </Reveal>

            <Reveal index={1}>
              <Link href="/reflexiones/el_silencio_de_un_adios" className="group rounded-2xl bg-white/70 backdrop-blur-sm p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:-rotate-1 hover:border-rose-200 active:scale-95 flex flex-col h-full">
                <div className="animate-glow-pulse bg-rose-50 text-rose-600 w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:bg-rose-100 transition-all duration-300" style={{ '--glow-color': 'rgba(244,63,94,0.3)' }}>🏠</div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-rose-600 transition-colors">El Silencio de un Adiós</h3>
                <p className="text-slate-500 text-xs leading-relaxed flex-grow">Explora las dimensiones esenciales de nuestro bienestar interior general a través del soltar.</p>
              </Link>
            </Reveal>

            <Reveal index={2}>
              <Link href="/mantras_meditacion_guiada" className="group rounded-2xl bg-white/70 backdrop-blur-sm p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:rotate-1 hover:border-rose-200 active:scale-95 flex flex-col h-full">
                <div className="animate-glow-pulse bg-rose-50 text-rose-600 w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:bg-rose-100 transition-all duration-300" style={{ '--glow-color': 'rgba(244,63,94,0.3)' }}>🎶</div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-rose-600 transition-colors">Mantras</h3>
                <p className="text-slate-500 text-xs leading-relaxed flex-grow">Cantos y sonidos curativos para elevar tu frecuencia y calmar tu mente.</p>
              </Link>
            </Reveal>

            <Reveal index={3}>
              <Link href="/salud_mental" className="group rounded-2xl bg-white/70 backdrop-blur-sm p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:-rotate-1 hover:border-rose-200 active:scale-95 flex flex-col h-full">
                <div className="animate-glow-pulse bg-rose-50 text-rose-600 w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:bg-rose-100 transition-all duration-300" style={{ '--glow-color': 'rgba(244,63,94,0.3)' }}>🧠</div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-rose-600 transition-colors">Salud Mental</h3>
                <p className="text-slate-500 text-xs leading-relaxed flex-grow">Herramientas psicológicas y autocuidado emocional para una vida plena.</p>
              </Link>
            </Reveal>

            <Reveal index={4}>
              <Link href="/luna" className="group rounded-2xl bg-white/70 backdrop-blur-sm p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:rotate-1 hover:border-rose-200 active:scale-95 flex flex-col h-full">
                <div className="animate-glow-pulse bg-rose-50 text-rose-600 w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:bg-rose-100 transition-all duration-300" style={{ '--glow-color': 'rgba(244,63,94,0.3)' }}>🌙</div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-rose-600 transition-colors">Estado de la Luna</h3>
                <p className="text-slate-500 text-xs leading-relaxed flex-grow">Consulta la fase lunar actual y su iluminación para acompañar tu práctica.</p>
              </Link>
            </Reveal>
          </div>
        </section>
      </div>
      
      {/* Footer minimal */}
      <footer className="w-full text-center pt-20 pb-4 text-slate-400 text-sm">
        <p>En el silencio del ser © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
