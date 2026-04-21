import { useCart } from '@hooks/useCart';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export function CartIcon() {
    const { itemCount } = useCart();

    return (
        <a
            href="/checkout"
            className="relative inline-flex items-center p-1.5 rounded-lg hover:bg-[var(--color-surface)] transition-colors"
            aria-label={`Carrito (${itemCount} items)`}
        >
            <ShoppingCartIcon className="h-6 w-6" style={{ color: 'var(--color-text)' }} />
            {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[var(--color-primary)] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount > 9 ? '9+' : itemCount}
                </span>
            )}
        </a>
    );
}
