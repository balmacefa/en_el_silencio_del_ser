const SYNODIC_MONTH = 29.53058867; // días que dura un ciclo lunar completo
const KNOWN_NEW_MOON = Date.UTC(2000, 0, 6, 18, 14, 0); // luna nueva de referencia

const PHASES = [
  {
    name: 'Luna Nueva',
    emoji: '🌑',
    description: 'Momento de introspección, siembra de intenciones y nuevos comienzos.',
    theme: {
      gradient: ['#050311', '#100a29', '#000000'],
      accent: '#a78bfa',
      accentSoft: 'rgba(167,139,250,0.4)',
      moonLit: '#c4b5fd',
      moonShadow: '#020617',
      glow: '#7c3aed',
    },
  },
  {
    name: 'Luna Creciente',
    emoji: '🌒',
    description: 'Energía en crecimiento, ideal para tomar acción sobre tus intenciones.',
    theme: {
      gradient: ['#050b1f', '#0d1c3f', '#020308'],
      accent: '#60a5fa',
      accentSoft: 'rgba(96,165,250,0.4)',
      moonLit: '#dbeafe',
      moonShadow: '#0b1224',
      glow: '#3b82f6',
    },
  },
  {
    name: 'Cuarto Creciente',
    emoji: '🌓',
    description: 'Tiempo de decisión, ajuste y superación de obstáculos.',
    theme: {
      gradient: ['#031319', '#0b2e3d', '#010506'],
      accent: '#22d3ee',
      accentSoft: 'rgba(34,211,238,0.38)',
      moonLit: '#ecfeff',
      moonShadow: '#082f33',
      glow: '#06b6d4',
    },
  },
  {
    name: 'Gibosa Creciente',
    emoji: '🌔',
    description: 'Refinamiento y paciencia antes de la culminación del ciclo.',
    theme: {
      gradient: ['#1a1206', '#3d240a', '#0a0502'],
      accent: '#fbbf24',
      accentSoft: 'rgba(251,191,36,0.35)',
      moonLit: '#fef3c7',
      moonShadow: '#2a1a06',
      glow: '#f59e0b',
    },
  },
  {
    name: 'Luna Llena',
    emoji: '🌕',
    description: 'Culminación, plenitud emocional y máxima energía. Ideal para soltar y celebrar.',
    theme: {
      gradient: ['#0a0e1f', '#1d1f42', '#04050d'],
      accent: '#fde68a',
      accentSoft: 'rgba(253,230,138,0.5)',
      moonLit: '#fffbeb',
      moonShadow: '#4a4318',
      glow: '#fcd34d',
    },
  },
  {
    name: 'Gibosa Menguante',
    emoji: '🌖',
    description: 'Gratitud, integración y compartir lo aprendido.',
    theme: {
      gradient: ['#1a0a13', '#301022', '#0a0308'],
      accent: '#fb7185',
      accentSoft: 'rgba(251,113,133,0.35)',
      moonLit: '#fde4e1',
      moonShadow: '#2a0f16',
      glow: '#f43f5e',
    },
  },
  {
    name: 'Cuarto Menguante',
    emoji: '🌗',
    description: 'Liberación consciente de lo que ya no sirve.',
    theme: {
      gradient: ['#0b0a1f', '#1d1447', '#03040c'],
      accent: '#818cf8',
      accentSoft: 'rgba(129,140,248,0.38)',
      moonLit: '#e0e7ff',
      moonShadow: '#12102a',
      glow: '#6366f1',
    },
  },
  {
    name: 'Luna Menguante',
    emoji: '🌘',
    description: 'Descanso, reflexión profunda y cierre de ciclo.',
    theme: {
      gradient: ['#03080a', '#0a1e22', '#000000'],
      accent: '#2dd4bf',
      accentSoft: 'rgba(45,212,191,0.35)',
      moonLit: '#ccfbf1',
      moonShadow: '#052e2b',
      glow: '#14b8a6',
    },
  },
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
  const isWaxing = age < SYNODIC_MONTH / 2;

  return {
    age,
    illumination,
    isWaxing,
    phaseIndex,
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
