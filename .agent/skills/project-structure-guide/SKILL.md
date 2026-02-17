---
description: Guía de estructura del proyecto y reglas de organización de archivos para iqEngi-front.
---

# Guía de Estructura del Proyecto (iqEngi-front)

Esta skill define la arquitectura de carpetas y las reglas para la creación de nuevos archivos en el proyecto. Consulta esta guía siempre que necesites decidir dónde ubicar un nuevo componente, página o utilidad.

## Estructura de Directorios (`src/`)

### 1. Componentes (`src/components/`)
La arquitectura de componentes se organiza por niveles de abstracción y dominio de negocio.

- **`ui/` (UI Kit):**
  - Componentes base, visuales y reutilizables sin lógica de negocio compleja.
  - Ejemplos: `Button`, `Input`, `Badge`, `Spinner`, `Modal`.
  - Regla: Deben ser agnósticos al dominio de la aplicación.

- **`molecules/` (Moléculas):**
  - Composiciones simples de componentes UI.
  - Ejemplos: `Card`, `SearchBar`, `UserDropdown`, `Pagination`.
  - Regla: Pueden tener lógica de UI, pero evitar dependencia directa de datos globales complejos si es posible.

- **`sections/` (Secciones):**
  - Bloques grandes que conforman una página.
  - Ejemplos: `Hero`, `Footer`, `Navbar`, `FeaturesGrid`, `ContactForm`.
  - Regla: Generalmente se usan directamente en las páginas (`src/pages`).

- **`features/` (Dominios/Features):**
  - Módulos completos encapsulados por dominio de negocio.
  - Ejemplos: `Auth/LoginForm`, `Cart/CartDrawer`, `Courses/CourseList`.
  - Regla: Úsalos cuando un componente es altamente específico de una funcionalidad y tiene mucha lógica de negocio o estado complejo asociado.

### 2. Páginas y Rutas (`src/pages/`)
Astro utiliza enrutamiento basado en archivos.

- **`.astro` files:** Páginas estáticas o renderizadas en servidor.
- **`api/`:** Endpoints de API.
- **Estructura anidada:** `admin/`, `blog/`, `cursos/` reflejan la URL pública.

### 3. Layouts (`src/layouts/`)
Plantillas maestras para las páginas.
- Ejemplos: `LayoutSeo.astro`, `Layout404.astro`.

### 4. Estilos (`src/styles/`)
- `global.css`: Contiene la configuración de Tailwind (@theme) y estilos globales.

### 5. Data Layer (`src/graphql-astro/`)
- **`queries-text.json`:** Definiciones crudas de queries/mutations.
- **`generated/`:** Tipos y hooks generados por codegen.
- **Regla:** NUNCA escribas queries GraphQL directamente en componentes; usa siempre los hooks generados.

### 6. Otros Directorios Clave
- **`hooks/`:** Hooks de React personalizados (`useFetchCourses`).
- **`utils/`:** Funciones de utilidad puras (`formatPrice`).
- **`services/`:** Lógica de integración con APIs externas (si no es GraphQL).
- **`content/`:** Colecciones de contenido de Astro (configuración y schemas).
- **`const/`:** Constantes globales del proyecto.
- **`interfaces/`:** Definiciones de tipos TypeScript compartidos.

## Reglas para Crear Archivos

1. **Nombramiento:**
   - Componentes React (`.tsx`): `PascalCase` (ej. `CourseCard.tsx`).
   - Hooks: `camelCase` empezando con `use` (ej. `useAuth.ts`).
   - Utilidades: `camelCase` (ej. `dateFormatter.ts`).
   - Páginas Astro: `kebab-case` o `snake_case` según la URL deseada (ej. `terminos-condiciones.astro`).

2. **Ubicación:**
   - Si es un botón o input genérico -> `src/components/ui`
   - Si es un bloque de contenido para una landing -> `src/components/sections`
   - Si es lógica compleja de un curso o carrito -> `src/components/features`
   - Si es una página nueva -> `src/pages`

3. **Co-ubicación:**
   - Si un componente necesita submódulos privados, crea una carpeta con el nombre del componente y `index.tsx`.

## Ejemplo de Flujo de Trabajo

- **Tarea:** Crear una nueva sección de "Testimonios".
- **Acción:** Crear `src/components/sections/Testimonials/Testimonials.tsx`.

- **Tarea:** Crear un botón de "Comprar ahora" con lógica de carrito.
- **Acción:**
  - Componente visual base: `src/components/ui/Button.tsx` (existente).
  - Componente funcional: `src/components/features/Cart/AddToCartButton.tsx`.
