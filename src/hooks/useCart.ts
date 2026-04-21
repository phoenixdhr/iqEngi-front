import { useState, useEffect } from 'react';
import { CARRITO_CURSOS, CART_CHANGE_EVENT } from '@const/const-string';
import type { CarritoItem } from '@interfaces/carrito-item.interface';

/**
 * Hook para manejar el carrito de compras de la aplicación.
 * Provee un mecanismo para persistir los artículos en localStorage y 
 * permite la sincronización automática entre distintas "islas" React 
 * a través de un CustomEvent global para no perder el estado.
 */
export function useCart() {
    // Estado local continuo que guarda los artículos presentes en el carrito de esta isla en particular.
    const [items, setItems] = useState<CarritoItem[]>([]);

    // Hook de efecto que se corre únicamente al montar la isla por primera vez
    useEffect(() => {
        const stored = localStorage.getItem(CARRITO_CURSOS);
        if (stored) {
            try {
                // Si existe un carrito previamente guardado en el navegador, se restaura su estado
                setItems(JSON.parse(stored));
            } catch {
                // Si la data está corrupta, se reinicia como un carrito vacío por seguridad
                setItems([]);
            }
        }

        // Manejador del evento global encargado de sincronizar múltiples islas React separadas en Astro.
        function handleChange(e: CustomEvent<CarritoItem[]>) {
            // Cuando una isla despacha un cambio en el carrito, intercepta el evento y actualiza este estado local
            if (e.detail) setItems(e.detail);
        }
        
        // Añade el EventListener para registrar la intención de escucha de cambios en la ventana completa
        window.addEventListener(CART_CHANGE_EVENT, handleChange as EventListener);

        // Limpieza de memoria (Clean up): remueve el mismo event listener cuando el componente se desmonte
        return () => window.removeEventListener(CART_CHANGE_EVENT, handleChange as EventListener);
    }, []);

    /**
     * Función utilitaria principal para grabar forzosamente los cambios de estado.
     * Reemplaza todos los items, los sube al local storage y
     * emite el evento global para las demás islas en diferentes partes de Astro.
     */
    function persist(newItems: CarritoItem[]) {
        setItems(newItems);
        localStorage.setItem(CARRITO_CURSOS, JSON.stringify(newItems));
        window.dispatchEvent(new CustomEvent(CART_CHANGE_EVENT, { detail: newItems }));
    }

    /**
     * Agrega individualmente un curso extra al carrito.
     * Verifica que no haya duplicados usando 'some' y, si pasa, lo inyecta como
     * un nuevo objeto y sincroniza usando la función persist.
     */
    function addItem(item: CarritoItem) {
        // 1. Calculamos basado en el estado actual
        if (items.some((i) => i.cursoId === item.cursoId)) return;
        
        // 2. Creamos la nueva variable
        const updated = [...items, item];
        
        // 3. Persistimos (Actualiza estado, localStorage y lanza el evento de forma segura)
        persist(updated);
    }

    /**
     * Filtra los artículos y elimina aquel cuyo "cursoId" concuerde.
     * Al realizar el cambio, sincroniza el carrito faltante usando persist.
     */
    function removeItem(cursoId: string) {
        // Crea un nuevo array excluyendo el ítem específico
        const updated = items.filter((i) => i.cursoId !== cursoId);
        
        // Persistimos los cambios
        persist(updated);
    }

    /**
     * Vaciador total del carrito. Acude a la función interna 'persist' para asegurar que el array vacío 
     * viaje y anule todos los carritos en todas las demás islas al mismo tiempo.
     */
    function clearCart() {
        persist([]);
    }

    // Retorno calculable inmediato de la cantidad de productos actuales
    const itemCount = items.length;

    // Reductor que evalúa y suma el precio individual con sus respectivos descuentos extraídos matemáticamente
    const total = items.reduce((acc, item) => {
        const precioFinal = item.precio * (1 - (item.descuento || 0) / 100);
        return acc + precioFinal;
    }, 0);

    return { items, addItem, removeItem, clearCart, updateCartItems: persist, itemCount, total };
}
