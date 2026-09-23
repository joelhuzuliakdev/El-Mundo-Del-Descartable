# El Mundo Del Descartable — Landing Page

Landing page en Astro + Tailwind CSS + TypeScript para "El Mundo Del Descartable".

## Puesta en marcha

```bash
npm install
cp .env.example .env   # completar PUBLIC_SITE_URL y PUBLIC_GA_ID
npm run dev
```

Build de producción:

```bash
npm run build
npm run preview
```

## Datos a completar

Los datos reales confirmados (teléfono y dirección) ya están cargados en
`src/config/business.ts`. Quedan pendientes de confirmar:

- `POSTAL_CODE` (código postal)
- `EMAIL` (si el negocio tiene un email de contacto)
- `INSTAGRAM_URL` (si tiene Instagram)
- `GEO.latitude` / `GEO.longitude` — coordenadas exactas del local (se puede
  obtener haciendo clic derecho en Google Maps sobre el local → "¿Qué hay
  aquí?")
- `OPENING_HOURS_DISPLAY` y `OPENING_HOURS_SCHEMA` — horarios reales de
  atención
- `PUBLIC_GA_ID` en `.env` — ID de Google Analytics 4
- `PUBLIC_SITE_URL` en `.env` — dominio final una vez publicado el sitio

## Imágenes

Reemplazar los siguientes archivos por fotos reales del negocio (formato
WebP/AVIF recomendado):

- `public/images/hero-descartables.webp` (imagen del Hero)
- `public/images/products/*.webp` (fotos de productos destacados)
- `public/og-image.jpg` (imagen para compartir en redes, 1200x630px)

## Productos y categorías

- `src/data/products.ts` — catálogo de productos destacados (agregar/editar
  libremente, tipado con TypeScript)
- `src/data/categories.ts` — categorías mostradas en la sección "Encontrá
  todo lo que necesitás"

## Notas

- No se inventaron precios ni datos institucionales: quedan marcados con
  `TODO` o como campos vacíos para completar.
- El sitio no garantiza posicionamiento automático en Google; está preparado
  técnicamente (SEO técnico, SEO local, datos estructurados, sitemap,
  robots.txt) para competir por búsquedas relevantes.
