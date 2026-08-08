# Landing Page - Sirlys Ortega

## 1. Resumen del proyecto

Desarrollar una landing page profesional para el negocio de manicure y pedicure de Sirlys Ortega. El objetivo es presentar los servicios, generar confianza con portafolio y testimonios, y convertir visitantes en clientas a través de WhatsApp Business.

## 2. Objetivos generales

- Crear una experiencia moderna y responsive.
- Optimizar la velocidad de carga.
- Integrar Cloudinary para el portafolio.
- Automatizar el inicio de reservas mediante WhatsApp.
- Mantener una arquitectura escalable.

## 3. Stack tecnológico

- HTML5
- CSS3
- JavaScript (ES6)
- Cloudinary
- WhatsApp Business
- Font Awesome
- Google Fonts

## 4. Estructura del proyecto

```text
landing/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── gallery.js
│   ├── script.js
│   ├── translation.js
│   └── whatsapp.js
├── data/
│   ├── portfolio.js
│   └── testimonials.js
├── assets/
│   └── icons/
└── PROJECT_DEVELOPMENT_PLAN.md
```

No existirá una carpeta assets/images. Todas las fotografías se servirán desde Cloudinary.

## 5. Plan de desarrollo por fases

### Fase 1. Reestructuración HTML

**Objetivo general:**
Rediseñar la estructura semántica para seguir el recorrido natural de una clienta: conocer, confiar y reservar.

**Tareas principales:**

- Navbar
  - Reorganizar enlaces.
  - Agregar botón CTA Reservar.
  - Mantener selector de idioma.
  - Mantener cambio de tema.
  - Mejorar menú móvil.
  - Agregar atributos ARIA.
  - Implementar navbar sticky.
- Hero
  - Cambiar título y subtítulo.
  - Agregar propuesta de valor.
  - Incluir CTA de WhatsApp.
  - Incluir CTA Ver Portafolio.
  - Optimizar imagen principal.
  - Agregar indicadores de confianza.
- Barra de confianza
  - Más de X clientas.
  - Atención personalizada.
  - Productos profesionales.
  - Ubicación.
- Servicios
  - Crear tarjetas.
  - Incluir nombre.
  - Incluir descripción.
  - Incluir icono.
  - Mantener diseño uniforme.
- Portafolio
  - Eliminar imágenes del HTML.
  - Crear contenedor dinámico.
  - Preparar filtros por categoría.
- Sobre mí
  - Reescribir historia real.
  - Añadir experiencia.
  - Agregar estadísticas.
- ¿Por qué elegirme?
  - Atención.
  - Higiene.
  - Calidad.
  - Puntualidad.
  - Diseños personalizados.
- Testimonios
  - Crear carrusel.
  - Consumir testimonials.js.
- FAQ
  - Crear acordeón.
  - Incluir preguntas frecuentes reales.
- Reserva
  - Mantener formulario.
  - Preparar integración con WhatsApp.

**Archivos involucrados:**

- index.html
- css/style.css
- js/app.js

**Validación de fase:**

- Todos los enlaces funcionan.
- Navbar responsive.
- Sticky correcto.
- Existe un único H1.
- CTAs visibles.
- Imagen optimizada.
- Correcta jerarquía visual.
- Lighthouse Accessibility > 90.
- Flujo visual completo.
- HTML semántico.
- Sin contenido de relleno.
- Responsive.

### Fase 2. Sistema de diseño en CSS

**Objetivo general:**
Construir un sistema visual consistente y reutilizable.

**Tareas principales:**

- Reorganizar variables CSS.
- Definir variables para colores.
- Definir espaciados.
- Definir radios.
- Definir sombras.
- Definir tipografía.
- Definir transiciones.
- Estandarizar componentes.
  - Botones.
  - Cards.
  - Formularios.
  - Navbar.
  - Footer.
- Ajustar responsive.
  - Desktop.
  - Tablet.
  - Mobile.
- Definir animaciones.
  - Hover.
  - Fade.
  - Scroll.
  - Focus.

**Validación de fase:**

- Sin colores hardcodeados.
- Sin overflow horizontal.
- Responsive completo.
- Accessibility > 90.

### Fase 3. Arquitectura JavaScript

**Objetivo general:**
Separar responsabilidades mediante módulos.

**Módulos principales:**

- app.js
  - Inicialización.
  - Eventos globales.
- translation.js
  - Idiomas.
  - Persistencia en localStorage.
- gallery.js
  - Leer portfolio.js.
  - Crear tarjetas.
  - Aplicar filtros.
  - Lazy loading.
- whatsapp.js
  - Validar formulario.
  - Construir mensaje.
  - Codificar URL.
  - Abrir WhatsApp.
  - Limpiar formulario.
- script.js
  - Apoyo a lógica existente, si sigue siendo necesario.

**Validación de fase:**

- Sin errores en consola.
- Código modular.
- Sin variables globales.
- WhatsApp funciona en móvil y escritorio.

### Fase 4. Cloudinary

**Objetivo general:**
Eliminar imágenes locales y servir todas desde CDN.

**Tareas principales:**

- Crear carpetas por categoría.
- Seleccionar las 20 mejores fotografías.
- Renombrar archivos.
- Subir imágenes.
- Utilizar Auto Format.
- Utilizar Auto Quality.
- Implementar lazy loading.

**Validación de fase:**

- Sin imágenes locales.
- Ninguna imagen > 250 KB.
- Sin enlaces rotos.
- Tiempo de carga < 2 s.

### Fase 5. Contenido

**Objetivo general:**
Reemplazar todo el contenido genérico por información real.

**Tareas principales:**

- Redactar historia.
- Obtener testimonios.
- Crear FAQ.
- Revisar ortografía.
- Optimizar CTAs.

**Validación de fase:**

- Testimonios autorizados.
- Textos coherentes.
- Información actualizada.

### Fase 6. Optimización final

**Objetivo general:**
Preparar la landing para producción.

**Tareas principales:**

- SEO.
- Meta tags.
- Open Graph.
- Sitemap.
- Robots.
- Favicon.
- Lighthouse.
- Accesibilidad.
- PageSpeed.

**Validación de fase:**

- Performance > 90.
- Accessibility > 90.
- SEO > 90.
- Best Practices > 90.
- Todos los enlaces funcionan.

## 6. Mejoras futuras

- Analytics.
