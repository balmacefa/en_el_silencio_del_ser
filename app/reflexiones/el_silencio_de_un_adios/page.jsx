"use client";

import { useState } from 'react';
import { Cormorant_Garamond } from 'next/font/google';
import SectionDivider from '../../components/SectionDivider';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'] });

export default function ElSilencioDeUnAdios() {
  const [step, setStep] = useState('intro'); // intro, choice, objects, result
  const [choiceText, setChoiceText] = useState('');
  const [resultText, setResultText] = useState('');

  const handleChoice = (choice) => {
    if (choice === 'vulnerabilidad') {
      setChoiceText(`Te amé, Damián. Aunque nunca supe si vos me amaste igual.
Tal vez sí, en tus propios términos. Tal vez solo sabías amar escapando.

Yo te amé con la torpeza de quien nunca aprendió a pedir cariño.
Me dolió que te fueras, pero más me dolió no haber sido yo misma mientras estabas.

Hoy te perdono. Y me perdono también.
Gracias por haberme amado como supiste.
Y por irte cuando yo aún no sabía cómo quedarme.`);
    } else {
      setChoiceText(`No eras para mí. Y yo no era para vos. Lo acepté. Pero dolió más de lo que admití.

Me costó años entender que no todo lo que arde es amor.
Te fuiste y dejaste el eco de una historia inconclusa.
Me quedé con frases a medias, con cartas sin enviar, con besos que prometían más de lo que podían cumplir.

Pero también crecí. Me reconstruí.
Y ahora, si me preguntan por vos, digo simplemente:
— "Fue alguien que pasó por mi vida."

Eso basta.`);
    }
    setStep('objects');
  };

  const handleObject = (obj) => {
    if (obj === 'retrato') {
      setResultText('"Lo nuestro fue bello… y se rompió. Está bien."');
    } else if (obj === 'panuelo') {
      setResultText('"Aún hay ternura, y no me avergüenza sentirla."');
    } else {
      setResultText('"No te guardo rencor. Solo deseo tu luz."');
    }
    setStep('result');
  };

  return (
    <div className={`max-w-2xl mx-auto px-4 py-8 ${cormorant.className}`}>
      <div className="rounded-[2rem] bg-gradient-to-b from-amber-50/70 via-white/80 to-rose-50/50 backdrop-blur-md border border-amber-100/80 shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-8 sm:p-12">
        <p className="text-sm uppercase tracking-[0.3em] text-rose-400 text-center mb-8">Una carta que nunca se envió</p>

        <div className="space-y-4 text-lg text-slate-700 leading-relaxed italic">
          <p className="not-italic font-semibold text-slate-800">Damián,</p>
          <p>He pensado tantas veces en vos desde que te fuiste. Hay cosas que no dije. Algunas por miedo. Otras por orgullo.</p>
          <p>Te escribo esta carta desde un lugar que no reconozco del todo. Una especie de casa en mi mente, o quizás en mi alma. Las paredes susurran lo que callé por años.</p>
          <p>La noche que te fuiste, dejaste el café en la mesa. Frío. Sin azúcar. Como vos.</p>
          <p>Quise correr detrás tuyo. Quise no hacerlo. Me quedé quieta. Siempre fui buena en quedarme quieta.</p>
          <p>Vos buscabas pasión. Yo buscaba hogar.<br />Vos querías incendios. Yo apenas podía sostener una vela encendida.</p>
          <p>Te vi apagarte y no supe qué hacer. Me culpé por no saber amar como vos esperabas.<br />Vos me amaste con urgencia. Yo te amé con miedo. Y ambos fallamos.</p>
          <p>Pero… hoy estoy aquí. Y puedo elegir cómo recordar.</p>
          <p className="not-italic font-semibold text-slate-800 text-center pt-2">¿Desde la vulnerabilidad, o desde el orgullo?</p>
        </div>

        {step === 'intro' && (
          <div className="flex justify-center gap-4 mt-10 flex-wrap">
            <button
              onClick={() => handleChoice('vulnerabilidad')}
              className="px-6 py-3 rounded-full font-medium not-italic border border-purple-200 bg-purple-50 text-purple-700 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:bg-purple-100"
            >
              💜 Vulnerabilidad
            </button>
            <button
              onClick={() => handleChoice('orgullo')}
              className="px-6 py-3 rounded-full font-medium not-italic border border-slate-300 bg-slate-100 text-slate-700 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:bg-slate-200"
            >
              🖤 Orgullo silencioso
            </button>
          </div>
        )}

        {(step === 'objects' || step === 'result') && (
          <>
            <SectionDivider tone="rose" className="my-10" />
            <div className="rounded-2xl bg-white/70 border border-amber-100/70 p-8 whitespace-pre-wrap text-slate-700 leading-relaxed italic text-lg">
              {choiceText}
            </div>
          </>
        )}

        {(step === 'objects' || step === 'result') && (
          <div className="mt-10">
            <p className="text-center not-italic text-slate-600 mb-6">Elisa mira la mesa. Tres objetos antiguos aparecen. Elige uno:</p>
            {step === 'objects' ? (
              <div className="flex justify-center gap-8 flex-wrap">
                <button onClick={() => handleObject('retrato')} className="group flex flex-col items-center gap-3 not-italic">
                  <img src="/assets/portrait.png" alt="Retrato roto" className="w-20 h-20 rounded-full object-cover shadow-md transition-transform group-hover:scale-110" />
                  <span className="text-sm text-slate-600">Retrato roto</span>
                </button>
                <button onClick={() => handleObject('panuelo')} className="group flex flex-col items-center gap-3 not-italic">
                  <img src="/assets/scarf.png" alt="Pañuelo con perfume" className="w-20 h-20 rounded-full object-cover shadow-md transition-transform group-hover:scale-110" />
                  <span className="text-sm text-slate-600">Pañuelo con perfume</span>
                </button>
                <button onClick={() => handleObject('vela')} className="group flex flex-col items-center gap-3 not-italic">
                  <img src="/assets/candle.png" alt="Vela encendida" className="w-20 h-20 rounded-full object-cover shadow-md transition-transform group-hover:scale-110" />
                  <span className="text-sm text-slate-600">Vela encendida</span>
                </button>
              </div>
            ) : (
              <div className="mt-8 text-center text-2xl italic text-rose-700">{resultText}</div>
            )}
          </div>
        )}

        {step === 'result' && (
          <div className="mt-10 pt-8 border-t border-amber-100 text-center">
            <p className="not-italic font-semibold text-slate-800">Gracias por haber existido, Damián.</p>
            <p className="italic text-slate-600 mt-1">Hoy, te dejo ir con amor.</p>
            <p className="mt-3 text-slate-500">— Elisa</p>
          </div>
        )}
      </div>
    </div>
  );
}
