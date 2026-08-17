"use client";

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { getMoonData, SYNODIC_MONTH_DAYS } from '../luna/moonUtils';
import { getMayaDate, getIntlCalendarParts, getSolarInfo, getDayOfYear } from './calendarUtils';

function toInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function capitalize(text) {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const QUICK_JUMPS = [
  { label: '-1 año', years: -1 },
  { label: '-1 mes', months: -1 },
  { label: '-7 días', days: -7 },
  { label: '+7 días', days: 7 },
  { label: '+1 mes', months: 1 },
  { label: '+1 año', years: 1 },
];

function CalendarCard({ icon, tone, title, tagline, children }) {
  const tones = {
    indigo: { badge: 'bg-indigo-50 text-indigo-600', border: 'hover:border-indigo-200' },
    amber: { badge: 'bg-amber-50 text-amber-600', border: 'hover:border-amber-200' },
    slate: { badge: 'bg-slate-100 text-slate-600', border: 'hover:border-slate-300' },
    rose: { badge: 'bg-rose-50 text-rose-600', border: 'hover:border-rose-200' },
    teal: { badge: 'bg-teal-50 text-teal-600', border: 'hover:border-teal-200' },
    violet: { badge: 'bg-violet-50 text-violet-600', border: 'hover:border-violet-200' },
  };
  const t = tones[tone] || tones.indigo;

  return (
    <div className={`rounded-2xl bg-white/70 backdrop-blur-sm p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] ${t.border} flex flex-col h-full`}>
      <div className="flex items-center gap-3 mb-5">
        <span className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 ${t.badge}`}>{icon}</span>
        <div>
          <h3 className="text-lg font-bold text-slate-800 leading-tight">{title}</h3>
          {tagline && <p className="text-xs text-slate-400 font-medium tracking-wide">{tagline}</p>}
        </div>
      </div>
      <div className="space-y-3 text-sm text-slate-600 leading-relaxed flex-grow">{children}</div>
    </div>
  );
}

function Row({ label, value, big }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-slate-100 pb-2 last:border-0 last:pb-0">
      <span className="text-slate-400 font-medium">{label}</span>
      <span className={`text-right text-slate-800 ${big ? 'text-base font-semibold' : 'font-medium'}`}>{value}</span>
    </div>
  );
}

export default function CalendarExplorer({ initialDateISO }) {
  const today = useMemo(() => new Date(initialDateISO), [initialDateISO]);
  const [selectedDate, setSelectedDate] = useState(() => new Date(initialDateISO));
  const isToday = isSameDay(selectedDate, today);

  function shiftBy({ days = 0, months = 0, years = 0 }) {
    setSelectedDate((prev) => {
      const next = new Date(prev);
      if (years) next.setFullYear(next.getFullYear() + years);
      if (months) next.setMonth(next.getMonth() + months);
      if (days) next.setDate(next.getDate() + days);
      return next;
    });
  }

  function handleDateInput(event) {
    const value = event.target.value;
    if (!value) return;
    const [year, month, day] = value.split('-').map(Number);
    setSelectedDate(new Date(year, month - 1, day, 12, 0, 0));
  }

  function goToToday() {
    setSelectedDate(new Date(today));
  }

  const weekday = capitalize(selectedDate.toLocaleDateString('es-AR', { weekday: 'long' }));
  const fullGregorian = capitalize(
    selectedDate.toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })
  );
  const dayOfYear = getDayOfYear(selectedDate);

  const moon = useMemo(() => getMoonData(selectedDate), [selectedDate]);
  const illuminationPct = Math.round(moon.illumination * 100);
  const maya = useMemo(() => getMayaDate(selectedDate), [selectedDate]);
  const solar = useMemo(() => getSolarInfo(selectedDate), [selectedDate]);
  const islamic = useMemo(() => getIntlCalendarParts(selectedDate, 'islamic'), [selectedDate]);
  const hebrew = useMemo(() => getIntlCalendarParts(selectedDate, 'hebrew'), [selectedDate]);
  const persian = useMemo(() => getIntlCalendarParts(selectedDate, 'persian'), [selectedDate]);
  const chinese = useMemo(() => getIntlCalendarParts(selectedDate, 'chinese'), [selectedDate]);

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <section className="text-center space-y-5">
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100">
          <span className="text-indigo-600 text-sm font-semibold tracking-wide uppercase">
            {isToday ? 'Hoy' : 'Fecha seleccionada'}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">Calendarios del Mundo</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Un mismo día, visto a través de distintas tradiciones para medir el tiempo: solar, lunar, gregoriana y maya, entre otras.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => shiftBy({ days: -1 })}
            aria-label="Día anterior"
            className="w-11 h-11 rounded-full flex items-center justify-center text-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-indigo-200 transition-colors"
          >
            ‹
          </button>

          <label className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white">
            <span aria-hidden="true">📅</span>
            <input
              type="date"
              value={toInputValue(selectedDate)}
              onChange={handleDateInput}
              className="bg-transparent outline-none text-slate-700 text-sm sm:text-base"
            />
          </label>

          <button
            type="button"
            onClick={() => shiftBy({ days: 1 })}
            aria-label="Día siguiente"
            className="w-11 h-11 rounded-full flex items-center justify-center text-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-indigo-200 transition-colors"
          >
            ›
          </button>

          {!isToday && (
            <button
              type="button"
              onClick={goToToday}
              className="px-5 py-2 rounded-full text-sm font-semibold tracking-wide border border-indigo-200 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
            >
              Volver a hoy
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          {QUICK_JUMPS.map((jump) => (
            <button
              key={jump.label}
              type="button"
              onClick={() => shiftBy(jump)}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-slate-200 bg-white text-slate-500 hover:text-indigo-600 hover:border-indigo-200 transition-colors"
            >
              {jump.label}
            </button>
          ))}
        </div>

        <p className="text-slate-400 text-sm pt-1">
          {weekday}, {fullGregorian} · día {dayOfYear} de {solar.daysInYear}
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CalendarCard icon="📅" tone="indigo" title="Gregoriano" tagline="Calendario civil internacional">
          <Row label="Fecha" value={fullGregorian} big />
          <Row label="Día de la semana" value={weekday} />
          <Row label="Día del año" value={`${dayOfYear} / ${solar.daysInYear}`} />
          <Row label="Avance del año" value={`${solar.yearProgressPct}%`} />
        </CalendarCard>

        <CalendarCard icon="☀️" tone="amber" title="Solar" tagline="Estaciones y calendario persa (solar hijri)">
          <Row label="Estación (hemisferio sur)" value={`${solar.season.emoji} ${solar.season.name}`} big />
          <Row label="Próximo hito solar" value={solar.nextMarker.label} />
          <Row label="Faltan" value={`${solar.daysUntilNext} día${solar.daysUntilNext === 1 ? '' : 's'}`} />
          <Row
            label="Calendario persa"
            value={`${persian.day} de ${persian.month} de ${persian.year} ${persian.era}`}
          />
        </CalendarCard>

        <CalendarCard icon="🌙" tone="violet" title="Lunar" tagline="Fase lunar y calendario islámico (hijrí)">
          <Row label="Fase actual" value={`${moon.emoji} ${moon.name}`} big />
          <Row label="Iluminación" value={`${illuminationPct}%`} />
          <Row label="Día del ciclo" value={`${moon.age.toFixed(1)} / ${SYNODIC_MONTH_DAYS.toFixed(1)}`} />
          <Row label="Calendario hijrí" value={`${islamic.day} de ${islamic.month} de ${islamic.year} ${islamic.era}`} />
          <Link href="/luna" className="inline-block pt-1 text-indigo-600 text-xs font-semibold hover:underline">
            Ver explorador lunar completo →
          </Link>
        </CalendarCard>

        <CalendarCard icon="🗿" tone="teal" title="Maya" tagline="Cuenta Larga, Tzolk'in y Haab'">
          <Row label="Cuenta larga" value={maya.longCount} big />
          <Row label="Tzolk'in" value={`${maya.tzolkin.number} ${maya.tzolkin.name}`} />
          <Row label="Haab'" value={`${maya.haab.day} ${maya.haab.month}`} />
        </CalendarCard>

        <CalendarCard icon="✡️" tone="slate" title="Hebreo" tagline="Calendario lunisolar tradicional">
          <Row label="Fecha" value={`${hebrew.day} de ${hebrew.month} de ${hebrew.year} ${hebrew.era}`} big />
          <Row label="Día de la semana" value={capitalize(hebrew.weekday)} />
        </CalendarCard>

        <CalendarCard icon="🐉" tone="rose" title="Chino" tagline="Calendario lunisolar tradicional">
          <Row label="Año" value={`${chinese.relatedYear} (${chinese.yearName})`} big />
          <Row label="Mes / día" value={`${chinese.month} · día ${chinese.day}`} />
          <Row label="Día de la semana" value={capitalize(chinese.weekday)} />
        </CalendarCard>
      </section>

      <p className="text-slate-400 text-xs sm:text-sm text-center max-w-2xl mx-auto leading-relaxed">
        Las fechas persa, islámica, hebrea y china se calculan con los algoritmos astronómicos estándar de
        Unicode/ICU. La Cuenta Larga maya usa la correlación GMT (584283), la más aceptada por la
        epigrafía moderna. Las estaciones y solsticios/equinoccios están aproximados para el hemisferio sur.
      </p>
    </div>
  );
}
