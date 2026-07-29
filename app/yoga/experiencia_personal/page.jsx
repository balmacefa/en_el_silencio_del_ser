import SectionDivider from '../../components/SectionDivider';

export default function YogaExperienciaPersonal() {
  return (
    <>
      <header style={{ marginBottom: '2rem' }}>
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-indigo-600 tracking-tight">Yoga</h1>
        <SectionDivider className="my-5" />
        <p style={{ textAlign: 'center', color: '#555', marginBottom: '2rem' }}>
          Una colección personal de videos de Yoga de YouTube que me han
          acompañado en el camino. Cada una ofrece una puerta hacia lo místico y
          lo espiritual.
        </p>

        <div className="max-w-3xl mx-auto p-6 md:p-10 bg-white/80 backdrop-blur-md rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 relative mt-8">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-indigo-50 text-indigo-500 rounded-full p-4 shadow-sm">
            <span className="text-3xl">🧘‍♂️</span>
          </div>
          <h2 className="text-center mb-8 mt-4 text-3xl font-bold text-slate-800">
            El Poder Transformador del Yoga
          </h2>
          <div style={{ lineHeight: '1.8', color: '#444' }}>
            <p className="mb-6 leading-relaxed text-slate-600 text-lg">
              El yoga es un mecanismo profundo para mejorar la salud del
              cuerpo y equilibrar su energía. Es una metodología integral
              que fortalece músculos, desarrolla flexibilidad, mejora el
              equilibrio y armoniza la relación entre músculos
              protagonistas y antagonistas. A través de la práctica
              consciente, se afina la percepción corporal (propiocepción)
              y se despiertan capas emocionales dormidas.
            </p>
            <p>
              El yoga es una meditación en movimiento. Invita a prestar
              atención plena a la respiración, los microajustes del
              cuerpo, las sensaciones térmicas, los roces de la ropa, los
              latidos del corazón, el ritmo interno. Se observa el
              pensamiento sin aferrarse, como nubes que pasan. En cada
              asana pueden evocarse imágenes mentales: elementos de la
              naturaleza, estados emocionales o energéticos, o la
              experiencia del alma misma.
            </p>
            <p>
              Esta práctica amplía la concentración: un foco sutil,
              profundo, directo y expansivo a la vez. Con el tiempo, el
              cuerpo se sincroniza con los ciclos naturales y
              astronómicos. Uno comienza a despertarse antes del amanecer,
              las sincronicidades aumentan —como ver horas espejo—, y la
              vida se llena de éxito, amor propio, calma y claridad. La
              ansiedad y la depresión se disuelven al purificarse los
              sistemas del cuerpo.
            </p>
            <p>
              El yoga abre también las puertas de la percepción onírica.
              Se desarrollan la conciencia durante el sueño, el acceso al
              cuerpo astral y la sensibilidad para sentir las emociones
              ajenas con solo compartir espacio. Es posible identificar
              patrones de vida en otros, escuchar pensamientos colectivos
              como murmullos, prever acciones antes de que ocurran.
              Incluso, invocar personas o experiencias mediante la
              intención sostenida.
            </p>
            <p style={{ fontWeight: '600', marginTop: '1.5rem', color: '#2c3e50' }}>
              La práctica constante del yoga transforma. Nos conecta con
              lo sutil, nos regresa al presente y nos revela la vastedad
              de lo que somos.
            </p>
          </div>
          <div className="text-center mt-12">
            <a
              href="https://chatgpt.com/share/68871ea2-231c-8004-97ac-80655ac3fce5"
              className="inline-block px-6 py-3 rounded-xl font-semibold cursor-pointer border-none transition-all hover:opacity-90 hover:-translate-y-1 hover:shadow-lg bg-indigo-600 text-white shadow-md shadow-indigo-200"
            >
              Visita la conversación original con Chat GPT
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
