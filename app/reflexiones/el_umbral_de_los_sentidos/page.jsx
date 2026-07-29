import { Cormorant_Garamond } from 'next/font/google';
import SectionDivider from '../../components/SectionDivider';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'] });

export const metadata = {
  title: 'El Umbral de los Sentidos | En el silencio del ser',
  description: 'Una narración sobre la diferencia entre percibir y sentir, la ampliación de la intuición, la purificación de los sentidos y el paradigma más allá de lo lógico.',
};

export default function ElUmbralDeLosSentidos() {
  const practicas = [
    {
      icon: 'fa-volume-xmark',
      color: 'indigo',
      title: 'Silencio deliberado',
      text: 'Diez minutos sin palabras, sin música, sin pantalla. No para vaciar la mente, sino para bajar el volumen de la voz que interpreta y dejar que lo demás se escuche.',
    },
    {
      icon: 'fa-leaf',
      color: 'emerald',
      title: 'Ayuno sensorial',
      text: 'Un día sin noticias, sin scroll, sin opiniones ajenas. Lo que antes era ruido de fondo se revela como lo que siempre fue: interferencia entre vos y lo que sentís.',
    },
    {
      icon: 'fa-hand',
      color: 'amber',
      title: 'Cuerpo antes que juicio',
      text: 'Ante una decisión, preguntale primero al cuerpo: ¿se abre o se cierra?, ¿pesa o aligera? La respuesta llega antes que el argumento, y suele ser más honesta.',
    },
    {
      icon: 'fa-moon',
      color: 'rose',
      title: 'Escuchar lo simbólico',
      text: 'Sueños, coincidencias, imágenes que insisten. No hace falta descifrarlos como un jeroglífico: alcanza con anotarlos, tomarlos en serio, dejar de descartarlos por reflejo.',
    },
  ];

  const colorMap = {
    indigo: { text: 'text-indigo-600', border: 'hover:border-indigo-200' },
    emerald: { text: 'text-emerald-600', border: 'hover:border-emerald-200' },
    amber: { text: 'text-amber-500', border: 'hover:border-amber-200' },
    rose: { text: 'text-rose-500', border: 'hover:border-rose-200' },
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <div className={`max-w-3xl mx-auto px-4 py-6 md:py-10 ${cormorant.className}`}>
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-400 text-center mb-3">Una investigación silenciosa</p>
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 text-slate-800 drop-shadow-sm">
          El Umbral de los Sentidos
        </h1>
        <SectionDivider tone="indigo" className="mb-10" />

        <div className="rounded-[2rem] bg-gradient-to-b from-indigo-50/60 via-white/80 to-rose-50/40 backdrop-blur-md border border-indigo-100/70 shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-8 sm:p-12 space-y-10">

          {/* Escena inicial */}
          <div className="space-y-4 text-lg text-slate-700 leading-relaxed italic">
            <p className="not-italic font-semibold text-slate-800 text-center">
              Todo misterio empieza igual: con una pista tan pequeña que casi nadie la nota.
            </p>
            <p>
              Hay una escena del crimen en cada vida, y no tiene sangre ni cinta amarilla: es el lugar exacto,
              usualmente en la infancia, donde dejamos de sentir para empezar solo a explicar. Ahí, en ese
              cuarto sin testigos, alguien nos enseñó —sin querer, con la mejor intención— que lo que se puede
              nombrar vale más que lo que se puede notar.
            </p>
            <p>
              Desde entonces vivimos así: recolectando evidencia, armando hipótesis, cerrando el caso antes
              de haber mirado bien la habitación.
            </p>
          </div>

          <SectionDivider tone="rose" />

          {/* Percibir vs sentir */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-3 not-italic">
              <i className="fas fa-magnifying-glass text-indigo-500"></i> Percibir no es sentir
            </h2>
            <div className="text-lg text-slate-700 leading-relaxed italic space-y-4">
              <p>
                Percibir es el trabajo del detective: los ojos levantan datos, el oído registra indicios, y en
                milisegundos la mente arma el informe. <span className="not-italic font-semibold text-slate-800">Esto es una silla. Esto es frío. Esta persona sonríe.</span>{' '}
                Es un proceso veloz, útil, necesario —y también una pantalla. Entre el mundo y vos se interpone
                un archivo de palabras que ya decidió qué es lo que estás viendo antes de que termines de verlo.
              </p>
              <p>
                Sentir es otra cosa. Sentir no clasifica: resuena. Es la habitación que "pesa" antes de que
                notes por qué, la persona cuya presencia te cierra el pecho antes de que diga una sola palabra,
                el nudo en el estómago que sabe —antes que vos— que algo no está bien. Sentir no llega con
                nombre. Llega con textura.
              </p>
              <p>
                El detective toma notas. La intuición ya sabe quién fue, mucho antes de que se termine de
                reunir la evidencia. Ambos son necesarios. El problema no es tener un detective: es haber
                despedido, hace tanto tiempo, al que sentía.
              </p>
            </div>
          </div>

          <SectionDivider tone="amber" />

          {/* Estado del ser */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-3 not-italic">
              <i className="fas fa-feather text-amber-500"></i> El estado del ser
            </h2>
            <div className="text-lg text-slate-700 leading-relaxed italic space-y-4">
              <p>
                Pero hay una pregunta anterior incluso a percibir y sentir, y es la que ningún detective se
                hace: ¿quién está investigando? No lo que pasó, sino quién está ahí, despierto, notando que
                algo pasó.
              </p>
              <p>
                Eso es el estado del ser: el espacio silencioso donde ocurre toda experiencia, y que no se
                agota en ninguna de ellas. No es un pensamiento —los pensamientos pasan por él, como nubes por
                un cielo que no se mancha. No es una emoción —las emociones lo atraviesan, como el clima
                atraviesa el paisaje sin ser el paisaje. Es la quietud de fondo que hace posible que haya,
                siquiera, algo que notar.
              </p>
              <p>
                La mayoría de nosotros vivimos confundidos con nuestro propio expediente: la lista de lo que
                hicimos, lo que nos hicieron, lo que todavía falta resolver. El ser, en cambio, no es un caso
                a cerrar. Es el silencio que sostiene la sala mientras el caso se investiga.
              </p>
            </div>
          </div>

          <SectionDivider tone="teal" />

          {/* Ampliar la intuición */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-3 not-italic">
              <i className="fas fa-eye text-teal-500"></i> Ampliar la intuición, abrir los canales
            </h2>
            <div className="text-lg text-slate-700 leading-relaxed italic space-y-4">
              <p>
                La intuición no es un don reservado para unos pocos: es un músculo, y como todo músculo,
                se atrofia sin uso. Cada vez que ignoramos una corazonada porque "no era razonable", le
                enseñamos a callarse un poco más.
              </p>
              <p>
                Ampliarla no requiere magia, requiere higiene: purificar los sentidos de tanto estímulo que
                los satura. Es como sintonizar una radio —la señal siempre estuvo ahí, pero hace falta bajar
                la estática para escucharla. Menos ruido afuera, más señal adentro. Menos pantalla, más piel.
                Menos opinión ajena, más pregunta propia.
              </p>
              <p>
                Cuando los sentidos se aquietan, algo que estaba ahí todo el tiempo empieza a filtrarse: un
                saber que no pasa por el razonamiento, corrientes de percepción que la mente ocupada nunca
                tuvo tiempo de registrar. No son sentidos nuevos. Son los mismos, hechos más finos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 not-italic">
              {practicas.map((p, i) => (
                <div
                  key={i}
                  className={`p-6 border border-slate-100 rounded-2xl bg-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 ${colorMap[p.color].border}`}
                >
                  <h3 className={`text-lg font-bold mb-2 flex items-center gap-2 ${colorMap[p.color].text}`}>
                    <i className={`fas ${p.icon}`}></i> {p.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-sans">{p.text}</p>
                </div>
              ))}
            </div>
          </div>

          <SectionDivider tone="rose" />

          {/* La programación del olvido */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-3 not-italic">
              <i className="fas fa-user-secret text-rose-500"></i> La programación del olvido
            </h2>
            <div className="text-lg text-slate-700 leading-relaxed italic space-y-4">
              <p>
                Nadie decidió conscientemente apagarnos, y sin embargo se hizo, sistemáticamente, generación
                tras generación. Desde la escuela nos enseñaron a confiar solo en lo que se puede medir,
                repetir y defender con argumentos. Una corazonada se convirtió en "no seas tonta". Un saber
                del cuerpo se convirtió en "no exageres". El niño que veía demasiado aprendió, rápido, a decir
                que no veía nada.
              </p>
              <p>
                Después llegó el ruido de fondo permanente: pantallas, notificaciones, opiniones ajenas
                entrando por todos los canales a la vez. Una cultura que premia la productividad y la
                velocidad no deja tiempo para la quietud que la intuición necesita para hablar. No hace falta
                prohibir el sentir: alcanza con no dejarle espacio.
              </p>
              <p>
                El resultado es una sociedad de sentidos amputados por desuso, no por diseño. Un sexto sentido
                atrofiado como un músculo que nunca se ejercitó, en un cuerpo entrenado, en cambio, para
                reaccionar, opinar y explicar todo, todo el tiempo.
              </p>
            </div>
          </div>

          <SectionDivider tone="indigo" />

          {/* Paradigma */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-3 not-italic">
              <i className="fas fa-yin-yang text-indigo-500"></i> Del pensamiento lógico a un paradigma diverso
            </h2>
            <div className="text-lg text-slate-700 leading-relaxed italic space-y-4">
              <p>
                Lo "irracional" no es lo opuesto a la razón: es todo lo que la razón, sola, no alcanza a
                explicar. El sueño que anticipó algo. La corazonada que resultó cierta. La certeza en el
                cuerpo que llegó antes que cualquier dato. Descartar todo eso por no caber en una fórmula no
                es rigor: es una razón que se volvió sorda a la mitad de lo real.
              </p>
              <p>
                No se trata de abandonar la lógica, sino de destronarla como única autoridad. La lógica es un
                excelente detective: ordena, verifica, evita errores. Pero llega después. El primer indicio,
                el que abre el caso, casi siempre lo trae otra facultad —una que no razona, que resuena.
              </p>
              <p>
                Un paradigma más amplio deja lugar a ambas voces: la que argumenta y la que sabe sin saber por
                qué. No es elegir entre el mapa y el territorio, es dejar de confundir uno con el otro.
              </p>
            </div>
          </div>

          <SectionDivider tone="rose" />

          {/* Cierre */}
          <div className="space-y-4 text-lg text-slate-700 leading-relaxed italic">
            <p>
              El verdadero misterio nunca estuvo afuera. Era el sentido que dejamos de usar, la voz que
              bajamos de volumen para poder encajar. El caso sigue abierto, pero la evidencia siempre estuvo
              disponible: en el cuerpo, en el silencio, en lo que se siente antes de tener nombre.
            </p>
            <p className="not-italic font-semibold text-slate-800 text-center pt-2">
              Reabrí el caso. Escuchá lo que ya sabías.
            </p>
          </div>
        </div>

        <footer className="mt-12 text-center text-slate-500 text-sm font-medium not-italic">
          © 2026 Fabián Balmaceda Rescia — El Umbral de los Sentidos
        </footer>
      </div>
    </>
  );
}
