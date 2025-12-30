/**
 * @fileoverview Endpoint API para envío de formulario de contacto
 * @description Procesa mensajes de contacto y envía emails usando Resend
 */

import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { siteInfo } from '@const/site-info';

/**
 * @interface ContactFormData
 * @description Estructura de datos del formulario de contacto
 */
interface ContactFormData {
    nombre: string;
    email: string;
    empresa?: string;
    motivo: string;
    mensaje: string;
    newsletter: boolean;
    'cf-turnstile-response': string;
}

const TURNSTILE_SECRET_KEY = import.meta.env.TURNSTILE_SECRET_KEY; // Clave secreta desde variables de entorno

async function verifyTurnstile(token: string, ip: string | null) {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            secret: TURNSTILE_SECRET_KEY,
            response: token,
            remoteip: ip,
        }),
    });
    const data = await response.json();
    return data.success;
}

/**
 * @description Maneja peticiones POST para envío de formulario de contacto
 * @returns {Promise<Response>} Respuesta JSON con resultado del envío
 */
export const POST: APIRoute = async ({ request, clientAddress }) => {
    try {
        // Validar que la API key de Resend esté configurada
        const resendApiKey = import.meta.env.RESEND_API_KEY;
        if (!resendApiKey) {
            console.error('RESEND_API_KEY no está configurada');
            return new Response(
                JSON.stringify({
                    success: false,
                    error: 'Servicio de email no configurado',
                }),
                {
                    status: 500,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        // Parsear datos del formulario
        const formData: ContactFormData = await request.json();

        // Verificar el token de Turnstile
        const turnstileSuccess = await verifyTurnstile(formData['cf-turnstile-response'], clientAddress);
        if (!turnstileSuccess) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: 'Falló la verificación de CAPTCHA.',
                }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        // Validación básica
        if (
            !formData.nombre ||
            !formData.email ||
            !formData.motivo ||
            !formData.mensaje
        ) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: 'Todos los campos requeridos deben completarse',
                }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: 'Email inválido',
                }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        // Inicializar Resend
        const resend = new Resend(resendApiKey);

        // Construir el cuerpo del email
        const emailHtml = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background-color: #2563eb; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
                    .content { background-color: #f9fafb; padding: 20px; border-radius: 0 0 5px 5px; }
                    .field { margin-bottom: 15px; }
                    .label { font-weight: bold; color: #1f2937; }
                    .value { margin-top: 5px; padding: 10px; background-color: white; border-radius: 3px; }
                    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2 style="margin: 0;">Nuevo mensaje de usuario - IqEngi</h2>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="label">Nombre:</div>
                            <div class="value">${formData.nombre}</div>
                        </div>
                        <div class="field">
                            <div class="label">Email:</div>
                            <div class="value">${formData.email}</div>
                        </div>
                        ${
                            formData.empresa
                                ? `
                        <div class="field">
                            <div class="label">Empresa:</div>
                            <div class="value">${formData.empresa}</div>
                        </div>
                        `
                                : ''
                        }
                        <div class="field">
                            <div class="label">Motivo de consulta:</div>
                            <div class="value">${formData.motivo}</div>
                        </div>
                        <div class="field">
                            <div class="label">Mensaje:</div>
                            <div class="value">${formData.mensaje.replace(/\n/g, '<br>')}</div>
                        </div>
                        <div class="field">
                            <div class="label">Newsletter:</div>
                            <div class="value">${formData.newsletter ? 'Sí, acepta recibir información' : 'No'}</div>
                        </div>
                        <div class="footer">
                            <p>Este mensaje fue enviado desde el formulario de contacto de IqEngi.</p>
                            <p>Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'America/Lima' })}</p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `;

        // Generar ID de ticket único
        const ticketId = Date.now().toString();

        // Enviar email usando Resend
        const emailRecipient = import.meta.env.CONTACT_EMAIL || siteInfo.email;
        const data = await resend.emails.send({
            from: 'IqEngi Contacto <onboarding@resend.dev>', // Cambiar por tu dominio verificado
            to: emailRecipient,
            subject: `Consulta de: ${formData.email} - Ticket ${ticketId}`,
            html: emailHtml,
            replyTo: formData.email,
        });

        console.log('Email enviado exitosamente:', data);

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Mensaje enviado correctamente',
            }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    } catch (error) {
        console.error('Error al enviar email:', error);

        return new Response(
            JSON.stringify({
                success: false,
                error:
                    error instanceof Error
                        ? error.message
                        : 'Error al enviar el mensaje',
            }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
};
