import React, { createContext, useContext, useState, useEffect } from 'react';

// Evento custom para sincronizar entre islas de Astro
const CURRENCY_CHANGE_EVENT = 'iqengi:currency-change';

interface CurrencyContextType {
    currency: string;
    setCurrency: (currency: string) => void;
    isLoading: boolean;
    localCurrency: string; // Moneda detectada del usuario
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Mapa de Timezone -> Moneda
const getCurrencyFromTimezone = (): string => {
    try {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        console.log('Detected Timezone:', timeZone); // Debugging for user
        
        if (timeZone.startsWith('America/Lima')) return 'PEN';
        if (timeZone.startsWith('America/Mexico_City') || timeZone.startsWith('America/Cancun') || timeZone.startsWith('America/Merida') || timeZone.startsWith('America/Monterrey') || timeZone.startsWith('America/Tijuana')) return 'MXN';
        if (timeZone.startsWith('America/Bogota')) return 'COP';
        if (timeZone.startsWith('America/Santiago')) return 'CLP'; 
        if (timeZone.startsWith('America/Argentina') || timeZone.startsWith('America/Buenos_Aires')) return 'ARS'; // Buenos_Aires is often the key
        if (timeZone.startsWith('Europe/Madrid') || timeZone.startsWith('Europe/')) return 'EUR';

        // Ambiguous timezones on Windows check:
        // "SA Pacific Standard Time" maps to America/Bogota on some browsers, but covers Bogota, Lima, Quito.
        // If we get America/Bogota, it implies COP, but could be PEN. 
        // We will stick to the mapping but let IP API correct it.
        
        return 'USD'; // Default global
    } catch (e) {
        console.warn('Error detecting timezone currency:', e);
        return 'USD';
    }
};

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currency, setCurrencyState] = useState<string>('USD');
    const [localCurrency, setLocalCurrencyState] = useState<string>('USD');
    const [isLoading, setIsLoading] = useState(true);

    // Inicializar moneda
    useEffect(() => {
        const initCurrency = async () => {
            // 1. Detección rápida por Timezone
            const timezoneCurrency = getCurrencyFromTimezone();
            // Estado inicial optimista
            setLocalCurrencyState(timezoneCurrency);
            
            // Verificamos si hay preferencia guardada
            const storedCurrency = localStorage.getItem('iqengi_currency');
            if (storedCurrency) {
                setCurrencyState(storedCurrency);
            } else {
                setCurrencyState(timezoneCurrency);
            }

            // 2. Refinamiento por IP (Async) - Corrige ambigüedades (ej. Bogota vs Lima en Windows)
            try {
                // Solo consultamos si NO tenemos una preferencia guardada O queremos asegurar la moneda local correcta para el selector
                // Para el selector, SIEMPRE necesitamos el "localCurrency" correcto.
                const response = await fetch('https://ipapi.co/currency/');
                if (response.ok) {
                    const ipCurrency = await response.text();
                    console.log('IP Detected Currency:', ipCurrency);
                    
                    if (ipCurrency && ipCurrency.length === 3 && ipCurrency !== timezoneCurrency) {
                        // Corrección de la moneda local
                        setLocalCurrencyState(ipCurrency);
                        
                        // Si el usuario NO tenía preferencia guardada, actualizamos también su moneda actual
                        if (!storedCurrency) {
                            setCurrencyState(ipCurrency);
                            // No guardamos en localStorage para no persistir correcciones automáticas si viaja
                            window.dispatchEvent(new CustomEvent(CURRENCY_CHANGE_EVENT, { detail: ipCurrency }));
                        }
                    }
                }
            } catch (error) {
                console.warn('IP currency detection failed, sticking to timezone:', error);
            } finally {
                setIsLoading(false);
            }
        };

        initCurrency();

        // Escuchar cambios de otras islas
        const handleStorageChange = (e: CustomEvent) => {
            if (e.detail && e.detail !== currency) {
                setCurrencyState(e.detail);
            }
        };

        window.addEventListener(CURRENCY_CHANGE_EVENT, handleStorageChange as EventListener);

        return () => {
            window.removeEventListener(CURRENCY_CHANGE_EVENT, handleStorageChange as EventListener);
        };
    }, []);

    const setCurrency = (newCurrency: string) => {
        setCurrencyState(newCurrency);
        localStorage.setItem('iqengi_currency', newCurrency);
        // Notificar a otras islas
        window.dispatchEvent(new CustomEvent(CURRENCY_CHANGE_EVENT, { detail: newCurrency }));
    };

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency, isLoading, localCurrency }}>
            {children}
        </CurrencyContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useCurrency = () => {
    const context = useContext(CurrencyContext);

    if (context === undefined) {
        // Fallback para uso sin Provider (State aislado pero sincronizado por eventos window)
        const [localCurrencyValue, setLocalCurrencyValue] = useState<string>('USD');
        const [currentCurrency, setCurrentCurrency] = useState<string>('USD');
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            // Detectar en fallback también
            const detected = getCurrencyFromTimezone();
             setLocalCurrencyValue(detected);

            const stored = localStorage.getItem('iqengi_currency');
            if (stored) {
                setCurrentCurrency(stored);
            } else {
                setCurrentCurrency(detected);
            }
            setIsLoading(false);

            const handleChange = (e: CustomEvent) => {
                if (e.detail) setCurrentCurrency(e.detail);
            };
            window.addEventListener(CURRENCY_CHANGE_EVENT, handleChange as EventListener);
            return () => window.removeEventListener(CURRENCY_CHANGE_EVENT, handleChange as EventListener);
        }, []);

        const setCurrency = (newCurrency: string) => {
            setCurrentCurrency(newCurrency);
            localStorage.setItem('iqengi_currency', newCurrency);
            window.dispatchEvent(new CustomEvent(CURRENCY_CHANGE_EVENT, { detail: newCurrency }));
        };

        return { currency: currentCurrency, setCurrency, isLoading, localCurrency: localCurrencyValue };
    }

    return context;
};
