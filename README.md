# amano-web

Sitio de Amano, el sistema de gestión comercial para casas de electricidad e
iluminación. Hecho con [Astro](https://astro.build), Tailwind CSS 4 y
[Motion](https://motion.dev) para las animaciones.

## Desarrollo

```sh
npm install
npm run dev       # http://localhost:4321/amano-web/
npm run build     # verifica tipos y genera dist/
npm run preview   # sirve dist/ localmente
```

## Qué editar

Casi todo el contenido cambiante está en `src/config.ts`. Buscá `EDITAR`:

- **correo**: la dirección a la que van todos los botones de contacto.
- **version**: se muestra en la portada.
- **planes**: precio y lo que incluye la licencia.
- **testimonios**: son de ejemplo y se muestran marcados como tales mientras
  tengan `ejemplo: true`. Si el arreglo queda vacío, la sección no aparece.
- **preguntas**: las preguntas frecuentes.

Las pantallas del programa están dibujadas en HTML
(`src/components/VentanaMostrador.astro` y `PanelPaso.astro`). Cuando haya
capturas reales, van en `public/capturas/` y reemplazan esos bloques.

## Estructura

```
src/
  config.ts              datos editables
  pages/index.astro      arma la página con las secciones
  components/            una sección por archivo
  scripts/efectos.ts     animaciones al scrollear, contadores, menú
  styles/global.css      colores, tipografía y piezas comunes
```

## Publicación

`.github/workflows/deploy.yml` construye y publica en GitHub Pages cada vez
que hay un push a `main`. En el repositorio, **Settings → Pages → Source**
tiene que estar en **GitHub Actions**.
