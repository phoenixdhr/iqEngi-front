import { MetodoPago } from '@graphql-astro/generated/graphql';

/**
 * Propiedades esperadas para el componente PaymentMethodSelector.
 * NOTA IMPORTANTE SOBRE EL ESTADO: 
 * Este archivo NO define cuál método se selecciona por defecto ni almacena
 * la selección actual. Es el componente Padre (CheckoutPage) quien guarda esa
 * información en un estado (useState) y se la envía a este hijo.
 */
interface PaymentMethodSelectorProps {
    /** 
     * Identificador del método que el Padre nos indica que está actualmente seleccionado.
     * Este componente solo lee esta variable para saber cuál pintar como "activo".
     */
    selected: MetodoPago;
    /** 
     * Función enviada por el Padre. Cuando hacemos clic en otra opción, 
     * no guardamos el dato aquí, sino que ejecutamos esta función pasándole el id
     * para "avisarle" al Padre que el usuario cambió la selección, y el Padre la guarda.
     */
    onSelect: (method: MetodoPago) => void;
}

/**
 * Lista constante de los métodos de pago disponibles en la plataforma.
 * Cada objeto contiene la información necesaria para renderizar la opción en la UI.
 */
const PAYMENT_METHODS = [
    {
        id: MetodoPago.Dlocal, // Identificador único usado por el backend
        name: 'Tarjeta / Moneda Local', // Nombre visible para el usuario
        description: 'Visa, Mastercard y medios locales', // Breve descripción del método
        icon: '💳', // Icono representativo (emoji o componente en el futuro)
    },
    {
        id: MetodoPago.Mercadopago,
        name: 'MercadoPago',
        description: 'Paga con tu cuenta de MercadoPago',
        icon: '🟦',
    },
    {
        id: MetodoPago.Bitpay,
        name: 'Bitcoin',
        description: 'Paga con criptomonedas',
        icon: '₿',
    },
];

/**
 * Componente funcional que renderiza la lista de opciones de métodos de pago.
 * Permite al usuario seleccionar la forma en la que desea completar su compra.
 * Es un componente presentacional (dumb component), recibe estado y acciones por props.
 * 
 * @param {PaymentMethodSelectorProps} props - Propiedades del componente
 * @returns {JSX.Element} Selector de métodos de pago
 */
export function PaymentMethodSelector({ selected, onSelect }: PaymentMethodSelectorProps) {
    return (
        <div className="space-y-3">
            {/* Título de la sección */}
            <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text)' }}>
                Selecciona tu medio de pago
            </h3>
            
            {/* Contenedor de la lista de opciones */}
            <div className="space-y-2">
                {PAYMENT_METHODS.map((method) => (
                    // BOTON PARA CADA METODO DE PAGO. Actúa como una tarjeta seleccionable.
                    <button
                        key={method.id}
                        type="button"
                        onClick={() => onSelect(method.id)} // Dispara el evento al hacer clic
                        // Estilos dinámicos: Cambia el borde, fondo y sombra si está seleccionado
                        className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                            selected === method.id
                                ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5 shadow-md'
                                : 'border-[var(--color-border)] hover:border-[var(--color-primary)]/50'
                        }`}
                        // Si no está seleccionado, usa el color de superficie (fondo de tarjetas) definido en CSS global
                        style={{ backgroundColor: selected === method.id ? undefined : 'var(--color-surface)' }}
                    >
                        {/* Icono del método de pago */}
                        <span className="text-2xl">{method.icon}</span>
                        
                        {/* Textos del método de pago (Nombre y Descripción) */}
                        <div className="flex-1">
                            <p className="font-semibold" style={{ color: 'var(--color-text)' }}>
                                {method.name}
                            </p>
                            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                                {method.description}
                            </p>
                        </div>
                        
                        {/* Indicador visual de selección (Radio button simulado) */}
                        <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                selected === method.id
                                    ? 'border-[var(--color-primary)]' // Borde coloreado si está activo
                                    : 'border-[var(--color-border)]' // Borde gris si está inactivo
                            }`}
                        >
                            {/* Círculo interno relleno si está seleccionado */}
                            {selected === method.id && (
                                <div className="w-3 h-3 rounded-full bg-[var(--color-primary)]" />
                            )}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
