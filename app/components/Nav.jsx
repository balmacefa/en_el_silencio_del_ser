"use client";

import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="custom-navbar">
      <div className="navbar-container">
        <Link href="/" className="brand-link">
          Inicio
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <span className="nav-link">🧘 Yoga ▾</span>
            <ul className="dropdown-menu">
              <li>
                <Link href="/yoga/experiencia_personal" className="dropdown-item">
                  Experiencia Personal
                </Link>
              </li>
              <li>
                <Link href="/yoga/ashtanga_serie_basica_1" className="dropdown-item">
                  Ashtanga: Serie Básica
                </Link>
              </li>
              <li>
                <Link href="/yoga/youtube" className="dropdown-item">
                  Recomendaciones Youtube
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <span className="nav-link">🌬️ Respiración ▾</span>
            <ul className="dropdown-menu">
              <li>
                <Link href="/respiracion_conciente" className="dropdown-item">
                  Respiración Consciente
                </Link>
              </li>
              <li>
                <Link href="/respiracion_conciente_auto_guiadas" className="dropdown-item">
                  Prácticas Auto Guiadas
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link href="/notas_pensamientos" className="nav-link">
              ✍️ Notas y Pensamientos
            </Link>
          </li>
          
          <li className="nav-item">
            <Link href="/las_cuatro_casitas_del_corazon" className="nav-link">
              🌌 Las Cuatro Casitas
            </Link>
          </li>
          
          <li className="nav-item">
            <Link href="/mantras_meditacion_guiada" className="nav-link">
              🎧 Mantras
            </Link>
          </li>
          
          <li className="nav-item">
            <Link href="/salud_mental" className="nav-link">
              🧠 Salud Mental
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
