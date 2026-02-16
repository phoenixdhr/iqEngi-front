
import React, { useState, useEffect } from 'react';
import type { Curso } from '@graphql-astro/generated/graphql';
import { CursosDocument } from '@graphql-astro/generated/graphql';
import { clientGql } from '@graphql-astro/apolloClient';
import { CourseCard } from '../molecules/CourseCard';
import { useCurrency } from '../../context/CurrencyContext';

interface FeaturedCoursesProps {
    initialCourses: Curso[];
}

export const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({ initialCourses }) => {
    const { currency } = useCurrency();
    const [courses, setCourses] = useState<Curso[]>(initialCourses);
    // Estado de carga para evitar flash visual al cambiar moneda
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCourses = async () => {
            if (currency) {
                setLoading(true);
                try {
                    const { data } = await clientGql.query({
                        query: CursosDocument,
                        variables: {
                            offset: 0,
                            limit: 5,
                            currency: currency
                        },
                        fetchPolicy: 'network-only'
                    });
                    if (data?.Cursos) {
                        setCourses(data.Cursos as Curso[]);
                    }
                } catch (error) {
                    console.error("Error fetching featured courses:", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchCourses();
    }, [currency]);

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
};
