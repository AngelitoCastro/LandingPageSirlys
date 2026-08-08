# 💅 Landing Page — Sirlys Ortega (Profesional Manicurist)

Sitio web landing page profesional, elegante y responsive desarrollado para el negocio de arte en manicure y estética de uñas de **Sirlys Ortega**. El proyecto está enfocado en destacar la calidad de los servicios, transmitir confianza a través de un portafolio interactivo y facilitar las reservas directas vía WhatsApp Business.

---

## 🚀 Características Principales

- **Diseño Móvil Primero (Mobile-First)**: Experiencia limpia y fluida adaptada a todos los tamaños de pantalla.
- **Integración con WhatsApp Business**: Formulario de reserva interactivo que genera un mensaje preformateado en WhatsApp con el nombre, servicio, fecha, hora y notas adicionales.
- **Multilingüe (i18n ES / EN)**: Cambio de idioma instantáneo entre Español e Inglés mediante atributos `data-translate` y `localStorage`.
- **Portafolio Dinámico**: Carrusel de trabajos con filtros por categoría (*Semi-Permanente*, *Esculpidas*, *Nail Art*, *Francés*).
- **Testimonios de Clientas**: Carrusel interactivo de reseñas y opiniones.
- **Barra de Confianza Animada**: Animación continua de indicadores en ciclos de 3 segundos.
- **SEO Local y Accesibilidad**: Incluye datos estructurados Schema.org (`BeautySalon`), etiquetas Open Graph, enlace de salto para lectores de pantalla y soporte para reducción de movimiento (`prefers-reduced-motion`).

---

## 🛠️ Stack Tecnológico

- **Estructura**: HTML5 Semántico
- **Estilos**: Vanilla CSS3 (Variables CSS, Flexbox, CSS Grid, Animaciones `@keyframes`, Glassmorphism)
- **Lógica**: JavaScript Vanilla (ES Modules)
- **Iconos y Fuentes**: FontAwesome 6, Google Fonts (*Outfit* y *Playfair Display*)
- **Imágenes**: Servidas mediante URLs optimizadas (compatible con Cloudinary / Unsplash)

---

## 📁 Estructura del Proyecto

```text
Presentacion Sirlys/
├── index.html                  # Estructura semántica principal
├── css/
│   └── style.css               # Sistema de diseño y estilos globales
├── js/
│   ├── app.js                  # Orquestador principal (menú móvil, scroll-spy, FAQ)
│   ├── translation.js          # Diccionario de traducciones (es / en)
│   ├── gallery.js              # Lógica de renderizado y filtros del portafolio
│   └── whatsapp.js             # Generador de mensajes para reserva vía WhatsApp
├── data/
│   ├── portfolio.js            # Datos del portafolio (ES Module)
│   └── testimonials.js         # Datos de testimonios (ES Module)
├── sitemap.xml                 # Mapa del sitio para motores de búsqueda
├── robots.txt                  # Instrucciones para crawlers de búsqueda
└── README.md                   # Documentación del proyecto
```

---

## ⚙️ Cómo Ejecutar Localmente

> ⚠️ **IMPORTANTE**: Este proyecto utiliza **ES Modules** (`import` / `export`) y rutas absolutas para las hojas de estilo. **No abrir directamente haciendo doble clic en `index.html`** (`file://`), ya que los navegadores bloquean la carga de módulos por políticas de seguridad CORS.

### Opción 1: Python (Recomendado)

Abre una terminal en la carpeta raíz del proyecto y ejecuta:

```bash
python -m http.server 3000
```

Luego abre tu navegador en: [http://localhost:3000](http://localhost:3000)

### Opción 2: VS Code Live Server

1. Instala la extensión **Live Server** en VS Code.
2. Haz clic derecho en `index.html` y selecciona **Open with Live Server**.

---

## 🌐 Gestión de Traducciones (i18n)

Los textos del sitio se administran centralizadamente en `js/translation.js`:

- Para modificar un texto existente o agregar una nueva clave, debes actualizarla en **ambos bloques** (`es` y `en`).
- Los elementos del HTML utilizan el atributo `data-translate="clave_de_traduccion"`.
- Los datos dinámicos (tarjetas del portafolio y testimonios en `data/`) referencian claves indirectas (`titleKey`, `descKey`, `quoteKey`) definidamente en `translation.js`.

---

## 📲 Configuración de WhatsApp

El número de contacto y la plantilla del mensaje de WhatsApp se gestionan en:
- `js/whatsapp.js` (Formulario de reservas)
- Enlace directo en la sección Hero (`index.html`)

Para actualizar el número de WhatsApp, modifica la variable en `js/whatsapp.js` y el atributo `href` en `index.html`.

---

## 📄 Licencia

Desarrollado para **Sirlys Ortega — Profesional Manicurist**. Todos los derechos reservados.
