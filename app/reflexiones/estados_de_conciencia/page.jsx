import { Cormorant_Garamond } from 'next/font/google';
import SectionDivider from '../../components/SectionDivider';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'] });

export const metadata = {
  title: 'Estados de Conciencia: Vigilia, Hipnagogia, Sueño Vívido, Sueño Lúcido y Viaje Astral | En el silencio del ser',
  description:
    'Un recorrido extenso por los umbrales de la conciencia: vigilia, hipnagogia, sueño vívido, sueño lúcido y experiencia extracorpórea (viaje astral), con fundamento en la literatura científica y contemplativa, y referencias en formato APA.',
};

const TOC = [
  { href: '#vigilia', label: 'I. Vigilia' },
  { href: '#hipnagogia', label: 'II. Hipnagogia' },
  { href: '#sueno-vivido', label: 'III. Sueño Vívido' },
  { href: '#sueno-lucido', label: 'IV. Sueño Lúcido' },
  { href: '#viaje-astral', label: 'V. Viaje Astral' },
  { href: '#continuo', label: 'El Continuo' },
  { href: '#practicas', label: 'Prácticas' },
  { href: '#referencias', label: 'Referencias' },
];

const THEME = {
  amber: { text: 'text-amber-600', chip: 'bg-amber-50 text-amber-700 border-amber-200', border: 'border-amber-100', divider: 'amber' },
  violet: { text: 'text-violet-600', chip: 'bg-violet-50 text-violet-700 border-violet-200', border: 'border-violet-100', divider: 'indigo' },
  indigo: { text: 'text-indigo-600', chip: 'bg-indigo-50 text-indigo-700 border-indigo-200', border: 'border-indigo-100', divider: 'indigo' },
  cyan: { text: 'text-cyan-600', chip: 'bg-cyan-50 text-cyan-700 border-cyan-200', border: 'border-cyan-100', divider: 'teal' },
  fuchsia: { text: 'text-fuchsia-600', chip: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200', border: 'border-fuchsia-100', divider: 'rose' },
};

function StateHeader({ id, roman, icon, title, subtitle, color }) {
  const theme = THEME[color];
  return (
    <div className="mb-5 scroll-mt-24" id={id}>
      <span className={`inline-block text-[11px] font-bold uppercase tracking-wide rounded-full px-3 py-1 border ${theme.chip} mb-3 not-italic`}>
        {roman}
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-3 not-italic">
        <span className="text-3xl">{icon}</span> {title}
      </h2>
      <p className={`mt-1 text-sm md:text-base font-semibold ${theme.text} not-italic`}>{subtitle}</p>
    </div>
  );
}

function Ref({ children }) {
  return <p className="text-slate-600 text-sm leading-relaxed pl-8 -indent-8 not-italic">{children}</p>;
}

export default function EstadosDeConciencia() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <div className={`max-w-3xl mx-auto px-4 py-6 md:py-10 ${cormorant.className}`}>
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-400 text-center mb-3">Cinco umbrales de una misma conciencia</p>
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-slate-800 drop-shadow-sm">
          Vigilia, Hipnagogia, Sueño Vívido,<br className="hidden sm:block" /> Sueño Lúcido y Viaje Astral
        </h1>
        <p className="text-center text-slate-500 max-w-2xl mx-auto leading-relaxed text-base md:text-lg not-italic">
          Un recorrido extenso —entre la tradición contemplativa y la ciencia del sueño— por los estados sucesivos de
          conciencia que atravesamos cada noche, casi siempre sin testigos.
        </p>
        <SectionDivider tone="indigo" className="my-8" />

        {/* Tabla de contenidos */}
        <nav className="not-italic rounded-2xl bg-white/70 border border-slate-100 shadow-sm p-5 sm:p-6 mb-12" aria-label="Índice">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-3">Índice</p>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2 text-sm">
            {TOC.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-slate-600 hover:text-indigo-600 transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Intro */}
        <div className="text-lg text-slate-700 leading-relaxed italic space-y-4 mb-14">
          <p>
            Cada veinticuatro horas, sin excepción y casi siempre sin darnos cuenta, atravesamos varios países de la
            conciencia. Salimos de la vigilia ordinaria, cruzamos un vestíbulo de imágenes sueltas que ya no controlamos
            del todo, entramos en la oscuridad narrativa del sueño y —a veces— despertamos dentro de él sin dejar de
            dormir. Unos pocos, además, describen haber sentido que salían de su propio cuerpo. La tradición llama a esto
            "viaje astral"; la ciencia del sueño lo estudia bajo el nombre de experiencia extracorpórea.
          </p>
          <p>
            Este texto no elige un solo bando. Recorre los cinco estados con el respeto que merece la experiencia
            subjetiva y con el rigor que merece la evidencia disponible, citando en cada tramo a quienes los
            investigaron. Al final vas a encontrar la lista completa de referencias en formato APA, con enlace a la
            fuente original.
          </p>
        </div>

        <div className="space-y-16">
          {/* I. VIGILIA */}
          <section className="rounded-[2rem] bg-gradient-to-b from-amber-50/60 via-white/80 to-white/60 border border-amber-100/70 shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-7 sm:p-10">
            <StateHeader id="vigilia" roman="Estado I" icon="☀️" title="Vigilia" subtitle="El estado que damos por descontado" color="amber" />
            <div className="text-lg text-slate-700 leading-relaxed not-italic space-y-4">
              <p>
                La vigilia es la línea base contra la que medimos todos los demás estados: aquel en el que hay un "yo"
                despierto, orientado en tiempo y espacio, capaz de dirigir voluntariamente la atención y de distinguir
                con razonable certeza el mundo exterior del interior. Fisiológicamente se define por un electroencefalograma
                (EEG) de bajo voltaje y frecuencia mixta, tono muscular activo y capacidad de respuesta inmediata a
                estímulos —el estado de referencia que el <em>Manual de puntuación del sueño</em> de la Academia Americana
                de Medicina del Sueño usa como punto cero de toda la arquitectura del dormir (American Academy of Sleep
                Medicine, 2023).
              </p>
              <p>
                Pero la vigilia no es homogénea ni un simple "encendido/apagado". El psicólogo Charles Tart, uno de los
                primeros en tratar la conciencia despierta como un estado más entre otros —y no como el único real—,
                propuso pensar en "estados discretos de conciencia": configuraciones estables de percepción, memoria,
                emoción y sentido del yo que pueden variar notablemente incluso dentro de la vigilia (Tart, 1975). No es
                lo mismo la vigilia alerta de una tarea que exige precisión, que la vigilia relajada de una caminata sin
                rumbo, que la vigilia saturada de un mediodía de exceso sensorial. Todas cuentan como "estar despierto",
                y sin embargo la calidad de la experiencia —lo que se nota, lo que se deja pasar— cambia enormemente.
              </p>
              <p>
                Esa variabilidad importa porque la vigilia es también un límite: el borde a partir del cual algo cede.
                Cuando la atención voluntaria se relaja, cuando el cuerpo se acomoda y el mundo exterior deja de exigir
                respuesta inmediata, la vigilia no se apaga de golpe. Se afloja. Y en ese aflojamiento empieza el
                siguiente estado.
              </p>
            </div>
          </section>

          {/* II. HIPNAGOGIA */}
          <section className="rounded-[2rem] bg-gradient-to-b from-violet-50/60 via-white/80 to-white/60 border border-violet-100/70 shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-7 sm:p-10">
            <StateHeader id="hipnagogia" roman="Estado II" icon="🌗" title="Hipnagogia" subtitle="El vestíbulo entre estar despierto y dormir" color="violet" />
            <div className="text-lg text-slate-700 leading-relaxed not-italic space-y-4">
              <p>
                El término "hipnagogia" —del griego <em>hypnos</em> (sueño) y <em>agogos</em> (que conduce hacia)— nombra
                la transición del estado de vigilia al sueño: ese lapso, de minutos u ocasionalmente más, en el que la
                mente sigue relativamente activa mientras el cuerpo empieza a ceder. El psicólogo Daniel Schacter la
                describió, en la primera gran revisión científica del fenómeno, como un estado "sui géneris" con su
                propia fenomenología, distinta tanto de la vigilia como del sueño profundo (Schacter, 1976).
              </p>
              <p>
                Lo característico de la hipnagogia es la irrupción de imágenes que no fueron llamadas: destellos de
                color, rostros que se forman y deshacen, paisajes fragmentarios, frases oídas con total claridad que no
                fueron pronunciadas por nadie, la sensación de caer (el llamado <em>mioclono hípnico</em>) que a veces
                sobresalta de vuelta a la vigilia. A diferencia del sueño, aquí suele conservarse cierto grado de
                observación: la persona puede notar que está teniendo estas imágenes, incluso maravillarse de ellas,
                sin perder del todo el hilo de sí misma. El investigador Andreas Mavromatis, autor de la obra de
                referencia sobre el tema, sostuvo que la hipnagogia no es solamente un tránsito sino un estado con
                entidad propia, potencialmente vinculado a fenómenos de creatividad, introspección profunda y a lo que
                distintas tradiciones llamaron percepción "sutil" (Mavromatis, 1987).
              </p>
              <p>
                Numerosos artistas y científicos documentaron haber usado deliberadamente este umbral: Thomas Edison y
                Salvador Dalí son citados con frecuencia por la técnica de dormitar sosteniendo un objeto metálico sobre
                un plato, de modo que el ruido de su caída —en el instante exacto en que el cuerpo se relaja lo
                suficiente para soltarlo— los devolviera a la vigilia con la imagen hipnagógica todavía fresca. Es,
                literalmente, pescar en la orilla entre dos aguas.
              </p>
              <p>
                Cuando este umbral se prolonga o se cruza sin la fluidez habitual —por ejemplo, si el cuerpo entra en la
                atonía muscular propia del sueño REM antes de que la conciencia termine de apagarse— puede aparecer la
                parálisis del sueño: la persona se sabe despierta pero no puede moverse, a menudo acompañada de
                sensaciones de presencia amenazante en la habitación. Cheyne (2003) documentó con detalle esta tríada de
                alucinaciones —intrusos, opresión física y sensaciones vestibulares-motoras— como parte de la misma
                familia de fenómenos hipnagógicos (e hipnopómpicos, su equivalente al despertar).
              </p>
            </div>
          </section>

          {/* III. SUEÑO VIVIDO */}
          <section className="rounded-[2rem] bg-gradient-to-b from-indigo-50/60 via-white/80 to-white/60 border border-indigo-100/70 shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-7 sm:p-10">
            <StateHeader id="sueno-vivido" roman="Estado III" icon="🌌" title="Sueño Vívido" subtitle="La narrativa completa, sin autor consciente" color="indigo" />
            <div className="text-lg text-slate-700 leading-relaxed not-italic space-y-4">
              <p>
                Superada la hipnagogia, la conciencia no se apaga: cambia de régimen. El sueño ordinario —especialmente
                el que ocurre durante el sueño REM (<em>rapid eye movement</em>)— produce una experiencia tan sensorialmente
                rica, tan coherente en su propia lógica interna y tan cargada de emoción que suele ser indistinguible de
                la realidad mientras ocurre. A esto lo llamamos aquí "sueño vívido": no un tipo especial de sueño, sino
                el sueño en su forma más plena, inmersiva, la que se recuerda con detalle al despertar.
              </p>
              <p>
                El neurocientífico J. Allan Hobson dedicó buena parte de su carrera a explicar por qué el cerebro dormido
                genera mundos tan convincentes. En su modelo AIM —Activación, fuente de la Información y Modulación
                química— describió al cerebro en REM como un sistema tan activado como en la vigilia, pero desconectado
                de la entrada sensorial externa y del control voluntario del movimiento, y modulado por una química
                distinta (más acetilcolina, menos serotonina y noradrenalina), lo que produce narrativas intensas,
                bizarras y con escasa capacidad crítica sobre su propia rareza (Hobson, Pace-Schott, & Stickgold, 2000).
                Más adelante propuso la "teoría de la protoconciencia": la hipótesis de que el sueño REM construye y
                mantiene, noche tras noche, el mismo tipo de modelo virtual del mundo que sostiene la conciencia despierta,
                funcionando como un ensayo general para la vigilia (Hobson, 2009).
              </p>
              <p>
                Desde la filosofía de la mente, Jennifer Windt propuso pensar el soñar no como una experiencia "menos
                real" que la vigilia sino como una simulación inmersiva del yo y del mundo con reglas fenomenológicas
                propias, que merece un marco conceptual tan riguroso como el que aplicamos a la percepción despierta
                (Windt, 2015). Esa perspectiva importa porque cambia la pregunta: no "por qué el sueño es tan poco
                confiable", sino "qué tipo distinto de experiencia consciente es".
              </p>
              <p>
                Lo notable del sueño vívido es precisamente lo que falta: no hay, salvo excepciones, un observador que
                recuerde que está soñando. La narrativa se vive desde adentro, con total convicción, sin la distancia
                crítica que en la vigilia damos por sentada. Esa ausencia es exactamente lo que distingue al siguiente
                estado.
              </p>
            </div>
          </section>

          {/* IV. SUEÑO LÚCIDO */}
          <section className="rounded-[2rem] bg-gradient-to-b from-cyan-50/60 via-white/80 to-white/60 border border-cyan-100/70 shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-7 sm:p-10">
            <StateHeader id="sueno-lucido" roman="Estado IV" icon="💡" title="Sueño Lúcido" subtitle="Saber que se sueña, sin dejar de soñar" color="cyan" />
            <div className="text-lg text-slate-700 leading-relaxed not-italic space-y-4">
              <p>
                El sueño lúcido es el momento en que, en medio de la narrativa onírica, surge un pensamiento que la
                atraviesa como un rayo: <em>esto es un sueño</em>. La persona sigue dormida, el entorno onírico sigue
                activo, pero ahora hay memoria autobiográfica, capacidad de reflexión y —en muchos casos— cierto grado de
                decisión voluntaria sobre lo que ocurre a continuación.
              </p>
              <p>
                Durante buena parte del siglo XX el fenómeno fue tratado con escepticismo por la ciencia formal, en
                parte porque la única evidencia disponible era el reporte verbal posterior, inevitablemente filtrado por
                la memoria. Eso cambió en 1981, cuando Stephen LaBerge y su equipo en la Universidad de Stanford
                idearon un protocolo elegante: dado que los movimientos oculares durante el sueño REM se corresponden
                con la dirección de la mirada dentro del sueño, y que ciertos músculos oculares no están completamente
                paralizados por la atonía del REM, pidieron a soñadores entrenados que, al notarse lúcidos, movieran los
                ojos en un patrón preacordado (por ejemplo, izquierda-derecha-izquierda-derecha). El patrón apareció,
                nítido, en el polisomnógrafo, exactamente durante REM confirmado —la primera verificación fisiológica
                objetiva de que la lucidez ocurre dentro del sueño y no es un falso recuerdo al despertar (LaBerge, Nagel,
                Dement, & Zarcone, 1981).
              </p>
              <p>
                Investigaciones posteriores describieron el sueño lúcido como un estado "híbrido": comparte con el
                sueño REM ordinario la vivacidad sensorial y la desconexión motora, pero se acerca a la vigilia en
                funciones asociadas a la corteza prefrontal, como la metacognición y el autocontrol. Con electroencefalografía,
                Voss, Holzmann, Tuin y Hobson (2009) encontraron un aumento específico de actividad en la banda de
                frecuencia gamma (alrededor de 40 Hz) en regiones frontales y frontotemporales durante los episodios
                lúcidos, en comparación con el sueño REM no lúcido —un patrón que, según los autores, sitúa la lucidez
                en un punto intermedio y particular del continuo entre dormir y estar despierto.
              </p>
              <p>
                Las técnicas más estudiadas para inducirlo incluyen las comprobaciones de realidad repetidas durante el
                día (preguntarse deliberadamente "¿estoy despierto?" y verificarlo), la técnica MILD (inducción mnemónica
                del sueño lúcido, que combina intención y repetición de una frase antes de dormir) y el método WBTB
                (<em>wake-back-to-bed</em>: despertar tras varias horas de sueño, permanecer despierto brevemente y
                volver a dormir con la intención explícita de reconocer el sueño), ambos descritos y sistematizados por
                LaBerge en su trabajo de divulgación posterior (LaBerge, citado en Voss et al., 2009; ver también
                referencias generales de Hobson et al., 2000).
              </p>
            </div>
          </section>

          {/* V. VIAJE ASTRAL */}
          <section className="rounded-[2rem] bg-gradient-to-b from-fuchsia-50/60 via-white/80 to-white/60 border border-fuchsia-100/70 shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-7 sm:p-10">
            <StateHeader id="viaje-astral" roman="Estado V" icon="🌠" title="Viaje Astral" subtitle="La experiencia de salir del propio cuerpo" color="fuchsia" />
            <div className="text-lg text-slate-700 leading-relaxed not-italic space-y-4">
              <p>
                Con distintos nombres —proyección astral, viaje astral, salida extracorpórea, <em>out-of-body experience</em>
                (OBE)—, muchas tradiciones y muchas personas sin ninguna tradición particular describen un mismo núcleo
                de experiencia: la sensación vívida de que la conciencia, o un "cuerpo sutil", se separa del cuerpo
                físico y percibe el entorno —o entornos no físicos— desde un punto de vista externo a él. En la
                literatura teosófica y esotérica del siglo XIX y XX se lo describió como el desplazamiento de un
                "cuerpo astral" a través de planos de existencia sutiles; en la investigación psicológica contemporánea
                se lo estudia como una alteración específica de la representación del propio cuerpo, sin que ambas
                lecturas sean necesariamente excluyentes en la experiencia de quien la vive.
              </p>
              <p>
                Carlos Alvarado, en una extensa revisión del tema para la Asociación Americana de Psicología, describió
                a la OBE como una experiencia relativamente frecuente en la población general —los estudios que revisó
                reportan prevalencias de entre un 10% y un 25% de personas que dicen haberla vivido al menos una vez—,
                típicamente breve, asociada con frecuencia a estados de relajación profunda, fatiga extrema, momentos
                cercanos al sueño (hipnagógicos e hipnopómpicos) o situaciones de estrés fisiológico agudo, aunque
                también se reporta de forma espontánea en plena vigilia (Alvarado, 2000).
              </p>
              <p>
                Desde la neurociencia, Olaf Blanke y Shahar Arzy propusieron una explicación anclada en la unión
                témporo-parietal, una región cortical donde se integra información vestibular, propioceptiva y visual
                para construir la sensación ordinaria de "estar dentro" del propio cuerpo. Cuando esta integración se
                altera —ya sea por estimulación eléctrica directa, por daño cerebral focal o, se hipotetiza, por estados
                fisiológicos inusuales durante la transición sueño-vigilia—, puede producirse una desconexión entre el
                punto de vista visual y la localización percibida del cuerpo, generando la sensación de observarse desde
                afuera (Blanke & Arzy, 2005).
              </p>
              <p>
                La psicóloga Susan Blackmore, que investigó el fenómeno durante años tanto desde la simpatía inicial por
                una explicación paranormal como desde una revisión posterior más escéptica, propuso que la experiencia
                extracorpórea podría entenderse como un modelo mental alternativo de "dónde estoy", construido por el
                cerebro cuando la información sensorial ordinaria se reduce o se vuelve contradictoria —una especie de
                simulación de emergencia que, igual que un sueño vívido, se siente completamente real desde adentro
                (Blackmore, 1982). Es notable que muchos relatos de viaje astral describan un umbral hipnagógico previo
                —vibraciones, zumbidos, la sensación de parálisis— antes del desprendimiento percibido, lo que sugiere
                una posible continuidad fenomenológica con los estados II y IV de este mismo recorrido, más que un
                fenómeno completamente aislado.
              </p>
              <p>
                Sea cual sea el marco que cada quien prefiera para interpretarla —viaje real del alma, simulación
                neurocognitiva, o ambas cosas sin contradicción—, la experiencia extracorpórea comparte con el resto de
                los estados de este recorrido un mismo hilo conductor: la sensación de "yo" no está tan firmemente
                anclada al cuerpo despierto y ordinario como solemos asumir.
              </p>
            </div>
          </section>
        </div>

        <SectionDivider tone="rose" className="my-14" />

        {/* EL CONTINUO */}
        <section id="continuo" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3 not-italic">
            <i className="fas fa-circle-nodes text-slate-500"></i> El continuo, no la escalera
          </h2>
          <div className="text-lg text-slate-700 leading-relaxed italic space-y-4">
            <p>
              Es tentador ordenar estos cinco estados como una escalera: primero la vigilia, después la hipnagogia,
              luego el sueño, después —para quien lo entrena— la lucidez, y en el escalón más alto o más raro, la
              experiencia extracorpórea. Pero la evidencia fenomenológica sugiere algo menos lineal: más que una
              escalera, un continuo con zonas de superposición. La parálisis del sueño puede aparecer al entrar o al
              salir del dormir. Las imágenes hipnagógicas reaparecen, casi idénticas, en la transición hipnopómpica del
              despertar. Muchos relatos de viaje astral comienzan con la misma parálisis y las mismas vibraciones que
              describió Cheyne (2003) para la hipnagogia. Y la lucidez, lejos de ser un quinto estado aislado, es lo que
              ocurre cuando la vigilia —su capacidad de notar, recordar y decidir— se filtra dentro del sueño vívido sin
              interrumpirlo.
            </p>
            <p>
              Visto así, la pregunta que atraviesa todo el recorrido no es "cuál de estos estados es el real", sino algo
              más simple y más útil: cuánta conciencia —cuánta capacidad de notar— es posible sostener mientras el
              sustrato cambia debajo de ella. Esa es, quizás, la única habilidad que de verdad se entrena.
            </p>
          </div>
        </section>

        {/* PRACTICAS */}
        <section id="practicas" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3 not-italic">
            <i className="fas fa-seedling text-emerald-600"></i> Explorar estos umbrales con cuidado
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 not-italic">
            <div className="p-6 border border-slate-100 rounded-2xl bg-white/80 shadow-sm">
              <h3 className="text-lg font-bold text-amber-600 mb-2 flex items-center gap-2"><i className="fas fa-bed"></i> Higiene del sueño</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                Todo lo demás depende de esto: horarios estables, oscuridad, y suficientes horas de sueño. Un sistema
                privado de descanso no tiene margen para explorar sus umbrales (American Academy of Sleep Medicine, 2023).
              </p>
            </div>
            <div className="p-6 border border-slate-100 rounded-2xl bg-white/80 shadow-sm">
              <h3 className="text-lg font-bold text-violet-600 mb-2 flex items-center gap-2"><i className="fas fa-feather-pointed"></i> Diario hipnagógico</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                Anotar, al dormitar y al despertar, las imágenes o frases que aparecen sin ser llamadas. Con el tiempo
                se vuelve más fácil notarlas sin despertar del todo (Mavromatis, 1987).
              </p>
            </div>
            <div className="p-6 border border-slate-100 rounded-2xl bg-white/80 shadow-sm">
              <h3 className="text-lg font-bold text-cyan-600 mb-2 flex items-center gap-2"><i className="fas fa-magnifying-glass"></i> Comprobaciones de realidad</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                Preguntarse varias veces al día "¿estoy soñando?" y verificarlo genuinamente. El hábito diurno tiende a
                trasladarse al sueño y a disparar la lucidez (LaBerge et al., 1981).
              </p>
            </div>
            <div className="p-6 border border-slate-100 rounded-2xl bg-white/80 shadow-sm">
              <h3 className="text-lg font-bold text-fuchsia-600 mb-2 flex items-center gap-2"><i className="fas fa-om"></i> Relajación consciente profunda</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                Prácticas de relajación con el cuerpo inmóvil y la atención despierta (yoga nidra, escaneo corporal)
                cultivan justamente el filo entre dormir y notar que se sueña (Tart, 1975).
              </p>
            </div>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mt-6 not-italic italic">
            Una nota de cuidado: la parálisis del sueño y las experiencias extracorpóreas espontáneas pueden ser
            intensas o perturbadoras la primera vez. Saber que son fenómenos descritos y estudiados —no señales de
            peligro— suele ser, en sí mismo, el primer paso para atravesarlos con calma (Cheyne, 2003).
          </p>
        </section>

        <SectionDivider tone="indigo" className="mb-16" />

        {/* REFERENCIAS */}
        <section id="referencias" className="scroll-mt-24 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3 not-italic">
            <i className="fas fa-book text-slate-500"></i> Referencias (APA 7.ª ed.)
          </h2>
          <div className="space-y-4 not-italic">
            <Ref>
              Alvarado, C. S. (2000). Out-of-body experiences. In E. Cardeña, S. J. Lynn, &amp; S. Krippner (Eds.),{' '}
              <em>Varieties of anomalous experience: Examining the scientific evidence</em> (pp. 183–218). American
              Psychological Association.{' '}
              <a href="https://doi.org/10.1037/10371-006" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline hover:text-indigo-700">
                https://doi.org/10.1037/10371-006
              </a>
            </Ref>
            <Ref>
              American Academy of Sleep Medicine. (2023). <em>The AASM manual for the scoring of sleep and associated
              events: Rules, terminology and technical specifications</em> (Version 3.0).{' '}
              <a href="https://aasm.org/clinical-resources/scoring-manual/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline hover:text-indigo-700">
                https://aasm.org/clinical-resources/scoring-manual/
              </a>
            </Ref>
            <Ref>
              Blackmore, S. J. (1982). <em>Beyond the body: An investigation of out-of-the-body experiences</em>. Heinemann.
            </Ref>
            <Ref>
              Blanke, O., &amp; Arzy, S. (2005). The out-of-body experience: Disturbed self-processing at the
              temporo-parietal junction. <em>The Neuroscientist, 11</em>(1), 16–24.{' '}
              <a href="https://doi.org/10.1177/1073858404270885" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline hover:text-indigo-700">
                https://doi.org/10.1177/1073858404270885
              </a>
            </Ref>
            <Ref>
              Cheyne, J. A. (2003). Sleep paralysis and the structure of waking-nightmare hallucinations.{' '}
              <em>Dreaming, 13</em>(3), 163–179.{' '}
              <a href="https://doi.org/10.1023/A:1025373412722" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline hover:text-indigo-700">
                https://doi.org/10.1023/A:1025373412722
              </a>
            </Ref>
            <Ref>
              Hobson, J. A. (2009). REM sleep and dreaming: Towards a theory of protoconsciousness.{' '}
              <em>Nature Reviews Neuroscience, 10</em>(11), 803–813.{' '}
              <a href="https://doi.org/10.1038/nrn2716" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline hover:text-indigo-700">
                https://doi.org/10.1038/nrn2716
              </a>
            </Ref>
            <Ref>
              Hobson, J. A., Pace-Schott, E. F., &amp; Stickgold, R. (2000). Dreaming and the brain: Toward a cognitive
              neuroscience of conscious states. <em>Behavioral and Brain Sciences, 23</em>(6), 793–842.{' '}
              <a href="https://doi.org/10.1017/S0140525X00003976" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline hover:text-indigo-700">
                https://doi.org/10.1017/S0140525X00003976
              </a>
            </Ref>
            <Ref>
              LaBerge, S., Nagel, L. E., Dement, W. C., &amp; Zarcone, V. P., Jr. (1981). Lucid dreaming verified by
              volitional communication during REM sleep. <em>Perceptual and Motor Skills, 52</em>(3), 727–732.{' '}
              <a href="https://doi.org/10.2466/pms.1981.52.3.727" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline hover:text-indigo-700">
                https://doi.org/10.2466/pms.1981.52.3.727
              </a>
            </Ref>
            <Ref>
              Mavromatis, A. (1987). <em>Hypnagogia: The unique state of consciousness between wakefulness and sleep</em>.
              Routledge &amp; Kegan Paul.
            </Ref>
            <Ref>
              Schacter, D. L. (1976). The hypnagogic state: A critical review of the literature.{' '}
              <em>Psychological Bulletin, 83</em>(3), 452–481.{' '}
              <a href="https://doi.org/10.1037/0033-2909.83.3.452" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline hover:text-indigo-700">
                https://doi.org/10.1037/0033-2909.83.3.452
              </a>
            </Ref>
            <Ref>
              Tart, C. T. (1975). <em>States of consciousness</em>. E. P. Dutton.
            </Ref>
            <Ref>
              Voss, U., Holzmann, R., Tuin, I., &amp; Hobson, J. A. (2009). Lucid dreaming: A state of consciousness
              with features of both waking and non-lucid dreaming. <em>Sleep, 32</em>(9), 1191–1200.{' '}
              <a href="https://doi.org/10.1093/sleep/32.9.1191" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline hover:text-indigo-700">
                https://doi.org/10.1093/sleep/32.9.1191
              </a>
            </Ref>
            <Ref>
              Windt, J. M. (2015). <em>Dreaming: A conceptual framework for philosophy of mind and empirical research</em>.
              MIT Press.{' '}
              <a href="https://doi.org/10.7551/mitpress/9780262028677.001.0001" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline hover:text-indigo-700">
                https://doi.org/10.7551/mitpress/9780262028677.001.0001
              </a>
            </Ref>
          </div>
        </section>

        <footer className="mt-14 text-center text-slate-500 text-sm font-medium not-italic">
          © 2026 Fabián Balmaceda Rescia — Estados de Conciencia
        </footer>
      </div>
    </>
  );
}
