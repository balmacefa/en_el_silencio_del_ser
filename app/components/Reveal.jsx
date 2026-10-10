"use client";

import { useEffect, useRef, useState } from 'react';

// Aparición suave al hacer scroll. Sin JS o con "reducir movimiento" todo queda visible.
// Solo se oculta lo que está debajo del pliegue, así el primer pantallazo nunca parpadea.
export default function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [state, setState] = useState('visible');

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
    setState('hidden');
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('visible');
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: state === 'visible' ? `${delay}ms` : '0ms' }}
      className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        state === 'hidden' ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}
