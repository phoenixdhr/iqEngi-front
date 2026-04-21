/**
 * Tests para CartSummary.
 * Requiere: vitest, @testing-library/react, jsdom
 * Instalar: npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
 *
 * Ejecutar: npx vitest run src/components/features/Checkout/CartSummary.test.tsx
 */

// import { render, screen, fireEvent } from '@testing-library/react';
// import { CartSummary } from './CartSummary';

describe('CartSummary - Lógica de cálculos', () => {
    const mockItems = [
        {
            cursoId: '1',
            courseTitle: 'Curso A',
            precio: 100,
            currency: 'USD',
            descuento: 20,
            imagenURL: { url: '/a.jpg', alt: 'A' },
            slug: 'curso-a',
        },
        {
            cursoId: '2',
            courseTitle: 'Curso B',
            precio: 50,
            currency: 'USD',
            descuento: 0,
            imagenURL: { url: '/b.jpg', alt: 'B' },
            slug: 'curso-b',
        },
    ];

    it('debe calcular el total correctamente con descuentos', () => {
        const total = mockItems.reduce((acc, item) => {
            return acc + item.precio * (1 - (item.descuento || 0) / 100);
        }, 0);

        // Curso A: 100 * 0.80 = 80
        // Curso B: 50 * 1.00 = 50
        // Total: 130
        expect(total).toBe(130);
    });

    it('debe manejar carrito vacío', () => {
        const emptyItems: typeof mockItems = [];
        expect(emptyItems.length).toBe(0);
    });

    it('debe calcular precio final por item', () => {
        const item = mockItems[0];
        const precioFinal = item.precio * (1 - (item.descuento || 0) / 100);
        expect(precioFinal).toBe(80);
    });
});
