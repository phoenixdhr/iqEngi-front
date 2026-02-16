
import React from 'react';
import type { Curso } from '@graphql-astro/generated/graphql';
import { CourseCard } from '@components/molecules/Cards/CourseCard';
import { useFetchCourses } from '@hooks/useFetchCourses';

/**
 * Props del componente FeaturedCourses.
 * Recibe los cursos precargados desde el servidor (SSR).
 */
interface FeaturedCoursesProps {
    initialCourses: Curso[];
}

/**
 * FeaturedCourses - Muestra los cursos destacados en la página de inicio.
 * Usa el hook useFetchCourses para re-fetch automático al cambiar moneda.
 */
export function FeaturedCourses({ initialCourses }: FeaturedCoursesProps) {
    // Hook reutilizable: maneja cursos, moneda y estado de carga
    const { courses, currency, loading } = useFetchCourses(initialCourses, 5);

    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((curso) => (
                <CourseCard key={curso._id} {...curso} currency={currency} isLoading={loading} />
            ))}

            {/* Card "Ver más cursos" estática */}
            <a href="/cursos#catalogo" className="group relative flex flex-col items-center justify-center p-8 h-full min-h-[400px] rounded-2xl border-2 border-dashed border-[var(--color-border)] hover:border-[var(--color-primary)] bg-[var(--color-surface)]/50 hover:bg-[var(--color-surface)] transition-all duration-300 cursor-pointer text-center">
                <div className="w-20 h-20 rounded-full bg-[var(--color-surface-2)] group-hover:bg-[var(--color-primary)]/10 flex items-center justify-center mb-6 transition-colors duration-300">
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    Explora todo el catálogo
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm mb-6 max-w-[200px]">
                    Tenemos muchos más cursos especializados esperando por ti.
                </p>
                <span className="inline-flex items-center gap-2 font-semibold text-[var(--color-primary)] group-hover:gap-3 transition-all duration-300">
                    Ver todos los cursos
                    <span>→</span>
                </span>
            </a>
        </div>
    );
}
