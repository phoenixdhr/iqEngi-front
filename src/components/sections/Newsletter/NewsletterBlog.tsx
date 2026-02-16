import React from 'react';
import { NewsletterSource } from '@graphql-astro/generated/graphql';
import { ApolloProvider } from '@apollo/client';
import { clientGql } from '@graphql-astro/apolloClient';
import { useNewsletterSubscription } from '@hooks/useNewsletterSubscription';

/**
 * NewsletterBlogContent - Componente interno con la UI del newsletter del blog.
 * Usa el hook useNewsletterSubscription para la lógica de suscripción.
 * Separado del wrapper ApolloProvider para acceder al contexto de Apollo Client.
 */
function NewsletterBlogContent() {
    // Hook reutilizable: maneja email, status, message, loading y handleSubmit
    const { email, setEmail, status, message, loading, handleSubmit } = useNewsletterSubscription(NewsletterSource.WebFooter);

    return (
        <section className="mt-24 mb-12 relative overflow-hidden rounded-3xl bg-base-900 text-white">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90 z-0"></div>
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 z-0"></div>
            <div className="relative z-10 p-12 md:p-16 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Suscríbete a nuestro Newsletter</h2>
                <p className="text-lg text-white/90 mb-8">
                    Recibe contenido exclusivo, tips de ingeniería, ofertas especiales y acceso anticipado a nuevos cursos directamente en tu bandeja de entrada.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                    <input 
                        type="email" 
                        placeholder="tucorreo@ejemplo.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input input-lg w-full bg-white/10 border-white/20 text-white placeholder-white/60 focus:bg-white/20 focus:border-white focus:outline-none backdrop-blur-sm" 
                        required 
                        disabled={loading || status === 'success'}
                    />
                    <button 
                        type="submit" 
                        disabled={loading || status === 'success'}
                        className="btn btn-lg bg-white text-primary border-none hover:bg-white hover:scale-105 hover:shadow-xl transition-all duration-300 font-bold shadow-md"
                    >
                        {loading ? (
                            <span className="loading loading-spinner loading-sm text-primary"></span>
                        ) : status === 'success' ? (
                            '¡Suscrito!'
                        ) : (
                            'Suscribirme'
                        )}
                    </button>
                </form>
                {message && (
                    <p className={`text-sm mt-4 font-medium ${status === 'success' ? 'text-white' : 'text-red-200'}`}>
                        {message}
                    </p>
                )}
                <p className="text-xs text-white/60 mt-4">No enviamos spam. Puedes darte de baja en cualquier momento.</p>
            </div>
        </section>
    );
}

/**
 * NewsletterBlog - Componente contenedor que provee el cliente de Apollo.
 * Requerido para evitar errores de "Invalid hook call" al usar useMutation en islas de Astro.
 */
function NewsletterBlog() {
    return (
        <ApolloProvider client={clientGql}>
            <NewsletterBlogContent />
        </ApolloProvider>
    );
}

export default NewsletterBlog;
