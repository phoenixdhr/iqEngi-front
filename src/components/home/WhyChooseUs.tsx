import React from 'react';
import { motion } from 'framer-motion';

/**
 * Sección "Por Qué Elegirnos" - Muestra los beneficios clave de la plataforma
 * con cards animadas y diseño premium.
 */

interface Feature {
    icon: string;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: '🎓',
        title: 'Instructores Expertos',
        description: 'Aprende de profesionales con años de experiencia en la industria de ingeniería.',
    },
    {
        icon: '📚',
        title: 'Contenido Práctico',
        description: 'Cursos diseñados con casos reales y ejercicios aplicables a tu trabajo diario.',
    },
    {
        icon: '🏆',
        title: 'Certificación Reconocida',
        description: 'Obtén certificados que validarán tus habilidades ante empleadores.',
    },
    {
        icon: '💡',
        title: 'Aprendizaje Flexible',
        description: 'Estudia a tu propio ritmo, desde cualquier lugar y en cualquier momento.',
    },
];

const WhyChooseUs: React.FC = () => {
    // Variantes de animación para el contenedor (stagger effect)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    // Variantes para cada card individual
    const cardVariants = {
        hidden: { 
            y: 30, 
            opacity: 0,
            scale: 0.95,
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12,
            },
        },
    };

    // Variante para el icono con efecto de rebote
    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: 'spring',
                stiffness: 200,
                damping: 10,
                delay: 0.2,
            },
        },
    };

    return (
        <section className="relative py-20 bg-[var(--color-bg)] overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] rounded-full bg-[var(--color-primary)] opacity-[0.03] blur-[80px]"></div>
                <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] rounded-full bg-[var(--color-secondary)] opacity-[0.03] blur-[80px]"></div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Encabezado de sección */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-semibold tracking-wide mb-4">
                        ¿Por qué elegirnos?
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
                        La mejor plataforma para{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
                            ingenieros
                        </span>
                    </h2>
                    <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                        Descubre por qué miles de profesionales confían en IQ ENGI para impulsar sus carreras.
                    </p>
                </motion.div>

                {/* Grid de features */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group relative bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/5"
                        >
                            {/* Gradiente decorativo en hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Contenido */}
                            <div className="relative z-10">
                                {/* Icono */}
                                <motion.div
                                    variants={iconVariants}
                                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                                >
                                    <span className="text-3xl">{feature.icon}</span>
                                </motion.div>

                                {/* Título */}
                                <h3 className="text-lg font-bold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                                    {feature.title}
                                </h3>

                                {/* Descripción */}
                                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Línea decorativa inferior */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
