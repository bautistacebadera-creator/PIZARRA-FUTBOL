# Pizarra 8 — versión instalable (PWA)

Esta carpeta es una app web completa y autónoma. No necesita Node, ni
`npm install`, ni paso de build: React, Babel y Tailwind se cargan desde
CDN en el propio navegador del usuario. Solo hay que subir estos archivos
tal cual a un hosting de archivos estáticos.

## Qué incluye
- `index.html` — página principal
- `app.bundle.js` — la pizarra ya compilada (React + todo el código en un
  solo archivo listo para el navegador, sin nada que transformar al vuelo)
- `app.jsx` — el código fuente, sin compilar. Se guarda como referencia
  para futuras ediciones; el navegador no lo usa directamente
- `storage-polyfill.js` — guarda las jugadas en el propio dispositivo
  (usa `localStorage`), para que "Guardar jugada" funcione sin depender
  de Claude.ai
- `manifest.json` — metadata que permite "instalar" la app
- `service-worker.js` — cachea la app para que abra offline
- `icons/` — íconos de la app en los tamaños que piden Android/iOS/escritorio

## 1. Subir a un hosting (elegí uno, los tres son gratis)

**Netlify Drop (el más simple, sin cuenta obligatoria):**
1. Entrá a https://app.netlify.com/drop
2. Arrastrá esta carpeta completa a la página
3. Te da una URL tipo `https://algo-random.netlify.app` — ya está online

**GitHub Pages:**
1. Creá un repositorio nuevo y subí estos archivos a la raíz
2. Configuración del repo → Pages → Deploy from branch → `main` / `root`
3. Te da una URL tipo `https://tuusuario.github.io/tu-repo`

**Vercel:**
1. Importá la carpeta como proyecto en https://vercel.com/new
2. No hace falta configurar ningún "build command" (dejalo vacío / "Other")

> Importante: los tres necesitan que sirvas la carpeta **por HTTPS**
> (todos los de arriba lo hacen automático). Un service worker no
> funciona sobre `http://` común, solo sobre `https://` o `localhost`.

## 2. Instalar la app

Una vez que la URL esté online:

**Android (Chrome):** abrí la URL → aparece un banner "Instalar app" o
menú ⋮ → "Instalar aplicación". Queda un ícono como cualquier app.

**iPhone/iPad (Safari):** abrí la URL → botón compartir (□↑) →
"Agregar a pantalla de inicio".

**Windows/Mac/Linux (Chrome o Edge):** abrí la URL → ícono de instalar
en la barra de direcciones (⊕ o pantalla con flecha) → "Instalar". Se
abre en su propia ventana, con ícono en el escritorio y en el menú de
apps, igual que una app nativa.

## 3. Probarlo en tu compu antes de subirlo (opcional)

Cualquier servidor de archivos estático sirve, por ejemplo con Python
(ya viene instalado en Mac/Linux, y en Windows si instalaste Python):

```bash
cd pizarra-8-pwa
python3 -m http.server 8000
```

Abrí `http://localhost:8000` en el navegador. Los service workers
funcionan sobre `localhost` aunque no sea HTTPS, así que podés probar la
instalación y el modo offline ahí mismo antes de subirlo a un hosting.

## Notas
- Las jugadas guardadas quedan en el `localStorage` del navegador/dispositivo
  donde se instaló la app — no se sincronizan entre el celu y la compu.
  Si en algún momento querés que un grupo comparta las mismas jugadas
  guardadas (por ejemplo, todo un equipo viendo la misma librería), eso
  requiere un backend propio (por ejemplo Firebase o Supabase) en lugar
  de `localStorage`; avisame si querés dar ese paso.
- La primera vez que se abre necesita internet (para traer React/Tailwind
  desde el CDN). Después de esa primera carga, el service worker la cachea
  y abre offline.
