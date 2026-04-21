import { useState, useEffect } from 'react';
import { CURRENCY_CHANGE_EVENT } from '@const/const-string';

// Evento custom para sincronizar el cambio de moneda entre islas de Astro
// Esto es necesario porque las islas son componentes de React independientes

/**
 * Hook personalizado para manejar la moneda del usuario.
 * Detecta la moneda según la geolocalización (IP) o usa la preferencia guardada en localStorage.
 * Sincroniza el estado entre islas de Astro mediante CustomEvents del navegador.
 */
export function useCurrency() {
    // Estado para la moneda actual que se va a mostrar en la interfaz (empieza por defecto en 'USD')
    const [currency, setCurrencyState] = useState<string>('USD');
    // Estado para la moneda que el sistema detectó basada en el país o la ubicación original del usuario.
    const [detectedCurrency, setDetectedCurrency] = useState<string>('USD');
    // Estado de carga, un indicador (true o false) de que si el hook aún está cargando la lógica de detección o ya finalizó.
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        // Lógica de inicialización: recuperar de localStorage o detectar por IP
        async function initCurrency() {
            // Es la moneda que el usuario decidió ver voluntariamente (elección manual del usuario).
            const storedCurrency = localStorage.getItem('iqengi_currency');
            // Es la moneda que el sistema detecta automáticamente basándose en dónde está tu computadora (tu IP), (la moneda detectada en sesiones pasadas).
            const storedDetected = localStorage.getItem('iqengi_detected_currency');

            // Si ya existe una moneda detectada guardada, la restauramos
            if (storedDetected) {
                setDetectedCurrency(storedDetected);
            }

            // Si el usuario ya eligió una moneda previamente, la usamos
            if (storedCurrency) {
                setCurrencyState(storedCurrency);
                setIsLoading(false);
                // Si ya tenemos la moneda detectada, no necesitamos hacer fetch de nuevo
                if (storedDetected) return;
            }

            // Intentar detectar moneda por IP si no hay datos guardados
            try {

                //Ambas condiciones (estar en un navegador y estar en una URL local) deben cumplirse para que el resultado final sea verdadero
                const isLocalhost = typeof window !== 'undefined' &&
                    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

                let detectedCurrencyCode = 'USD';

                if (isLocalhost) {
                    // Para facilitar pruebas en desarrollo, forzamos PEN (Soles) en localhost
                    detectedCurrencyCode = 'PEN';
                } else {
                    // En producción, consultamos ipapi.co para obtener la moneda basada en la IP
                    const response = await fetch('https://ipapi.co/currency/', {
                        signal: AbortSignal.timeout(5000) // Timeout de 5 segundos para no bloquear la UI
                    });
                    if (response.ok) {
                        const rawDetected = await response.text();
                        // Validamos que sea un código de moneda ISO 4217 válido (3 letras)
                        // Intl.NumberFormat soporta cualquier moneda ISO, no necesitamos filtrar
                        if (rawDetected && rawDetected.length === 3) {
                            detectedCurrencyCode = rawDetected;
                        }
                    }
                }


                // Guardamos la moneda detectada
                setDetectedCurrency(detectedCurrencyCode);
                localStorage.setItem('iqengi_detected_currency', detectedCurrencyCode);

                // Si el usuario no tenía una preferencia explícita, usamos la detectada
                if (!storedCurrency) {
                    localStorage.setItem('iqengi_currency', detectedCurrencyCode);
                    // Emitimos evento para notificar a otras islas
                    window.dispatchEvent(new CustomEvent(CURRENCY_CHANGE_EVENT, { detail: detectedCurrencyCode }));
                }
            } catch (error) {
                // En caso de error (red, timeout), usamos USD por seguridad
                console.warn('[useCurrency] Error detectando moneda:', error);
            } finally {
                // Siempre finalizamos el estado de carga
                setIsLoading(false);
            }
        };

        initCurrency();



        // Sincronización con eventos de ventana para mantenerse actualizado con otras islas
        function handleChange(e: CustomEvent) {
            if (e.detail) setCurrencyState(e.detail);
        }


        window.addEventListener(CURRENCY_CHANGE_EVENT, handleChange as EventListener);

        // Limpieza del listener al desmontar
        return function() {
            window.removeEventListener(CURRENCY_CHANGE_EVENT, handleChange as EventListener);
        };
    }, []);

    // Función expuesta para cambiar la moneda manualmente (funcion usada en los botones)
    function setCurrency(newCurrency: string) {
        setCurrencyState(newCurrency);
        localStorage.setItem('iqengi_currency', newCurrency);
        // Notificar a otras islas del cambio
        window.dispatchEvent(new CustomEvent(CURRENCY_CHANGE_EVENT, { detail: newCurrency }));
    }

    return { currency, setCurrency, isLoading, detectedCurrency };
}
