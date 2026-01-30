import React, { createContext, useContext, useState, useEffect } from 'react';

// Evento custom para sincronizar el cambio de moneda entre islas de Astro
// Esto es necesario porque las islas son componentes de React independientes
const CURRENCY_CHANGE_EVENT = 'iqengi:currency-change';

// Lista de monedas soportadas oficialmente por la plataforma
// Si el país del usuario no utiliza una de estas monedas, se usará USD por defecto
export const SUPPORTED_CURRENCIES = ['USD', 'EUR', 'MXN', 'COP', 'CLP', 'PEN'];

// Definición del tipo de contexto para la moneda
interface CurrencyContextType {
    currency: string;             // Código de la moneda seleccionada (ej: 'USD', 'PEN')
    setCurrency: (currency: string) => void; // Función para actualizar la moneda
    isLoading: boolean;           // Estado de carga durante la detección inicial
    detectedCurrency: string;     // Moneda sugerida basada en la geolocalización (validada contra soportadas)
}

// Creación del contexto de React
const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

/**
 * Proveedor de contexto para manejar el estado global de la moneda.
 * Se encarga de la detección inicial (localStorage o IP) y de la sincronización entre componentes.
 */
export function CurrencyProvider({ children }: { children: React.ReactNode }) {
    // Estado para la moneda seleccionada actualmente
    const [currency, setCurrencyState] = useState<string>('USD');
    // Estado para indicar si se está determinando la moneda inicial
    const [isLoading, setIsLoading] = useState(true);
    // Estado para la moneda detectada automáticamente según el país del usuario
    const [detectedCurrency, setDetectedCurrency] = useState<string>('USD');

    // Efecto para inicializar la moneda al montar el componente
    useEffect(() => {
        const initCurrency = async () => {
            // 1. Intentar recuperar preferencias guardadas en localStorage
            const storedCurrency = localStorage.getItem('iqengi_currency');
            const storedDetected = localStorage.getItem('iqengi_detected_currency');
            
            // Si ya existe una moneda detectada guardada, la restauramos
            if (storedDetected) {
                setDetectedCurrency(storedDetected);
            }
            
            // Si el usuario ya eligió una moneda previamente, la usamos y terminamos la carga
            if (storedCurrency) {
                setCurrencyState(storedCurrency);
                setIsLoading(false);
                // Si ya tenemos la moneda detectada, no necesitamos hacer fetch de nuevo
                if (storedDetected) return;
            }

            // 2. Si no hay preferencia guardada, intentamos detectar la moneda por IP
            try {
                // Detectamos si estamos en entorno de desarrollo local
                const isLocalhost = typeof window !== 'undefined' && 
                    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
                
                let detectedCurrencyCode = 'USD'; // Valor por defecto si falla la detección
                
                if (isLocalhost) {
                    // Para facilitar pruebas en desarrollo, forzamos PEN (Soles) si estamos en localhost
                    console.log('[CurrencyContext] Desarrollo local detectado, usando PEN como moneda de prueba');
                    detectedCurrencyCode = 'PEN';
                } else {
                    // En producción, consultamos la API de ipapi.co para obtener la moneda basada en la IP
                    console.log('[CurrencyContext] Obteniendo moneda desde ipapi.co...');
                    const response = await fetch('https://ipapi.co/currency/', {
                        signal: AbortSignal.timeout(5000) // Timeout de 5 segundos para no bloquear la UI
                    });

                    if (response.ok) {
                        const rawDetectedCurrency = await response.text();
                        console.log('[CurrencyContext] Moneda detectada por IP (cruda):', rawDetectedCurrency);
                        
                        // Validamos que la respuesta sea un código de moneda válido de 3 letras
                        if (rawDetectedCurrency && rawDetectedCurrency.length === 3) {
                            // Solo usamos la moneda si está en nuestra lista de soportadas, sino fallback a USD
                            detectedCurrencyCode = SUPPORTED_CURRENCIES.includes(rawDetectedCurrency) 
                                ? rawDetectedCurrency 
                                : 'USD';
                        }
                    } else {
                        console.warn('[CurrencyContext] Respuesta de ipapi.co no exitosa:', response.status);
                    }
                }
                
                console.log('[CurrencyContext] Moneda detectada final:', detectedCurrencyCode);
                
                // Actualizamos el estado de la moneda detectada y guardamos en localStorage
                setDetectedCurrency(detectedCurrencyCode);
                localStorage.setItem('iqengi_detected_currency', detectedCurrencyCode);
                
                // Si el usuario no tenía una preferencia explícita, establecemos la detectada como actual
                if (!storedCurrency) {
                    setCurrencyState(detectedCurrencyCode);
                    localStorage.setItem('iqengi_currency', detectedCurrencyCode);
                    // Emitimos evento para notificar a otras partes de la app
                    window.dispatchEvent(new CustomEvent(CURRENCY_CHANGE_EVENT, { detail: detectedCurrencyCode }));
                }
            } catch (error) {
                // En caso de error (red, timeout), usamos USD por seguridad
                console.warn('Error detectando moneda por IP, usando USD por defecto', error);
            } finally {
                // Siempre finalizamos el estado de carga
                setIsLoading(false);
            }
        };

        initCurrency();

        // Listener para escuchar cambios de moneda desde otras "islas" de Astro
        // Esto mantiene sincronizados todos los componentes aunque estén en árboles de React separados
        const handleStorageChange = (e: CustomEvent) => {
            if (e.detail && e.detail !== currency) {
                setCurrencyState(e.detail);
            }
        };

        window.addEventListener(CURRENCY_CHANGE_EVENT, handleStorageChange as EventListener);

        // Limpieza del listener al desmontar
        return () => {
            window.removeEventListener(CURRENCY_CHANGE_EVENT, handleStorageChange as EventListener);
        };
    }, []);

    // Función expuesta para cambiar la moneda manualmente
    const setCurrency = (newCurrency: string) => {
        setCurrencyState(newCurrency);
        localStorage.setItem('iqengi_currency', newCurrency);
        // Notificar a otras islas del cambio
        window.dispatchEvent(new CustomEvent(CURRENCY_CHANGE_EVENT, { detail: newCurrency }));
    };

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency, isLoading, detectedCurrency }}>
            {children}
        </CurrencyContext.Provider>
    );
}

/**
 * Hook personalizado para consumir el contexto de moneda.
 * Incluye lógica de fallback robusta para casos donde el componente no está dentro del Provider.
 */
export function useCurrency() {
    const context = useContext(CurrencyContext);

    // Si el hook se usa fuera de un CurrencyProvider (común en arquitectura de islas de Astro)
    // implementamos una lógica local que simula el comportamiento del contexto.
    if (context === undefined) {
        // Estado local para manejar la moneda cuando no hay Provider
        const [localCurrency, setLocalCurrency] = useState<string>('USD');
        const [localDetectedCurrency, setLocalDetectedCurrency] = useState<string>('USD');
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            // Lógica de inicialización duplicada para componentes aislados
            const initCurrency = async () => {
                const storedCurrency = localStorage.getItem('iqengi_currency');
                const storedDetected = localStorage.getItem('iqengi_detected_currency');
                
                if (storedDetected) {
                    setLocalDetectedCurrency(storedDetected);
                }
                
                if (storedCurrency) {
                    setLocalCurrency(storedCurrency);
                    setIsLoading(false);
                    if (storedDetected) return;
                }

                // Intentar detectar moneda si no hay datos guardados
                try {
                    const isLocalhost = typeof window !== 'undefined' && 
                        (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
                    
                    let detectedCurrencyCode = 'USD';
                    
                    if (isLocalhost) {
                        console.log('[useCurrency Fallback] Desarrollo local detectado, usando PEN');
                        detectedCurrencyCode = 'PEN';
                    } else {
                        console.log('[useCurrency Fallback] Obteniendo moneda desde ipapi.co...');
                        const response = await fetch('https://ipapi.co/currency/', {
                            signal: AbortSignal.timeout(5000)
                        });
                        if (response.ok) {
                            const rawDetected = await response.text();
                            console.log('[useCurrency Fallback] Moneda detectada (cruda):', rawDetected);
                            if (rawDetected && rawDetected.length === 3) {
                                detectedCurrencyCode = SUPPORTED_CURRENCIES.includes(rawDetected) 
                                    ? rawDetected 
                                    : 'USD';
                            }
                        }
                    }
                    
                    console.log('[useCurrency Fallback] Moneda detectada final:', detectedCurrencyCode);
                    
                    setLocalDetectedCurrency(detectedCurrencyCode);
                    localStorage.setItem('iqengi_detected_currency', detectedCurrencyCode);
                    
                    if (!storedCurrency) {
                        setLocalCurrency(detectedCurrencyCode);
                        localStorage.setItem('iqengi_currency', detectedCurrencyCode);
                        window.dispatchEvent(new CustomEvent(CURRENCY_CHANGE_EVENT, { detail: detectedCurrencyCode }));
                    }
                } catch (error) {
                    console.warn('[useCurrency Fallback] Error detectando moneda:', error);
                } finally {
                    setIsLoading(false);
                }
            };

            initCurrency();

            // Sincronización con eventos de ventana para mantenerse actualizado con otras islas
            const handleChange = (e: CustomEvent) => {
                if (e.detail) setLocalCurrency(e.detail);
            };
            window.addEventListener(CURRENCY_CHANGE_EVENT, handleChange as EventListener);
            return () => window.removeEventListener(CURRENCY_CHANGE_EVENT, handleChange as EventListener);
        }, []);

        const setCurrency = (newCurrency: string) => {
            setLocalCurrency(newCurrency);
            localStorage.setItem('iqengi_currency', newCurrency);
            window.dispatchEvent(new CustomEvent(CURRENCY_CHANGE_EVENT, { detail: newCurrency }));
        };

        return { currency: localCurrency, setCurrency, isLoading, detectedCurrency: localDetectedCurrency };
    }

    return context;
}
