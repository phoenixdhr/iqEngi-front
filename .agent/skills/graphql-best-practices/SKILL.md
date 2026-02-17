---
name: graphql-best-practices
description: Best practices for using GraphQL and Apollo Client in the project to avoid common errors.
---

# GraphQL & Apollo Client Best Practices

Standards for implementing GraphQL features in **iqEngi-front**, aligned with `stack-frontend.md`.

## 1. Workflow de Generación (Strict)

Para agregar o modificar queries, **NO** edites archivos `.ts` manualmente.

1.  **Editar Source**: Modifica `src/graphql-astro/queries-text.json`.
2.  **Generar Tipos**: Ejecuta `npm run codegen`.
3.  **Verificar Imports**: Revisa `src/graphql-astro/generated/graphql.ts` para asegurar `import { gql } from '@apollo/client/core';`.

## 2. Wrapping Components with ApolloProvider

**Rule:** When a **React component** uses Apollo hooks (e.g., `useQuery`), you **MUST** wrap it in an `ApolloProvider` specifically for that island (if not already provided higher up).

**Pattern:**

```tsx
import { ApolloProvider } from '@apollo/client';
import { clientGql } from '@graphql-astro/apolloClient';
import { useSomeQuery } from '@graphql-astro/generated/graphql';

function MyComponentContent() {
    const { data } = useSomeQuery();
    return <div>{data?.someField}</div>;
}

export function MyComponent() {
    return (
        <ApolloProvider client={clientGql}>
            <MyComponentContent />
        </ApolloProvider>
    );
}
```

## 3. Imperative Fetching (Client-Side)

**Rule:** For event-driven fetching (clicks, submits), use `clientGql` directly instead of hooks to avoid complex provider wrapping if not needed.

**Pattern:**

```tsx
import { clientGql } from '@graphql-astro/apolloClient';
import { GetCoursesDocument } from '@graphql-astro/generated/graphql';

// ... inside component
const handleLoadMore = async () => {
    const { data } = await clientGql.query({
        query: GetCoursesDocument,
        variables: { limit: 10 }
    });
};
```
