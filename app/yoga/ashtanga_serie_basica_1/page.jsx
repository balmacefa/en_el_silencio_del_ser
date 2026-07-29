"use client";

import { useState, useEffect, useRef } from 'react';
import { ashtangaSequence } from './ashtangaSequence';
import SectionDivider from '../../components/SectionDivider';

export default function AshtangaSerieBasica() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [leftDone, setLeftDone] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  
  const [asanaTimeStr, setAsanaTimeStr] = useState("00:30");
  const [transitionTimeStr, setTransitionTimeStr] = useState("00:05");
  
  const timeoutRef = useRef(null);

  const parseTime = (str) => {
    const [mm, ss] = str.split(':').map(Number);
    return (mm * 60 + (ss || 0));
  };

  const playTone = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === "suspended") ctx.resume();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(660, ctx.currentTime);
      gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 1);
      oscillator.start();
      oscillator.stop(ctx.currentTime + 1);
    } catch(e) {
      console.log('Audio disabled without interaction', e);
    }
  };

  const currentAsana = ashtangaSequence[currentIndex] || null;

  const getNextAsanaInfo = () => {
    if (!currentAsana) return null;
    if (currentAsana.sides && !leftDone) {
      return { ...currentAsana, sideDesc: " (lado derecho)" };
    }
    if (currentIndex + 1 < ashtangaSequence.length) {
      const n = ashtangaSequence[currentIndex + 1];
      return { ...n, sideDesc: n.sides ? " (lado izquierdo)" : "" };
    }
    return null;
  };

  const startSequence = () => {
    clearTimeout(timeoutRef.current);
    setCurrentIndex(0);
    setLeftDone(false);
    setIsRunning(true);
    triggerNextStep(0, false);
  };

  const triggerNextStep = (index, lDone) => {
    playTone();
    const asanaTime = parseTime(asanaTimeStr) * 1000;
    const transitionTime = parseTime(transitionTimeStr) * 1000;
    
    timeoutRef.current = setTimeout(() => {
      const activeAsana = ashtangaSequence[index];
      if (activeAsana.sides && !lDone) {
        setLeftDone(true);
        setTimeout(() => {
          if (isRunning) triggerNextStep(index, true);
        }, transitionTime);
      } else {
        if (index + 1 >= ashtangaSequence.length) {
          setIsRunning(false);
          alert("Secuencia completada 🙏");
          return;
        }
        setCurrentIndex(index + 1);
        setLeftDone(false);
        setTimeout(() => {
          if (isRunning) triggerNextStep(index + 1, false);
        }, transitionTime);
      }
    }, asanaTime);
  };

  const goToNextAsana = () => {
    clearTimeout(timeoutRef.current);
    setIsRunning(false);
    if (currentAsana?.sides && !leftDone) {
      setLeftDone(true);
    } else {
      if (currentIndex < ashtangaSequence.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setLeftDone(false);
      }
    }
  };

  const goToPrevAsana = () => {
    clearTimeout(timeoutRef.current);
    setIsRunning(false);
    if (currentAsana?.sides && leftDone) {
      setLeftDone(false);
    } else {
      if (currentIndex > 0) {
        const prevAsana = ashtangaSequence[currentIndex - 1];
        setCurrentIndex(currentIndex - 1);
        setLeftDone(!!prevAsana.sides);
      }
    }
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const nextAsana = getNextAsanaInfo();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-indigo-600 tracking-tight">
          Ashtanga Yoga — Primera Serie
        </h1>
        <SectionDivider />
        <p className="text-slate-500 text-sm">
          Fuente original — imágenes y secuencias obtenidas del sitio web{' '}
          <a href="https://www.keenonyoga.com/ashtanga-yoga-primary-series/" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
            Keen on Yoga
          </a>
        </p>
      </div>

      <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 mb-8 flex flex-wrap gap-6 items-end justify-center">
        <label className="text-sm text-slate-600 font-medium">
          Duración por Asana (mm:ss)
          <input
            type="text"
            value={asanaTimeStr}
            onChange={e => setAsanaTimeStr(e.target.value)}
            className="block mt-1 px-3 py-2 rounded-lg border border-slate-200 text-slate-800 w-28 text-center focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </label>
        <label className="text-sm text-slate-600 font-medium">
          Transición (mm:ss)
          <input
            type="text"
            value={transitionTimeStr}
            onChange={e => setTransitionTimeStr(e.target.value)}
            className="block mt-1 px-3 py-2 rounded-lg border border-slate-200 text-slate-800 w-28 text-center focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </label>
        <button
          onClick={() => { setIsRunning(false); startSequence(); }}
          className="px-6 py-2.5 rounded-xl font-semibold text-white bg-indigo-600 shadow-md shadow-indigo-200 transition-all hover:bg-indigo-700 hover:-translate-y-0.5"
        >
          Iniciar Práctica
        </button>
      </div>

      <div className="flex gap-4 mb-8 justify-center">
        <button onClick={goToPrevAsana} className="px-5 py-2.5 rounded-xl font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
          ❮ Anterior
        </button>
        <button onClick={goToNextAsana} className="px-5 py-2.5 rounded-xl font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
          Siguiente ❯
        </button>
      </div>

      {currentAsana ? (
        <div className="rounded-[2rem] bg-white/80 backdrop-blur-md border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-8 sm:p-10 mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">{currentAsana.sanskrit}</h2>
          <h3 className="text-slate-500 mb-6 mt-1">
            {currentAsana.popular}
            {currentAsana.sides ? (leftDone ? " (lado derecho)" : " (lado izquierdo)") : ""}
          </h3>
          <img src={currentAsana.image} alt={currentAsana.sanskrit} className="max-w-full max-h-96 object-contain mx-auto" />
          <p className="mt-6 text-slate-600 leading-relaxed max-w-2xl mx-auto">{currentAsana.description}</p>
        </div>
      ) : (
        <div className="rounded-[2rem] bg-white/80 backdrop-blur-md border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-10 mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-800">Práctica Finalizada</h2>
          <p className="text-slate-500 mt-2">Namasté 🙏</p>
        </div>
      )}

      <div className="rounded-2xl bg-white/60 backdrop-blur-md border border-slate-100 p-6 text-center">
        <h3 className="text-lg font-semibold text-slate-700 uppercase tracking-wide text-sm">Siguiente Asana</h3>
        {nextAsana ? (
          <>
            <h4 className="my-3 text-slate-600 font-medium">
              {nextAsana.sanskrit}{nextAsana.sideDesc}
            </h4>
            {nextAsana.image && <img src={nextAsana.image} alt="Siguiente postura" className="max-w-[200px] mx-auto opacity-80" />}
          </>
        ) : (
          <h4 className="my-3 text-slate-500">Fin</h4>
        )}
      </div>
    </div>
  );
}
