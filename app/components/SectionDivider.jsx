export default function SectionDivider({ className = '', tone = 'indigo' }) {
  const tones = {
    indigo: 'text-indigo-400',
    rose: 'text-rose-400',
    teal: 'text-teal-500',
    amber: 'text-amber-400',
  };

  return (
    <div className={`flex items-center justify-center gap-3 select-none ${className}`} aria-hidden="true">
      <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-slate-300/80" />
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={tones[tone] || tones.indigo}>
        <path
          d="M12 2C12 2 7 8 7 13C7 17.4183 9.23858 21 12 21C14.7614 21 17 17.4183 17 13C17 8 12 2 12 2Z"
          stroke="currentColor"
          strokeWidth="1.3"
          fill="currentColor"
          fillOpacity="0.12"
        />
      </svg>
      <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-slate-300/80" />
    </div>
  );
}
