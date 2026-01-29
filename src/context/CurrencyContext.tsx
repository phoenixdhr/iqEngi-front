import React, { createContext, useContext, useState, useEffect } from 'react';

// Evento custom para sincronizar entre islas de Astro
const CURRENCY_CHANGE_EVENT = 'iqengi:currency-change';

interface CurrencyContextType {
    currency: string;
    setCurrency: (currency: string) => void;
    isLoading: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currency, setCurrencyState] = useState<string>('USD');
    const [isLoading, setIsLoading] = useState(true);

    // Inicializar moneda (localStorage o Geolocation)
    useEffect(() => {
        const initCurrency = async () => {
            // 1. Intentar leer de localStorage
            const storedCurrency = localStorage.getItem('iqengi_currency');
            if (storedCurrency) {
                setCurrencyState(storedCurrency);
                setIsLoading(false);
                return;
            }

            // 2. Si no hay preferida, intentar detectar por IP
            try {
                const response = await fetch('https://ipapi.co/currency/');
                if (response.ok) {
                    const detectedCurrency = await response.text();
                    // Validar que sea una moneda válida (simple check de longitud)
                    if (detectedCurrency && detectedCurrency.length === 3) {
                        setCurrencyState(detectedCurrency);
                        localStorage.setItem('iqengi_currency', detectedCurrency); // Guardar preferencia por defecto
                        // Disparar evento para otras islas
                        window.dispatchEvent(new CustomEvent(CURRENCY_CHANGE_EVENT, { detail: detectedCurrency }));
                    }
                }
            } catch (error) {
                console.warn('Error detectando moneda por IP, usando USD por defecto', error);
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
        <CurrencyContext.Provider value={{ currency, setCurrency, isLoading }}>
            {children}
        </CurrencyContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useCurrency = () => {
    const context = useContext(CurrencyContext);
    // Si se usa fuera de un Provider (ej. en una isla pequeña sin provider), intentar usar estado local sincronizado
    // Esto es un fallback para islas independientes si no envolvemos todo en un Provider gigante (que no se puede en Astro fácilmente)
    // Pero lo ideal es que cada Isla que necesite moneda use este Hook, y este Hook monte su propio listener si no hay context.
    // Para simplificar, asumiremos que las islas que necesiten moneda envolverán su contenido en <CurrencyProvider> o usaremos un hook más inteligente.

    if (context === undefined) {
        // Fallback para uso sin Provider (State aislado pero sincronizado por eventos window)
        const [localCurrency, setLocalCurrency] = useState<string>('USD');
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const stored = localStorage.getItem('iqengi_currency');
            if (stored) {
                setLocalCurrency(stored);
                setIsLoading(false);
            } else {
                // Lógica de fallback simplificada, asume que el Provider principal (ej. Navbar) ya hizo el fetch
                // O simplemente defaulting a USD
                setIsLoading(false);
            }

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

        return { currency: localCurrency, setCurrency, isLoading };
    }

    return context;
};
