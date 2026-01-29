---
name: seo-metadata
description: Estándares de metadatos SEO y privacidad para páginas Públicas (Growth) vs Privadas (Plataforma)
---

# Gestión de Metadatos SEO y Privacidad

Este skill define la estrategia estricta de SEO y privacidad para iqEngi, asegurando que el contenido público posicione máximamente mientras la plataforma privada permanece invisible para los buscadores.

## 🚦 Estrategias de Página

Antes de crear una página, determina su naturaleza:

| Tipo | Layout Requerido | Objetivo | Indexable? | Ejemplo |
|------|------------------|----------|------------|---------|
| **Pública** | `<LayoutSeo />` | Tráfico, Marketing, Ventas | ✅ SI | Home, Blog, Landing Curso |
| **Privada** | `<LayoutIn />` | Funcionalidad, Usuario Logueado | ⛔ NO (Estricto) | Dashboard, Perfil, Checkout |

---

## 🌎 1. Estrategia Pública (Marketing & Growth)

Todas las páginas públicas **DEBEN** implementar `LayoutSeo` con metadatos completos.

### Requisitos Mínimos
1.  **Título Único**: `Título de la Página - IQEngi` (El sufijo lo añade el layout a veces, verifica si pasas el título completo).
2.  **Descripción Magnética**: 150-160 caracteres. Debe motivar el clic.
3.  **Imagen (OG Image)**: Obligatoria para Cursos y Blog Posts.
4.  **Schema.org (JSON-LD)**: Obligatorio para contenido rico.

### Implementación Código

```astro
---
import LayoutSeo from '@layouts/LayoutSeo.astro';
import { getCourseJsonLd } from '@utils/jsonld'; // Usar helpers siempre

// Generación de Schema.org (Datos Estructurados)
const courseSchema = getCourseJsonLd({
  title: course.title,
  description: course.description,
  // ...otros datos
});
---

<LayoutSeo
  tituloPagina="Título Optimizado para SEO"
  description="Descripción persuasiva que incluye keywords principales."
  image="/images/og/curso-especifico.jpg" 
  seoJsonLd={courseSchema} <!-- CRÍTICO: No olvidar el schema -->
>
  <!-- Contenido -->
</LayoutSeo>
```

---

## 🔒 2. Estrategia Privada (Plataforma)

Las páginas privadas **NUNCA** deben indexarse. Proteger la privacidad del usuario es prioridad.

### Requisitos Mínimos
1.  **LayoutIn**: Este layout debe ser ligero y funcional.
2.  **NoIndex Tag**: El layout debe incluir (o inyectar) la directiva robot.
3.  **Limpieza**: Evitar scripts de tracking público (Pixel, GTM de marketing) si no son esenciales para la app.

### Implementación Código

```astro
---
import LayoutIn from '@layouts/LayoutIn.astro';

// No se requiere JSON-LD ni descripciones complejas aquí.
// El foco es la UX del título de la pestaña.
---

<LayoutIn tituloPagina="Mi Dashboard">
  <!-- 
    LayoutIn.astro debe contener internamente:
    <meta name="robots" content="noindex, nofollow" />
  -->
  <main>
    <!-- Aplicación Privada -->
  </main>
</LayoutIn>
```

---

## 🛠️ Herramientas y Helpers

Usa siempre los utilitarios de `@utils/jsonld` para evitar errores de sintaxis en los datos estructurados.

- `getBlogJsonLd()`: Para listas de artículos y posts individuales.
- `getCourseJsonLd()`: Para fichas de producto/curso.
- `getOrganizationJsonLd()`: Para la home o páginas de contacto.

> **Nota:** Si creas una nueva entidad (ej. "Evento"), agrega su generador en `@utils/jsonld` antes de usarlo en la página. No hardcoees JSON en el `.astro`.
