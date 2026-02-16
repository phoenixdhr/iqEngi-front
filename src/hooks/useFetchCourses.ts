import { useState, useEffect } from 'react';
import type { Curso } from '@graphql-astro/generated/graphql';
import { CursosDocument } from '@graphql-astro/generated/graphql';
import { clientGql } from '@graphql-astro/apolloClient';
import { useCurrency } from './useCurrency';

/**
 * Hook reutilizable para obtener cursos del servidor con soporte de moneda.
 *
 * Encapsula el patrón común de:
 * - Estado de cursos con datos iniciales (SSR)
 * - Re-fetch automático cuando cambia la moneda seleccionada
 * - Estado de carga para evitar flash visual durante el cambio de moneda
 *
 * @param initialCourses - Cursos precargados desde el servidor (SSR/SSG)
 * @param limit - Cantidad máxima de cursos a obtener en cada fetch
 * @returns { courses, currency, loading } - Cursos actualizados, moneda actual, y estado de carga
 */
export function useFetchCourses(initialCourses: Curso[], limit: number) {
    // Estado de cursos, inicializado con datos precargados del servidor
    const [courses, setCourses] = useState<Curso[]>(initialCourses);
    // Estado de carga para evitar flash visual al cambiar moneda
    const [loading, setLoading] = useState(false);
    // Moneda global del usuario (detectada o seleccionada manualmente)
    const { currency } = useCurrency();

    // Re-fetch cuando cambia la moneda
    useEffect(() => {
        const fetchCourses = async () => {
            if (currency) {
                setLoading(true);
                try {
                    const { data } = await clientGql.query({
                        query: CursosDocument,
                        variables: {
                            offset: 0,
                            limit,
                            currency: currency
                        },
                        fetchPolicy: 'network-only' // Forzar fetch del servidor para obtener precios actualizados
                    });
                    if (data?.Cursos) {
                        setCourses(data.Cursos as Curso[]);
                    }
                } catch (error) {
                    console.error('Error obteniendo cursos:', error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchCourses();
    }, [currency, limit]);

    return { courses, currency, loading };
}
