# AGENTS.md — Sirlys Ortega (landing page manicure)

Sitio estático sin build system: HTML + CSS + JS vanilla (ES Modules). No hay `package.json`, ni lint, ni typecheck, ni tests. La verificación es manual en navegador.

## Cómo ejecutar (obligatorio)

Los ES Modules **no funcionan abriendo `index.html` con doble clic** (`file://` los bloquea por CORS). Servir siempre por HTTP:

```bash
python -m http.server 8080   # luego abrir http://localhost:8080
```
(o Live Server de VS Code). El CSS se carga con ruta absoluta `/css/style.css`, que también falla bajo `file://`.

## Arquitectura

- **Entrada**: `index.html` carga `<script type="module" src="./js/app.js">`. Todo se inyecta desde `app.js` (`js/app.js:1`).
- **Módulos** (`js/`): `app.js` (orquesta: tema, menú móvil, scroll-spy, FAQ, reveal, init de módulos), `translation.js` (i18n), `gallery.js` (render carruseles), `whatsapp.js` (form → WhatsApp).
- **Datos** (`data/`): `portfolio.js` y `testimonials.js` son **ES Modules con `export const`** (NO globals). `gallery.js` los importa (`js/gallery.js:8`).
- **`js/script.js` fue eliminado**: era el monolito anterior que duplicaba `translation.js`. Su lógica vive en los módulos. No recrearlo.

## i18n — regla crítica

- Los textos viven en `js/translation.js` con bloques `es` y `en`. Las claves se aplican vía atributo `data-translate` en el HTML.
- **Cualquier clave nueva debe añadirse en AMBOS bloques (`es` y `en`)**; si falta, el texto queda vacío.
- Las tarjetas del portafolio/testimonios usan claves de traducción indirectas (`titleKey`, `descKey`, `quoteKey`, `authorKey`) definidas en `data/`. Esas claves **deben existir en `translation.js`** o el título/descripción se renderiza vacío.
- Preferencia persistida en `localStorage` con clave `sirlys_lang`; tema en `theme`.

## Estado del contenido (pendientes)

- **Imágenes**: usan URLs de Unsplash de demostración. Reemplazar por Cloudinary (`f_auto,q_auto,w_X`) cuando estén subidas. Referencias en `data/portfolio.js` e imágenes del hero/about en `index.html`.
- **Testimonios**: placeholders marcados `[Reemplázame...]` en `translation.js` y `data/testimonials.js`. Falta contenido real (Fase 5).
- **SEO**: `sitemap.xml`, `robots.txt` y meta `og:url` usan dominio provisional `sirlysortega.com`. Actualizar al publicar.

## Gotchas

- **Tema claro/oscuro**: se eliminó el modo oscuro y el botón de toggle. El sitio usa un único tema claro. Las variables CSS están definidas en `css/style.css:6` (`:root`) sin overrides de tema. No reintroducir patrones de tema oscuro ni variables circulares.
- **Animaciones**: los elementos con clase `.reveal` se ocultan si `html.js` está presente y JS falla, quedan invisibles. El `prefers-reduced-motion` se respeta en CSS.
- **Idioma del sitio**: contenido pensado para audiencia colombiana, español como idioma por defecto.

## Referencia

- `PROJECT_DEVELOPMENT_PLAN.md` (en español): plan por fases (Fase 3 = modularización JS ya hecha; Fase 4 = Cloudinary; Fase 5 = contenido real).
- Skills disponibles en `.agents/skills/`: `frontend-design`, `seo`, `accessibility` (vía `skills-lock.json`).
