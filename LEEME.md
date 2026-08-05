# Pizarra 8 — versión instalable (PWA)

## Novedades de la v2
- **Compartir directo**: el botón de exportar ahora, en celular, ofrece
  mandar la jugada como imagen directo por WhatsApp/Mensajes/lo que sea
  (Web Share API); si el navegador no lo soporta, descarga el PNG como antes.
  De paso se corrigió que el nombre/número de los jugadores se exportaba
  con la tipografía por defecto en vez de la tipografía de la pizarra.
- **Buscador y duplicar en "Jugadas guardadas"**: aparece un buscador
  cuando hay más de 4 jugadas guardadas, y cada una tiene un botón para
  duplicarla (por ejemplo, para armar una variante sin perder el original).
- **Panel de atajos de teclado**: botón nuevo (ícono de teclado) o la tecla
  `?` muestra todos los atajos disponibles (M, D, G, F, Ctrl+Z, etc.),
  incluyendo el nuevo `Ctrl/⌘+S` para abrir "Jugadas guardadas" al toque.
- Mejor accesibilidad: los botones ahora muestran un contorno visible al
  navegar con teclado (Tab), no solo con mouse/dedo.
- Mensajes de error/éxito de exportar imagen ahora se ven siempre (antes
  podían perderse si el panel de jugadas guardadas estaba cerrado).
- Etiqueta "V2" visible junto al logo para identificar la versión de un
  vistazo.

## Novedades de la v1
- Rehacer (Redo), además de Deshacer, con atajos de teclado (Ctrl+Shift+Z /
  Ctrl+Y) y atajos nuevos: M mover, D dibujar, G huellas, F voltear cancha.
- Corregido: cambiar de formación o tocar "Reiniciar posiciones" ya no borra
  los nombres/dorsales cargados.
- Corregido: Escape cierra los modales aunque el cursor esté en un campo de texto.
- Aviso cuando hay dorsales repetidos en un mismo equipo.
- Borrado de una flecha individual tocándola en modo dibujo.
- Guardado inteligente: si el nombre ya existe, ofrece reemplazar la jugada.
- Exportar/Importar una jugada como archivo `.json`, y copia de resguardo
  completa de todas las jugadas guardadas (exportar/restaurar), todo desde
  el panel de "Jugadas guardadas".
- Mensajes de confirmación (toasts) al guardar/cargar/borrar/reiniciar.
- Enter para confirmar en los campos de edición de jugador y guardado.
- Botón "Instalar app", indicador de "sin conexión" y aviso de "hay una
  versión nueva" cuando se actualiza el service worker.


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
