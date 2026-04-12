"use client";

import { useState, useEffect, useRef } from 'react';
import { ashtangaSequence } from './ashtangaSequence';

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
    <div className="container">
      <h1>Ashtanga Yoga - Primera Serie</h1>
      <p>
        Fuente Original - imágenes y secuencias fueron obtenidas del sitio web{' '}
        <a href="https://www.keenonyoga.com/ashtanga-yoga-primary-series/" target="_blank" rel="noreferrer">
          Keen on Yoga
        </a>
      </p>

      <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <label>
          Duración por Asana (mm:ss) 
          <input type="text" value={asanaTimeStr} onChange={e => setAsanaTimeStr(e.target.value)} style={{ marginLeft: '10px', padding: '5px' }} />
        </label>
        <label>
          Transición (mm:ss) 
          <input type="text" value={transitionTimeStr} onChange={e => setTransitionTimeStr(e.target.value)} style={{ marginLeft: '10px', padding: '5px' }} />
        </label>
        <button onClick={() => { setIsRunning(false); startSequence(); }} style={{ padding: '8px 16px', background: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Iniciar Práctica
        </button>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <button onClick={goToPrevAsana} style={{ padding: '8px 16px', background: '#e0e0e0', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          ❮ Anterior
        </button>
        <button onClick={goToNextAsana} style={{ padding: '8px 16px', background: '#e0e0e0', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Siguiente ❯
        </button>
      </div>

      {currentAsana ? (
        <div style={{ border: '1px solid #ddd', padding: '2rem', borderRadius: '8px', marginBottom: '2rem', textAlign: 'center', background: '#fff' }}>
          <h2>{currentAsana.sanskrit}</h2>
          <h3 style={{ color: '#555', marginBottom: '1rem' }}>
            {currentAsana.popular}
            {currentAsana.sides ? (leftDone ? " (lado derecho)" : " (lado izquierdo)") : ""}
          </h3>
          <img src={currentAsana.image} alt={currentAsana.sanskrit} style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
          <p style={{ marginTop: '1rem' }}>{currentAsana.description}</p>
        </div>
      ) : (
        <div style={{ border: '1px solid #ddd', padding: '2rem', borderRadius: '8px', marginBottom: '2rem', textAlign: 'center', background: '#fff' }}>
          <h2>Práctica Finalizada</h2>
          <p>Namasté</p>
        </div>
      )}

      <div style={{ border: '1px solid #ddd', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', background: '#f9f9f9' }}>
        <h3>Siguiente Asana</h3>
        {nextAsana ? (
          <>
            <h4 style={{ margin: '1rem 0', color: '#555' }}>
              {nextAsana.sanskrit}{nextAsana.sideDesc}
            </h4>
            {nextAsana.image && <img src={nextAsana.image} alt="Siguiente posture" style={{ maxWidth: '200px' }} />}
          </>
        ) : (
          <h4 style={{ margin: '1rem 0', color: '#555' }}>Fin</h4>
        )}
      </div>
    </div>
  );
}
