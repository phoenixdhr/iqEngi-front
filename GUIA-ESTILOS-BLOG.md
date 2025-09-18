# Guía de Estilos para Posts del Blog

## Clases CSS Disponibles para Contenido Técnico

### 1. Resaltado de Términos Técnicos Críticos
```html
<span class="term-highlight">ERS</span>
<span class="term-highlight">HAZOP</span>
<span class="term-highlight">QRA</span>
```

### 2. Cajas de Información Especiales

#### Caja de Información General
```html
<div class="info-box">
💡 **Importante**: Un ERS NO es exigible para Unidades Menores según la normativa vigente.
</div>
```

#### Caja de Advertencia
```html
<div class="warning-box">
⚠️ **Atención**: Los criterios pueden expresarse de forma cualitativa o cuantitativa.
</div>
```

#### Caja de Éxito/Completado
```html
<div class="success-box">
✅ **Completado**: Todos los pasos del ERS han sido implementados correctamente.
</div>
```

### 3. Citas Destacadas
```html
<div class="highlight-quote">
"Un buen rendimiento en seguridad ocupacional NO asegura un buen rendimiento en seguridad de procesos."
</div>
```

### 4. Tabla de Contenidos Mejorada
La tabla de contenidos se genera automáticamente con iconos:
- 📌 Primer elemento
- 📖 Segundo elemento
- ⚡ Tercer elemento
- 🔧 Cuarto elemento
- etc.

## Jerarquía de Títulos Optimizada

### H1 - Título Principal
- Color: Primario (violeta)
- Tamaño: 44px
- Uso: Solo uno por post

### H2 - Secciones Principales
- Color: Secundario (cobre)
- Tamaño: 36px
- Incluye línea divisoria
- Uso: Secciones principales del contenido

### H3 - Subsecciones
- Color: Texto principal
- Tamaño: 28px
- Uso: Subdivisiones dentro de secciones

### H4 - Sub-subsecciones
- Color: Texto principal
- Tamaño: 22px
- Uso: Elementos específicos

### H5 - Elementos Menores
- Color: Texto secundario
- Tamaño: 18px
- Estilo: MAYÚSCULAS
- Uso: Categorías o clasificaciones

## Elementos de Texto

### Negritas (Strong)
- Se resalta con color secundario y fondo sutil
- Usar solo para conceptos críticos: **ERS**, **HAZOP**, **QRA**

### Enlaces
- Color secundario con subrayado
- Hover con fondo sutil
- Transiciones suaves

### Listas
- Viñetas personalizadas con triángulos (▶)
- Color secundario para marcadores
- Espaciado optimizado para lectura

## Responsive Design
- En móviles se reducen los tamaños de fuente automáticamente
- Espaciado adaptativo según el dispositivo
- Mantiene legibilidad en todas las pantallas

## Colores Utilizados
Todos los colores provienen exclusivamente de `global.css`:
- **Primary**: #9810fa (violeta)
- **Secondary**: #AD843A (cobre)
- **Text**: Variable según tema
- **Surface**: Fondos de elementos
- **Border**: Líneas divisorias

## Ejemplo de Uso en MDX

```mdx
# Estudio de Riesgos de Seguridad (ERS)

## Introducción

Los <span class="term-highlight">ERS</span> son instrumentos fundamentales...

<div class="info-box">
💡 **Importante**: Un ERS NO es exigible para Unidades Menores.
</div>

### Metodologías Disponibles

- **HAZOP** (Hazard and Operability Study)
- **HAZID** (Hazard Identification)
- **What If** (Análisis de escenarios)

<div class="warning-box">
⚠️ **Atención**: Las metodologías deben ser aplicadas por profesionales certificados.
</div>
```