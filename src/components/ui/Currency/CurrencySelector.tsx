
import { useCurrency } from '@hooks/useCurrency';

// Mapa opcional de banderas para monedas conocidas (solo decorativo)
// Si la moneda detectada no está aquí, se muestra sin bandera
const FLAG_MAP: Record<string, string> = {
    'USD': '🇺🇸', 'EUR': '🇪🇺', 'MXN': '🇲🇽', 'COP': '🇨🇴',
    'CLP': '🇨🇱', 'PEN': '🇵🇪', 'BRL': '🇧🇷', 'ARS': '🇦🇷',
    'BOB': '🇧🇴', 'UYU': '🇺🇾', 'PYG': '🇵🇾', 'CRC': '🇨🇷',
    'GTQ': '🇬🇹', 'HNL': '🇭🇳', 'NIO': '🇳🇮', 'DOP': '🇩🇴',
    'PAB': '🇵🇦', 'VES': '🇻🇪', 'GBP': '🇬🇧', 'JPY': '🇯🇵',
    'CAD': '🇨🇦', 'AUD': '🇦🇺',
};

/**
 * Selector de moneda en el Navbar.
 * Muestra la moneda detectada del país del usuario + USD como alternativa.
 * Acepta cualquier moneda ISO 4217 — no filtra por un mapa de "soportadas".
 */
export function CurrencySelector() {
    const { currency, setCurrency, detectedCurrency, isLoading } = useCurrency();

    // Calcular opciones disponibles dinámicamente:
    // - La moneda detectada del país (cualquier código ISO 4217)
    // - USD como alternativa (siempre disponible)
    const availableCurrencies = detectedCurrency === 'USD' 
        ? [{ code: 'USD', flag: FLAG_MAP['USD'] || '💱' }]
        : [
            { code: detectedCurrency, flag: FLAG_MAP[detectedCurrency] || '💱' },
            { code: 'USD', flag: FLAG_MAP['USD'] || '🇺🇸' },
        ];

    // Mientras carga, mostrar placeholder
    if (isLoading) {
        return (
            <span className="text-[var(--color-text)] text-sm py-1 px-2 opacity-50">
                ...
            </span>
        );
    }

    // Si solo hay USD disponible, mostrar un label estático
    if (availableCurrencies.length <= 1) {
        return (
            <span className="text-[var(--color-text)] text-sm py-1 px-2 border border-transparent">
                {availableCurrencies[0]?.flag} {availableCurrencies[0]?.code}
            </span>
        );
    }

    return (
        // Contenedor relativo para el control de la posición de la caja y sus elementos hijos.
        <div className="relative inline-block text-left">
            {/* Control desplegable html nativo para la selección de las monedas */}
            <select
                // El valor seleccionado actual, proveniente del estado administrado por el hook useCurrency
                value={currency}
                // Administrador de evento que se ejecuta cuando el usuario selecciona una moneda diferente y que llama a setCurrency para actualizar tanto el estado local como la preferencia del usuario guardada localmente si la hubiera.
                onChange={(e) => setCurrency(e.target.value)}
                // "appearance-none" se utiliza para eliminar los estilos de control por defecto del SO, permitiendo su propia estilización con CSS y variables CSS como "var(--color-border)"
                className="appearance-none bg-transparent border border-[var(--color-border)] text-[var(--color-text)] py-1 pl-2 pr-6 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] cursor-pointer hover:bg-[var(--color-surface)] transition-colors"
                aria-label="Seleccionar moneda"
                // A través del CSS en línea se dibuja un ícono de flecha "dropdown" en forma de SVG codificado debido a que la clase "appearance-none" eliminó este ícono nativo. De esta forma, el ícono es consistente en cualquier navegador.
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.2rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.2em 1.2em'
                }}
            >
                {/* Ciclo que recorre las monedas detectadas como disponibles (la moneda local y USD) y pinta cada una como una etiqueta <option> del <select>. */}
                {availableCurrencies.map((c) => (
                    <option key={c.code} value={c.code} className="bg-[var(--color-surface)] text-[var(--color-text)]">
                        {c.code} {c.flag}
                    </option>
                ))}
            </select>
        </div>
    );
}
