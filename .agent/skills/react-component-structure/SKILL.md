---
name: react-component-structure
description: Estándares para crear componentes React usando Function Declarations
---

# Estructura de Componentes React

Este skill define el estándar para la creación de componentes React en el proyecto **iqEngi-front**, alineado con `stack-frontend.md`.

## Reglas Principales

1.  **Function Declarations**: SIEMPRE usa `export function ComponentName(props: Props) {}`.
2.  **Named Exports**: EVITA `export default`. Facilita el refactoring y tree-shaking.
3.  **Interface de Props**:
    - Nombre: `interface {ComponentName}Props`
    - Ubicación: Inmediatamente antes de la función.
4.  **No Arrow Functions**: ⛔ `const Component = () => {}` está prohibido para componentes.

## Ejemplo Estándar

```tsx
import type { ReactNode } from 'react';
// Importa tipos compartidos si es necesario
// import type { Course } from '@types';

interface CardProps {
  title: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

/**
 * Card - Componente genérico de tarjeta.
 * @param title - Título de la tarjeta.
 */
export function Card({ title, children, variant = 'primary', onClick }: CardProps) {
  return (
    <div className={`card card-${variant}`} onClick={onClick}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
```

## Beneficios
- **Consistencia**: El mismo patrón en todo el proyecto.
- **Mantenibilidad**: Interfaces claras y documentadas.
- **Debugging**: Mejores stack traces con nombres de función.
