"use client";

import { useEffect } from 'react';
import Script from 'next/script';

export default function RespiracionAutoGuiadas() {
  useEffect(() => {
    window.initBreatheLogic = () => {
      if (window.logicInitialized || !window.$ || !window.Tone) return;
      window.logicInitialized = true;
      const $ = window.$;
      const Tone = window.Tone;

      let soundEnabled = true;
      let voiceEnabled = true;

      const voiceAudios = {
        Inhalar: new Audio("/audios/Inhalar.mp3"),
        Retener: new Audio("/audios/Retener.mp3"),
        Exhalar: new Audio("/audios/Exhalar.mp3"),
        Vacío: new Audio("/audios/Vacio.mp3"),
      };

      let currentVoiceAudio = null;

      function playVoiceAudio(phase) {
        if (voiceEnabled) {
          if (currentVoiceAudio) {
            currentVoiceAudio.pause();
            currentVoiceAudio.currentTime = 0;
          }
          currentVoiceAudio = voiceAudios[phase];
          if (!currentVoiceAudio) return;
          currentVoiceAudio.play().catch(e => console.log('Audio error:', e));
        }
      }

      const reverb = new Tone.Reverb({ decay: 3, preDelay: 0.5 }).toDestination();
      const delay = new Tone.FeedbackDelay("8n", 0.4).connect(reverb);
      const synth = new Tone.Synth({
        oscillator: { type: "sine" },
        envelope: { attack: 0.5, decay: 0.2, sustain: 0.3, release: 1 },
      }).connect(delay);

      const melodies = {
        Inhalar: [{ note: "A3", dur: "8n" }, { note: "C4", dur: "8n" }, { note: "D4", dur: "4n" }, { note: "E4", dur: "4n" }],
        Retener: [{ note: "E4", dur: "1n." }],
        Exhalar: [{ note: "E4", dur: "4n" }, { note: "D4", dur: "8n" }, { note: "C4", dur: "8n" }, { note: "A3", dur: "2n" }],
        Vacío: [{ note: "F3", dur: "1n" }, { note: "A2", dur: "1n" }],
      };

      $("#toggleSoundBtn").on("click", () => {
        soundEnabled = !soundEnabled;
        $("#toggleSoundBtn").text(`🔈 Sonido: ${soundEnabled ? "Activado" : "Desactivado"}`);
      });

      $("#toggleVoiceBtn").on("click", () => {
        voiceEnabled = !voiceEnabled;
        $("#toggleVoiceBtn").text(`🗣️ Voz: ${voiceEnabled ? "Activada" : "Desactivada"}`);
      });

      function playSound(phase, durationInSeconds) {
        if (soundEnabled && melodies[phase]) {
          try {
            Tone.start();
            const now = Tone.now();
            if (durationInSeconds <= 2) {
              const monotoneNotes = { Inhalar: "C4", Retener: "D4", Exhalar: "E4", Vacío: "F4" };
              synth.triggerAttackRelease(monotoneNotes[phase] || "C4", durationInSeconds / 2, now);
            } else {
              melodies[phase].forEach((item, i) => {
                const time = now + i * 0.6;
                synth.triggerAttackRelease(item.note, item.dur, time);
              });
            }
          } catch(e) {}
        }
        playVoiceAudio(phase);
      }

      const styles = {
        box: { times: [4, 4, 4, 4], phases: ["Inhalar", "Retener", "Exhalar", "Vacío"], title: "Box Breathing", desc: "Una técnica usada por Navy SEALs para controlar el estrés y calmar la mente. (4s Inhalar, 4s Retener, 4s Exhalar, 4s Vacío)" },
        478: { times: [4, 7, 8, 0], phases: ["Inhalar", "Retener", "Exhalar", ""], title: "4-7-8", desc: "Técnica relajante para ayudar a conciliar el sueño y reducir la ansiedad. (4s Inhalar, 7s Retener, 8s Exhalar)" },
        wimhof: { times: [2, 0, 2, 0], phases: ["Inhalar", "", "Exhalar", ""], title: "Wim Hof", desc: "Respiración rápida y controlada para aumentar energía y resistencia. (2s Inhalar, 2s Exhalar)" },
        4422: { times: [4, 4, 2, 2], phases: ["Inhalar", "Retener", "Exhalar", "Vacío"], title: "4-4-2-2", desc: "Una técnica equilibrada para relajar la mente manteniendo un ciclo suave. (4s Inhalar, 4s Retener, 2s Exhalar, 2s Vacío)" },
      };

      let interval;
      let timerInterval;
      let phaseIndex = 0;
      let currentStyle = null;
      let totalSeconds = 0;

      function updateBackground(phase) {
        const colors = { Inhalar: "#eaf3ea", Retener: "#f7f3e9", Exhalar: "#f4ebe8", Vacío: "#fdfdfb" };
        $("body").css("background-color", colors[phase] || "#f9f6f1");
      }

      function animateCircle(phase, durationInSeconds) {
        const $circle = $("#breathCircle");
        $circle.css("animation", "none");
        $circle[0].offsetHeight;
        $circle.css("transition", `transform ${durationInSeconds}s ease-in-out, background-color ${durationInSeconds}s`);

        if (phase === "Inhalar") {
          $circle.css({ transform: "scale(1.5)", backgroundColor: "#a3c1ad" });
        } else if (phase === "Exhalar") {
          $circle.css({ transform: "scale(1)", backgroundColor: "#b3a397" });
        } else if (phase === "Retener") {
          $circle.css({ backgroundColor: "#c9cbbf", animation: `pulse ${durationInSeconds}s ease-in-out` });
        } else if (phase === "Vacío") {
          $circle.css({ transform: "scale(1.1)", backgroundColor: "#f0eae1" });
        }
      }

      function nextPhase() {
        const time = currentStyle.times[phaseIndex];
        const phase = currentStyle.phases[phaseIndex];

        playSound(phase, time);

        if (time === 0) {
          phaseIndex = (phaseIndex + 1) % currentStyle.times.length;
          return nextPhase();
        }

        $("#phaseLabel").text(phase);
        $("#timeLeft").text(`${time}s`);
        updateBackground(phase);
        animateCircle(phase, time);

        let t = time;
        interval = setInterval(() => {
          t--;
          $("#timeLeft").text(`${t}s`);
          if (t <= 0) {
            clearInterval(interval);
            phaseIndex = (phaseIndex + 1) % currentStyle.times.length;
            nextPhase();
          }
        }, 1000);
      }

      function startBreathing(styleKey) {
        $("#session").show();
        if (!styles[styleKey]) return;
        clearInterval(interval);
        clearInterval(timerInterval);
        currentStyle = styles[styleKey];
        phaseIndex = 0;
        totalSeconds = 0;

        $("#techniqueTitle").text(currentStyle.title);
        $("#techniqueDescription").text(currentStyle.desc);
        $("#techniqueInfo").show();

        timerInterval = setInterval(() => {
          totalSeconds++;
          const minutes = Math.floor(totalSeconds / 60);
          const seconds = totalSeconds % 60;
          const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
          $("#sessionTimer").text(`Tiempo total: ${formattedTime}`);
        }, 1000);

        nextPhase();
      }

      $(".start-btn").on("click", function () {
        startBreathing($(this).data("style"));
      });

      $("#stopBtn").on("click", () => {
        clearInterval(interval);
        clearInterval(timerInterval);
        $("#phaseLabel").text("Selecciona una técnica");
        $("#timeLeft").text("");
        $("#techniqueInfo").hide();
        $("#sessionTimer").text("Tiempo total: 0s");
        $("body").css("background-color", "#f9f6f1");
        $("#breathCircle").css({ transform: "scale(1)", backgroundColor: "#a3c1ad", animation: "none" });
        $("#carouselContainer").show();
        $("#session").hide();
      });
      
    };

    return () => {
      document.body.style.backgroundColor = '';
      if (window.$) {
        window.clearInterval(window.$interval);
        window.clearInterval(window.$timerInterval);
      }
      window.logicInitialized = false;
    }
  }, []);

  return (
    <>
      <Script src="https://code.jquery.com/jquery-3.7.1.min.js" strategy="afterInteractive" onLoad={() => window.initBreatheLogic?.()} />
      <Script src="https://cdn.jsdelivr.net/npm/tone@14.8.49/build/Tone.min.js" strategy="afterInteractive" onLoad={() => window.initBreatheLogic?.()} />
      
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h1 style={{ marginBottom: '2rem' }}>Prácticas de Respiración Consciente Auto guiadas</h1>

        <div id="carouselContainer" style={{ marginBottom: '3rem' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            <div className="bg-white/80 backdrop-blur-md border border-slate-100 rounded-2xl p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:border-teal-100 flex flex-col justify-between h-full">
              <h2 className="text-2xl text-[#2c3e50] mb-4">Box Breathing</h2>
              <p className="text-[#555] mb-6 leading-relaxed">4s Inhalar, 4s Retener, 4s Exhalar, 4s Vacío</p>
              <button className="inline-block px-5 py-2.5 rounded-md font-semibold cursor-pointer border-none transition-opacity hover:opacity-90 no-underline bg-[#3498db] text-white w-full start-btn" data-style="box">Iniciar</button>
            </div>
            <div className="bg-white/80 backdrop-blur-md border border-slate-100 rounded-2xl p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:border-teal-100 flex flex-col justify-between h-full">
              <h2 className="text-2xl text-[#2c3e50] mb-4">4-7-8</h2>
              <p className="text-[#555] mb-6 leading-relaxed">4s Inhalar, 7s Retener, 8s Exhalar</p>
              <button className="inline-block px-5 py-2.5 rounded-md font-semibold cursor-pointer border-none transition-opacity hover:opacity-90 no-underline bg-[#3498db] text-white w-full start-btn" data-style="478">Iniciar</button>
            </div>
            <div className="bg-white/80 backdrop-blur-md border border-slate-100 rounded-2xl p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:border-teal-100 flex flex-col justify-between h-full">
              <h2 className="text-2xl text-[#2c3e50] mb-4">Wim Hof</h2>
              <p className="text-[#555] mb-6 leading-relaxed">2s Inhalar, 2s Exhalar</p>
              <button className="inline-block px-5 py-2.5 rounded-md font-semibold cursor-pointer border-none transition-opacity hover:opacity-90 no-underline bg-[#3498db] text-white w-full start-btn" data-style="wimhof">Iniciar</button>
            </div>
            <div className="bg-white/80 backdrop-blur-md border border-slate-100 rounded-2xl p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:border-teal-100 flex flex-col justify-between h-full">
              <h2 className="text-2xl text-[#2c3e50] mb-4">4-4-2-2</h2>
              <p className="text-[#555] mb-6 leading-relaxed">4s Inhalar, 4s Retener, 2s Exhalar, 2s Vacío</p>
              <button className="inline-block px-5 py-2.5 rounded-md font-semibold cursor-pointer border-none transition-opacity hover:opacity-90 no-underline bg-[#3498db] text-white w-full start-btn" data-style="4422">Iniciar</button>
            </div>
          </div>
        </div>

        <div id="session" style={{ display: 'none' }} className="mt-16 mx-auto border-[6px] border-indigo-50/80 bg-white/95 backdrop-blur-xl p-8 sm:p-12 rounded-[2rem] max-w-lg shadow-[0_10px_40px_rgba(0,0,0,0.06)] relative">
          <div id="techniqueInfo" style={{ display: 'none', marginBottom: '1.5rem' }}>
            <h3 id="techniqueTitle" style={{ marginBottom: '0.5rem', color: '#2c3e50' }}></h3>
            <p id="techniqueDescription" style={{ marginBottom: '1rem', color: '#666', fontSize: '0.95rem' }}></p>
            <div id="sessionTimer" style={{ fontWeight: '600' }}>Tiempo total: 0s</div>
          </div>

          <div style={{ position: 'relative', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
            <div id="breathCircle" style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#a3c1ad', position: 'absolute' }}></div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontWeight: 'bold' }}>
              <div id="timeLeft" style={{ fontSize: '2rem', marginBottom: '0.2rem' }}></div>
              <div id="phaseLabel" style={{ fontSize: '1.2rem' }}></div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button id="stopBtn" className="inline-block px-5 py-2.5 rounded-md font-semibold cursor-pointer border-none transition-opacity hover:opacity-90 no-underline bg-[#e74c3c] text-white">Detener</button>
            <button id="toggleSoundBtn" className="inline-block px-5 py-2.5 rounded-md font-semibold cursor-pointer border-none transition-opacity hover:opacity-90 no-underline bg-[#95a5a6] text-white">🔈 Sonido: Activado</button>
            <button id="toggleVoiceBtn" className="inline-block px-5 py-2.5 rounded-md font-semibold cursor-pointer border-none transition-opacity hover:opacity-90 no-underline bg-[#95a5a6] text-white">🗣️ Voz: Activada</button>
          </div>
        </div>

        <footer style={{ marginTop: '4rem', color: '#888' }}>
          <p>Hecho con ❤️</p>
        </footer>
      </div>
    </>
  );
}
