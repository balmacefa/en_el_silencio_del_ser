"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [yogaOpen, setYogaOpen] = useState(false);
  const [respOpen, setRespOpen] = useState(false);
  const [reflexOpen, setReflexOpen] = useState(false);
  const [sanscritoOpen, setSanscritoOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm transition-all">
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl italic font-semibold text-slate-800 tracking-tight flex-shrink-0 [font-family:var(--font-playfair)]" onClick={() => setIsOpen(false)}>
            Inicio
          </Link>
          
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <ul className="hidden md:flex gap-6 items-center">
            <li className="relative group">
              <button className="flex items-center gap-1 text-slate-600 font-medium hover:text-slate-900 py-4 transition-colors">
                🧘 Yoga
                <svg className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 min-w-[240px] p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <li><Link href="/yoga/experiencia_personal" className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-indigo-600 rounded-lg transition-colors">Experiencia Personal</Link></li>
                <li><Link href="/yoga/historia_del_yoga" className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-indigo-600 rounded-lg transition-colors">Historia del Yoga</Link></li>
                <li><Link href="/yoga/ocho_ramas_del_yoga" className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-indigo-600 rounded-lg transition-colors">Las 8 Ramas del Yoga</Link></li>
                <li><Link href="/yoga/ashtanga_serie_basica_1" className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-indigo-600 rounded-lg transition-colors">Ashtanga: Serie Básica</Link></li>
                <li><Link href="/asanas" className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-indigo-600 rounded-lg transition-colors">Catálogo de Asanas</Link></li>
                <li><Link href="/yoga/youtube" className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-indigo-600 rounded-lg transition-colors">Recomendaciones Youtube</Link></li>
              </ul>
            </li>

            <li className="relative group">
              <button className="flex items-center gap-1 text-slate-600 font-medium hover:text-slate-900 py-4 transition-colors">
                📜 Sánscrito
                <svg className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 min-w-[240px] p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <li><Link href="/sanscrito/nivel_practico_1" className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-indigo-600 rounded-lg transition-colors">Nivel práctico 1</Link></li>
              </ul>
            </li>

            <li className="relative group">
              <button className="flex items-center gap-1 text-slate-600 font-medium hover:text-slate-900 py-4 transition-colors">
                🌬️ Respiración
                <svg className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 min-w-[240px] p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <li><Link href="/respiracion_conciente" className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-indigo-600 rounded-lg transition-colors">Respiración Consciente</Link></li>
                <li><Link href="/respiracion_conciente_auto_guiadas" className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-indigo-600 rounded-lg transition-colors">Prácticas Auto Guiadas</Link></li>
                <li><Link href="/respira_sin_fin" className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-indigo-600 rounded-lg transition-colors">🌀 Respira sin Fin</Link></li>
              </ul>
            </li>

            <li className="relative group">
              <button className="flex items-center gap-1 text-slate-600 font-medium hover:text-slate-900 py-4 transition-colors">
                ✨ Reflexiones
                <svg className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 min-w-[240px] p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <li><Link href="/reflexiones" className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-rose-600 rounded-lg font-bold transition-colors">Ver Todo</Link></li>
                <li><Link href="/reflexiones/cuatro_sendas_al_silencio" className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-rose-600 rounded-lg transition-colors">4 Sendas al Silencio</Link></li>
                <li><Link href="/reflexiones/el_silencio_de_un_adios" className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-rose-600 rounded-lg transition-colors">El Silencio de un Adiós</Link></li>
                <li><Link href="/reflexiones/el_umbral_de_los_sentidos" className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-rose-600 rounded-lg transition-colors">El Umbral de los Sentidos</Link></li>
                <li><Link href="/reflexiones/estados_de_conciencia" className="block px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-rose-600 rounded-lg transition-colors">Estados de Conciencia</Link></li>
              </ul>
            </li>

            <li><Link href="/mantras_meditacion_guiada" className="text-slate-600 font-medium hover:text-slate-900 transition-colors py-4">🎧 Mantras</Link></li>
            <li><Link href="/salud_mental" className="text-slate-600 font-medium hover:text-slate-900 transition-colors py-4">🧠 Salud Mental</Link></li>
            <li><Link href="/luna" className="text-slate-600 font-medium hover:text-slate-900 transition-colors py-4">🌙 Luna</Link></li>
            <li><Link href="/calendarios" className="text-slate-600 font-medium hover:text-slate-900 transition-colors py-4">📅 Calendarios</Link></li>
          </ul>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[600px] border-t border-slate-100 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-4 pr-6 space-y-1 bg-white/95 backdrop-blur-md shadow-inner flex flex-col">
          <div className="mb-2">
            <button onClick={() => setYogaOpen(!yogaOpen)} className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg">
              <span>🧘 Yoga</span>
              <svg className={`w-4 h-4 transition-transform ${yogaOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {yogaOpen && (
              <div className="pl-6 pt-1 space-y-1">
                <Link href="/yoga/experiencia_personal" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-lg">Experiencia Personal</Link>
                <Link href="/yoga/historia_del_yoga" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-lg">Historia del Yoga</Link>
                <Link href="/yoga/ocho_ramas_del_yoga" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-lg">Las 8 Ramas del Yoga</Link>
                <Link href="/yoga/ashtanga_serie_basica_1" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-lg">Ashtanga: Serie Básica</Link>
                <Link href="/asanas" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-lg">Catálogo de Asanas</Link>
                <Link href="/yoga/youtube" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-lg">Recomendaciones Youtube</Link>
              </div>
            )}
          </div>

          <div className="mb-2">
            <button onClick={() => setSanscritoOpen(!sanscritoOpen)} className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg">
              <span>📜 Sánscrito</span>
              <svg className={`w-4 h-4 transition-transform ${sanscritoOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {sanscritoOpen && (
              <div className="pl-6 pt-1 space-y-1">
                <Link href="/sanscrito/nivel_practico_1" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-lg">Nivel práctico 1</Link>
              </div>
            )}
          </div>

          <div className="mb-2">
            <button onClick={() => setRespOpen(!respOpen)} className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg">
              <span>🌬️ Respiración</span>
              <svg className={`w-4 h-4 transition-transform ${respOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {respOpen && (
              <div className="pl-6 pt-1 space-y-1">
                <Link href="/respiracion_conciente" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-lg">Respiración Consciente</Link>
                <Link href="/respiracion_conciente_auto_guiadas" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-lg">Prácticas Auto Guiadas</Link>
                <Link href="/respira_sin_fin" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-lg">🌀 Respira sin Fin</Link>
              </div>
            )}
          </div>

          <div className="mb-2">
            <button onClick={() => setReflexOpen(!reflexOpen)} className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg">
              <span>✨ Reflexiones</span>
              <svg className={`w-4 h-4 transition-transform ${reflexOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {reflexOpen && (
              <div className="pl-6 pt-1 space-y-1">
                <Link href="/reflexiones" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-rose-600 hover:bg-slate-50 rounded-lg font-bold">Ver Todo</Link>
                <Link href="/reflexiones/cuatro_sendas_al_silencio" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-rose-600 hover:bg-slate-50 rounded-lg">4 Sendas al Silencio</Link>
                <Link href="/reflexiones/el_silencio_de_un_adios" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-rose-600 hover:bg-slate-50 rounded-lg">El Silencio de un Adiós</Link>
                <Link href="/reflexiones/el_umbral_de_los_sentidos" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-rose-600 hover:bg-slate-50 rounded-lg">El Umbral de los Sentidos</Link>
                <Link href="/reflexiones/estados_de_conciencia" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-600 hover:text-rose-600 hover:bg-slate-50 rounded-lg">Estados de Conciencia</Link>
              </div>
            )}
          </div>

          <Link href="/mantras_meditacion_guiada" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg">🎧 Mantras</Link>
          <Link href="/salud_mental" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg">🧠 Salud Mental</Link>
          <Link href="/luna" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg">🌙 Luna</Link>
          <Link href="/calendarios" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg">📅 Calendarios</Link>
        </div>
      </div>
    </nav>
  );
}

