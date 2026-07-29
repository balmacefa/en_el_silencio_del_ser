import SectionDivider from '../components/SectionDivider';

const videos = [
  { src: 'https://www.youtube.com/embed/9-4IGq-28TU?si=LUFlLxEqgVD22DxF', title: 'Nadi Shodhana Pranayama (10 min)' },
  { src: 'https://www.youtube.com/embed/52TOhE94fEg?si=qN0Pk1z09owXk2IE', title: 'How to do Kapalbhati' },
  { src: 'https://www.youtube.com/embed/WOw55qnKBSo?si=wVsrGEbAQNOjPeqL', title: 'How to do Kapalbhati Pranayama, Benefit & Precautions' },
  { src: 'https://www.youtube.com/embed/Zqbrw5FtdKg?si=AKdpM6C2WZ0o_q-t', title: 'Bhramari Pranayama' },
  { src: 'https://www.youtube.com/embed/MqCIIu57ubU?si=1NBjjQ0nvTyJld7s', title: 'How To Do DMT Breathing (Step By Step Guide)' },
  { src: 'https://www.youtube.com/embed/Vyq6dQp8FJA?si=6xGJg9CTjtJg36qk', title: 'How To Do DMT Breathing (Step By Step Guide) 2' },
  { src: 'https://www.youtube.com/embed/V210zChzO1M?si=AMWYNei5W3sg7zKb', title: '[Simple Stillness!] 2 Profound Styles of Breath' },
];

export default function RespiracionConciente() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-teal-600 tracking-tight">
          Respiración Consciente
        </h1>
        <SectionDivider tone="teal" />
        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Una selección de prácticas de pranayama para regular el sistema nervioso a través del poder de la respiración.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-md border border-slate-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:border-teal-100 flex flex-col"
          >
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h2 className="text-lg font-semibold text-slate-800">{video.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
