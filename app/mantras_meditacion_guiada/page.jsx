import SectionDivider from '../components/SectionDivider';

const videos = [
  {
    src: 'https://www.youtube.com/embed/sygQyrUdK_s',
    title: 'Become Dangerously Seductive - Tantric Sexuality Music',
    description: 'Reveal your primal magnetism and become a social magnet with sacred tantric vibrations. La magnetismo social y tu capacidad de atraer a otras personas está ligada al flujo de tu energía sexual.',
  },
  {
    src: 'https://www.youtube.com/embed/ojnygUNDHx8',
    title: 'Super Human Sensitive Powers',
    description: 'Escuchar con fe de que obtendrás poder sobrehumano de sensibilidad. Esta meditación te ayudará a desarrollar tus habilidades psíquicas y a abrir tu mente a nuevas posibilidades.',
  },
  {
    src: 'https://www.youtube.com/embed/ps43KwRm6pQ',
    title: 'Cuerpo poderoso',
    description: 'Mejor cuerpo, mejor salud, mejor vida.',
  },
  {
    src: 'https://www.youtube.com/embed/6VKi0StcOxI',
    title: 'Limpieza de corazón, con agua de luz',
    description: 'Love and appreciation for the erotic energy that flows through us. Esta meditación te ayuda a conectar con tu sensualidad y abrazar tus deseos internos.',
  },
  {
    src: 'https://www.youtube.com/embed/yv9E_uhl43k',
    title: 'Trance Chamánico',
    description: 'Sincroniza los hemisferios cerebrales, crea una experiencia trascendental y te conecta con tu universo interno.',
  },
  {
    src: 'https://www.youtube.com/embed/pMv-yrd_iyM',
    title: 'Samadhi por silencio respiratorio',
    description: 'Eliminar la respiración del consciente y subconsciente, para alcanzar una muerte del ego.',
  },
  {
    src: 'https://www.youtube.com/embed/djkLm3WpUOE',
    title: 'Chant of the Mystics: Divine Gregorian Chant "Kyrie eleison"',
    description: 'Esta mística melodía gregoriana ofrece un vistazo a lo que puede encontrarse en el núcleo de la espiritualidad occidental. "Kyrie eleison" significa "Señor, ten piedad".',
  },
];

export default function MantrasMeditacionGuiada() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-indigo-600 tracking-tight">
          Mantras y Meditaciones Guiadas
        </h1>
        <SectionDivider />
        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Una colección personal de mantras y meditaciones que me han acompañado en el camino. Cada una ofrece una puerta hacia la calma y el autoconocimiento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-md border border-slate-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:border-indigo-100 flex flex-col"
          >
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold text-slate-800 mb-2">{video.title}</h2>
              <p className="text-slate-500 leading-relaxed text-sm flex-grow">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
