---
trigger: always_on
---

# Tech Stack: Frontend (iqengi-front)
**Activación:** Glob `iqengi-front/**/*`
Esta regla define el stack tecnológico, gestión de estado y convenciones de código para el frontend del proyecto iqEngi.

## 1. Core Stack
- **Framework:** Astro v5 (Static First).
- **UI Library:** React v19.
- **Styling:** TailwindCSS v4 + DaisyUI v5.
- **Data:** Apollo Client v3 + GraphQL Codegen.

## 2. Estructura y Naming (Strict)
- **Modules Structure:**
  - `src/components/ui`: Componentes base reutilizables (Buttons, Inputs, Badges).
  - `src/components/molecules`: Composiciones simples de UI.
  - `src/components/sections`: Bloques grandes de página (Hero, Footer, Navbar).
  - `src/components/features/{FeatureName}`: Componentes de negocio específicos (ej. `Courses`, `Cart`).
  - `src/layouts`: Layouts de Astro.
  - `src/pages`: Rutas de Astro.
- **Naming Conventions:**
  - **Componentes:** PascalCase (`CourseCard.tsx`, `UserProfile.tsx`).
  - **Hooks:** camelCase con prefijo use (`useFetchCourses.ts`).
  - **Utils:** camelCase (`formatPrice.ts`).
  - **Interfaces:** PascalCase, preferiblemente co-locadas o en `types.ts`.

## 3. Patrones de Componentes (Strict)
- **Syntax:** ⛔ NO USAR Arrow Functions para componentes. Usar **Function Declarations**:
  ```tsx
  export function MyComponent(props: MyComponentProps) { ... }
  ```
- **Exports:** Usar **Named Exports** (`export function`) en lugar de `export default`.
- **Props:** Definir interface `ComponentProps` inmediatamente antes del componente.
  ```tsx
  interface MyComponentProps {
    title: string;
  }
  export function MyComponent({ title }: MyComponentProps) { ... }
  ```
- **JSDoc:** Componentes complejos o reutilizables DEBEN tener un breve JSDoc explicando su propósito y props clave.

## 4. Gestión de Estado (State Management)
- **Estado Global:** ⛔ NO USAR librerías externas (Zustand, Redux).f
- **Server State:** Apollo Client Cache es la única fuente de verdad.
- **Local State:** `useState`, `useReducer` para UI.
- **Comunicación:** Custom Events para comunicación entre islas Astro.

## 5. Hooks y Lógica
- **Custom Hooks:** Extraer lógica de negocio compleja (data fetching, transformaciones grandes) a hooks personalizados, especialmente dentro de `features`.
- **Prefijo:** Siempre usar `use` para hooks.

## 6. GraphQL & Data Fetching (STRICT)
- **Definición:** ⛔ NO usar `gql` tag en `.ts/tsx`. Queries en `queries-text.json`.
- **Flujo:** `queries-text.json` -> `npm run codegen` -> Importar desde `@graphql-astro/generated/graphql`.
- **Imports:** Verificar que `generated/graphql.ts` use `import { gql } from '@apollo/client/core';`.

## 7. Estilos (Tailwind v4)
- **Configuración:** Todo en `src/styles/global.css` (@theme). ⛔ NO `tailwind.config.js`.
- **Variables:** Usar variables CSS nativas (`var(--color-surface)`) definidas en global.css.

## 8. Manejo de Errores y Logging
- **Producción:** ⛔ EVITAR `console.log` en código final.
- **Errores:** Usar `console.error` para errores de API críticos.
- **UI:** Mostrar feedback visual al usuario (Toast, Alertas, estados Empty/Error) en lugar de fallar en silencio.

## 9. Astro vs React Integration
- **Estrategia:**
  - `.astro`: Estructura estática, Layouts, SEO, Fetching inicial (SSR) si es posible.
  - `.tsx` (React): Interactividad, Estado local, Apollo Client queries (CSR).
- **Hidratación:** Usar `client:visible` o `client:load` solo cuando sea estrictamente necesario.

## 10. Testing (Vitest + Playwright)
- **Unitario:** Vitest.
- **E2E:** Playwright.

## 11. Git & Commit Standards
- **Idioma:** Español.
- **Formato:** `tipo: descripción corta` (ej. `feat: nueva tarjeta de cursos`).