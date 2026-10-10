import Link from 'next/link';
import { getLatest, isNew } from '../content/pages';

const TONES = {
  indigo: { chip: 'bg-indigo-50 text-indigo-600', hover: 'hover:border-indigo-200 group-hover:text-indigo-600' },
  teal: { chip: 'bg-teal-50 text-teal-600', hover: 'hover:border-teal-200 group-hover:text-teal-600' },
  rose: { chip: 'bg-rose-50 text-rose-600', hover: 'hover:border-rose-200 group-hover:text-rose-600' },
};

// Server component: la lista sale de content/pages.js, ordenada por fecha.
// La página que la usa es dinámica, así la insignia "Nuevo" caduca sola.
export default function LoUltimo({ count = 4 }) {
  const now = new Date();
  const [featured, ...rest] = getLatest(count);

  return (
    <section aria-labelledby="lo-ultimo" className="w-full space-y-6">
      <div className="flex items-end justify-between border-b border-slate-100 pb-4">
        <div>
          <h2 id="lo-ultimo" className="text-3xl font-bold text-slate-800">Lo último</h2>
          <p className="mt-1 text-slate-500">Lo más reciente que se ha sumado al sitio.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <Link
          href={featured.href}
          className={`group lg:col-span-3 rounded-3xl border border-slate-100 bg-white/70 backdrop-blur-sm p-8 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 motion-reduce:transition-none hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 motion-reduce:hover:translate-y-0 flex flex-col justify-between min-h-[260px] ${TONES[featured.tone].hover}`}
        >
          <div className="flex items-center gap-3">
            <span className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl ${TONES[featured.tone].chip}`} aria-hidden="true">{featured.icon}</span>
            {isNew(featured, now) && <Badge />}
          </div>
          <div className="mt-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-800 transition-colors">{featured.title}</h3>
            <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed max-w-prose">{featured.desc}</p>
            <p className="mt-4 text-sm text-slate-500">{formatDate(featured.added)}</p>
          </div>
        </Link>

        <ul className="lg:col-span-2 flex flex-col gap-3">
          {rest.map((p) => (
            <li key={p.href} className="flex-1">
              <Link
                href={p.href}
                className={`group h-full rounded-2xl border border-slate-100 bg-white/70 backdrop-blur-sm p-5 flex items-center gap-4 min-h-[88px] transition-all duration-300 motion-reduce:transition-none hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] ${TONES[p.tone].hover}`}
              >
                <span className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl ${TONES[p.tone].chip}`} aria-hidden="true">{p.icon}</span>
                <span className="min-w-0">
                  <span className="flex items-center gap-2">
                    <span className="font-bold text-slate-800 transition-colors truncate">{p.title}</span>
                    {isNew(p, now) && <Badge />}
                  </span>
                  <span className="block text-sm text-slate-500">{formatDate(p.added)}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Badge() {
  return (
    <span className="rounded-full bg-indigo-600 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-white">Nuevo</span>
  );
}

function formatDate(iso) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' });
}
