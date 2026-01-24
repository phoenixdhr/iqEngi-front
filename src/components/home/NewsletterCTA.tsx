
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNewsletter_SubscribeMutation, NewsletterSource } from '@graphql-astro/generated/graphql';
import { ApolloProvider } from '@apollo/client';
import { clientGql } from '@graphql-astro/apolloClient';

// Componente interno que maneja la lógica de suscripción y UI.
// Separamos este componente para poder envolverlo con el ApolloProvider definido abajo.
const NewsletterCTAContent = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const [subscribe, { loading }] = useNewsletter_SubscribeMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    
    try {
      const { data } = await subscribe({
        variables: {
          input: {
            email: email,
            source: NewsletterSource.WebFooter
          }
        }
      });

      if (data?.Newsletter_subscribe?.success) {
        setStatus('success');
        setMessage(data.Newsletter_subscribe.message || '¡Te has suscrito correctamente!');
        setEmail('');
        setTimeout(() => {
           setStatus('idle');
           setMessage('');
        }, 5000);
      } else {
        setStatus('error');
        setMessage(data?.Newsletter_subscribe?.message || 'Ocurrió un error al suscribirse.');
      }
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setMessage(err.message || 'Error de conexión. Inténtalo de nuevo.');
    }
  };

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8 inline-block"
            >
                <span className="px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-semibold text-sm">
                    📧 Newsletter
                </span>
            </motion.div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text)]"
            >
                Suscríbete a nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"> Newsletter</span>
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-lg text-[var(--color-text-muted)] mb-10 leading-relaxed max-w-2xl mx-auto"
            >
                Recibe contenido exclusivo, tips de ingeniería, ofertas especiales y acceso anticipado a nuevos cursos directamente en tu bandeja de entrada.
            </motion.p>
            
            <motion.form 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto"
            >
                <div className="relative w-full">
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tucorreo@ejemplo.com" 
                        className="input input-lg w-full rounded-full bg-[var(--color-surface-2)] border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-muted)]/60 focus:border-[var(--color-primary)] focus:outline-none focus:ring-4 focus:ring-[var(--color-primary)]/10 shadow-lg pl-6 transition-all duration-300" 
                        required 
                        disabled={loading || status === 'success'}
                    />
                </div>
                <button 
                    type="submit" 
                    disabled={loading || status === 'success'}
                    className="btn btn-lg rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white border-none hover:shadow-lg hover:shadow-[var(--color-primary)]/20 hover:scale-105 transition-all duration-300 min-w-[160px]"
                >
                    {loading ? (
                        <span className="loading loading-spinner loading-sm text-white"></span>
                    ) : status === 'success' ? (
                        '¡Suscrito!'
                    ) : (
                        'Suscribirme'
                    )}
                </button>
            </motion.form>
            
            {message && (
                <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-sm mt-4 font-medium ${status === 'success' ? 'text-green-500' : 'text-red-500'}`}
                >
                    {message}
                </motion.p>
            )}

            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-xs text-[var(--color-text-muted)] mt-6"
            >
                Al suscribirte, aceptas nuestra <a href="#" className="underline decoration-[var(--color-primary)] underline-offset-2 hover:text-[var(--color-primary)]">Política de Privacidad</a>. Puedes cancelar en cualquier momento.
            </motion.p>
          </div>
      </div>
      
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary)]/5 rounded-full blur-[120px] -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-secondary)]/5 rounded-full blur-[120px] -z-10 pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
    </section>
  );
};

// Componente principal exportado.
// Envuelve el contenido en ApolloProvider para proveer el contexto del cliente GraphQL.
// Esto es necesario en Astro cuando se usan hooks de Apollo en componentes React hidratados (islas).
const NewsletterCTA = () => (
    <ApolloProvider client={clientGql}>
        <NewsletterCTAContent />
    </ApolloProvider>
);

export default NewsletterCTA;
