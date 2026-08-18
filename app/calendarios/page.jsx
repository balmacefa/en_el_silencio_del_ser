import CalendarExplorer from './CalendarExplorer';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Calendarios del Mundo | En el silencio del ser',
  description:
    'Explora la fecha de hoy —o cualquier otro día, pasado o futuro— a través de distintos calendarios: gregoriano, solar, lunar, maya, hebreo y chino.',
};

export default function Calendarios() {
  const todayISO = new Date().toISOString();
  return <CalendarExplorer initialDateISO={todayISO} />;
}
