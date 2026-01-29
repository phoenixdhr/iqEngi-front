---
name: button-styles
description: Sistema de estilos de botones consistentes para iqEngi (Cards, CTAs, Formularios)
---

# Sistema de Botones Consistentes - iqEngi

Este skill define los estilos de botones estándar para mantener consistencia visual en todo el proyecto, basado en la implementación actual (TailwindCSS v4 + DaisyUI v5).

## Filosofía de Diseño

- **Formas**: `rounded-xl` para controles UI (Forms, Cards), `rounded-full` para CTAs destacados (Hero, Newsletter).
- **Interacción**: Hover con `scale-[1.03]` (tarjetas) o `scale-105` (CTAs grandes) y sombras dinámicas.
- **Colores**: Uso estricto de variables `--color-primary`, `--color-secondary` y variantes semánticas.

---

## 🎨 Clases Base de Botones

### 1. Botón Primary (Acción Principal)

Usar para: **Inscribirse, Comprar, Guardar, CTAs de Hero**

```html
<!-- ESTÁNDAR: Tamaño Normal (Cards, Formularios) -->
<!-- Nota: uppercase, font-bold y tracking-wide para llamadas a la acción fuertes -->
<button class="btn btn-primary h-10 min-h-[40px] px-6 text-white shadow-md shadow-primary/20 hover:bg-[var(--color-btn-hover)] hover:border-[var(--color-btn-hover)] hover:shadow-lg hover:shadow-[var(--color-btn-hover)]/40 hover:scale-[1.03] uppercase font-bold tracking-wide rounded-xl transition-all duration-300">
  Comprar
</button>

<!-- LARGE: Hero / Secciones Destacadas -->
<!-- Nota: rounded-full y sombra más pronunciada -->
<button class="btn btn-primary btn-lg min-w-[160px] rounded-full shadow-lg shadow-[var(--color-primary)]/20 hover:bg-[var(--color-btn-hover)] hover:border-[var(--color-btn-hover)] hover:shadow-xl hover:shadow-[var(--color-btn-hover)]/40 hover:scale-105 transition-all duration-300">
  Explorar Cursos
</button>
```

### 2. Botón Gradient (CTA Especial)

Usar para: **Newsletter, Suscripciones Premium, Destacados**

```html
<!-- Se usa bg-gradient-to-r y border-none para mantener el gradiente limpio -->
<button class="btn btn-lg rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white border-none hover:shadow-lg hover:shadow-[var(--color-primary)]/20 hover:scale-105 transition-all duration-300 min-w-[160px]">
  Suscribirme
</button>
```

### 3. Botón Outline (Secundario)

Usar para: **Ver Detalles, Info adicional**

```html
<!-- ESTÁNDAR: Cards -->
<!-- Nota: !bg y !text importantes para sobreescribir estilos base de DaisyUI en hover si es necesario -->
<a href="#" class="btn btn-outline h-10 min-h-[40px] hover:!bg-[var(--color-btn-hover)] hover:!border-[var(--color-btn-hover)] hover:!text-white rounded-xl transition-all duration-300">
  Ver Detalles
</a>

<!-- LARGE: Hero Secundario -->
<a href="#" class="btn btn-outline btn-lg min-w-[160px] rounded-full hover:bg-[var(--color-btn-hover)] hover:border-[var(--color-btn-hover)] hover:text-white hover:scale-105 transition-all duration-300">
  Ir a Artículos
</a>
```

### 4. Botón Ghost (Navegación / Terciario)

Usar para: **Links de texto, acciones de bajo énfasis**

```html
<a href="#" class="btn btn-ghost btn-lg min-w-[160px] rounded-full hover:bg-[var(--color-surface-2)]">
  Comunidad
</a>
```

---

## 📐 Reglas de Tamaño y Forma

| Contexto | Clase Tamaño | Altura | Border Radius | Ejemplo |
|----------|--------------|--------|---------------|---------|
| **Cards / Input Groups** | Default / `btn-md` | `h-10 min-h-[40px]` | `rounded-xl` | [CourseCard.tsx] |
| **Formularios** | Default | `h-10 min-h-[40px]` | `rounded-xl` | Login / Register |
| **Hero / CTAs Grandes** | `btn-lg` | Auto (`3.5rem`+) | `rounded-full` | [Hero.tsx, NewsletterCTA.tsx] |

---

## 🎭 Estados de Hover (Obligatorios)

La consistencia en el hover da vida a la UI.

- **Escala**:
    - `hover:scale-[1.03]` para elementos rectangulares (`rounded-xl`).
    - `hover:scale-105` para elementos pastilla (`rounded-full`).
- **Sombra**:
    - `hover:shadow-lg` o `hover:shadow-xl`.
    - Color de sombra: `shadow-[var(--color-primary)]/20` (base) -> `shadow-[...]/40` (hover).
- **Color**:
    - Todo converge a `hover:bg-[var(--color-btn-hover)]` (Azul vibrante) para acciones principales/secundarias.

---

## 📋 Snippets Comunes

### Card Actions (CourseCard)

```tsx
<div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-base-200">
  <a 
    href={`/cursos/${slug}`} 
    className="btn btn-outline h-10 min-h-[40px] hover:!bg-[var(--color-btn-hover)] hover:!border-[var(--color-btn-hover)] hover:!text-white rounded-xl transition-all duration-300"
  >
    Ver Detalles
  </a>
  <button className="btn btn-primary h-10 min-h-[40px] text-white shadow-md shadow-primary/20 hover:bg-[var(--color-btn-hover)] hover:border-[var(--color-btn-hover)] hover:shadow-lg hover:shadow-[var(--color-btn-hover)]/40 hover:scale-[1.03] uppercase font-bold tracking-wide rounded-xl transition-all duration-300">
    Comprar
  </button>
</div>
```

### Newsletter Submit

```tsx
<button 
    type="submit" 
    className="btn btn-lg rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white border-none hover:shadow-lg hover:shadow-[var(--color-primary)]/20 hover:scale-105 transition-all duration-300 min-w-[160px]"
>
    Suscribirme
</button>
```

---

## ⚠️ Checklist de Validación

1.  ¿Es un botón principal de página (Hero)? -> Usa `btn-lg` y `rounded-full`.
2.  ¿Es un botón dentro de una tarjeta o formulario? -> Usa tamaño normal y `rounded-xl`.
3.  ¿Es botón de compra? -> Agrega `uppercase font-bold tracking-wide`.
4.  ¿Usaste las variables de color? -> Nunca uses hex codes directos (excepto blanco/negro puro si es necesario), usa `[var(--color-...)]`.
