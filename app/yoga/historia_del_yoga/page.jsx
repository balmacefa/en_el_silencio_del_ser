import SectionDivider from '../../components/SectionDivider';
import DarshanasExplorer from './DarshanasExplorer';
import ErasTimeline from './ErasTimeline';

export const metadata = {
  title: 'Historia del Yoga | En el silencio del ser',
  description:
    'Un recorrido por la historia del yoga: una de las nueve disciplinas (darshanas) de la India, el sánscrito como lengua, los Vedas, los Upanishads, la Bhagavad Gita, los Yoga Sutras y el Tantra.',
};

export default function HistoriaDelYoga() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10">
      <p className="text-sm uppercase tracking-[0.3em] text-indigo-500 text-center mb-3">Raíces de una tradición milenaria</p>
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-slate-800 drop-shadow-sm">Historia del Yoga</h1>
      <p className="text-center text-slate-600 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
        Del himno védico a la práctica moderna: cinco grandes etapas que explican de dónde viene lo que hacemos sobre la
        esterilla.
      </p>
      <SectionDivider tone="indigo" className="my-8" />

      <section className="rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-100 shadow-sm p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-3">Una de las nueve disciplinas</h2>
        <p className="text-slate-600 leading-relaxed mb-5">
          El yoga es uno de los <strong>darshanas</strong> ("puntos de vista") de la filosofía india, las nueve grandes
          disciplinas de pensamiento. Seis aceptan la autoridad de los Vedas (<em>ástika</em>) y tres no (<em>nástika</em>).
          El yoga pertenece al primer grupo y es la escuela más práctica: no solo explica la mente, da un método para
          trabajarla.
        </p>
        <DarshanasExplorer />
      </section>

      <section className="rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-100 shadow-sm p-6 md:p-8 mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-3">El sánscrito, lengua de comunicación</h2>
        <p className="text-slate-600 leading-relaxed">
          Toda esta tradición se comunicó en <strong>sánscrito</strong> (<em>saṃskṛta</em>, "perfeccionado", "bien
          formado"), la lengua en que se transmitieron los textos, la enseñanza y los mantras. Por eso los nombres de las
          posturas y los conceptos del yoga —<em>asana</em>, <em>prana</em>, <em>dhyana</em>— se conservan en sánscrito:
          cada término condensa una idea que una traducción solo aproxima.
        </p>
      </section>

      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">Cinco etapas, un solo hilo</h2>
      <p className="text-slate-600 mb-6">Toca una etapa para desplegarla; la abierta avanza y las demás retroceden.</p>
      <ErasTimeline />

      <SectionDivider tone="indigo" className="mt-12" />
      <p className="text-center text-sm text-slate-500 mt-4 max-w-xl mx-auto">
        Las fechas son aproximadas: la mayoría de estos textos se transmitieron oralmente durante siglos antes de ser
        escritos y los especialistas las discuten.
      </p>
    </div>
  );
}
