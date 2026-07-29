const ACCENTS = {
  indigo: '#4f46e5',
  rose: '#e11d48',
  teal: '#0d9488',
  amber: '#b45309',
};

export default function PoseFigure({ head, lines = [], joints = [], accent = 'indigo', className = '' }) {
  const color = ACCENTS[accent] || ACCENTS.indigo;

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {lines.map((l, i) => (
        <line key={i} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} stroke={color} strokeWidth="4.2" strokeLinecap="round" />
      ))}
      {joints.map((j, i) => (
        <circle key={i} cx={j[0]} cy={j[1]} r="3" fill="#fff" stroke={color} strokeWidth="2.4" />
      ))}
      <circle cx={head[0]} cy={head[1]} r={head[2] || 6} fill={color} fillOpacity="0.16" stroke={color} strokeWidth="3.2" />
    </svg>
  );
}
