/**
 * @fileoverview Componente React para formulario de contacto con validación
 * @description Formulario interactivo que envía mensajes a través de API de contacto
 */

import { useState, type FormEvent, useEffect, useRef } from 'react';

declare global {
    interface Window {
        turnstile: any;
    }
}
/**
 * @constant {Array} motivosConsulta
 * @description Motivos principales por los que los profesionales contactan
 */
const motivosConsulta = [
    'Información sobre certificaciones',
    'Consultas sobre cursos específicos',
    'Cotizaciones para empresas',
    'Soporte técnico',
    'Colaboración y alianzas',
    'Otro',
];

/**
 * @interface FormData
 * @description Estructura de datos del formulario
 */
interface FormData {
    nombre: string;
    email: string;
    empresa: string;
    motivo: string;
    mensaje: string;
    newsletter: boolean;
    'cf-turnstile-response': string;
}

/**
 * @interface FormState
 * @description Estado del formulario durante envío
 */
interface FormState {
    isSubmitting: boolean;
    success: boolean;
    error: string;
}

/**
 * @component FormularioContacto
 * @description Formulario de contacto con validación y envío asíncrono
 */
export default function FormularioContacto() {
    const [formData, setFormData] = useState<
        Omit<FormData, 'cf-turnstile-response'>
    >({
        nombre: '',
        email: '',
        empresa: '',
        motivo: '',
        mensaje: '',
        newsletter: false,
    });

    const [formState, setFormState] = useState<FormState>({
        isSubmitting: false,
        success: false,
        error: '',
    });

    const [turnstileToken, setTurnstileToken] = useState<string>('');
    const turnstileWidget = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (turnstileWidget.current) {
            window.turnstile.render(turnstileWidget.current, {
                sitekey: import.meta.env.PUBLIC_TURNSTILE_SITE_KEY, // Clave desde variables de entorno
                callback: function (token: string) {
                    setTurnstileToken(token);
                },
            });
        }
    }, []);

    /**
     * @function handleInputChange
     * @description Maneja cambios en los campos del formulario
     */
    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prev) => ({ ...prev, [name]: checked }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    /**
     * @function handleSubmit
     * @description Maneja el envío del formulario
     */
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Reset estados anteriores
        setFormState({
            isSubmitting: true,
            success: false,
            error: '',
        });

        try {
            // Validación básica
            if (
                !formData.nombre ||
                !formData.email ||
                !formData.motivo ||
                !formData.mensaje
            ) {
                throw new Error(
                    'Por favor completa todos los campos requeridos',
                );
            }
            if (!turnstileToken) {
                throw new Error('Por favor, completa el CAPTCHA.');
            }
            // Enviar datos a la API
            const response = await fetch('/api/contacto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    'cf-turnstile-response': turnstileToken,
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Error al enviar el mensaje');
            }

            // Éxito - resetear formulario
            setFormState({
                isSubmitting: false,
                success: true,
                error: '',
            });

            setFormData({
                nombre: '',
                email: '',
                empresa: '',
                motivo: '',
                mensaje: '',
                newsletter: false,
            });

            window.turnstile.reset();

            // Limpiar mensaje de éxito después de 5 segundos
            setTimeout(() => {
                setFormState((prev) => ({ ...prev, success: false }));
            }, 5000);
        } catch (error) {
            setFormState({
                isSubmitting: false,
                success: false,
                error:
                    error instanceof Error
                        ? error.message
                        : 'Error al enviar el mensaje',
            });
        }
    };

    return (
        <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
                <h2 className="card-title text-2xl mb-6">
                    Envíanos un mensaje
                </h2>

                {/* Mensaje de éxito */}
                {formState.success && (
                    <div className="alert alert-success mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>
                            ¡Mensaje enviado correctamente! Te responderemos en
                            un plazo máximo de 24 horas hábiles.
                        </span>
                    </div>
                )}

                {/* Mensaje de error */}
                {formState.error && (
                    <div className="alert alert-error mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>{formState.error}</span>
                    </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Nombre y Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Nombre completo *
                                </span>
                            </label>
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleInputChange}
                                placeholder="Ej: Juan Pérez"
                                className="input input-bordered w-full"
                                required
                                disabled={formState.isSubmitting}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email *</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="tu@email.com"
                                className="input input-bordered w-full"
                                required
                                disabled={formState.isSubmitting}
                            />
                        </div>
                    </div>

                    {/* Empresa (Opcional) */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Empresa u Organización (opcional)
                            </span>
                        </label>
                        <input
                            type="text"
                            name="empresa"
                            value={formData.empresa}
                            onChange={handleInputChange}
                            placeholder="Nombre de tu empresa"
                            className="input input-bordered w-full"
                            disabled={formState.isSubmitting}
                        />
                    </div>

                    {/* Motivo de Consulta */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Motivo de consulta *
                            </span>
                        </label>
                        <select
                            name="motivo"
                            value={formData.motivo}
                            onChange={handleInputChange}
                            className="select select-bordered w-full"
                            required
                            disabled={formState.isSubmitting}
                        >
                            <option value="" disabled>
                                Selecciona un motivo
                            </option>
                            {motivosConsulta.map((motivo) => (
                                <option key={motivo} value={motivo}>
                                    {motivo}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Mensaje */}
                    <div className="form-control flex flex-col w-full">
                        <label className="label">
                            <span className="label-text">Mensaje *</span>
                        </label>
                        <textarea
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleInputChange}
                            className="textarea textarea-bordered h-32 w-full"
                            placeholder="Cuéntanos más sobre tu consulta, objetivos profesionales o qué área de especialización te interesa..."
                            required
                            disabled={formState.isSubmitting}
                        ></textarea>
                    </div>
                    {/* Cloudflare Turnstile */}
                    <div className="form-control">
                        <div ref={turnstileWidget}></div>
                    </div>
                    {/* Checkbox Newsletter */}
                    <div className="form-control flex flex-col">
                        <label className="label cursor-pointer justify-start items-start gap-2 flex-wrap">
                            <input
                                type="checkbox"
                                name="newsletter"
                                checked={formData.newsletter}
                                onChange={handleInputChange}
                                className="checkbox checkbox-primary"
                                disabled={formState.isSubmitting}
                            />
                            <span className="label-text flex-1 min-w-0 whitespace-normal break-words leading-tight">
                                Deseo recibir información sobre nuevos cursos,
                                certificaciones y contenido de valor para mi
                                desarrollo profesional
                            </span>
                        </label>
                    </div>

                    {/* Botón de Envío */}
                    <div className="form-control mt-6">
                        <button
                            type="submit"
                            className={`btn btn-primary btn-lg w-full ${formState.isSubmitting ? 'loading' : ''}`}
                            disabled={formState.isSubmitting || !turnstileToken}
                        >
                            {formState.isSubmitting ? (
                                <>
                                    <span className="loading loading-spinner"></span>
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                        ></path>
                                    </svg>
                                    Enviar Mensaje
                                </>
                            )}
                        </button>
                    </div>

                    <p
                        className="text-sm text-center"
                        style={{ color: 'var(--color-text-muted)' }}
                    >
                        * Campos requeridos. Responderemos tu consulta en un
                        plazo máximo de 24 horas hábiles.
                    </p>
                </form>
            </div>
        </div>
    );
}
