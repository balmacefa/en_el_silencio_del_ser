"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { TONES } from './tones';

// Estado compartido de la ficha: abrir desde una tarjeta, cerrar con salida animada,
// pasar a la anterior/siguiente y devolver el foco a la tarjeta de origen.
// Cada tarjeta debe llevar data-sheet-item={id}; los ids son únicos en toda la página.
export function useSheet(ids) {
  const [openIndex, setOpenIndex] = useState(null);
  const [closing, setClosing] = useState(false);
  const [dir, setDir] = useState(0);
  const lastId = useRef(null);
  const closingRef = useRef(false);
  const origin = useRef(null);
  const open = openIndex !== null;

  const openById = (id) => {
    lastId.current = id;
    const r = document.querySelector(`[data-sheet-item="${id}"]`)?.getBoundingClientRect();
    origin.current = r ? { x: r.left + r.width / 2, y: r.top + r.height / 2 } : null;
    closingRef.current = false;
    setClosing(false);
    setDir(0);
    setOpenIndex(ids.indexOf(id));
  };

  // immediate === true: sin animación de salida (tras deslizar o al navegar a un enlace).
  const close = useCallback((immediate = false) => {
    if (closingRef.current && immediate !== true) return;
    const finish = () => {
      closingRef.current = false;
      setClosing(false);
      setOpenIndex(null);
      const id = lastId.current;
      requestAnimationFrame(() => document.querySelector(`[data-sheet-item="${id}"]`)?.focus());
    };
    if (immediate === true) return finish();
    closingRef.current = true;
    setClosing(true);
    setTimeout(finish, 280);
  }, []);

  const total = ids.length;
  const step = useCallback((direction) => {
    if (closingRef.current) return;
    setDir(direction);
    setOpenIndex((i) => {
      const n = (i + direction + total) % total;
      lastId.current = ids[n];
      return n;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  return { open, openIndex, closing, dir, origin: origin.current, openById, close, step };
}

export function GlassSheet({ tone, badge, meta, icon, title, subtitle, index, total, contentKey, closing, dir, origin, onClose, onStep, children }) {
  const t = TONES[tone];
  const closeRef = useRef(null);
  const dialogRef = useRef(null);
  const drag = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, [contentKey]);

  // En pantallas anchas la ficha crece desde la tarjeta tocada y vuelve a ella al cerrar.
  useLayoutEffect(() => {
    if (!origin || !window.matchMedia('(min-width: 640px)').matches) return;
    const r = dialogRef.current.getBoundingClientRect();
    dialogRef.current.style.transformOrigin = `${origin.x - r.left}px ${origin.y - r.top}px`;
  }, [origin]);

  // Mantiene el foco dentro de la ficha mientras está abierta.
  const trapTab = (e) => {
    if (e.key !== 'Tab') return;
    const items = dialogRef.current.querySelectorAll('button, a[href]');
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  // Cerrar deslizando hacia abajo desde el asa (solo móvil).
  const onDragStart = (e) => {
    drag.current = { y: e.clientY, t: e.timeStamp };
    e.currentTarget.setPointerCapture(e.pointerId);
    dialogRef.current.style.transition = 'none';
  };
  const onDragMove = (e) => {
    if (!drag.current) return;
    dialogRef.current.style.transform = `translateY(${Math.max(0, e.clientY - drag.current.y)}px)`;
  };
  const onDragEnd = (e) => {
    if (!drag.current) return;
    const dy = e.clientY - drag.current.y;
    const velocity = dy / Math.max(1, e.timeStamp - drag.current.t);
    drag.current = null;
    const el = dialogRef.current;
    el.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)';
    if (dy > 120 || velocity > 0.6) {
      el.style.transform = 'translateY(110%)';
      setTimeout(() => onClose(true), 220);
    } else {
      el.style.transform = '';
    }
  };

  const contentClass = dir === 0 ? 'sheet-content stagger-on' : dir > 0 ? 'sheet-content-next' : 'sheet-content-prev';

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6" role="presentation">
      <div className={`${closing ? 'sheet-scrim-out' : 'sheet-scrim'} absolute inset-0 bg-slate-900/25`} onClick={() => onClose()} aria-hidden="true" />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
        onKeyDown={trapTab}
        className={`glass-sheet ${closing ? 'sheet-out' : 'sheet-in'} relative max-h-[88vh] w-full overflow-y-auto rounded-t-3xl sm:max-w-2xl sm:rounded-3xl`}
      >
        <div
          className="relative flex justify-center pb-1 pt-3 sm:hidden"
          style={{ touchAction: 'none' }}
          onPointerDown={onDragStart}
          onPointerMove={onDragMove}
          onPointerUp={onDragEnd}
          onPointerCancel={onDragEnd}
          aria-hidden="true"
        >
          <span className="h-1.5 w-10 rounded-full bg-slate-400/60" />
        </div>
        {/* El color vive en la capa de contenido; el vidrio solo lo refleja. */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-56"
          style={{ background: `radial-gradient(60% 100% at 15% 0%, rgba(${t.glow},0.28), transparent 70%)` }}
          aria-hidden="true"
        />
        <div key={contentKey} className={`${contentClass} relative p-6 sm:p-8`}>
          <div className="mb-4 flex items-start justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${t.chip}`}>{badge}</span>
              <span className="text-sm text-slate-600">{meta}</span>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="px-1 text-sm tabular-nums text-slate-600" aria-live="polite">
                <span className="sr-only">Elemento </span>{index + 1} / {total}
              </span>
              <button type="button" onClick={() => onStep(-1)} aria-label="Anterior" className="glass-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button type="button" onClick={() => onStep(1)} aria-label="Siguiente" className="glass-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg>
              </button>
              <button ref={closeRef} type="button" onClick={() => onClose()} aria-label="Cerrar" className="glass-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-3xl ${t.tile}`} aria-hidden="true">{icon}</span>
            <div>
              <h3 id="sheet-title" className="text-3xl font-bold leading-tight text-slate-900">{title}</h3>
              <p className="text-base text-slate-600">{subtitle}</p>
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
