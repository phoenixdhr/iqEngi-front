---
name: react-component-structure
description: Estándares para crear componentes React usando Function Declarations
---

# Estructura de Componentes React

Este skill define el estándar para la creación de componentes React en el proyecto **iqEngi-front**, priorizando el uso de **Function Declarations**.

## Reglas Principales

1.  **Function Declarations**: SIEMPRE declara componentes usando `function ComponentName() {}`.
2.  **No Arrow Functions**: EVITA definir componentes como `const ComponentName = () => {}`.
3.  **Interfaces para Props**: Define explícitamente la interfaz de props justo antes del componente (o impórtala si es compartida).
4.  **Exports**: Utiliza `export default` para componentes principales de archivo o `export function` para componentes secundarios/utilitarios, según la convención del proyecto.

## Ejemplos

### ✅ Correcto

```tsx
import type { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Card({ title, children, variant = 'primary' }: CardProps) {
  return (
    <div className={`card card-${variant}`}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
```

### ❌ Incorrecto

```tsx
// Evitar Arrow Functions para componentes
export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
```

## Beneficios
- **Hoisting**: Las declaraciones de función soportan hoisting, lo que puede ser útil en ciertos patrones.
- **Depuración**: Los nombres de funciones aparecen claramente en los stack traces.
- **Consistencia**: Mantiene un estilo uniforme en todo el codebase.
