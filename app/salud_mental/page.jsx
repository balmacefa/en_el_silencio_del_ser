import SectionDivider from '../components/SectionDivider';

export default function SaludMental() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 text-center">
      <div className="rounded-[2.5rem] bg-white/70 backdrop-blur-md border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-10 sm:p-14 flex flex-col items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center text-3xl">🧠</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">Salud Mental</h1>
        <SectionDivider tone="rose" />
        <p className="text-slate-500 text-lg leading-relaxed italic">
          Este rincón todavía está tomando forma, como un pensamiento que aún busca sus palabras.
        </p>
        <p className="text-slate-400 text-sm">Vuelve pronto — el cuidado de la mente merece su propio espacio.</p>
      </div>
    </div>
  );
}
