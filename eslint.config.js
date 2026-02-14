import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import astroParser from 'astro-eslint-parser';
import prettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';

export default [
    // Configuración recomendada de ESLint
    js.configs.recommended,
    ...eslintPluginAstro.configs.recommended,

    // Configuración global para el entorno del navegador

    // languageOptions: {
    //     globals: {
    //         // Añadir globales del navegador
    //         window: 'readonly',
    //         document: 'readonly',
    //         localStorage: 'readonly',
    //         sessionStorage: 'readonly',
    //         console: 'readonly',
    //         fetch: 'readonly',
    //         location: 'readonly',
    //         history: 'readonly',
    //         navigator: 'readonly',
    //     },
    // },

    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            // Prevenir console.log en producción. Se permiten warn, error e info para diagnóstico.
            'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
        },
    },

    // Configuración para Astro
    {
        files: ['**/*.astro'],
        plugins: { astro },
        languageOptions: {
            parser: astroParser,
            parserOptions: {
                parser: tsparser,
                extraFileExtensions: ['.astro'],
            },
        },
        rules: {
            'astro/no-conflict-set-directives': 'error',
            'astro/no-unused-define-vars-in-style': 'error',
        },
    },

    // Configuración para TypeScript
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                project: './tsconfig.json',
                sourceType: 'module',
            },
        },
        plugins: { '@typescript-eslint': tseslint },
        rules: {
            'no-unused-vars': 'warn',
            // '@typescript-eslint/explicit-module-boundary-types': 'off',
        },
    },

    // Configuración para Accesibilidad (JSX A11Y)
    {
        plugins: { 'jsx-a11y': jsxA11y },
        rules: {
            'jsx-a11y/alt-text': 'warn',
            'jsx-a11y/anchor-is-valid': 'warn',
        },
    },

    // Configuración para Prettier (desactiva reglas conflictivas)
    prettier,
];
