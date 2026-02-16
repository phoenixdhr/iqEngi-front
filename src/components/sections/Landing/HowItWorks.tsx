import { motion } from 'framer-motion';

/**
 * Sección "Cómo Funciona" - Timeline visual de 3 pasos
 * Muestra el proceso de aprendizaje en la plataforma
 */

interface Step {
    number: number;
    title: string;
    description: string;
    icon: string;
}

const steps: Step[] = [
    {
        number: 1,
        title: 'Elige tu curso',
        description: 'Explora nuestro catálogo y encuentra el curso que se adapte a tus objetivos profesionales.',
        icon: '🔍',
    },
    {
        number: 2,
        title: 'Aprende a tu ritmo',
        description: 'Accede al contenido cuando quieras, con videos, ejercicios prácticos y recursos descargables.',
        icon: '📖',
    },
    {
        number: 3,
        title: 'Certifícate',
        description: 'Completa el curso y obtén tu certificación para destacar en el mercado laboral.',
        icon: '🎯',
    },
];

export default function HowItWorks() {
    // Variantes de animación
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const stepVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12,
            },
        },
    };

    const lineVariants = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
            transition: {
                duration: 0.8,
                delay: 0.5,
            },
        },
    };

    return (
        <section className="relative py-20 bg-[var(--color-bg)] overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-1/2 h-[400px] -translate-y-1/2 bg-gradient-to-r from-[var(--color-primary)]/5 to-transparent blur-3xl"></div>
                <div className="absolute top-1/2 right-0 w-1/2 h-[400px] -translate-y-1/2 bg-gradient-to-l from-[var(--color-secondary)]/5 to-transparent blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Encabezado */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-sm font-semibold tracking-wide mb-4">
                        Proceso Simple
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
                        ¿Cómo{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
                            funciona
                        </span>
                        ?
                    </h2>
                    <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                        Comienza tu viaje de aprendizaje en solo 3 simples pasos.
                    </p>
                </motion.div>

                {/* Timeline de pasos */}
                <motion.div
                    className="relative"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* Línea conectora (visible solo en desktop) */}
                    <motion.div
                        className="hidden lg:block absolute top-[60px] left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] origin-left"
                        variants={lineVariants}
                    />

                    {/* Grid de pasos */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                variants={stepVariants}
                                className="relative flex flex-col items-center text-center"
                            >
                                {/* Círculo con número */}
                                <motion.div
                                    className="relative mb-6"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full blur-lg opacity-30"></div>
                                    
                                    {/* Círculo principal */}
                                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center shadow-lg">
                                        <span className="text-4xl">{step.icon}</span>
                                    </div>
                                    
                                    {/* Badge con número */}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-primary)] flex items-center justify-center text-sm font-bold text-[var(--color-primary)]">
                                        {step.number}
                                    </div>
                                </motion.div>

                                {/* Contenido */}
                                <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-[var(--color-text-muted)] leading-relaxed max-w-xs">
                                    {step.description}
                                </p>

                                {/* Flecha (visible solo en mobile entre pasos) */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden mt-6 text-2xl text-[var(--color-primary)] animate-bounce">
                                        ↓
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
