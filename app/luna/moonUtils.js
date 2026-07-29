const SYNODIC_MONTH = 29.53058867; // días que dura un ciclo lunar completo
const KNOWN_NEW_MOON = Date.UTC(2000, 0, 6, 18, 14, 0); // luna nueva de referencia

const PHASES = [
  { name: 'Luna Nueva', emoji: '🌑', description: 'Momento de introspección, siembra de intenciones y nuevos comienzos.' },
  { name: 'Luna Creciente', emoji: '🌒', description: 'Energía en crecimiento, ideal para tomar acción sobre tus intenciones.' },
  { name: 'Cuarto Creciente', emoji: '🌓', description: 'Tiempo de decisión, ajuste y superación de obstáculos.' },
  { name: 'Gibosa Creciente', emoji: '🌔', description: 'Refinamiento y paciencia antes de la culminación del ciclo.' },
  { name: 'Luna Llena', emoji: '🌕', description: 'Culminación, plenitud emocional y máxima energía. Ideal para soltar y celebrar.' },
  { name: 'Gibosa Menguante', emoji: '🌖', description: 'Gratitud, integración y compartir lo aprendido.' },
  { name: 'Cuarto Menguante', emoji: '🌗', description: 'Liberación consciente de lo que ya no sirve.' },
  { name: 'Luna Menguante', emoji: '🌘', description: 'Descanso, reflexión profunda y cierre de ciclo.' },
];

function getMoonAge(date = new Date()) {
  const daysSinceKnown = (date.getTime() - KNOWN_NEW_MOON) / 86400000;
  let age = daysSinceKnown % SYNODIC_MONTH;
  if (age < 0) age += SYNODIC_MONTH;
  return age;
}

export function getMoonData(date = new Date()) {
  const age = getMoonAge(date);
  const illumination = (1 - Math.cos((2 * Math.PI * age) / SYNODIC_MONTH)) / 2;
  const phaseIndex = Math.round((age / SYNODIC_MONTH) * 8) % 8;

  return {
    age,
    illumination,
    ...PHASES[phaseIndex],
  };
}

export function getNextPhaseDate(targetAge, fromDate = new Date()) {
  const currentAge = getMoonAge(fromDate);
  let daysUntil = targetAge - currentAge;
  while (daysUntil <= 0) daysUntil += SYNODIC_MONTH;
  return new Date(fromDate.getTime() + daysUntil * 86400000);
}

export const SYNODIC_MONTH_DAYS = SYNODIC_MONTH;
