"use client";

import { useEffect, useRef, useState } from 'react';

/**
 * Fades, scales and gently tilts children into place the first time they
 * scroll into view. `index` staggers the delay and alternates tilt direction.
 */
export default function Reveal({ children, className = '', index = 0, as: Tag = 'div' }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '-40px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const tilt = index % 2 === 0 ? '-rotate-2' : 'rotate-2';

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0 scale-100 rotate-0' : `opacity-0 translate-y-10 scale-95 ${tilt}`
      } ${className}`}
      style={{ transitionDelay: inView ? `${Math.min(index, 6) * 80}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}
