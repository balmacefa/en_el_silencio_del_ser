// Utilidades de cálculo para múltiples sistemas calendáricos.

function mod(n, m) {
  return ((n % m) + m) % m;
}

// Número de Día Juliano (JDN) para una fecha del calendario gregoriano proléptico.
// Algoritmo estándar (Fliegel & Van Flandern), válido para fechas pasadas y futuras.
export function toJDN(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  return (
    day +
    Math.floor((153 * m + 2) / 5) +
    365 * y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +
    Math.floor(y / 400) -
    32045
  );
}

export function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 1);
  return Math.round((date - start) / 86400000) + 1;
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function getDaysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}

// --- Calendario Maya (correlación GMT: 0.0.0.0.0 = JDN 584283) ---

const MAYA_EPOCH_JDN = 584283;

const TZOLKIN_DAY_NAMES = [
  'Imix', 'Ik', 'Akbal', 'Kan', 'Chicchan', 'Cimi', 'Manik', 'Lamat', 'Muluc', 'Oc',
  'Chuen', 'Eb', 'Ben', 'Ix', 'Men', 'Cib', 'Caban', 'Etznab', 'Cauac', 'Ahau',
];

const HAAB_MONTH_NAMES = [
  'Pop', 'Uo', 'Zip', 'Zotz', 'Tzec', 'Xul', 'Yaxkin', 'Mol', 'Chen', 'Yax',
  'Zac', 'Ceh', 'Mac', 'Kankin', 'Muan', 'Pax', 'Kayab', 'Cumku', 'Wayeb',
];

export function getMayaDate(date) {
  const longCountDays = toJDN(date) - MAYA_EPOCH_JDN;

  const baktun = Math.floor(longCountDays / 144000);
  let rest = longCountDays - baktun * 144000;
  const katun = Math.floor(rest / 7200);
  rest -= katun * 7200;
  const tun = Math.floor(rest / 360);
  rest -= tun * 360;
  const uinal = Math.floor(rest / 20);
  const kin = rest - uinal * 20;

  const tzolkinNumber = mod(longCountDays + 3, 13) + 1;
  const tzolkinNameIndex = mod(longCountDays + 19, 20);

  const haabDayOfYear = mod(longCountDays + 348, 365);
  let haabMonthIndex;
  let haabDay;
  if (haabDayOfYear < 360) {
    haabMonthIndex = Math.floor(haabDayOfYear / 20);
    haabDay = haabDayOfYear % 20;
  } else {
    haabMonthIndex = 18; // Wayeb
    haabDay = haabDayOfYear - 360;
  }

  return {
    longCountDays,
    longCount: `${baktun}.${katun}.${tun}.${uinal}.${kin}`,
    tzolkin: { number: tzolkinNumber, name: TZOLKIN_DAY_NAMES[tzolkinNameIndex] },
    haab: { day: haabDay, month: HAAB_MONTH_NAMES[haabMonthIndex] },
  };
}

// --- Calendarios vía Intl (ICU): islámico, hebreo, persa, chino ---

export function getIntlCalendarParts(date, calendar, locale = 'es') {
  const formatter = new Intl.DateTimeFormat(locale, {
    calendar,
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    era: 'short',
  });
  const parts = formatter.formatToParts(date);
  const byType = {};
  for (const part of parts) {
    byType[part.type] = part.value;
  }
  return byType;
}

// --- Calendario solar: estaciones (hemisferio sur) y solsticios/equinoccios ---
// Fechas aproximadas (suficientes para uso divulgativo/reflexivo, no astronómico exacto).

const SOLAR_MARKERS = [
  { month: 2, day: 20, key: 'equinoccioMarzo', label: 'Equinoccio de marzo' },
  { month: 5, day: 21, key: 'solsticioJunio', label: 'Solsticio de junio' },
  { month: 8, day: 22, key: 'equinoccioSeptiembre', label: 'Equinoccio de septiembre' },
  { month: 11, day: 21, key: 'solsticioDiciembre', label: 'Solsticio de diciembre' },
];

// Estaciones para el hemisferio sur (Argentina). En el hemisferio norte son las opuestas.
const SEASONS_SOUTH = [
  { key: 'solsticioDiciembre', name: 'Verano', emoji: '☀️' },
  { key: 'equinoccioMarzo', name: 'Otoño', emoji: '🍂' },
  { key: 'solsticioJunio', name: 'Invierno', emoji: '❄️' },
  { key: 'equinoccioSeptiembre', name: 'Primavera', emoji: '🌸' },
];

function markerDate(year, marker) {
  return new Date(year, marker.month, marker.day);
}

export function getSolarInfo(date) {
  const year = date.getFullYear();
  const candidates = [year - 1, year, year + 1].flatMap((y) =>
    SOLAR_MARKERS.map((marker) => ({ ...marker, date: markerDate(y, marker) }))
  );
  candidates.sort((a, b) => a.date - b.date);

  let currentSeasonMarker = candidates[0];
  let nextMarker = candidates[candidates.length - 1];
  for (let i = 0; i < candidates.length; i++) {
    if (candidates[i].date <= date) {
      currentSeasonMarker = candidates[i];
    }
    if (candidates[i].date > date) {
      nextMarker = candidates[i];
      break;
    }
  }

  const season = SEASONS_SOUTH.find((s) => s.key === currentSeasonMarker.key);
  const daysUntilNext = Math.round((nextMarker.date - date) / 86400000);
  const dayOfYear = getDayOfYear(date);
  const daysInYear = getDaysInYear(year);

  return {
    season,
    dayOfYear,
    daysInYear,
    yearProgressPct: Math.round((dayOfYear / daysInYear) * 100),
    nextMarker,
    daysUntilNext,
  };
}
