// Clase utilitaria para formateo de valores (fechas, precios, etc.)
export class Formatter {
    // Formatea una fecha en formato largo en español (ej: "13 de febrero de 2026")
    static formatDate(value: Date): string {
        const date = new Date(value);

        return Intl.DateTimeFormat('es-ES', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
        }).format(date);
    }

    /**
     * Formatea un precio con su símbolo de moneda.
     * Usa el locale del navegador para convenciones numéricas (separadores, decimales).
     * Soporta cualquier código ISO 4217 (USD, PEN, EUR, BRL, CLP, etc.)
     *
     * @param amount - Monto numérico a formatear
     * @param currency - Código ISO 4217 de la moneda (ej: 'USD', 'PEN', 'MXN')
     * @returns Precio formateado con símbolo (ej: "S/ 185.96", "$49.99", "€45.00")
     *          o "GRATIS" si el monto es 0
     */
    static formatPrice(amount: number, currency: string = 'USD'): string {
        // Si el precio es 0, mostramos "GRATIS" en lugar de "$0.00"
        if (amount === 0) return 'GRATIS';

        // undefined como locale = usa el locale del navegador del usuario automáticamente
        // Esto formatea los números según las convenciones locales del usuario
        return new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(amount);
    }
}
