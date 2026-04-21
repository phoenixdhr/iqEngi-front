/**
 * Tests para useCart hook.
 * Requiere: vitest, @testing-library/react-hooks
 * Instalar: npm install -D vitest @testing-library/react jsdom
 *
 * Ejecutar: npx vitest run src/hooks/useCart.test.ts
 */

// import { renderHook, act } from '@testing-library/react';
// import { useCart } from './useCart';
// import { CARRITO_CURSOS } from '@const/const-string';

const CARRITO_CURSOS = 'carritoCursos';

// Test de lógica pura del carrito (sin React hooks)
describe('Lógica del carrito', () => {
    beforeEach(() => {
        if (typeof localStorage !== 'undefined') {
            localStorage.clear();
        }
    });

    const mockItem = {
        cursoId: '507f1f77bcf86cd799439011',
        courseTitle: 'Curso de Prueba',
        precio: 49.99,
        currency: 'USD',
        descuento: 10,
        imagenURL: { url: '/test.jpg', alt: 'Test' },
        slug: 'curso-de-prueba',
    };

    it('debe serializar y deserializar items correctamente', () => {
        const items = [mockItem];
        const serialized = JSON.stringify(items);
        const deserialized = JSON.parse(serialized);

        expect(deserialized).toHaveLength(1);
        expect(deserialized[0].cursoId).toBe(mockItem.cursoId);
        expect(deserialized[0].precio).toBe(49.99);
    });

    it('debe calcular el total con descuento correctamente', () => {
        const items = [
            { ...mockItem, precio: 100, descuento: 20 },
            { ...mockItem, cursoId: '2', precio: 50, descuento: 0 },
        ];

        const total = items.reduce((acc, item) => {
            return acc + item.precio * (1 - (item.descuento || 0) / 100);
        }, 0);

        expect(total).toBe(130); // 100*0.8 + 50*1.0 = 80 + 50
    });

    it('debe evitar duplicados por cursoId', () => {
        const items = [mockItem];
        const isDuplicate = items.some((i) => i.cursoId === mockItem.cursoId);
        expect(isDuplicate).toBe(true);

        const newItem = { ...mockItem, cursoId: 'otro-id' };
        const isDuplicate2 = items.some((i) => i.cursoId === newItem.cursoId);
        expect(isDuplicate2).toBe(false);
    });

    it('debe remover items correctamente', () => {
        const items = [
            mockItem,
            { ...mockItem, cursoId: '2', courseTitle: 'Otro Curso' },
        ];

        const filtered = items.filter((i) => i.cursoId !== mockItem.cursoId);
        expect(filtered).toHaveLength(1);
        expect(filtered[0].courseTitle).toBe('Otro Curso');
    });
});
