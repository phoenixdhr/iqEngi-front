
import React, { useState, useEffect, useMemo } from 'react';
import type { Curso } from '@graphql-astro/generated/graphql';
import { CursosDocument } from '@graphql-astro/generated/graphql';
import { clientGql } from '@graphql-astro/apolloClient';
import { CourseCard } from '../molecules/CourseCard';
import { useCurrency } from '../../context/CurrencyContext';

interface PopularCoursesListProps {
    initialCourses: Curso[];
}

export const PopularCoursesList: React.FC<PopularCoursesListProps> = ({ initialCourses }) => {
    const { currency } = useCurrency();
    const [courses, setCourses] = useState<Curso[]>(initialCourses);
    const [loading, setLoading] = useState(false);

    // Fetch courses when currency changes
    useEffect(() => {
        const fetchCourses = async () => {
            if (currency) {
                setLoading(true);
                try {
                    // Replicamos la query inicial de la página (limit 24) para tener el mismo pool de datos para ordenar
                    const { data } = await clientGql.query({
                        query: CursosDocument,
                        variables: {
                            offset: 0,
                            limit: 24,
                            currency: currency
                        },
                        fetchPolicy: 'network-only'
                    });
                    if (data?.Cursos) {
                        setCourses(data.Cursos as Curso[]);
                    }
                } catch (error) {
                    console.error("Error fetching popular courses with currency:", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchCourses();
    }, [currency]);

    // Sorting logic (same as original CoursesPopular.astro)
    const popularCourses = useMemo(() => {
        return [...courses]
            .filter(c => !c.deleted)
            .sort((a, b) => {
                const scoreA = (a.calificacionPromedio || 0) + (Math.min(a.numeroCalificaciones || 0, 5) * 0.1);
                const scoreB = (b.calificacionPromedio || 0) + (Math.min(b.numeroCalificaciones || 0, 5) * 0.1);
                return scoreB - scoreA;
            })
            .slice(0, 3);
    }, [courses]);

    if (!popularCourses.length) return null;

    return (
        <section className="py-16 bg-base-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="max-w-xl">
                        <span className="text-primary font-semibold tracking-wider text-sm uppercase">Lo más destacado</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2">Cursos Más Populares</h2>
                        <p className="text-base-content/60 mt-2">
                            Descubre los cursos que están marcando tendencia en nuestra comunidad de ingenieros.
                        </p>
                    </div>
                    <a href="#catalogo" className="btn btn-outline rounded-full px-6">Ver todos los cursos</a>
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${loading ? 'opacity-50' : 'opacity-100'}`}>
                    {popularCourses.map((curso) => (
                        <CourseCard key={curso._id} {...curso} currency={currency} isLoading={loading} />
                    ))}
                </div>
            </div>
        </section>
    );
};
