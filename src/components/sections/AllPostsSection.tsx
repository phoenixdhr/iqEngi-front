/**
 * AllPostsSection - Sección de todos los posts del blog con paginación
 * 
 * Este componente muestra todos los posts disponibles con paginación client-side.
 * Muestra máximo 6 posts por página y botones de navegación si hay más posts.
 */
import { useState, useMemo } from 'react';
import { Formatter } from '@utils/formatter';

// Interfaz para los datos del post (simplificada para props desde Astro)
interface PostData {
    slug: string;
    title: string;
    description: string;
    image?: string;
    date: string;
    author?: string;
    tags?: string[];
}

interface AllPostsSectionProps {
    posts: PostData[];
    postsPerPage?: number;
}

export default function AllPostsSection({ posts, postsPerPage = 6 }: AllPostsSectionProps) {
    const [currentPage, setCurrentPage] = useState(1);

    // Calcular el total de páginas
    const totalPages = Math.ceil(posts.length / postsPerPage);

    // Obtener los posts para la página actual
    const currentPosts = useMemo(() => {
        const startIndex = (currentPage - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        return posts.slice(startIndex, endIndex);
    }, [posts, currentPage, postsPerPage]);

    // Función para cambiar de página
    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            // Hacer scroll suave hacia la sección
            document.getElementById('all-posts-section')?.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    };

    // Generar array de números de página para la navegación
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisiblePages = 5;
        
        if (totalPages <= maxVisiblePages) {
            // Si hay pocas páginas, mostrar todas
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Mostrar primera página
            pages.push(1);
            
            if (currentPage > 3) {
                pages.push('...');
            }
            
            // Páginas alrededor de la actual
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);
            
            for (let i = start; i <= end; i++) {
                pages.push(i);
            }
            
            if (currentPage < totalPages - 2) {
                pages.push('...');
            }
            
            // Mostrar última página
            pages.push(totalPages);
        }
        
        return pages;
    };

    // Si no hay posts, no mostrar la sección
    if (posts.length === 0) {
        return null;
    }

    return (
        <section id="all-posts-section" className="mt-16">
            {/* Header de la sección */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-base-200">
                <div>
                    <h3 className="text-2xl font-bold">Todos los Artículos</h3>
                    <p className="text-base-content/60 text-sm mt-1">
                        Mostrando {currentPosts.length} de {posts.length} artículos
                    </p>
                </div>
                
                {/* Indicador de página actual */}
                {totalPages > 1 && (
                    <div className="hidden sm:flex items-center gap-2 text-sm text-base-content/60">
                        <span>Página {currentPage} de {totalPages}</span>
                    </div>
                )}
            </div>

            {/* Grid de posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                ))}
            </div>

            {/* Paginación */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                    <div className="join shadow-lg">
                        {/* Botón anterior */}
                        <button
                            className="join-item btn btn-md"
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            aria-label="Página anterior"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Números de página */}
                        {getPageNumbers().map((page, index) => (
                            typeof page === 'number' ? (
                                <button
                                    key={index}
                                    className={`join-item btn btn-md ${currentPage === page ? 'btn-primary' : ''}`}
                                    onClick={() => goToPage(page)}
                                    aria-label={`Ir a página ${page}`}
                                    aria-current={currentPage === page ? 'page' : undefined}
                                >
                                    {page}
                                </button>
                            ) : (
                                <button key={index} className="join-item btn btn-md btn-disabled">
                                    {page}
                                </button>
                            )
                        ))}

                        {/* Botón siguiente */}
                        <button
                            className="join-item btn btn-md"
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            aria-label="Página siguiente"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

/**
 * PostCard - Componente de tarjeta individual de post
 * Replica el estilo de BlogPost.astro pero en React
 */
function PostCard({ post }: { post: PostData }) {
    return (
        <article className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col group overflow-hidden border border-base-200">
            {/* Imagen del post */}
            <a href={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden">
                <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={post.image || '/images/placeholder-image.png'}
                    alt={post.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            {/* Contenido del post */}
            <div className="card-body p-5 flex flex-col flex-grow">
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                        {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="badge badge-sm badge-neutral text-xs font-medium opacity-80">
                                #{tag}
                            </span>
                        ))}
                        {post.tags.length > 3 && (
                            <span className="text-xs text-base-content/60 flex items-center">
                                +{post.tags.length - 3}
                            </span>
                        )}
                    </div>
                )}

                {/* Título */}
                <h2 className="card-title text-lg font-bold leading-tight mb-2 group-hover:text-primary transition-colors">
                    <a href={`/blog/${post.slug}`} className="line-clamp-2">
                        {post.title}
                    </a>
                </h2>

                {/* Fecha y autor */}
                <div className="flex items-center gap-2 text-xs text-base-content/60 mb-3">
                    <time dateTime={post.date} className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {Formatter.formatDate(new Date(post.date))}
                    </time>
                    {post.author && (
                        <>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                {post.author}
                            </span>
                        </>
                    )}
                </div>

                {/* Descripción */}
                <p className="text-sm text-base-content/80 line-clamp-3 mb-4 flex-grow">
                    {post.description}
                </p>

                {/* Botón leer más */}
                <div className="card-actions justify-end mt-auto pt-4 border-t border-base-200">
                    <a
                        href={`/blog/${post.slug}`}
                        className="btn btn-outline btn-sm w-full hover:!bg-primary hover:!border-primary hover:!text-white transition-all duration-300 group/btn"
                    >
                        Leer artículo
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    );
}
