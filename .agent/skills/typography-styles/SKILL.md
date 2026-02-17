---
name: typography-styles
description: Estándares tipográficos para contenido rico (Blog, Artículos de Curso).
---

# Sistema Tipográfico de Contenido (Rich Text)

Este skill define las reglas para renderizar contenido de texto largo (Blog Posts, Lecciones) usando la clase contenedora `.post-content`.

## 📝 Clase Base: `.post-content`

Todo contenido generado por CMS o Markdown debe envolverse en esta clase para heredar la jerarquía tipográfica correcta.

```tsx
<article className="post-content">
  <MDXContent />
</article>
```

---

## 📐 Jerarquía de Encabezados

| Etiqueta | Tamaño | Color | Uso |
|----------|--------|-------|-----|
| `h1` | `2.75rem` (44px) | `primary` | Título del Artículo (Único por página). |
| `h2` | `2.25rem` (36px) | `secondary` | Secciones Principales. Tiene borde inferior. |
| `h3` | `1.75rem` (28px) | `text` | Sub-secciones. |
| `h4` | `1.375rem` (22px) | `text` | Títulos de apartados. |
| `h5` | `1.125rem` (18px) | `text-muted` | Etiquetas o categorías (Uppercase). |

---

## ✒️ Elementos de Prosa

### Párrafos y Lectura
- **Font**: System UI (`sans-serif`).
- **Ancho Máximo**: `90ch` (aprox 90 caracteres) para evitar líneas demasiado largas que fatigan la vista.
- **Line Height**: `1.8` (espacioso).
- **Tamaño**: `1.1rem` (aprox 17.6px).

### Enlaces
- Color `secondary` con subrayado sutil.
- **Hover**: Cambia fondo a un tinte del color secundario (`color-mix`).

### Listas
- **Items**: Marcados con una flecha `▶` en color `secondary` (para `ul`).
- **Margin**: `2rem` inferior.

---

## 🧩 Componentes Embebidos

### Citas (Blockquotes)
Estilo de tarjeta con borde lateral izquierdo.
```html
<blockquote>Texto citado...</blockquote>
```
- Borde: 4px `primary`.
- Fondo: `surface`.
- Texto: `text-muted` + Italic.

### Tablas
Estilo "zebra" sutil.
- Header: `surface-2` + Uppercase bold.
- Body Hover: Rows se oscurecen ligeramente al pasar el mouse.
- Sombra: `shadow-sm` para elevar la tabla.

### Cajas de Alerta (Callouts)
Clases especiales para resaltar contenido técnico.

```html
<div class="info-box">Información...</div>
<div class="warning-box">Advertencia...</div>
<div class="success-box">Tip o éxito...</div>
```

### Tabla de Contenidos (TOC)
Contenedor `.in-this-article-box`.
- Fondo `surface-2`.
- Links `.toc-link`: Tienen un marcador lateral animado en estado `.active`.

---

## 🎨 Código (Pre/Code)
- **Fondo**: `surface-2` (un poco más oscuro que el fondo base).
- **Borde**: `color-border` sutil.
- **Font**: Monospace.
