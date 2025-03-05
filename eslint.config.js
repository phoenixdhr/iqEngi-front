// import eslint from 'eslint';
// import astro from 'eslint-plugin-astro';
// import tseslint from '@typescript-eslint/eslint-plugin';
// import tsparser from '@typescript-eslint/parser';
// import react from 'eslint-plugin-react';
// import reactHooks from 'eslint-plugin-react-hooks';
// import prettier from 'eslint-config-prettier';
// import jsxA11y from 'eslint-plugin-jsx-a11y';

// export default [
//     // Reglas base de ESLint
//     eslint.configs.recommended,

//     // Configuración para Astro
//     {
//         files: ['**/*.astro'],
//         plugins: { astro },
//         languageOptions: {
//             parser: 'astro-eslint-parser',
//             parserOptions: {
//                 parser: '@typescript-eslint/parser',
//                 extraFileExtensions: ['.astro'],
//             },
//         },
//         rules: {
//             ...astro.configs.recommended.rules, // Aplica las reglas recomendadas para Astro
//         },
//     },

//     // Configuración para TypeScript
//     {
//         files: ['**/*.ts', '**/*.tsx'],
//         languageOptions: {
//             parser: tsparser,
//             parserOptions: {
//                 project: './tsconfig.json',
//                 sourceType: 'module',
//             },
//         },
//         plugins: { '@typescript-eslint': tseslint },
//         rules: {
//             '@typescript-eslint/no-unused-vars': 'warn',
//             '@typescript-eslint/explicit-module-boundary-types': 'off',
//         },
//     },

//     // Configuración para React y Hooks
//     {
//         files: ['**/*.jsx', '**/*.tsx'],
//         plugins: { react, 'react-hooks': reactHooks },
//         rules: {
//             'react/jsx-uses-react': 'off', // No es necesario en React 17+
//             'react/react-in-jsx-scope': 'off', // No es necesario en Astro
//             'react-hooks/rules-of-hooks': 'error', // Validar reglas de hooks
//             'react-hooks/exhaustive-deps': 'warn', // Sugerir dependencias en useEffect
//         },
//     },

//     // Configuración para Accesibilidad (JSX A11Y)
//     {
//         plugins: { 'jsx-a11y': jsxA11y },
//         rules: {
//             'jsx-a11y/alt-text': 'warn',
//             'jsx-a11y/anchor-is-valid': 'warn',
//         },
//     },

//     // Configuración para Prettier (desactiva reglas conflictivas)
//     prettier,
// ];

import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import astroParser from 'astro-eslint-parser';
import prettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
    // Configuración recomendada de ESLint
    js.configs.recommended,
    ...eslintPluginAstro.configs.recommended,

    // Configuración para Astro
    {
        files: ['**/*.astro'],
        plugins: { astro },
        languageOptions: {
            parser: astroParser, // Ahora importamos correctamente el parser de Astro
            parserOptions: {
                parser: tsparser, // Importamos correctamente el parser de TypeScript
                extraFileExtensions: ['.astro'],
            },
        },
        rules: {
            // Enable recommended rules
            'astro/no-conflict-set-directives': 'error',
            'astro/no-unused-define-vars-in-style': 'error',

            // override/add rules settings here, such as:
            // "astro/no-set-html-directive": "error"
        },
    },

    // Configuración para TypeScript
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tsparser, // Importamos el parser de TypeScript como objeto
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
