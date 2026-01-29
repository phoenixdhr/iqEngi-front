import React, { useState, useEffect } from 'react';
import { useCurrency } from '../../context/CurrencyContext';
import { clientGql } from '@graphql-astro/apolloClient';
import { CursoDocument } from '@graphql-astro/generated/graphql';

interface CoursePriceDisplayProps {
    courseId: string;
    initialPrice: number;
    initialCurrency?: string;
    descuento?: number | null;
    className?: string; // Para estilos del precio principal
    originalPriceClassName?: string; // Para estilos del precio original (tachado)
    showDiscountLabel?: boolean; // Para mostrar/ocultar "Ahorras X"
    layout?: 'simple' | 'column' | 'row'; // Flexibilidad de diseño
}

export function CoursePriceDisplay({
    courseId,
    initialPrice,
    initialCurrency = 'USD', // Default de fallback
    descuento,
    className = "",
    originalPriceClassName = "text-base-content/50 line-through text-sm",
    showDiscountLabel = false,
    layout = 'simple'
}: CoursePriceDisplayProps) {
    const { currency } = useCurrency();
    const [price, setPrice] = useState<number>(initialPrice);
    const [currentCurrency, setCurrentCurrency] = useState<string>(initialCurrency);
    const [loading, setLoading] = useState(false);

    // Formateador de moneda
    const formatPrice = (amount: number, currencyCode: string) => {
        // Mapa de locales para formato de moneda nativo (reutilizado de CourseCard)
        const localeMap: Record<string, string> = {
            'USD': 'en-US',
            'EUR': 'es-ES',
            'MXN': 'es-MX',
            'COP': 'es-CO',
            'CLP': 'es-CL',
            'PEN': 'es-PE',
            'ARS': 'es-AR'
        };

        const locale = localeMap[currencyCode] || 'en-US';

        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currencyCode,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount);
    };

    // Actualizar precio cuando cambia la moneda
    useEffect(() => {
        // Si la moneda del contexto es diferente a la que tenemos mostrada, buscar el nuevo precio
        if (currency && currency !== currentCurrency) {
            const fetchNewPrice = async () => {
                setLoading(true);
                try {
                    const { data } = await clientGql.query({
                        query: CursoDocument,
                        variables: {
                            cursoId: courseId,
                            currency: currency
                        },
                        fetchPolicy: 'network-only' // Asegurar que traemos el dato fresco
                    });

                    if (data?.Curso?.precio !== undefined && data?.Curso?.precio !== null) {
                        setPrice(data.Curso.precio);
                        setCurrentCurrency(currency);
                    }
                } catch (error) {
                    console.error("Error updating course price:", error);
                } finally {
                    setLoading(false);
                }
            };

            fetchNewPrice();
        }
    }, [currency, currentCurrency, courseId]);

    // Cálculos derivados
    const finalPrice = price; // El backend ya devuelve el precio con descuento si aplicara? 
    // NOTA: Revisando el backend/CourseCard, parece que 'precio' es el precio base y 'descuento' es un porcentaje.
    // Verifiquemos lógica original de [slugCurso].astro:
    // const currentPrice = precio || 0;
    // const originalPrice = descuento && descuento > 0 ? currentPrice / (1 - (descuento / 100)) : null;
    // Esto implica que 'precio' es el precio FINAL (con descuento aplicado) si así viene del backend, O el precio base.
    // PERO la lógica en slugCurso.astro linea 88 dice:
    // const originalPrice = descuento && descuento > 0 ? currentPrice / (1 - (descuento / 100)) : null;
    // Esto sugiere que 'precio' ES el precio con descuento ya aplicado (lo que paga el usuario).
    
    // Usemos la misma lógica:
    const calculatedOriginalPrice = (descuento && descuento > 0) 
        ? finalPrice / (1 - (descuento / 100)) 
        : null;

    const displayPrice = finalPrice === 0 ? 'GRATIS' : formatPrice(finalPrice, currentCurrency);
    const displayOriginalPrice = calculatedOriginalPrice ? formatPrice(calculatedOriginalPrice, currentCurrency) : null;
    const savings = (calculatedOriginalPrice && finalPrice > 0) ? calculatedOriginalPrice - finalPrice : 0;
    const displaySavings = savings > 0 ? formatPrice(savings, currentCurrency) : null;

    if (loading) {
        return <span className="loading loading-spinner loading-sm text-primary"></span>;
    }

    if (layout === 'column') {
        return (
            <div className="flex flex-col items-center">
                {displayOriginalPrice && (
                    <p className={originalPriceClassName}>
                        {displayOriginalPrice}
                    </p>
                )}
                <p className={className}>
                    {displayPrice}
                </p>
                 {showDiscountLabel && displaySavings && (
                    <p className="text-sm text-success font-semibold mt-1">
                        ¡Ahorras {displaySavings}!
                    </p>
                )}
            </div>
        );
    }
    
    if (layout === 'row') {
         return (
             <div className="flex items-baseline gap-3">
                 {displayOriginalPrice && (
                     <span className={originalPriceClassName}>
                         {displayOriginalPrice}
                     </span>
                 )}
                 <span className={className}>
                     {displayPrice}
                 </span>
             </div>
         );
    }

    // Default 'simple' layout (just renders logic wrapper mostly, or simple block)
    return (
        <div>
            {displayOriginalPrice && (
                <span className={`${originalPriceClassName} mr-2`}>
                   {displayOriginalPrice}
                </span>
            )}
            <span className={className}>
                {displayPrice}
            </span>
        </div>
    );
}
