import MoonExplorer from './MoonExplorer';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Estado Actual de la Luna | En el silencio del ser',
  description: 'Consulta la fase lunar de cualquier día, su porcentaje de iluminación, las próximas lunas llena y nueva, y una investigación sobre sus efectos en animales, plantas, seres humanos y la sociedad.',
};

export default function Luna() {
  const todayISO = new Date().toISOString();
  return <MoonExplorer initialDateISO={todayISO} />;
}
