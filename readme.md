# En el silencio del ser 🧘🏽‍♂️✨

Este proyecto es un espacio digital dedicado al bienestar, la meditación, la respiración consciente y el yoga. Construido como un sitio web estático simple y ligero, busca proporcionar recursos accesibles y guías en un solo lugar.

## 🌟 Secciones del Proyecto

El sitio se divide en diferentes enfoques del bienestar integral:

- **Inicio**: Página principal y directorio de navegación.
- **Yoga**: Prácticas en YouTube y diarios de experiencia personal.
- **Respiración Consciente**: Técnicas auto guiadas y videos de YouTube (Nadi Shodhana, Kapalabhati, Box Breathing, etc.).
- **Las Cuatro Casitas del Corazón**: Reflexiones y escritura.
- **Salud Mental**: Espacio dedicado a la salud cognitiva y emocional.
- **Mundo Onírico**: Notas y pensamientos sobre los sueños.
- **Mantras y Meditaciones**: Audioguías y mantras de YouTube.

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (Vainilla y jQuery).
- **Servidor Web / Contenedor**: Nginx a través de Docker.
- **Librerías externas**: Tone.js (para generación de sonidos guiados), Bootstrap 5 (para ciertos componentes modernos).

## 🚀 Despliegue Local (Docker)

El proyecto incluye un `Dockerfile` optimizado con **Nginx** (alpine) para servir los archivos locales fácil y rápido, sin requerir instalaciones de librerías más allá de Docker.

### Prerequisitos
- Tener [Docker](https://www.docker.com/) instalado y funcionando en tu equipo.

### Instrucciones de Ejecución

1. Construir la imagen del contenedor ejecutando el siguiente comando en la raíz del proyecto:
   ```bash
   docker build -t sitio-web .
   ```
2. Correr el contenedor en el puerto `8080`:
   ```bash
   docker run -d -p 8080:80 --name mi-sitio-web sitio-web
   ```
3. Visitar el sitio en el navegador dirigiéndote a `http://localhost:8080`.

> **Nota:** Para detener el servidor temporalmente puedes usar `docker stop mi-sitio-web`, y para reiniciarlo `docker start mi-sitio-web`.

## ✍🏻 Autor
Hecho con ❤️ por **Fabián Martín Balmaceda Rescia**.
