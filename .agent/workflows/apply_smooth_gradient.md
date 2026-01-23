---
description: Apply smooth gradient transitions to Navbar and Sections
---

# Workflow: Integración de Transiciones Suaves (Gradient Fade)

Este workflow describe cómo aplicar transiciones de "desvanecimiento" (fade) entre el Navbar y el contenido, o entre secciones, asegurando compatibilidad con **Modo Claro** y **Modo Oscuro**.

## 1. Principio Clave
Utilizar la variable CSS `var(--color-bg)` en lugar de clases de Tailwind (como `from-base-100`) para garantizar que el degradado coincida exactamente con el color de fondo del tema actual.

## 2. Implementación en Navbar
Para que el contenido "desaparezca" suavemente al hacer scroll debajo del Navbar pegajoso (`sticky`).

**Ubicación**: Dentro del componente `Navbar` (o Header), al final del contenedor principal.
**Clases Clave**: `absolute`, `-bottom-6` (o altura deseada), `bg-gradient-to-b`, `from-[var(--color-bg)]`.

```tsx
<header className="sticky top-0 ...">
  {/* ... contenido del navbar ... */}
  
  {/* Gradient Fade Overlay */}
  <div className="absolute -bottom-6 left-0 w-full h-6 bg-gradient-to-b from-[var(--color-bg)] to-transparent pointer-events-none z-30"></div>
</header>
```

## 3. Implementación en Secciones (Hero / Banners)
Para suavizar los bordes superior o inferior de una sección con fondo o imagen.

**Requisito**: El contenedor padre debe tener `relative`.

### Fade Superior (Top)
Desvanece la unión con el elemento anterior (ej. Navbar).
```astro
<!-- Gradient Fade to Top -->
<div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--color-bg)] via-[var(--color-bg)]/50 to-transparent z-10 pointer-events-none"></div>
```

### Fade Inferior (Bottom)
Desvanece la unión con el elemento siguiente.
```astro
<!-- Gradient Fade to Bottom -->
<div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/50 to-transparent z-10 pointer-events-none"></div>
```

## 4. Checklist de Verificación
1.  [ ] **Posición**: El degradado está posicionado absolutamente en el borde correcto (`top-0` o `bottom-0`).
2.  [ ] **Color**, Usa explícitamente `from-[var(--color-bg)]`.
3.  [ ] **Interacción**: Tiene `pointer-events-none` para no bloquear clics.
4.  [ ] **Dark Mode**: Cambiar tema y verificar que no se vea una línea blanca/gris divisoria.
