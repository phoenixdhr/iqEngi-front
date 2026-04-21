/**
 * Componente que muestra el resumen del carrito de compras en la página de Checkout.
 * Muestra la lista de cursos seleccionados, sus precios (con descuentos aplicados si existen),
 * la moneda dinámica, y el total a pagar.
 */
import type { CarritoItem } from '@interfaces/carrito-item.interface';
import { Formatter } from '@utils/formatter';

/**
 * Propiedades esperadas para el componente CartSummary.
 */
interface CartSummaryProps {
    /** Lista de ítems actualmente en el carrito de compras */
    items: CarritoItem[];
    /** Función opcional para eliminar un curso específico del carrito */
    onRemove?: (cursoId: string) => void;
    /** Indicador visual temporal cuando está sincronizando los precios desde backend */
    isUpdatingCurrency?: boolean;
}

/**
 * Componente funcional que renderiza el resumen del carrito de compras.
 * muestra los cursos seleccionados, sus precios (con descuentos aplicados si existen),
 * la moneda dinámica, y el total a pagar.
 * @param {CartSummaryProps} props - Propiedades del componente.
 * @returns {JSX.Element} El componente CartSummary renderizado.
 */
export function CartSummary({ items, onRemove, isUpdatingCurrency = false }: CartSummaryProps) {
    /**
     * Calcula el MONTO TOTAL a pagar sumando los precios de todos los ítems.
     * Si un ítem tiene descuento, aplica el porcentaje antes de sumarlo.
     * Ejemplo: Un curso de $100 con 20% de descuento suma $80 al total.
     */
    const total = items.reduce((acc, item) => {
        return acc + item.precio * (1 - (item.descuento || 0) / 100);
    }, 0);

    /**
     * Determina la moneda a mostrar basada en el primer ítem del carrito,
     * o por defecto 'USD' si el carrito está vacío o el ítem no especifica moneda.
     */
    const currency = items[0]?.currency || 'USD';

    // Manejo del estado vacío: Si no hay ítems, muestra un mensaje amigable y un botón para volver a la tienda.
    if (items.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-lg" style={{ color: 'var(--color-text-muted)' }}>
                    Tu carrito está vacío
                </p>
                <a href="/cursos" className="btn btn-primary mt-4 text-white">
                    Explorar Cursos
                </a>
            </div>
        );
    }

    // Renderiza la lista de ítems en el carrito y el total a pagar
    return (
        <div className={`space-y-4 transition-opacity duration-300 ${isUpdatingCurrency ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
            <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text)' }}>
                Resumen de tu compra
            </h3>

            <div className="space-y-3">
                {items.map((item) => {
                    // Calcula el precio individual con descuento para este ítem en particular
                    const precioFinal = item.precio * (1 - (item.descuento || 0) / 100);
                    
                    return (
                        <div
                            key={item.cursoId}
                            className="flex items-center gap-4 p-3 rounded-xl border"
                            style={{
                                borderColor: 'var(--color-border)',
                                backgroundColor: 'var(--color-surface)',
                            }}
                        >
                            {/* Imagen del curso */}
                            <img
                                src={item.imagenURL?.url || '/placeholder-course.jpg'}
                                alt={item.imagenURL?.alt || item.courseTitle}
                                className="w-16 h-12 object-cover rounded-lg flex-shrink-0"
                            />
                            
                            {/* Información del curso (Título y Precio) */}
                            <div className="flex-1 min-w-0">
                                <p
                                    className="font-medium text-sm truncate"
                                    style={{ color: 'var(--color-text)' }}
                                >
                                    {item.courseTitle}
                                </p>
                                <div className="flex items-center gap-2">
                                    {/* Muestra el precio tachado si existe un descuento */}
                                    {item.descuento > 0 && (
                                        <span
                                            className="text-xs line-through"
                                            style={{ color: 'var(--color-text-muted)' }}
                                        >
                                            {Formatter.formatPrice(item.precio, item.currency)}
                                        </span>
                                    )}
                                    {/* Precio final (con o sin descuento aplicado) */}
                                    <span className="text-sm font-bold" style={{ color: 'var(--color-primary)' }}>
                                        {Formatter.formatPrice(precioFinal, item.currency)}
                                    </span>
                                </div>
                            </div>
                            
                            {/* Botón para eliminar ítem del carrito (Solo se muestra si se proporcionó la función onRemove) */}
                            {onRemove && (
                                <button
                                    onClick={() => onRemove(item.cursoId)}
                                    className="btn btn-ghost btn-xs btn-circle"
                                    aria-label="Eliminar"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Fila final con el total general a pagar */}
            <div
                className="flex justify-between items-center pt-4 border-t"
                style={{ borderColor: 'var(--color-border)' }}
            >
                <span className="text-lg font-semibold" style={{ color: 'var(--color-text)' }}>
                    Total
                </span>
                <span className="text-2xl font-extrabold" style={{ color: 'var(--color-primary)' }}>
                    {Formatter.formatPrice(total, currency)}
                </span>
            </div>
        </div>
    );
}
