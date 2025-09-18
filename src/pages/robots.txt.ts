import type { APIRoute } from 'astro';

/**
 * Obtiene la URL del sitio desde las variables de entorno.
 * Se verifica que esté definida para evitar errores en tiempo de ejecución.
 */
const siteUrl = import.meta.env.SITE;
if (!siteUrl) {
    throw new Error('La variable de entorno SITE no está definida.');
}

/**
 * Genera el contenido del archivo `robots.txt`, que indica a los rastreadores
 * qué rutas pueden o no pueden indexar en el sitio web.
 */
const robotsTxt = [
    'User-agent: *', // Aplica a todos los bots de búsqueda
    'Allow: /', // Permite el acceso a todas las páginas públicas
    'Disallow: /admin/', // Restringe el acceso a la sección de administración
    'Disallow: /privado/', // Restringe el acceso a contenido privado
    'Disallow: /dashboard/',
    'Disallow: /instructor/',
    'Disallow: /cuenta/',
    'Disallow: /perfil/',
    'Disallow: /login/',
    'Disallow: /registro/',
    'Disallow: /logout/',
    'Disallow: /recuperar/',
    'Disallow: /carrito/',
    'Disallow: /checkout/',
    'Disallow: /orden/',
    'Disallow: /factura/',
    'Disallow: /buscar/',
    'Disallow: /etiquetas/',
    'Disallow: /filtrar/',
    'Disallow: /api/',
    'Disallow: /static/',
    'Disallow: /uploads/',
    'Disallow: /temp/',

    `Sitemap: ${new URL('sitemap-index.xml', siteUrl).href}`, // URL del sitemap generado dinámicamente
].join('\n');

/**
 * Encabezados HTTP inmutables para la respuesta.
 * Se usa `Object.freeze` para evitar modificaciones accidentales.
 */
const HEADERS = Object.freeze({
    'Content-Type': 'text/plain; charset=utf-8',
});

/**
 * Maneja la solicitud GET para servir el archivo `robots.txt`.
 * Devuelve el contenido del archivo con los encabezados apropiados.
 *
 * @returns {Response} Respuesta HTTP con el contenido de `robots.txt`.
 */
export const GET: APIRoute = () =>
    new Response(robotsTxt, {
        headers: HEADERS,
    });
