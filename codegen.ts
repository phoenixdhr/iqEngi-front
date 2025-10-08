
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true, // Sobrescribe los archivos generados en cada ejecución

  schema: "https://iqengi-backend-production.up.railway.app/graphql", // URL del backend GraphQL


  documents: "src/graphql-astro/**/*.graphql", // Busca todas las queries en la carpeta graphql

  generates: {
    "src/graphql-astro/generated/graphql.ts": { // Ruta de salida del código generado
      plugins: [
        "typescript", // Genera los tipos de TypeScript
        "typescript-operations", // Genera tipos para Queries, Mutations y Subscriptions
        "typescript-react-apollo" // Genera hooks para Apollo Client
      ],
      config: {
        withHooks: true // Permite usar hooks como useQuery, useMutation
      }
    }
  }
};

export default config;
