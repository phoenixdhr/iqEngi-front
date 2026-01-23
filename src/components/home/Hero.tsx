import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    // Animation variants for staggered entrance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Delay between each child animation
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
            },
        },
    };

    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[var(--color-primary)] opacity-5 blur-[120px]"></div>
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-[var(--color-secondary)] opacity-5 blur-[100px]"></div>
            </div>

            <motion.div
                className="container mx-auto px-6 relative z-10 text-center max-w-4xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Badge / Overline */}
                <motion.div variants={itemVariants} className="mb-6 flex justify-center">
                    <span className="px-4 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-secondary)] text-sm font-medium tracking-wide">
                        Revoluciona tu aprendizaje
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8"
                >
                    Aprende ingeniería <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
                        sin límites
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-[var(--color-text-muted)] mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Domina las habilidades del futuro con nuestra plataforma interactiva.
                     Cursos diseñados por expertos para impulsar tu carrera al siguiente nivel.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="/cursos"
                        className="btn btn-primary btn-lg min-w-[160px] rounded-full shadow-lg shadow-[var(--color-primary)]/20 hover:bg-[var(--color-btn-hover)] hover:border-[var(--color-btn-hover)] hover:shadow-xl hover:shadow-[var(--color-btn-hover)]/40 hover:scale-105 transition-all duration-300"
                    >
                        Explorar Cursos
                    </a>
                    <a
                        href="/comunidad"
                        className="btn btn-ghost btn-lg min-w-[160px] rounded-full hover:bg-[var(--color-surface-2)]"
                    >
                        Unirse a la Comunidad
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
