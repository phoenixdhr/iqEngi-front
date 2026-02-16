/* eslint-disable no-undef */
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';
import { loadEnv } from 'vite';

import react from '@astrojs/react';

import icon from 'astro-icon';

import mdx from '@astrojs/mdx';

const env = loadEnv(import.meta.env.MODE, process.cwd(), '');

const rawSiteUrl = env.PUBLIC_DOMAIN?.trim(); // Asegura que no haya espacios adicionales
const SITE_URL = rawSiteUrl
    ? new URL(rawSiteUrl)
    : new URL('http://localhost:4321');

// https://astro.build/config
export default defineConfig({
    output: 'server',
    site: SITE_URL.href,

    // Precarga de enlaces al hacer hover para navegación más rápida
    prefetch: {
        prefetchAll: false,
        defaultStrategy: 'hover',
    },

    server: {
        host: '0.0.0.0',
    },

    adapter: node({
        mode: 'standalone',
    }),

    vite: {
        plugins: [tailwindcss()],
        optimizeDeps: {
            // Pre-bundlea dependencias pesadas para mejor tree-shaking y carga
            include: [
                '@apollo/client',
                '@apollo/client/core',
                '@apollo/client/cache',
                'framer-motion',
            ],
        },
        ssr: {
            // Forzar a Vite a empaquetar Apollo Client en SSR para evitar problemas de ESM/CJS
            noExternal: ['@apollo/client'],
        },
        build: {
            // Separar vendor chunks para mejor caching en navegadores y CDN
            rollupOptions: {
                output: {
                    manualChunks: {
                        'vendor-react': ['react', 'react-dom'],
                        'vendor-apollo': ['@apollo/client'],
                        'vendor-motion': ['framer-motion'],
                        'vendor-headless': ['@headlessui/react'],
                    },
                },
            },
        },
    },

    integrations: [react(), icon(), mdx()],
});