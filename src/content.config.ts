import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 3. Definir la colección de posts usando la nueva Content Layer API
const postCollection = defineCollection({
    // 4. Configurar el loader: busca archivos Markdown y MDX recursivamente
    loader: glob({
        pattern: '**/*.{md,mdx}', // Busca todos los .md y .mdx en subdirectorios
        base: './src/content/posts', // Directorio base donde están los posts
    }),

    // 5. Definir el schema con Zod para validación y tipos TypeScript
    schema: z.object({
        title: z.string(), // Título del post (obligatorio)
        date: z.coerce.date(), // Fecha - convierte string a Date automáticamente
        description: z.string(), // Descripción del post (obligatorio)
        image: z.string(), // URL o path de la imagen (obligatorio)
        draft: z.boolean().default(false), // Estado borrador - false por defecto
        slug: z.string().optional(), // Slug personalizado - opcional (sobrescribe el id auto-generado)

        // Relaciones simples (sin reference() - datos como strings)
        author: z.string(), // Nombre del autor como string simple
        tags: z.array(z.string()), // Array de tags como strings

        // 💡 Nota: Si tuvieras colecciones separadas para autores, usarías:
        // author: reference('authors'),            // Referencia a colección 'authors'
        // Pero aquí se usa string simple para mayor simplicidad
    }),
});

// 6. Exportar las colecciones - la clave determina el nombre para getCollection()
export const collections = {
    posts: postCollection, // Usarás getCollection('posts') para consultar esta colección
};

// 7. ¿Cómo se usa esta configuración?
// - getCollection('posts') retorna todos los posts
// - getEntry('posts', 'mi-post-id') retorna un post específico
// - Cada entry tendrá: { id, collection, data: { title, date, description... }, body }
