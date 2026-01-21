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

## 2. Gestión de Estado (State Management)
- **Estado Global:** ⛔ NO USAR librerías externas (Zustand, Redux, Nano Stores).
- **Server State:** Apollo Client Cache es la única fuente de verdad para datos del backend.
- **Local State:** Usar `useState` o `useReducer` de React para interactividad UI local, tambien puedes usar `useEffect`.
- **Comunicación:** Si es necesario compartir estado entre islas, usar Custom Events del navegador o Props drilling simple (Astro island props).

## 3. GraphQL & Data Fetching (STRICT)
- **Definición:** ⛔ NO usar template literals (`gql` tag) dentro de archivos `.ts/tsx`.
- **Archivos:** Crear SIEMPRE archivos `.graphql` en `src/graphql-astro/` (ej: `src/graphql-astro/courses.graphql`).
- **Flujo de Desarrollo:**
  1. Escribir la Query/Mutation en un archivo `.graphql`.
  2. Ejecutar script de codegen (ej. `npm run codegen`).
  3. Importar el **Hook Generado** en React (ej. `useGetCoursesQuery` desde `../generated/graphql`).

## 4. Estilos (Tailwind v4)
- **Configuración:** ⛔ NO BUSCAR ni crear `tailwind.config.js`.
- **Theme:** Toda la configuración vive en `src/styles/global.css` usando la directiva `@theme`, si hay algun estilo que no se encuentre en ese archivo pero se desee usar, se debe agregar en `src/styles/global.css`.
- **Clases:** Usar variables CSS nativas para colores (`bg-[var(--color-surface)]`) o clases semánticas de DaisyUI.

## 5. Testing (Vitest + Playwright)
- **Unitario:** Vitest para lógica de negocio.
- **Componentes:** React Testing Library.
- **E2E:** Playwright.

## 6. Git & Commit Standards
- **Idioma:** Español.
- **Formato:** tipo: descripción corta.
- **Ejemplo:** se agregó validación de usuarios