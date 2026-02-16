
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FormularioContacto from './FormularioContacto';

// Mocking fetch
global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true }),
    })
);

describe('FormularioContacto', () => {
    beforeEach(() => {
        // Clear all mocks before each test
        (global.fetch as jest.Mock).mockClear();
    });

    it('renders the form correctly', () => {
        render(<FormularioContacto />);
        
        expect(screen.getByLabelText(/nombre completo/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/motivo de consulta/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/verificación/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /enviar mensaje/i })).toBeInTheDocument();
    });

    it('shows an error message if CAPTCHA is incorrect', async () => {
        render(<FormularioContacto />);
        
        const captchaInput = screen.getByLabelText(/verificación/i);
        const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });

        // Fill out the form
        fireEvent.change(screen.getByLabelText(/nombre completo/i), { target: { value: 'Test User' } });
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText(/motivo de consulta/i), { target: { value: 'Soporte técnico' } });
        fireEvent.change(screen.getByLabelText(/mensaje/i), { target: { value: 'This is a test message.' } });
        
        // Enter incorrect CAPTCHA answer
        fireEvent.change(captchaInput, { target: { value: '0' } });

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText(/la respuesta del captcha es incorrecta/i)).toBeInTheDocument();
        });

        // Ensure fetch was not called
        expect(global.fetch).not.toHaveBeenCalled();
    });

    it('submits the form with correct CAPTCHA answer', async () => {
        render(<FormularioContacto />);

        const captchaText = screen.getByText(/(\d+) \+ (\d+) = \?/);
        const num1 = parseInt(captchaText.textContent.match(/(\d+) \+/)[1], 10);
        const num2 = parseInt(captchaText.textContent.match(/\+ (\d+)/)[1], 10);
        const correctAnswer = num1 + num2;

        const captchaInput = screen.getByLabelText(/verificación/i);
        const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });

        // Fill out the form
        fireEvent.change(screen.getByLabelText(/nombre completo/i), { target: { value: 'Test User' } });
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText(/motivo de consulta/i), { target: { value: 'Soporte técnico' } });
        fireEvent.change(screen.getByLabelText(/mensaje/i), { target: { value: 'This is a test message.' } });
        
        // Enter correct CAPTCHA answer
        fireEvent.change(captchaInput, { target: { value: correctAnswer.toString() } });

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText(/¡mensaje enviado correctamente!/i)).toBeInTheDocument();
        });

        // Ensure fetch was called
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });
});
