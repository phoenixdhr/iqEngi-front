---
name: naming-conventions
description: Estándares de nomenclatura para archivos, variables, funciones y tipos en iqEngi-front.
---

# Convenciones de Nomenclatura (Naming Conventions)

Este skill define los estándares obligatorios para nombrar elementos en el código fuente de **iqEngi-front**. La consistencia en los nombres facilita la lectura y mantenimiento del código.

## 1. Archivos y Carpetas

- **Componentes React (`.tsx`):** `PascalCase`.
  - Ej: `CourseCard.tsx`, `UserProfile.tsx`.
- **Componentes Astro (`.astro`):** `kebab-case` (preferido para rutas/páginas) o `PascalCase` (para componentes UI/layouts).
  - Ej: `pages/terminos-condiciones.astro`, `layouts/LayoutSeo.astro`.
- **Hooks:** `camelCase`, prefijado con `use`.
  - Ej: `useAuth.ts`, `useFetchCourses.ts`.
- **Utilidades/Funciones:** `camelCase`.
  - Ej: `formatPrice.ts`, `dateFormatter.ts`.
- **Carpetas de Componentes:** `PascalCase`.
  - Ej: `components/features/Auth/`.

## 2. Código (TypeScript/React)

- **Componentes (Función):** `PascalCase`.
  - Ej: `export function CourseCard() {}`
- **Variables Locales:** `camelCase`.
  - Ej: `const [isLoading, setIsLoading] = useState(false);`
- **Constantes Globales:** `UPPER_SNAKE_CASE`.
  - Ej: `const DEFAULT_ITEMS_PER_PAGE = 6;`
- **Interfaces y Tipos:** `PascalCase`. No usar prefijo `I` (ej. `ICourse` ❌).
  - Ej: `interface CourseProps {}`, `type Category = ...`
- **Props Booleanos:** Prefijar con `is`, `has`, `should`, `can`.
  - Ej: `isLoading`, `hasError`, `shouldRender`, `canEdit`.
- **Event Handlers:** Prefijar con `handle` (función) y `on` (prop).
  - Ej: `const handleSubmit = () => ...`, `onClick={handleClick}`.

## 3. GraphQL

- **Operaciones (Queries/Mutations):** `PascalCase` + Sufijo del tipo.
  - Ej: `GetCoursesQuery`, `CreateUserMutation`.
- **Hooks Generados:** Usar los nombres por defecto de codegen (`useGetCoursesQuery`).

## Ejemplos

### ✅ Correcto

```tsx
// CourseList.tsx
const MAX_ITEMS = 10;

interface CourseListProps {
  courses: Course[];
  isLoading: boolean;
  onCourseClick: (id: string) => void;
}

export function CourseList({ courses, isLoading, onCourseClick }: CourseListProps) {
  const handleItemClick = (id: string) => {
    onCourseClick(id);
  };

  if (isLoading) return <Spinner />;

  return (
    <ul>
      {courses.map(course => (
        <li key={course.id} onClick={() => handleItemClick(course.id)}>
          {course.title}
        </li>
      ))}
    </ul>
  );
}
```

### ❌ Incorrecto

```tsx
// course_list.tsx (Mal nombre de archivo)
const max_items = 10; // Mal nombre de constante

interface ICourseListProps { // Prefijo I innecesario
  Courses_List:any; // Mal nombre de prop
  loading: boolean; // Ambiguo, mejor isLoading
}

export const course_list = (props: ICourseListProps) => { // Arrow function y mal nombre
  // ...
}
```
