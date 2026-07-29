"use client";

import { useCallback, useEffect, useRef } from 'react';

export default function ScrollProgressBar() {
  const fillRef = useRef(null);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) * 100 : 0;
      if (fillRef.current) fillRef.current.style.width = `${pct}%`;
      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="fixed top-[70px] left-0 w-full h-[3px] bg-transparent z-40 pointer-events-none">
      <div
        ref={fillRef}
        className="h-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400 transition-[width] duration-100 ease-out"
        style={{ width: '0%' }}
      />
    </div>
  );
}
