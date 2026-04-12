"use client";

import { useState } from 'react';

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
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem', fontFamily: 'serif', lineHeight: '1.8' }}>
      
      <div style={{ marginBottom: '2rem' }}>
        <p><strong>Damián,</strong></p>
        <p>He pensado tantas veces en vos desde que te fuiste. Hay cosas que no dije. Algunas por miedo. Otras por orgullo.</p>
        <p>Te escribo esta carta desde un lugar que no reconozco del todo. Una especie de casa en mi mente, o quizás en mi alma. Las paredes susurran lo que callé por años.</p>
        <p>La noche que te fuiste, dejaste el café en la mesa. Frío. Sin azúcar. Como vos.</p>
        <p>Quise correr detrás tuyo. Quise no hacerlo. Me quedé quieta. Siempre fui buena en quedarme quieta.</p>
        <p>Vos buscabas pasión. Yo buscaba hogar.<br/>Vos querías incendios. Yo apenas podía sostener una vela encendida.</p>
        <p>Te vi apagarte y no supe qué hacer. Me culpé por no saber amar como vos esperabas.<br/>Vos me amaste con urgencia. Yo te amé con miedo. Y ambos fallamos.</p>
        <p>Pero… hoy estoy aquí. Y puedo elegir cómo recordar.</p>
        <p><strong>— ¿Desde la vulnerabilidad, o desde el orgullo?</strong></p>
      </div>

      {step === 'intro' && (
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          <button onClick={() => handleChoice('vulnerabilidad')} style={{ padding: '10px 20px', border: '1px solid #ce93d8', background: '#f3e5f5', borderRadius: '4px', cursor: 'pointer' }}>
            💜 Vulnerabilidad
          </button>
          <button onClick={() => handleChoice('orgullo')} style={{ padding: '10px 20px', border: '1px solid #757575', background: '#e0e0e0', borderRadius: '4px', cursor: 'pointer' }}>
            🖤 Orgullo silencioso
          </button>
        </div>
      )}

      {(step === 'objects' || step === 'result') && (
        <div style={{ marginTop: '3rem', padding: '2rem', background: '#f5f5f5', borderRadius: '8px', whiteSpace: 'pre-wrap' }}>
          {choiceText}
        </div>
      )}

      {(step === 'objects' || step === 'result') && (
        <div style={{ marginTop: '3rem' }}>
          <p>Elisa mira la mesa. Tres objetos antiguos aparecen. Elige uno:</p>
          {step === 'objects' ? (
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => handleObject('retrato')} style={{ border: 'none', background: 'transparent', cursor: 'pointer', textAlign: 'center' }}>
                <img src="/assets/portrait.png" alt="Retrato roto" style={{ width: '80px', height: '80px', display: 'block', margin: '0 auto 10px', borderRadius: '50%', objectFit: 'cover' }} />
                Retrato roto
              </button>
              <button onClick={() => handleObject('panuelo')} style={{ border: 'none', background: 'transparent', cursor: 'pointer', textAlign: 'center' }}>
                <img src="/assets/scarf.png" alt="Pañuelo con perfume" style={{ width: '80px', height: '80px', display: 'block', margin: '0 auto 10px', borderRadius: '50%', objectFit: 'cover' }} />
                Pañuelo con perfume
              </button>
              <button onClick={() => handleObject('vela')} style={{ border: 'none', background: 'transparent', cursor: 'pointer', textAlign: 'center' }}>
                <img src="/assets/candle.png" alt="Vela encendida" style={{ width: '80px', height: '80px', display: 'block', margin: '0 auto 10px', borderRadius: '50%', objectFit: 'cover' }} />
                Vela encendida
              </button>
            </div>
          ) : (
            <div style={{ marginTop: '2rem', fontStyle: 'italic', fontSize: '1.2rem', color: '#555' }}>
              {resultText}
            </div>
          )}
        </div>
      )}

      {step === 'result' && (
        <div style={{ marginTop: '3rem', borderTop: '1px solid #ddd', paddingTop: '2rem' }}>
          <p><strong>Gracias por haber existido, Damián.</strong><br/>
          Hoy, te dejo ir con amor.</p>
          <p>— Elisa</p>
        </div>
      )}

    </div>
  );
}
