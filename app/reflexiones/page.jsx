import Link from 'next/link';
import SectionDivider from '../components/SectionDivider';

export default function ReflexionesPage() {
  const reflexiones = [
    {
      title: "4 Sendas hacia el Silencio",
      description: "Explora las cuatro moradas divinas (Metta, Karuna, Mudita y Upekkha) para cultivar una paz profunda.",
      href: "/reflexiones/cuatro_sendas_al_silencio",
      icon: "✍️",
      color: "rose"
    },
    {
      title: "El Silencio de un Adiós",
      description: "Un viaje a través de las dimensiones esenciales que componen nuestro bienestar espiritual al dejar ir.",
      href: "/reflexiones/el_silencio_de_un_adios",
      icon: "🏠",
      color: "rose"
    },
    {
      title: "El Umbral de los Sentidos",
      description: "Una narración sobre percibir y sentir, la intuición, la purificación de los sentidos y el paradigma más allá de lo lógico.",
      href: "/reflexiones/el_umbral_de_los_sentidos",
      icon: "🔮",
      color: "rose"
    },
    {
      title: "Estados de Conciencia",
      description: "Vigilia, hipnagogia, sueño vívido, sueño lúcido y viaje astral: un recorrido extenso con referencias científicas.",
      href: "/reflexiones/estados_de_conciencia",
      icon: "🌌",
      color: "rose"
    },
    {
      title: "Poesía del Ser (Próximamente)",
      description: "Palabras que brotan del silencio para acariciar el alma.",
      href: "#",
      icon: "✨",
      color: "slate",
      disabled: true
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-rose-600 tracking-tight">
          Reflexiones y Sabiduría
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Un espacio dedicado a la introspección, el pensamiento consciente y el cultivo de la paz interior a través de la palabra.
        </p>
        <SectionDivider tone="rose" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reflexiones.map((item, index) => (
          <div key={index} className={`relative group ${item.disabled ? 'opacity-70 grayscale' : ''}`}>
            <Link 
              href={item.href}
              className={`block h-full p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-slate-100 shadow-xl shadow-slate-200/40 transition-all duration-500 ${!item.disabled ? 'hover:-translate-y-2 hover:shadow-rose-100 hover:border-rose-200' : 'cursor-default'}`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform duration-500 ${!item.disabled ? 'group-hover:scale-110 group-hover:rotate-3 bg-rose-50 text-rose-600' : 'bg-slate-100 text-slate-400'}`}>
                {item.icon}
              </div>
              <h3 className={`text-2xl font-bold mb-3 transition-colors ${!item.disabled ? 'text-slate-800 group-hover:text-rose-600' : 'text-slate-500'}`}>
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {item.description}
              </p>
              
              {!item.disabled && (
                <div className="mt-6 flex items-center text-rose-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explorar ahora
                  <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
