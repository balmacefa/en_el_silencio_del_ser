// Sánscrito práctico, nivel 1: los nombres de las asanas son palabras compuestas.
// Cada nombre = [prefijos de posición/número] + [cuerpo / animal / objeto] + "asana".

export const CATS = {
  base: { label: 'Raíz', desc: 'La palabra que cierra casi todos los nombres', color: 'sky' },
  dir: { label: 'Posición y dirección', desc: 'Prefijos: dónde está el cuerpo o cómo se coloca', color: 'indigo' },
  action: { label: 'Acción', desc: 'Lo que hace el cuerpo: estirar, girar, cerrar', color: 'violet' },
  num: { label: 'Números', desc: 'Cuántas piernas, ramas o miembros', color: 'amber' },
  body: { label: 'Cuerpo', desc: 'Partes del cuerpo que protagonizan la postura', color: 'rose' },
  nature: { label: 'Animales y objetos', desc: 'La imagen que la postura imita', color: 'emerald' },
  form: { label: 'Forma', desc: 'Geometría de la postura', color: 'teal' },
};

// id → pieza. `sa` es la forma de diccionario; en el nombre puede aparecer recortada.
export const PIECES = {
  asana: { sa: 'asana', es: 'postura (lit. "asiento")', cat: 'base', hint: 'Casi todos los nombres terminan en -asana: si lo ves al final, es una postura.' },

  adho: { sa: 'adho', es: 'abajo', cat: 'dir', hint: 'Opuesto de urdhva.' },
  urdhva: { sa: 'urdhva', es: 'arriba, elevado', cat: 'dir', hint: 'Opuesto de adho.' },
  ardha: { sa: 'ardha', es: 'medio, mitad', cat: 'dir', hint: 'Media versión de una postura.' },
  parsva: { sa: 'parsva', es: 'lado, lateral', cat: 'dir', hint: 'Si ves parsva, hay un costado en juego.' },
  paschima: { sa: 'paschima', es: 'oeste → la espalda', cat: 'dir', hint: 'En la tradición, el cuerpo mira al este (frente) y la espalda es el oeste.' },
  purva: { sa: 'purva', es: 'este → el frente', cat: 'dir', hint: 'Opuesto de paschima.' },
  utthita: { sa: 'utthita', es: 'extendido, de pie', cat: 'dir', hint: 'Versión en pie y abierta de una postura.' },
  parivrtta: { sa: 'parivrtta', es: 'girado, en torsión', cat: 'dir', hint: 'Si ves parivrtta, el torso gira.' },
  supta: { sa: 'supta', es: 'reclinado, dormido', cat: 'dir', hint: 'La misma postura, pero acostado.' },
  baddha: { sa: 'baddha', es: 'atado, ligado', cat: 'dir', hint: 'Brazos o piernas enlazados.' },
  prasarita: { sa: 'prasarita', es: 'abierto, extendido', cat: 'dir', hint: 'Piernas bien separadas.' },
  salamba: { sa: 'salamba', es: 'con apoyo', cat: 'dir', hint: 'sa- = "con"; lamba = apoyo.' },
  sarva: { sa: 'sarva', es: 'todo, entero', cat: 'dir', hint: 'Sarvanga = "todos los miembros".' },

  uttana: { sa: 'uttana', es: 'estiramiento intenso', cat: 'action', hint: 'ut = intenso, tan = estirar. Es la flexión hacia adelante.' },
  bandha: { sa: 'bandha', es: 'cierre, llave', cat: 'action', hint: 'Un candado energético del cuerpo.' },
  pida: { sa: 'pida', es: 'presión', cat: 'action', hint: 'Apretar o comprimir.' },

  eka: { sa: 'eka', es: 'uno', cat: 'num', hint: 'Una sola pierna o un solo brazo.' },
  dvi: { sa: 'dvi', es: 'dos', cat: 'num', hint: 'Ambas piernas o ambos brazos.' },
  tri: { sa: 'tri', es: 'tres', cat: 'num', hint: 'Tri-ángulo: tres ángulos.' },
  chatur: { sa: 'chatur', es: 'cuatro', cat: 'num', hint: 'Chaturanga = cuatro miembros.' },
  ashta: { sa: 'ashta', es: 'ocho', cat: 'num', hint: 'Ashtanga = ocho ramas.' },

  pada: { sa: 'pada', es: 'pie', cat: 'body', hint: 'Pie. Como "pedal" o "pedestre".' },
  hasta: { sa: 'hasta', es: 'mano', cat: 'body', hint: 'Mano.' },
  anga: { sa: 'anga', es: 'miembro, rama', cat: 'body', hint: 'Una parte del cuerpo o de un sistema.' },
  angustha: { sa: 'angustha', es: 'dedo gordo del pie', cat: 'body', hint: 'Padangustha = pie + dedo gordo.' },
  janu: { sa: 'janu', es: 'rodilla', cat: 'body', hint: 'Rodilla.' },
  sirsa: { sa: 'sirsa', es: 'cabeza', cat: 'body', hint: 'Cabeza.' },
  mukha: { sa: 'mukha', es: 'cara, rostro', cat: 'body', hint: 'Hacia dónde mira la cara.' },
  karna: { sa: 'karna', es: 'oído', cat: 'body', hint: 'Oído.' },

  svana: { sa: 'svana', es: 'perro', cat: 'nature', hint: 'Perro.' },
  bhujanga: { sa: 'bhujanga', es: 'serpiente, cobra', cat: 'nature', hint: 'Cobra.' },
  kapota: { sa: 'kapota', es: 'paloma', cat: 'nature', hint: 'Paloma.' },
  kurma: { sa: 'kurma', es: 'tortuga', cat: 'nature', hint: 'Tortuga.' },
  matsya: { sa: 'matsya', es: 'pez', cat: 'nature', hint: 'Pez.' },
  hala: { sa: 'hala', es: 'arado', cat: 'nature', hint: 'Arado.' },
  nava: { sa: 'nava', es: 'barco', cat: 'nature', hint: 'Barco.' },
  vrksa: { sa: 'vrksa', es: 'árbol', cat: 'nature', hint: 'Árbol.' },
  dhanu: { sa: 'dhanu', es: 'arco', cat: 'nature', hint: 'El arco del arquero.' },
  setu: { sa: 'setu', es: 'puente', cat: 'nature', hint: 'Puente.' },
  danda: { sa: 'danda', es: 'bastón, vara', cat: 'nature', hint: 'Cuerpo recto como una vara.' },
  raja: { sa: 'raja', es: 'rey', cat: 'nature', hint: 'Rajakapota = paloma real.' },

  kona: { sa: 'kona', es: 'ángulo', cat: 'form', hint: 'Ángulo.' },
};

// Cada asana: partes [texto tal como aparece en el nombre, id de pieza].
// Los espacios se agregan al renderizar, entre palabras (`words`).
// `image` es un recurso para recordarla; `family` agrupa para la sección "familias".
export const ASANAS = [
  {
    id: 'uttanasana',
    words: [[['Uttan', 'uttana'], ['asana', 'asana']]],
    es: 'Flexión hacia adelante intensa',
    image: 'Una cascada: el torso cae como agua hacia el suelo.',
  },
  {
    id: 'ardha_uttanasana',
    words: [[['Ardha', 'ardha']], [['Uttan', 'uttana'], ['asana', 'asana']]],
    es: 'Media flexión hacia adelante',
    image: 'Media cascada: espalda larga y plana, a mitad de camino.',
  },
  {
    id: 'adho_mukha_svanasana',
    words: [[['Adho', 'adho']], [['Mukha', 'mukha']], [['Svan', 'svana'], ['asana', 'asana']]],
    es: 'Perro con la cara hacia abajo',
    image: 'El perro que se estira al despertar, cabeza hacia el suelo.',
  },
  {
    id: 'urdhva_mukha_svanasana',
    words: [[['Urdhva', 'urdhva']], [['Mukha', 'mukha']], [['Svan', 'svana'], ['asana', 'asana']]],
    es: 'Perro con la cara hacia arriba',
    image: 'El mismo perro, ahora mirando al cielo con el pecho abierto.',
  },
  {
    id: 'ashtanga',
    words: [[['Ashta', 'ashta'], ['nga', 'anga']]],
    es: 'Ocho ramas (el sistema de Patanjali)',
    image: 'Un árbol con ocho ramas.',
    note: 'ashta + anga: las dos "a" se funden en una (ashta-anga → ashtanga).',
  },
  {
    id: 'padangusthasana',
    words: [[['Pad', 'pada'], ['angusth', 'angustha'], ['asana', 'asana']]],
    es: 'Postura del dedo gordo del pie',
    image: 'Tomas los dedos gordos con los dedos de la mano.',
  },
  {
    id: 'padahastasana',
    words: [[['Pada', 'pada'], ['hast', 'hasta'], ['asana', 'asana']]],
    es: 'Postura pie-mano',
    image: 'Las manos bajo los pies: pie + mano.',
  },
  {
    id: 'utthita_trikonasana',
    words: [[['Utthita', 'utthita']], [['Tri', 'tri'], ['kon', 'kona'], ['asana', 'asana']]],
    es: 'Triángulo extendido',
    image: 'Tres ángulos formados por piernas, torso y brazos.',
  },
  {
    id: 'parivrtta_trikonasana',
    words: [[['Parivrtta', 'parivrtta']], [['Tri', 'tri'], ['kon', 'kona'], ['asana', 'asana']]],
    es: 'Triángulo girado (torsión)',
    image: 'El mismo triángulo, pero retorcido como una toalla.',
  },
  {
    id: 'utthita_parsvakonasana',
    words: [[['Utthita', 'utthita']], [['Parsva', 'parsva'], ['kon', 'kona'], ['asana', 'asana']]],
    es: 'Ángulo lateral extendido',
    image: 'Un ángulo de lado: costado largo, brazo sobre la oreja.',
  },
  {
    id: 'parsvottanasana',
    words: [[['Parsv', 'parsva'], ['ottan', 'uttana'], ['asana', 'asana']]],
    es: 'Estiramiento intenso del costado',
    image: 'Una flexión (uttana) hacia el lado de la pierna adelantada.',
    note: 'parsva + uttana: a + u se funden en "o" (parsv-ottana).',
  },
  {
    id: 'prasarita_padottanasana',
    words: [[['Prasarita', 'prasarita']], [['Pad', 'pada'], ['ottan', 'uttana'], ['asana', 'asana']]],
    es: 'Flexión intensa con los pies abiertos',
    image: 'Pies bien abiertos y cascada hacia el suelo.',
  },
  {
    id: 'paschimottanasana',
    words: [[['Paschim', 'paschima'], ['ottan', 'uttana'], ['asana', 'asana']]],
    es: 'Estiramiento intenso de la espalda',
    image: 'Sentado: la cascada cae sobre las piernas, estirando toda la espalda (oeste).',
  },
  {
    id: 'purvottanasana',
    words: [[['Purv', 'purva'], ['ottan', 'uttana'], ['asana', 'asana']]],
    es: 'Estiramiento intenso del frente',
    image: 'Lo opuesto a paschimottanasana: el frente del cuerpo se abre hacia el este.',
  },
  {
    id: 'janu_sirsasana',
    words: [[['Janu', 'janu']], [['Sirs', 'sirsa'], ['asana', 'asana']]],
    es: 'Cabeza a la rodilla',
    image: 'Rodilla + cabeza: se encuentran.',
  },
  {
    id: 'baddha_konasana',
    words: [[['Baddha', 'baddha']], [['Kon', 'kona'], ['asana', 'asana']]],
    es: 'Ángulo atado',
    image: 'Las plantas atadas una contra otra dibujan un ángulo.',
  },
  {
    id: 'supta_padangusthasana',
    words: [[['Supta', 'supta']], [['Pad', 'pada'], ['angusth', 'angustha'], ['asana', 'asana']]],
    es: 'Dedo gordo del pie, reclinado',
    image: 'La misma de pie, pero acostado (supta).',
  },
  {
    id: 'bhujangasana',
    words: [[['Bhujang', 'bhujanga'], ['asana', 'asana']]],
    es: 'Postura de la cobra',
    image: 'La cobra levanta el pecho sin apoyarse en la cola.',
  },
  {
    id: 'setu_bandhasana',
    words: [[['Setu', 'setu']], [['Bandh', 'bandha'], ['asana', 'asana']]],
    es: 'Puente (cierre)',
    image: 'Un puente que se cierra con las caderas elevadas.',
  },
  {
    id: 'salamba_sarvangasana',
    words: [[['Salamba', 'salamba']], [['Sarv', 'sarva'], ['ang', 'anga'], ['asana', 'asana']]],
    es: 'Postura de todos los miembros, con apoyo',
    image: 'Todo el cuerpo trabaja, apoyado sobre los hombros.',
  },
  {
    id: 'halasana',
    words: [[['Hal', 'hala'], ['asana', 'asana']]],
    es: 'Postura del arado',
    image: 'Las piernas, como un arado, tocan el suelo tras la cabeza.',
  },
  {
    id: 'karnapidasana',
    words: [[['Karna', 'karna']], [['pid', 'pida'], ['asana', 'asana']]],
    es: 'Presión en los oídos',
    image: 'Las rodillas aprietan las orejas.',
  },
  {
    id: 'chaturanga_dandasana',
    words: [[['Chatur', 'chatur'], ['anga', 'anga']], [['Dand', 'danda'], ['asana', 'asana']]],
    es: 'Postura del bastón de cuatro miembros',
    image: 'Cuatro miembros (manos y pies) sostienen un cuerpo recto como una vara.',
  },
  {
    id: 'eka_pada_rajakapotasana',
    words: [[['Eka', 'eka']], [['Pada', 'pada']], [['Raja', 'raja'], ['kapot', 'kapota'], ['asana', 'asana']]],
    es: 'Paloma real de una pierna',
    image: 'Una pierna adelante, pecho alto como una paloma real.',
  },
  {
    id: 'dvi_pada_sirsasana',
    words: [[['Dvi', 'dvi']], [['Pada', 'pada']], [['Sirs', 'sirsa'], ['asana', 'asana']]],
    es: 'Dos pies a la cabeza',
    image: 'Ambos pies se van detrás de la cabeza.',
  },
  {
    id: 'matsyasana',
    words: [[['Matsy', 'matsya'], ['asana', 'asana']]],
    es: 'Postura del pez',
    image: 'Un pez que flota con el pecho abierto.',
  },
  {
    id: 'kurmasana',
    words: [[['Kurm', 'kurma'], ['asana', 'asana']]],
    es: 'Postura de la tortuga',
    image: 'La tortuga que esconde brazos y cabeza bajo el caparazón.',
  },
  {
    id: 'navasana',
    words: [[['Nav', 'nava'], ['asana', 'asana']]],
    es: 'Postura del barco',
    image: 'Una V como la proa de un barco.',
  },
  {
    id: 'vrksasana',
    words: [[['Vrks', 'vrksa'], ['asana', 'asana']]],
    es: 'Postura del árbol',
    image: 'Una pierna es el tronco; los brazos, las ramas.',
  },
  {
    id: 'urdhva_dhanurasana',
    words: [[['Urdhva', 'urdhva']], [['Dhanur', 'dhanu'], ['asana', 'asana']]],
    es: 'Arco hacia arriba',
    image: 'El cuerpo es el arco del arquero tensado hacia arriba.',
  },
];

// Nombre legible: "Adho Mukha Svanasana".
export const asanaName = (a) => a.words.map((w) => w.map(([t]) => t).join('')).join(' ');

// Pieza → asanas que la contienen.
export const asanasWith = (pieceId) => ASANAS.filter((a) => a.words.some((w) => w.some(([, id]) => id === pieceId)));

// Orden de dificultad de aprendizaje: piezas más reutilizadas primero.
export const PIECE_IDS = Object.keys(PIECES);

// Familias destacadas: lo que el estudiante debería memorizar primero.
export const FAMILIES = [
  {
    id: 'uttana',
    title: 'La familia Uttana: "cascada"',
    piece: 'uttana',
    lead: 'Uttanasana es la flexión intensa hacia el suelo: imagina una cascada. Todo lo que lleva uttana (u "ottana") es una variación de esa caída.',
    chain: [
      { label: 'Uttanasana', es: 'cascada (flexión hacia adelante)' },
      { label: 'Ardha Uttanasana', es: 'media cascada (media flexión)' },
      { label: 'Parsvottanasana', es: 'cascada al costado' },
      { label: 'Paschimottanasana', es: 'cascada sobre la espalda' },
    ],
  },
  {
    id: 'mukha',
    title: 'Mukha: "cara", y el perro que mira',
    piece: 'mukha',
    lead: 'Adho es abajo, urdhva es arriba. Solo cambia el prefijo: el perro (svana) mira hacia donde indica la primera palabra.',
    chain: [
      { label: 'Adho Mukha Svanasana', es: 'perro mirando abajo' },
      { label: 'Urdhva Mukha Svanasana', es: 'perro mirando arriba' },
    ],
  },
  {
    id: 'ashta',
    title: 'Ashta + anga = Ashtanga',
    piece: 'anga',
    lead: 'Ashta (ocho) + anga (miembro, rama) = ocho ramas. Chaturanga reutiliza la misma pieza con otro número: chatur (cuatro) + anga = cuatro miembros.',
    chain: [
      { label: 'Ashtanga', es: 'ocho ramas' },
      { label: 'Chaturanga', es: 'cuatro miembros' },
      { label: 'Sarvangasana', es: 'todos los miembros' },
    ],
  },
];

// Reglas de unión (sandhi) mínimas para que los nombres no sorprendan.
export const SANDHI = [
  { rule: 'a + a → a', example: 'ashta + anga → ashtanga', why: 'dos "a" juntas se funden en una larga.' },
  { rule: 'a + u → o', example: 'parsva + uttana → parsvottana', why: 'por eso uttana suele verse como -ottana.' },
  { rule: 'a + i → e', example: 'maha + indra → mahendra', why: 'la fusión da una vocal intermedia.' },
];

// Corrección de ortografía de los ejemplos más confundidos.
export const SPELLING = [
  { wrong: 'Utanasana', right: 'Uttanasana' },
  { wrong: 'Arda', right: 'Ardha' },
  { wrong: 'Mukka', right: 'Mukha' },
  { wrong: 'Urda', right: 'Urdhva' },
  { wrong: 'Ada / Ado', right: 'Adho' },
];
