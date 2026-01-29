
import React from 'react';
import { useCurrency } from '../../context/CurrencyContext';

const CURRENCIES = [
    { code: 'USD', label: 'USD ($)', flag: '🇺🇸' },
    { code: 'EUR', label: 'EUR (€)', flag: '🇪🇺' },
    { code: 'MXN', label: 'MXN ($)', flag: '🇲🇽' },
    { code: 'COP', label: 'COP ($)', flag: '🇨🇴' },
    { code: 'CLP', label: 'CLP ($)', flag: '🇨🇱' },
    { code: 'PEN', label: 'PEN (S/)', flag: '🇵🇪' },
];

export const CurrencySelector: React.FC = () => {
    const { currency, setCurrency } = useCurrency();

    return (
        <div className="relative inline-block text-left">
            <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="appearance-none bg-transparent border border-[var(--color-border)] text-[var(--color-text)] py-1 pl-2 pr-6 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] cursor-pointer hover:bg-[var(--color-surface)] transition-colors"
                aria-label="Seleccionar moneda"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.2rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.2em 1.2em'
                }}
            >
                {CURRENCIES.map((c) => (
                    <option key={c.code} value={c.code} className="bg-[var(--color-surface)] text-[var(--color-text)]">
                        {c.code} {c.flag}
                    </option>
                ))}
            </select>
        </div>
    );
};
