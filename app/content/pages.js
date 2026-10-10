// Registro único de páginas del sitio.
// Para publicar una página nueva: agrega UNA entrada aquí (con su `section` y fecha `added`).
// Con eso aparece sola en "Lo último" (con insignia "Nuevo" durante 30 días), en su
// tarjeta de sección de la portada y en sitemap.js. Solo Nav.jsx sigue siendo manual.

export const PAGES = [
  { href: '/yoga/historia_del_yoga', title: 'Historia del Yoga', desc: 'Un recorrido por milenios de yoga, de los Vedas a la práctica moderna.', icon: '📜', tone: 'indigo', section: 'yoga', added: '2026-10-09' },
  { href: '/calendarios', title: 'Calendarios del Mundo', desc: 'Compara hoy en calendarios solar, lunar, maya, gregoriano y más.', icon: '📅', tone: 'rose', section: 'bienestar', added: '2026-08-17' },
  { href: '/respira_sin_fin', title: 'Respira sin Fin', desc: 'Un feed infinito de ritmos de respiración: desliza y quédate con el que resuene contigo.', icon: '🌀', tone: 'teal', section: 'respiracion', added: '2026-08-06' },
  { href: '/yoga/ocho_ramas_del_yoga', title: 'Las Ocho Ramas del Yoga', desc: 'Los ocho miembros del camino de Patanjali, explicados paso a paso.', icon: '🪷', tone: 'indigo', section: 'yoga', added: '2026-07-29' },
  { href: '/reflexiones/estados_de_conciencia', title: 'Estados de Conciencia', desc: 'Vigilia, hipnagogia, sueño lúcido y viaje astral, con referencias científicas.', icon: '🌌', tone: 'rose', section: 'bienestar', added: '2026-07-29' },
  { href: '/reflexiones/el_umbral_de_los_sentidos', title: 'El Umbral de los Sentidos', desc: 'Percibir y sentir: la intuición y el paradigma más allá de lo lógico.', icon: '🔮', tone: 'rose', section: 'bienestar', added: '2026-07-29' },
  { href: '/luna', title: 'Estado de la Luna', desc: 'La fase lunar actual y su iluminación para acompañar tu práctica.', icon: '🌙', tone: 'rose', section: 'bienestar', added: '2026-07-29' },
  { href: '/asanas', title: 'Catálogo de Asanas', desc: 'Las posturas de la Primera Serie de Ashtanga, con fotografía y notas.', icon: '🐾', tone: 'indigo', section: 'yoga', added: '2026-07-29' },
  { href: '/reflexiones/el_silencio_de_un_adios', title: 'El Silencio de un Adiós', desc: 'Las dimensiones del bienestar interior a través del soltar.', icon: '🏠', tone: 'rose', section: 'bienestar', added: '2026-04-12' },
  { href: '/reflexiones/cuatro_sendas_al_silencio', title: '4 Sendas al Silencio', desc: 'El cultivo de las cuatro moradas divinas para la paz interior.', icon: '✍️', tone: 'rose', section: 'bienestar', added: '2026-04-12' },
  { href: '/yoga/youtube', title: 'Recomendaciones YouTube', desc: 'Los mejores canales y videos para practicar yoga desde casa.', icon: '📺', tone: 'indigo', section: 'yoga', added: '2026-04-11' },
  { href: '/yoga/experiencia_personal', title: 'Experiencia Personal', desc: 'Mi viaje con el yoga y cómo integrarlo en la vida diaria.', icon: '🌱', tone: 'indigo', section: 'yoga', added: '2026-04-11' },
  { href: '/yoga/ashtanga_serie_basica_1', title: 'Ashtanga: Serie Básica', desc: 'Guía de la primera serie de Ashtanga para ganar fuerza y flexibilidad.', icon: '🕉️', tone: 'indigo', section: 'yoga', added: '2026-04-11' },
  { href: '/respiracion_conciente', title: 'Propósito y Teoría', desc: 'Conceptos fundamentales de la respiración consciente.', icon: '🍃', tone: 'teal', section: 'respiracion', added: '2026-04-11' },
  { href: '/respiracion_conciente_auto_guiadas', title: 'Prácticas Auto Guiadas', desc: 'Herramientas interactivas para guiar tu respiración cada día.', icon: '🎧', tone: 'teal', section: 'respiracion', added: '2026-04-11' },
  { href: '/mantras_meditacion_guiada', title: 'Mantras', desc: 'Cantos y sonidos para calmar la mente.', icon: '🎶', tone: 'rose', section: 'bienestar', added: '2026-04-11' },
  { href: '/salud_mental', title: 'Salud Mental', desc: 'Herramientas psicológicas y autocuidado emocional.', icon: '🧠', tone: 'rose', section: 'bienestar', added: '2026-04-11' },
];

export const NEW_BADGE_DAYS = 30;

export function getLatest(count = 4) {
  return [...PAGES].sort((a, b) => b.added.localeCompare(a.added)).slice(0, count);
}

export function isNew(page, now = new Date()) {
  return (now.getTime() - new Date(page.added).getTime()) / 86400000 <= NEW_BADGE_DAYS;
}

export const bySection = (section) => PAGES.filter((p) => p.section === section);

// Un pensamiento por día (rota por día). Fuente: Yoga Sutras de Patanjali (paráfrasis).
export const PENSAMIENTOS = [
  { texto: 'El yoga es aquietar las fluctuaciones de la mente.', fuente: 'Yoga Sutras 1.2' },
  { texto: 'La postura debe ser firme y, a la vez, cómoda.', fuente: 'Yoga Sutras 2.46' },
  { texto: 'El sufrimiento que aún no ha llegado puede evitarse.', fuente: 'Yoga Sutras 2.16' },
  { texto: 'La mente se aquieta con práctica constante y desapego.', fuente: 'Yoga Sutras 1.12' },
  { texto: 'Del contentamiento nace una dicha insuperable.', fuente: 'Yoga Sutras 2.42' },
  { texto: 'La práctica da fruto cuando se sostiene con paciencia y cariño.', fuente: 'Yoga Sutras 1.14' },
  { texto: 'Con amabilidad hacia quien es feliz, la mente se serena.', fuente: 'Yoga Sutras 1.33' },
];

export function pensamientoDelDia(now = new Date()) {
  const dia = Math.floor(now.getTime() / 86400000);
  return PENSAMIENTOS[dia % PENSAMIENTOS.length];
}
