/* eslint-disable no-undef */
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';
import { loadEnv } from 'vite';

const env = loadEnv(import.meta.env.MODE, process.cwd(), '');

const rawSiteUrl = env.PUBLIC_DOMAIN?.trim(); // Asegura que no haya espacios adicionales
const SITE_URL = rawSiteUrl
    ? new URL(rawSiteUrl)
    : new URL('http://localhost:4321');

// https://astro.build/config
export default defineConfig({
    output: 'server',
    site: SITE_URL.href,

    server: {
        host: '0.0.0.0',
    },

    adapter: node({
        mode: 'standalone',
    }),

    vite: {
        plugins: [tailwindcss()],
        optimizeDeps: {
            include: ['@apollo/client'],
        },
    },
});
