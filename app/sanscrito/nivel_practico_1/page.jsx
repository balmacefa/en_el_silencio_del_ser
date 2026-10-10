import SectionDivider from '../../components/SectionDivider';
import SanscritoExplorer from './SanscritoExplorer';
import { ASANAS, FAMILIES, PIECES, SANDHI, SPELLING } from './sanscritoData';
import { TONES } from '../../yoga/historia_del_yoga/tones';

export const metadata = {
  title: 'Sánscrito: nivel práctico 1 | En el silencio del ser',
  description:
    'Aprende a leer los nombres de las asanas: prefijos, sufijos y raíces del sánscrito que se repiten, para memorizar muchas posturas con pocas palabras.',
};

const card = 'rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-100 shadow-sm p-6 md:p-8 mb-8';

export default function SanscritoNivelPractico1() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10">
      <p className="text-sm uppercase tracking-[0.3em] text-indigo-500 text-center mb-3">Sánscrito · nivel práctico 1</p>
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-slate-800 drop-shadow-sm">Leer los nombres de las asanas</h1>
      <p className="text-center text-slate-600 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
        No memorices cientos de nombres: memoriza unas {Object.keys(PIECES).length} piezas. Cada nombre es un
        rompecabezas de prefijos, partes del cuerpo e imágenes que se repiten en muchas posturas.
      </p>
      <SectionDivider tone="indigo" className="my-8" />

      <section className={card}>
        <h2 className="text-2xl font-bold text-slate-800 mb-3">La fórmula</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Casi todos los nombres siguen el mismo orden:
        </p>
        <p className="text-center text-lg md:text-xl font-semibold text-slate-800 mb-4">
          <span className={`rounded-md px-2 py-1 ${TONES.indigo.tile}`}>posición</span>{' + '}
          <span className={`rounded-md px-2 py-1 ${TONES.rose.tile}`}>cuerpo / animal / objeto</span>{' + '}
          <span className={`rounded-md px-2 py-1 ${TONES.sky.tile}`}>asana</span>
        </p>
        <p className="text-slate-600 leading-relaxed">
          Por ejemplo, <strong>Adho Mukha Svanasana</strong> es <em>abajo + cara + perro + postura</em>: la postura del
          perro con la cara hacia abajo. Si te sabes <em>adho</em>, <em>mukha</em> y <em>svana</em>, ya sabes media
          docena de nombres más.
        </p>
      </section>

      <section className={card}>
        <h2 className="text-2xl font-bold text-slate-800 mb-3">Descompón un nombre</h2>
        <p className="text-slate-600 mb-5">Cada color es un tipo de pieza. Cambia de asana y fíjate qué piezas se repiten.</p>
        <SanscritoExplorer section="decomposer" />
      </section>

      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">Familias para memorizar</h2>
      <p className="text-slate-600 mb-6">Una misma pieza abre toda una familia de posturas.</p>
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        {FAMILIES.map((f) => (
          <article key={f.id} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-2">{f.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">{f.lead}</p>
            <ul className="space-y-1.5 text-sm text-slate-800">
              {f.chain.map((c) => (
                <li key={c.label}>
                  <span className="font-semibold">{c.label}</span>
                  <span className="text-slate-600"> — {c.es}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className={card}>
        <h2 className="text-2xl font-bold text-slate-800 mb-3">Glosario de piezas</h2>
        <p className="text-slate-600 mb-5">
          {ASANAS.length} asanas construidas con estas piezas. Filtra por tipo y toca una pieza para ver su familia.
        </p>
        <SanscritoExplorer section="glossary" />
      </section>

      <section className={card}>
        <h2 className="text-2xl font-bold text-slate-800 mb-3">Cuando los sonidos se funden</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Al unir palabras, el sánscrito funde las vocales de contacto (<em>sandhi</em>). No hace falta dominarlo: basta
          reconocerlo para que no te despiste.
        </p>
        <ul className="space-y-3">
          {SANDHI.map((s) => (
            <li key={s.rule} className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
              <span className="font-semibold">{s.rule}</span> · {s.example} — {s.why}
            </li>
          ))}
        </ul>
      </section>

      <section className={card}>
        <h2 className="text-2xl font-bold text-slate-800 mb-3">Ojo con la ortografía</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Estas son las palabras que más se escriben mal al transcribirlas de oído:
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {SPELLING.map((s) => (
            <li key={s.right} className="rounded-xl border border-slate-100 bg-white px-4 py-2 text-sm text-slate-700">
              <span className="line-through text-slate-500">{s.wrong}</span> → <span className="font-semibold text-slate-900">{s.right}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${card} mb-12`}>
        <h2 className="text-2xl font-bold text-slate-800 mb-3">Ponte a prueba</h2>
        <p className="text-slate-600 mb-5">Una pieza por pregunta. Al responder verás en qué asanas aparece.</p>
        <SanscritoExplorer section="quiz" />
      </section>

      <SectionDivider tone="indigo" className="mt-12" />
      <p className="text-center text-sm text-slate-500 mt-4 max-w-xl mx-auto">
        Los significados son aproximaciones prácticas; las traducciones varían entre escuelas y el sánscrito se
        transcribe con signos diacríticos que aquí se simplifican (por ejemplo, <em>vṛkṣa</em> → vrksa).
      </p>
    </div>
  );
}
