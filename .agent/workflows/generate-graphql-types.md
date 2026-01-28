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

## 4. Verificar y Corregir Importaciones (CRÍTICO)
1.  **Revisión:** Abre `src/graphql-astro/generated/graphql.ts`.
2.  **Corrección:** Busca la línea de importación de `gql`.
    - **Incorrecto:** `import { gql } from '@apollo/client';`
    - **CORRECTO:** `import { gql } from '@apollo/client/core';`
3.  Si la importación es incorrecta, cámbiala manualmente o ejecuta este comando en PowerShell:
    ```powershell
    $file = "src/graphql-astro/generated/graphql.ts"
    (Get-Content $file).Replace("import { gql } from '@apollo/client';", "import { gql } from '@apollo/client/core';") | Set-Content $file
    ```