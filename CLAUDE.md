# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"En el silencio del ser" (https://zen.balmacefa.com) — a Spanish-language wellness site (yoga, conscious breathing, reflections, moon/calendar explorers). This directory is a **git subrepo** of the parent `ansible_coolify` repo (`.git` is a `gitdir:` pointer into `../../.git/modules/...`); the parent's `CLAUDE.md` covers the Ansible/Coolify side, which does not apply here. Next.js 14 (App Router, JavaScript/JSX — no TypeScript) + Tailwind CSS v4, deployed as a Docker image.

`readme.md` is **stale**: it describes an older static Nginx/jQuery/Bootstrap site. The real stack is Next.js; trust `package.json` and `Dockerfile`.

## Commands

```bash
npm install
npm run dev      # next dev
npm run build    # next build (output: 'standalone')
npm start        # next start
```

`npm run lint` exists but no ESLint config is present, so it will prompt/fail. There is no test suite.

Docker (multi-stage, `node:20-alpine`, runs `.next/standalone/server.js` on port 3000):
```bash
docker build -t en-el-silencio-del-ser .
docker run -p 3000:3000 en-el-silencio-del-ser
```

## Architecture

- **Routing** is the filesystem under `app/`; each route is a `page.jsx`. Routes: `/yoga/*`, `/asanas`, `/respiracion_conciente*`, `/respira_sin_fin`, `/reflexiones/*`, `/luna`, `/calendarios`, `/salud_mental`, `/mantras_meditacion_guiada`. Route folder names are snake_case Spanish.
- **Navigation is hardcoded** in `app/components/Nav.jsx` (dropdown groups with separate desktop/mobile markup). Adding a page means also updating `Nav.jsx`, the homepage `app/page.jsx`, and `app/sitemap.js` (hardcoded URL list, base `https://zen.balmacefa.com`) — none are auto-generated.
- **Server page + client explorer pattern** (`luna/`, `calendarios/`): `page.jsx` is a server component with `export const dynamic = 'force-dynamic'` that passes `new Date().toISOString()` as `initialDateISO` to a `"use client"` `*Explorer.jsx`; the date math lives in a plain-JS util (`moonUtils.js`, `calendarUtils.js`). The force-dynamic + ISO prop avoids a stale build-time "today" and hydration mismatches.
- **Content as data**: yoga/asana pages keep their content in sibling data modules (`asanas/asanasData.js`, `yoga/ashtanga_serie_basica_1/ashtangaSequence.js`, `yoga/ocho_ramas_del_yoga/limbsData.js`); asana images are in `public/imgs/` named by snake_case Sanskrit name.
- **Interactive breathing pages** (`respira_sin_fin`, `respiracion_conciente_auto_guiadas`) are large `"use client"` pages defining rhythm configs (phases + durations + Tailwind gradient classes) inline and using `public/audios/{Inhalar,Retener,Exhalar,Vacio}.mp3` for voice cues.
- **Styling**: Tailwind v4 via `@import "tailwindcss"` in `app/globals.css` (PostCSS plugin `@tailwindcss/postcss`; `tailwind.config.js` is legacy/largely unused). Shared look is the `.site-bg` class and Playfair Display (`--font-playfair`, loaded in `layout.jsx`) applied to `h1–h3`. Global metadata/OpenGraph/SEO live in `app/layout.jsx`, `robots.js`, `sitemap.js`.

## Secrets

`secrets.key.sops` + `.sops.yaml` (age recipient) and `manage_secrets.wsl.sh` (a copy of the parent repo's SOPS wrapper; keys go in gitignored `.keys/`) are used for encrypted secrets. Don't commit decrypted material.

## Housekeeping notes

- `.claude/worktrees/respira-sin-fin-bg` is tracked in git (a worktree pointer from earlier Claude sessions) — not project code.
- `docker_build_output.txt` is a committed build log, not a source file.
- Recent history shows work lands via `claude/<topic>-<id>` branches merged through GitHub PRs.
