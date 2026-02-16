import { useState } from 'react';
import { useNewsletter_SubscribeMutation, NewsletterSource } from '@graphql-astro/generated/graphql';

/**
 * Hook reutilizable para manejar la suscripción al newsletter.
 *
 * Encapsula la lógica común de:
 * - Estado del formulario (email, status, message)
 * - Ejecución de la mutación GraphQL de suscripción
 * - Manejo de estados de éxito, error y timeout de reset
 *
 * @param source - Fuente de suscripción (ej. WebFooter, BlogSection)
 * @returns Objeto con estados y funciones para controlar el formulario
 */
export function useNewsletterSubscription(source: NewsletterSource) {
    // Estado del email ingresado por el usuario
    const [email, setEmail] = useState('');
    // Estado del formulario: idle, loading, success o error
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    // Mensaje visible para el usuario (éxito o error)
    const [message, setMessage] = useState('');

    // Hook generado por codegen para ejecutar la mutación de suscripción
    const [subscribe, { loading }] = useNewsletter_SubscribeMutation();

    /**
     * Manejador del envío del formulario.
     * Ejecuta la mutación, maneja respuestas y errores, y resetea el estado tras éxito.
     */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Iniciamos el estado de carga y limpiamos mensajes anteriores
        setStatus('loading');
        setMessage('');

        try {
            // Ejecutamos la mutación enviando el email y la fuente
            const { data } = await subscribe({
                variables: {
                    input: {
                        email: email,
                        source: source
                    }
                }
            });

            // Validamos la respuesta exitosa del backend
            if (data?.Newsletter_subscribe?.success) {
                setStatus('success');
                setMessage(data.Newsletter_subscribe.message || '¡Te has suscrito correctamente!');
                setEmail('');

                // Reseteamos el estado visual después de 5 segundos
                setTimeout(() => {
                    setStatus('idle');
                    setMessage('');
                }, 5000);
            } else {
                // Manejo de errores controlados por el backend (ej. email duplicado)
                setStatus('error');
                setMessage(data?.Newsletter_subscribe?.message || 'Ocurrió un error al suscribirse.');
            }
        } catch (err: any) {
            // Manejo de errores de red o excepciones
            console.error(err);
            setStatus('error');
            setMessage(err.message || 'Error de conexión. Inténtalo de nuevo.');
        }
    };

    return { email, setEmail, status, message, loading, handleSubmit };
}
