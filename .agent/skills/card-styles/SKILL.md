# Sistema de Tarjetas (Cards) - iqEngi

Este skill define los patrones de diseño para las tarjetas del sitio, asegurando consistencia visual en sombras, bordes, animaciones e interacción.

**Dependencias**: Ver `design-tokens/SKILL.md` para colores.

## Filosofía de Diseño ("Glass & Lift")

- **Base**: `bg-base-100` (React) o `bg-[var(--color-surface)]` (Astro/Static) con borde sutil `border-base-200`.
- **Reposo**: `shadow-lg` (elevación media).
- **Hover**: 
  - Elevación: `hover:shadow-2xl` + `hover:-translate-y-1` (levitación física).
  - Imagen: Zoom suave `scale-110`.
  - Título: Cambio de color a `primary` (`text-[var(--color-primary)]`).

---

## 🚀 Implementación Unificada (React & Astro)

Ambos frameworks deben producir el **mismo output visual**. Copia estos snippets base.

### 1. Estructura Base (Grid Item)

**React (.tsx)**
```tsx
<article className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col group overflow-hidden border border-base-200">
  {/* Imagen Wrapper */}
  <a href={link} className="block relative aspect-video overflow-hidden">
    <figure className="w-full h-full">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Overlays opcionales aquí */}
    </figure>
  </a>

  {/* Body */}
  <div className="card-body p-5 flex flex-col flex-grow gap-2">
    <a href={link} className="hover:text-[var(--color-primary)] transition-colors">
      <h2 className="card-title text-lg font-bold leading-tight line-clamp-2">
        {title}
      </h2>
    </a>
    
    {/* Description / Metadata */}
    <p className="text-sm text-[var(--color-text-muted)] line-clamp-2 mt-2 flex-grow">
      {description}
    </p>

    {/* Actions */}
    <div className="card-actions justify-end mt-4 pt-4 border-t border-base-200">
      {/* Botones (ver button-styles) */}
    </div>
  </div>
</article>
```

**Astro (.astro)**
```astro
<div class="card bg-[var(--color-surface)] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col group overflow-hidden border border-base-200">
    <!-- Imagen Wrapper -->
    <a href={link} class="block relative aspect-video overflow-hidden">
        <figure class="w-full h-full">
            <img
                src={src}
                alt={alt}
                loading="lazy"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
        </figure>
    </a>

    <!-- Body -->
    <div class="card-body p-5 flex flex-col flex-grow gap-2">
        <a href={link} class="hover:text-[var(--color-primary)] transition-colors">
            <h2 class="card-title text-lg font-bold leading-tight line-clamp-2">
                {title}
            </h2>
        </a>
        
        <p class="text-sm text-[var(--color-text-muted)] line-clamp-2 mt-2 flex-grow">
            {description}
        </p>

        <!-- Actions -->
        <div class="card-actions justify-end mt-4 pt-4 border-t border-base-200">
            <!-- Botones -->
        </div>
    </div>
</div>
```

---

## 🎨 Anatomía de Clases (Strict)

| Parte | Frontend (Tailwind) | Motivo |
|-------|---------------------|--------|
| **Container** | `card bg-base-100 shadow-lg border border-base-200` | Base sólida, borde sutil para modo oscuro. |
| **Estado Hover** | `hover:shadow-2xl hover:-translate-y-1 transition-all duration-300` | Levitación, NO usar `scale` en el contenedor (se ve borroso). |
| **Imagen** | `aspect-video object-cover transition-transform duration-700 group-hover:scale-110` | Zoom cinemático lento. |
| **Títulos** | `text-lg font-bold leading-tight hover:text-[var(--color-primary)]` | Jerarquía y feedback. |
| **Texto Secundario**| `text-sm text-[var(--color-text-muted)]` | Usar token semántico, no `text-gray-500`. |

---

## ⚠️ Errores Comunes a Evitar

1.  **Diferentes Sombras**: No mezcles `shadow-xl` con `shadow-lg` en listados hermanos. Usa siempre `shadow-lg` -> `shadow-2xl`.
2.  **Hardcoded Colors**:
    - ❌ `text-purple-600`
    - ✅ `text-[var(--color-primary)]`
    - ❌ `bg-white`
    - ✅ `bg-base-100` o `bg-[var(--color-surface)]`
3.  **Animación Inconsistente**: No usar `duration-100` en unas cards y `duration-500` en otras. Estándar: `duration-300` para container, `duration-700` para imagen.
