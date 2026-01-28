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
- **Component Syntax:** Usar SIEMPRE **Function Declarations** (`function Component() {}`) en lugar de Arrow Functions para componentes React.

## 2. Gestión de Estado (State Management)
- **Estado Global:** ⛔ NO USAR librerías externas (Zustand, Redux, Nano Stores).
- **Server State:** Apollo Client Cache es la única fuente de verdad para datos del backend.
- **Local State:** Usar `useState` o `useReducer` de React para interactividad UI local, tambien puedes usar `useEffect`.
- **Comunicación:** Si es necesario compartir estado entre islas, usar Custom Events del navegador o Props drilling simple (Astro island props).

## 3. GraphQL & Data Fetching (STRICT)
- **Definición:** ⛔ NO usar template literals (`gql` tag) dentro de archivos `.ts/tsx`.
- **Mantenimiento de Queries:**
  - Las definiciones de queries y mutations residen en `src/graphql-astro/queries-text.json`.
  - Para agregar o modificar tipos en `generated/graphql.ts`, se debe actualizar PRIMERO `src/graphql-astro/queries-text.json`.
- **Flujo de Generación:**
  1. Editar `src/graphql-astro/queries-text.json`.
  2. Ejecutar `npm run codegen`.
  3. **Corrección de Importación (CRÍTICO):** Verificar `src/graphql-astro/generated/graphql.ts`.
     - La importación DEBE ser: `import { gql } from '@apollo/client/core';`.
     - Si es diferente, modificarla manualmente.
- **Consumo:** Importar los hooks/types generados en React desde `../generated/graphql`.

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