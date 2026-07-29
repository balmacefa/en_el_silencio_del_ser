import { ashtangaSequence } from '../yoga/ashtanga_serie_basica_1/ashtangaSequence';

// Catálogo completo de asanas — usa como base la Primera Serie de Ashtanga
// ya definida en el sitio (mismas fotografías, crédito original a Keen on
// Yoga: https://www.keenonyoga.com/ashtanga-yoga-primary-series/).
//
// Para las posturas cuyo nombre en sánscrito remite claramente a un animal,
// un elemento de la naturaleza o una forma geométrica, se agrega una nota
// breve de origen (investigada en Yoga Journal, Wikipedia y Yoga Basics).

const nameOrigins = {
  Samasthiti: {
    tag: '🌿 Naturaleza',
    note: 'Sama-sthiti significa "estado de equilibrio quieto"; es la misma base que Tadasana ("tada" = montaña). El cuerpo permanece tan firme y vertical como una montaña.',
  },
  'Utthita Trikonasana': {
    tag: '📐 Geometría',
    note: 'Trikona significa literalmente "tres ángulos": piernas, torso y brazo dibujan un triángulo en el espacio.',
  },
  'Parivrtta Trikonasana': {
    tag: '📐 Geometría',
    note: 'Comparte raíz con Trikonasana ("tres ángulos"); parivrtta añade la torsión sobre esa misma base triangular.',
  },
  Utkatasana: {
    tag: '📐 Geometría',
    note: 'Utkata significa "poderosa" o "feroz"; popularmente se la llama "postura de la silla" por el ángulo recto que forman las rodillas.',
  },
  Navasana: {
    tag: '📐 Geometría',
    note: 'Nava significa "bote": el cuerpo forma una V sostenida sobre los isquiones, como una embarcación balanceándose en el agua.',
  },
  Kurmasana: {
    tag: '🐾 Animal',
    note: 'Kurma es la tortuga, uno de los avatares de Vishnú. El cuerpo se repliega hacia adentro como una tortuga que se refugia en su caparazón.',
  },
  'Supta Kurmasana': {
    tag: '🐾 Animal',
    note: 'Variante "dormida" de Kurmasana: el repliegue es aún más profundo, como una tortuga completamente retraída y en reposo.',
  },
  'Baddha Konasana': {
    tag: '🐾 Animal',
    note: 'El nombre sánscrito significa "ángulo atado", pero es popularmente conocida como "postura de la mariposa" por el aleteo de las rodillas al abrirse y cerrarse.',
  },
  'Urdhva Dhanurasana': {
    tag: '📐 Geometría',
    note: 'Dhanu significa "arco": la columna y los brazos dibujan la curva tensa de un arco listo para disparar una flecha.',
  },
  Halasana: {
    tag: '🌿 Naturaleza',
    note: 'Hala es el "arado": las piernas trazan la forma de la herramienta agrícola que remueve la tierra, símbolo de siembra y renovación.',
  },
  Matsyasana: {
    tag: '🐾 Animal',
    note: 'Matsya es el pez, otro avatar de Vishnú. El pecho y la garganta se abren como las agallas de un pez emergiendo a la superficie.',
  },
};

export const asanas = ashtangaSequence.map((pose, index) => ({
  slug: pose.sanskrit
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, ''),
  order: index + 1,
  sanskrit: pose.sanskrit,
  popular: pose.popular,
  description: pose.description,
  image: pose.image,
  sides: Boolean(pose.sides),
  origin: nameOrigins[pose.sanskrit] || null,
  next: index + 1 < ashtangaSequence.length ? ashtangaSequence[index + 1].sanskrit : null,
}));
