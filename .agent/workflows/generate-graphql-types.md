---
description: Generación de tipos TypeScript para GraphQL (iqEngi-front)
---

Este workflow automatiza y documenta el proceso de generación de tipos para el cliente Apollo en el frontend.



# Pasos

## 1. Actualizar Queries Locales
Cuando se modifique, actualice, elimine o cree un mutation o un query, actualiza directamente el archivo: src/graphql-astro/queries-text.json



## 3. Generar Archivos (Automático)

Ejecuta los scripts de generación en el frontend:

```bash
cd iqEngi-front

# Generar operations.graphql desde el JSON
node script/graphql-generate.js

# Generar tipos TypeScript (graphql.ts)
npm run codegen
```

> [!NOTE]
> El script `graphql-generate.js` crea `src/graphql-astro/generated/operations.graphql`.
> El comando `npm run codegen` crea `src/graphql-astro/generated/graphql.ts`.

## 4. Verificar Importaciones

1.  Revisa el archivo generado: `src/graphql-astro/generated/graphql.ts`.
2.  Asegúrate de que la importación de Apollo Client sea correcta (si es necesario ajustarla manualmente, aunque `codegen.ts` debería manejarlo):
    *   Debe ser: `import { gql } from '@apollo/client/core';` (si usas Astro/Node) o `@apollo/client` según tu entorno.
    *   *Nota: El usuario mencionó cambiarlo a `@apollo/client/core` manualmente en su proceso.*