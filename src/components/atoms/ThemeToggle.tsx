'use client';

import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { initializeTheme, getCurrentTheme, setTheme } from '@utils/theme-init';

/**
 * Componente para alternar entre modos de tema claro y oscuro
 * Persiste la preferencia del tema en localStorage y la aplica al documento
 */
export default function ThemeToggle() {
    // Estado para rastrear si el tema actual es oscuro
    const [isDark, setIsDark] = useState(false);
    // Estado para controlar si el componente ya se montó (evita problemas de hidratación)
    const [mounted, setMounted] = useState(false);

    /**
     * Inicializa el tema al montar el componente y configura los listeners de navegación
     */
    useEffect(() => {
        // Marcamos que el componente ya se montó
        setMounted(true);

        // Inicializamos el tema y obtenemos el tema actual
        const currentTheme = initializeTheme();
        setIsDark(currentTheme);

        // Escuchamos eventos de navegación de Astro para reaplicar el tema
        const handleNavigation = () => {
            // Pequeño retraso para asegurar que el DOM esté listo
            setTimeout(() => {
                const theme = getCurrentTheme();
                initializeTheme();
                setIsDark(theme);
            }, 10); // Retraso pequeño para asegurar que el DOM esté listo
        };

        // Escuchamos varios eventos de navegación
        // astro:page-load - cuando se carga una nueva página en Astro
        document.addEventListener('astro:page-load', handleNavigation);
        // astro:after-swap - después de que Astro intercambie el contenido de la página
        document.addEventListener('astro:after-swap', handleNavigation);
        // popstate - cuando el usuario navega con botones adelante/atrás del navegador
        window.addEventListener('popstate', handleNavigation);

        // Función de limpieza: removemos los listeners cuando el componente se desmonta
        return () => {
            document.removeEventListener('astro:page-load', handleNavigation);
            document.removeEventListener('astro:after-swap', handleNavigation);
            window.removeEventListener('popstate', handleNavigation);
        };
    }, []);

    /**
     * Alterna el tema y persiste la preferencia
     */
    const toggleTheme = () => {
        // Calculamos el nuevo estado del tema (opuesto al actual)
        const newTheme = !isDark;
        // Actualizamos el estado local del componente
        setIsDark(newTheme);
        // Persistimos el nuevo tema en localStorage y lo aplicamos al DOM
        setTheme(newTheme);
    };

    // No renderizamos hasta que el componente esté montado para evitar discrepancias de hidratación
    // Esto previene diferencias entre el renderizado del servidor y el cliente
    if (!mounted) {
        return (
            <button
                className="p-2 rounded-lg transition-opacity opacity-50"
                disabled
                aria-label="Cargando alternador de tema"
            >
                {/* Indicador de carga con animación de pulso */}
                <div
                    className="w-5 h-5 animate-pulse"
                    style={{ backgroundColor: 'var(--color-text-muted)' }}
                />
            </button>
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
                // Utilizamos variables CSS personalizadas para los colores del tema
                backgroundColor: 'var(--color-surface)', // Color de fondo del botón
                color: 'var(--color-text)', // Color del texto/icono
                borderColor: 'var(--color-border)', // Color del borde
            }}
            // Etiquetas de accesibilidad que cambian según el tema actual
            aria-label={
                isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'
            }
            title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        >
            {/* Renderizado condicional del icono según el tema actual */}
            {isDark ? (
                // Si está en modo oscuro, mostramos el icono del sol (para cambiar a claro)
                <SunIcon className="w-5 h-5" />
            ) : (
                // Si está en modo claro, mostramos el icono de la luna (para cambiar a oscuro)
                <MoonIcon className="w-5 h-5" />
            )}
        </button>
    );
}
