"use client";

import { useEffect, useRef } from 'react';

const FIREFLY_COLORS = ['#6366f1', '#f43f5e', '#14b8a6', '#f59e0b', '#8b5cf6', '#06b6d4'];
const FIREFLIES = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 41 + 7) % 100,
  top: (i * 67 + 13) % 100,
  size: 2 + (i % 3),
  delay: (i % 9) * 0.7,
  duration: 7 + (i % 5) * 1.6,
  color: FIREFLY_COLORS[i % FIREFLY_COLORS.length],
}));

/**
 * Ambient full-page background: drifting aurora blobs + twinkling fireflies.
 * Pass `ambient` to also tint the page toward whichever `[data-ambient-color]`
 * section is centered in the viewport as the user scrolls.
 */
export default function DynamicBackground({ ambient = false }) {
  const ambientRef = useRef(null);

  useEffect(() => {
    if (!ambient) return undefined;
    const els = document.querySelectorAll('[data-ambient-color]');
    if (!els.length) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && ambientRef.current) {
            const color = entry.target.getAttribute('data-ambient-color');
            ambientRef.current.style.background = `radial-gradient(1100px 700px at 50% 30%, ${color}2e, transparent 60%)`;
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ambient]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes bgAuroraA { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(40px, 55px) scale(1.15); } }
        @keyframes bgAuroraB { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-55px, 40px) scale(1.1); } }
        @keyframes bgAuroraC { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(35px, -45px) scale(1.2); } }
        @keyframes bgTwinkle { 0%, 100% { opacity: 0.15; transform: scale(0.7); } 50% { opacity: 0.9; transform: scale(1.3); } }
        @media (prefers-reduced-motion: reduce) {
          .bg-anim { animation: none !important; }
        }
      `}</style>

      {ambient && (
        <div ref={ambientRef} className="absolute inset-0 transition-[background] duration-[1400ms] ease-out" />
      )}

      <div
        className="bg-anim absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-violet-400/25 blur-3xl"
        style={{ animation: 'bgAuroraA 22s ease-in-out infinite' }}
      />
      <div
        className="bg-anim absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full bg-rose-400/20 blur-3xl"
        style={{ animation: 'bgAuroraB 27s ease-in-out infinite' }}
      />
      <div
        className="bg-anim absolute bottom-0 left-1/4 w-[24rem] h-[24rem] rounded-full bg-teal-400/20 blur-3xl"
        style={{ animation: 'bgAuroraC 31s ease-in-out infinite' }}
      />
      <div
        className="bg-anim absolute bottom-1/4 right-1/5 w-72 h-72 rounded-full bg-amber-300/20 blur-3xl"
        style={{ animation: 'bgAuroraA 19s ease-in-out infinite reverse' }}
      />

      {FIREFLIES.map((p, i) => (
        <span
          key={i}
          className="bg-anim absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 6px 2px ${p.color}66`,
            animation: `bgTwinkle ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
