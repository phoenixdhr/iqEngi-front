---
name: card-styles
description: Estándares de diseño para tarjetas (Cards) en iqEngi
---

# Sistema de Tarjetas (Cards) - iqEngi

Este skill define los patrones de diseño para las tarjetas del sitio, asegurando consistencia visual en sombras, bordes, animaciones e interacción.

## Filosofía de Diseño ("Glass & Lift")

- **Base**: `bg-base-100` con borde sutil `border-base-200`.
- **Reposo**: `shadow-lg` (elevación media).
- **Hover**: 
  - Elevación: `hover:shadow-2xl` + `hover:-translate-y-1` (feedback táctil).
  - Imagen: Zoom suave (`scale-110` o `scale-105`).
  - Título: Cambio de color a `primary`.

---

## 🃏 Tipos de Tarjetas

### 1. Standard Vertical Card (Grid Item)

Usar para: **Listados de Cursos, Artículos de Blog, Productos**

Esta es la tarjeta por defecto para grids (1, 2 o 3 columnas).

```html
<!-- Contenedor Principal -->
<!-- Notas: h-full para igualar alturas en grid, group para controlar efectos hijos -->
<article class="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col group overflow-hidden border border-base-200">
  
  <!-- Zona de Imagen (Aspect Video 16:9) -->
  <a href="/destine" class="block relative aspect-video overflow-hidden">
    <figure class="w-full h-full">
      <img
        src="/image.jpg"
        alt="Title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <!-- Opcional: Overlay gradiente en hover (usado en Blog) -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </figure>
  </a>

  <!-- Cuerpo de la Tarjeta -->
  <div class="card-body p-5 flex flex-col flex-grow gap-2">
    
    <!-- Título con Hover Color -->
    <h2 class="card-title text-lg font-bold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
      <a href="/destine">Título de la Tarjeta</a>
    </h2>

    <!-- Texto / Descripción -->
    <p class="text-sm text-base-content/80 line-clamp-2 flex-grow">
      Descripción corta del contenido que se corta a 2 líneas...
    </p>

    <!-- Footer / Acciones (Border Top) -->
    <div class="card-actions justify-end mt-4 pt-4 border-t border-base-200">
      <!-- Ver skill: button-styles -->
    </div>

  </div>
</article>
```

### 2. Featured Horizontal Card (Hero Item)

Usar para: **Post Destacado del Blog, Curso Promocionado**

Diseño horizontal (`card-side`) para destacar contenido principal.

```html
<!-- Diferencias clave: lg:card-side, scale-105 (menos zoom por ser img grande) -->
<article class="card lg:card-side bg-base-100 shadow-xl overflow-hidden border border-base-200 group hover:shadow-2xl transition-all duration-300">
  
  <figure class="lg:w-7/12 relative overflow-hidden">
    <div class="w-full h-full min-h-[350px] lg:min-h-[500px]">
      <img 
        src="/large-image.jpg" 
        alt="Featured"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  </figure>

  <div class="card-body lg:w-5/12 justify-center p-8 lg:p-12">
    <!-- Contenido destacado con tipografía mayor -->
    <h2 class="card-title text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
      Título Destacado
    </h2>
    
    <!-- Botón CTA Primary Large -->
  </div>

</article>
```

---

## 🎨 Anatomía de Clases (Tailwind v4)

| Parte | Clases Obligatorias | Propósito |
|-------|---------------------|-----------|
| **Container** | `card bg-base-100 border border-base-200` | Estructura base DaisyUI + borde sutil |
| **Interacción** | `group hover:-translate-y-1 transition-all duration-300` | Efecto de levitación |
| **Sombra** | `shadow-lg hover:shadow-2xl` | Profundidad dinámica |
| **Imagen Wrapper** | `relative aspect-video overflow-hidden` | Mantiene ratio y contiene el zoom |
| **Imagen** | `object-cover transition-transform duration-700 group-hover:scale-110` | Zoom cinemático lento |
| **Padding** | `p-5` (Standard) / `p-8 lg:p-12` (Featured) | Espaciado consistente |

---

## ⚠️ Checklist de Validación

1.  **¿Tienes `group` en el contenedor padre?**
    Es necesario para que el hover de la tarjeta dispare el zoom de la imagen (`group-hover:scale-110`).
    
2.  **¿Usaste `overflow-hidden` en el contenedor de imagen?**
    Si no, el zoom se saldrá de la tarjeta y romperá el layout.

3.  **¿El enlace cubre la imagen y título?**
    Mejora la UX haciendo clicables las áreas grandes.

4.  **¿Consistencia con `button-styles`?**
    Si la tarjeta tiene botones, DEBEN seguir el skill `button-styles` (ej. `rounded-xl` dentro de cards).
