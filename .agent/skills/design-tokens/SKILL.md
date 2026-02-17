# Sistema de Tokens de Diseño - iqEngi

Este skill documenta las variables CSS (Custom Properties) definidas en `src/styles/global.css`. 
**REGLA DE ORO:** Nunca uses valores hexadecimales (`#ffffff`) o clases de color de utilidad (`bg-red-500`) para elementos de UI. Usa siempre las variables semánticas.

## 🧠 Filosofía de Diseño ("Meaningful Color")

> "Pocas variables bien pensadas > mil tokens sueltos."

1.  **Neutrales (80-90% del UI)**: Estructura, fondos y texto. Deben dominar el layout para evitar fatiga visual.
2.  **Marca**: Solo para **acciones** clave (botones, enlaces). No pintar grandes fondos con color primario.
3.  **Semánticos**: Estados universales (éxito, error).
4.  **Acento**: "Maquillaje" (< 5% del UI) para detalles.

---

## 🎨 Paleta de Colores Semántica

### 1. Neutrales (Estructura)
Valores dinámicos que cambian automáticamente entre Light/Dark mode.

| Variable | Uso | Light (aprox) | Dark (aprox) |
|----------|-----|---------------|--------------|
| `--color-bg` | Fondo página | Blanco `#ffffff` | Gris oscuro `#111827` |
| `--color-surface` | Tarjetas, Paneles | Gris muy claro `#f8f9fa` | Slate oscuro `#0f172a` |
| `--color-surface-2` | Inputs, Hovers, Tablas | Gris claro `#f3f4f6` | Gris medio `#1f2937` |
| `--color-border` | Divisores sutiles | Gris `#e5e7eb` | Gris oscuro `#374151` |
| `--color-text` | Texto principal | Negro suave `#111827` | Blanco grisáceo `#f3f4f6` |
| `--color-text-muted` | Metadata, Placeholders | Gris medio `#4b5563` | Gris medio `#9ca3af` |

### 2. Marca (Acción e Identidad)
| Variable | Uso |
|----------|-----|
| `--color-primary` | **Acción Principal**: Botones "Comprar", Links activos. (Violeta `#9810fa`) |
| `--color-secondary` | **Acción Secundaria**: Enlaces, botones secundarios. (Cobre/Azul) |
| `--color-accent` | **Detalles**: Badges, contadores. (Magenta `#f041ff`) |

> **Nota sobre Dark Mode**: El `--color-secondary` cambia de Cobre (`#ad843a`) en Light a Azul (`#2b7fff`) en Dark para mantener contraste y legibilidad.

### 3. Estados (Feedback)
**Siempre** usar estos tokens para feedback.

| Estado | Token Color | Token Texto (Sobre fondo color) |
|--------|-------------|---------------------------------|
| **Éxito** | `--color-success` | `--color-on-success` |
| **Alerta** | `--color-warning` | `--color-on-warning` |
| **Error** | `--color-danger` | `--color-on-danger` |
| **Info** | `--in` (DaisyUI) | `--inc` (DaisyUI) |

---

## 💻 Ejemplos de Implementación

### ❌ Incorrecto
```tsx
// NO: Colores fijos rompen el dark mode
<div className="bg-white text-gray-900 border-gray-200">
  <button className="bg-purple-600">...</button>
</div>
```

### ✅ Correcto (Tokens)
```tsx
// SI: Se adapta automáticamente
<div className="bg-[var(--color-surface)] text-[var(--color-text)] border-[var(--color-border)]">
  <button className="btn btn-primary text-white">...</button>
</div>
```

### ✅ Gradientes
El gradiente principal de la marca está tokenizado:
```css
background-image: var(--gradient-button-primary);
/* Linear gradient de Secondary -> Primary */
```

---

## ⚠️ Checklist de Uso
1.  **¿Es un borde?** Usa `border-[var(--color-border)]`, no `border-gray-300`.
2.  **¿Es un texto secundario?** Usa `text-[var(--color-text-muted)]`, no `text-gray-500`.
3.  **¿Es un fondo de tarjeta?** Usa `bg-[var(--color-surface)]`.
