document.addEventListener("DOMContentLoaded", function () {
  // Generar un UUID simple
  const navId = "nav-" + Math.random().toString(36).substring(2, 10);

  const navHTML = `
    <header id="${navId}">
      <nav>
        <ul>
          <li><a href="yoga/ashtanga_serie_basica_1/">🧘 Yoga</a></li>
          <li><a href="respiracion_conciente/">🌬️ Respiración Consciente</a></li>
          <li><a href="#">✍️ Notas y Pensamientos</a></li>
          <li>
            <a href="#">🌌 Sensaciones del Mundo Onírico</a>
          </li>
          <li><a href="meditacion_guiada/">🎧 Meditaciones Guiadas (YouTube)</a></li>
        </ul>
      </nav>
    </header>
  `;

  const navStyles = `
    #${navId} {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      background: #f0f0f0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    body {
      padding-top: 60px;
    }

    #${navId} nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      background: #f0f0f0;
    }

    #${navId} nav ul li {
      position: relative;
    }

    #${navId} nav ul li a {
      display: block;
      padding: 12px 16px;
      text-decoration: none;
      color: #333;
    }

    #${navId} nav ul li:hover > a {
      background-color: #ddd;
    }

    #${navId} .submenu {
      display: none;
      position: absolute;
      background: #fff;
      top: 100%;
      left: 0;
      min-width: 200px;
      z-index: 999;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }

    #${navId} nav ul li:hover .submenu {
      display: block;
    }

    #${navId} .submenu li a {
      padding: 10px 14px;
      white-space: nowrap;
    }
  `;

  // Insertar el nav al inicio del body
  document.body.insertAdjacentHTML("afterbegin", navHTML);

  // Crear y agregar el <style> al <head>
  const styleTag = document.createElement("style");
  styleTag.textContent = navStyles;
  document.head.appendChild(styleTag);
});
