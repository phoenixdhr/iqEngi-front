import { useState, useEffect } from 'react';
import { useCart } from '@hooks/useCart';
import { useCurrency } from '@hooks/useCurrency';

import { CartSummary } from './CartSummary';
import { PaymentMethodSelector } from './PaymentMethodSelector';

import { clientGql } from '@graphql-astro/apolloClient';
import { 
    CursoPrecioCheckoutDocument, 
    Payment_IniciarPagoDocument, 
    MetodoPago 
} from '@graphql-astro/generated/graphql';
import { AUTH_SUCCESS_EVENT, OPEN_LOGIN_MODAL_EVENT } from '@const/const-string';

/**
 * Página Principal de Checkout.
 * 
 * Concepto principal: Engagement Gradual (Registro sin fricción inicial).
 * 1. Permite a cualquier visitante (con o sin cuenta) agregar cursos y visualizar esta página.
 * 2. Si el usuario intenta pagar pero el backend nos bloquea ("Unauthorized"), 
 *    no fallamos drásticamente; en su lugar, habilitamos un banner amigable y abrimos el modal de Login.
 * 3. Al iniciar sesión con éxito, interceptamos ese evento global y reintentamos el pago automáticamente.
 */
export function CheckoutPage() {
    // Hooks globales: administran el carrito de compras persistente y la moneda global del usuario.
    const { items, removeItem, updateCartItems } = useCart();
    const { currency } = useCurrency(); 

    // Estados Locales:
    const [selectedMethod, setSelectedMethod] = useState<MetodoPago>(MetodoPago.Dlocal); // Método de pago predeterminado
    const [loading, setLoading] = useState(false); // Bloquea los botones e indica carga durante la mutación de pago
    const [error, setError] = useState<string | null>(null); // Almacena y muestra errores genéricos provenientes del backend

    // Estados UI o de Experiencia del Usuario (UX):
    const [isUpdatingCurrency, setIsUpdatingCurrency] = useState(false); // Indicador de carga cuando estamos pidiendo nuevos precios tras cambiar la moneda global

    /**
     * Analiza el error retornado por la petición de GraphQL.
     * Nuestro backend indica falta de sesión activa retornando frases clave como 
     * "unauthorized" (no autorizado) o "forbidden" (prohibido).
     */
    function isAuthError(err: any): boolean {
        const message = String(err?.message || err || '').toLowerCase();
        return message.includes('unauthorized') || message.includes('forbidden');
    }

    /**
     * Emite un Evento Nativo de JS (CustomEvent) a nivel de la ventana (window).
     * Este evento ('openLoginModal') es escuchado por el layout principal (Astro / Vanilla JS)
     * para desplegar el Modal.astro, logrando integración perfecta entre "React Island" y "Astro".
     */
    function openLoginModal() {
        window.dispatchEvent(new CustomEvent(OPEN_LOGIN_MODAL_EVENT, {
            detail: { showCheckoutBanner: true }
        }));
    }

    /**
     * Ejecuta el intento de pago central del Checkout:
     * 1. Extrae los IDs del almacenamiento local.
     * 2. Llama al servidor GraphQL.
     * 3. Si tiene éxito: vacía el carrito localmente y redirige al usuario hacia el proveedor de pagos.
     * 4. Si falla por falta de sesión: lanza la UI para solicitar el registro.
     */
    async function handleCheckout() {
        if (items.length === 0) return;

        setLoading(true);
        setError(null);

        try {
            const cursosIds = items.map((item) => item.cursoId);

            const { data } = await clientGql.mutate({
                mutation: Payment_IniciarPagoDocument,
                variables: {
                    input: {
                        cursosIds,
                        metodoPago: selectedMethod,
                        currency: currency || 'USD',
                    },
                },
            });

            const paymentUrl = data?.Payment_iniciarPago?.paymentUrl;

            if (paymentUrl) {
                // Redirigir a pasarela. El carrito se limpia en /checkout/confirmacion
                // (solo cuando la pasarela confirma el pago exitoso).
                window.location.href = paymentUrl;
            } else {
                setError('No se pudo obtener la URL de pago. Intenta nuevamente.');
            }
        } catch (err: any) {
            // Si el error es de autenticación, mostrar banner amigable en lugar de error genérico
            if (isAuthError(err)) {
                setError(null);
                openLoginModal();
            } else {
                console.error('Error iniciando pago:', err);
                setError(
                    err?.message || 'Ocurrió un error al procesar tu pago. Intenta nuevamente.',
                );
            }
        } finally {
            setLoading(false);
        }
    };

/**
     * EFECTO 1: Continuidad del flujo (Automático tras inicio de sesión)
     * 
     * Propósito: Si el usuario intenta pagar sin cuenta, se abrirá el Modal de Login.
     * Al iniciar sesión con éxito, debemos continuar cobrando sin que tenga que dar otro click.
     * Importante: Cargar esta página NO ejecuta ningún cobro ni redireccionamiento inicial.
     */
    useEffect(() => {
        // 1. Defino una función, PERO NO LA EJECUTO aquí. La dejo guardada en una variable.
        // Estarán pausadas ('durmiendo') hasta que verdaderamente ocurra el evento de Login exitoso.

        const handleAuthSuccess = () => {
            setError(null);
            // Se inyecta un breve retraso (500ms) para garantizar que las Cookies/Tokens 
            // del backend ya han sido asimiladas por el navegador antes de relanzar el pago.
            setTimeout(() => {
                handleCheckout();
            }, 500);
        };

        // 2. Aquí sí EJECUTO algo: Le pego un "micrófono" a la ventana del navegador.
        // Le digo: "Navegador, si en el futuro escuchas el evento AUTH_SUCCESS_EVENT, 
        // entonces, y SÓLO ENTONCES, ejecuta mi función guardada".
        window.addEventListener(AUTH_SUCCESS_EVENT, handleAuthSuccess);

        // 3. LIMPIEZA: Quitamos el micrófono al destruir el componente para evitar procesos fantasma.

        return () => window.removeEventListener(AUTH_SUCCESS_EVENT, handleAuthSuccess);


         // DEPENDENCIA [handleCheckout] (Evitando el Bug Stale Closure):
        // Si el usuario añade/quita cursos, React crea una versión "fresca" de handleCheckout, debido a la funcion depende de lo que contiene la variable items.
        // El Efecto nota el cambio, despide al vigilante viejo (que sabe de ítems obsoletos) 
        // y pone uno nuevo. Garantizando siempre cobrar lo que está en pantalla.
    }, [handleCheckout]);

    /**
     * EFECTO 2: Sincronización de Precios vs Nueva Moneda Elegida
     * Al cambiar la moneda global desde el Navbar, los items en nuestro `useCart` (localStorage)
     * por defecto retienen la moneda y el precio antiguo. Este efecto detecta tal desajuste.
     */
    useEffect(() => {

        // Evita hacer peticiones al servidor si no son absolutamente necesarias. Solo procede si se cumplen las tres condiciones:
        // currency: Existe una moneda global definida.
        // items.length > 0: Hay productos en el carrito (no tiene sentido actualizar un carrito vacío).
        // items.some(...): Revisa si al menos un producto dentro del carrito tiene una propiedad currency diferente a la currency global actual. Esto indica que el carrito está "desfasado" y necesita actualización.

        if (currency && items.length > 0 && items.some(item => item.currency !== currency)) {
            const updatePrices = async () => {
                setIsUpdatingCurrency(true); // Muestra un Spinner en el botón de pago y desactiva su accionamiento
                try {
                    // Iteramos sobre todos los productos desfasados y pedimos vía GraphQL
                    // el nuevo precio correcto localizado (ej: ¿Cuánto vale este curso en EUR?).
                    // Utiliza Promise.all para lanzar las consultas de todos los productos del carrito al mismo tiempo (en paralelo), lo que hace que la carga sea mucho más rápida que hacerlo uno por uno.
                    
                    const updatedItems = await Promise.all(
                        items.map(async (item) => {
                            
                            const { data } = await clientGql.query({
                                query: CursoPrecioCheckoutDocument,
                                variables: { cursoId: item.cursoId, currency },
                            });
                            
                            if (data?.Curso?.precio !== undefined && data?.Curso?.precio !== null) {
                                // precio: data.Curso.precio: Estamos reemplazando el precio antiguo obsoleto por el nuevo precio que nos acaba de dar el servidor.
                                // currency: Estamos reemplazando la moneda a la seleccionada globalmente. (por ejemplo, pasando de "USD" a la nueva que pedimos, "EUR").
                                return { ...item, precio: data.Curso.precio, currency };
                            }
                            
                            // ---- MEJORA: Avisarle al programador que algo falló ----
                            console.warn(`⚠️ ALERTA: No se encontró el precio para el curso ${item.cursoId} en la moneda ${currency}. Se mantendrá el precio desfasado para evitar un bucle.`);

                            return { ...item, currency }; // Retorna la nueva moneda en fallback

                        })
                    );

                    updateCartItems(updatedItems);
                } catch (err) {
                    console.error('Error sincronizando moneda local del carrito:', err);
                } finally {
                    setIsUpdatingCurrency(false);
                }
            };

            updatePrices();
        }
    }, [currency, items, updateCartItems]);

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1
                className="text-3xl font-extrabold mb-8"
                style={{ color: 'var(--color-text)' }}
            >
                Checkout
            </h1>

            <div className="grid lg:grid-cols-5 gap-8">
                {/* Columna izquierda: Resumen del carrito */}
                <div className="lg:col-span-3 space-y-6">
                    <CartSummary items={items} onRemove={removeItem} isUpdatingCurrency={isUpdatingCurrency} />
                </div>

                {/* Columna derecha: Método de pago + acción */}
                {items.length > 0 && (
                    <div className="lg:col-span-2 space-y-6">
                        <PaymentMethodSelector
                            selected={selectedMethod}
                            onSelect={setSelectedMethod}
                        />

                        {/* Error genérico (solo para errores que NO son de autenticación) */}
                        {error && (
                            <div className="alert alert-error text-sm">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                                <span>{error}</span>
                            </div>
                        )}

                        {/* Botón principal de pago */}
                        <button
                            onClick={handleCheckout}
                            disabled={loading || isUpdatingCurrency}
                            className={`btn btn-primary btn-lg w-full text-white font-bold text-lg rounded-xl ${
                                (loading || isUpdatingCurrency) ? '' : 'shadow-lg shadow-primary/30'
                            }`}
                        >
                            {loading || isUpdatingCurrency ? (
                                <span className="loading loading-spinner" />
                            ) : (
                                'Proceder al Pago'
                            )}
                        </button>


                        <p className="text-xs text-center" style={{ color: 'var(--color-text-muted)' }}>
                            Al proceder, serás redirigido al proveedor de pago seleccionado para completar la transacción de forma segura.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
