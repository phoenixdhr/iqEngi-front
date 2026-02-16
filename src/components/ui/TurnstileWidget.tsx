import { Turnstile } from '@marsidev/react-turnstile';

export default function TurnstileWidget() {
    const siteKey = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY;

    if (!siteKey) {
        console.warn('PUBLIC_TURNSTILE_SITE_KEY is missing in environment variables.');
        return <div className="text-red-500 text-xs">Turnstile Site Key missing</div>;
    }

    const handleSuccess = (token: string) => {
        // Dispatch custom event so the Astro/Vanilla script can capture the token
        const event = new CustomEvent('turnstile-token', { detail: { token } });
        window.dispatchEvent(event);
    };

    return (
        <div className="flex justify-center my-4 w-full min-h-[65px] relative">
            {/* Skeleton Loader - Visible mientras carga */}
            <div className="absolute inset-0 w-[300px] h-[65px] mx-auto bg-base-300 rounded-md animate-pulse flex items-center justify-center -z-10">
                <span className="text-xs text-base-content/50">Cargando verificación...</span>
            </div>
            
            <Turnstile
                siteKey={siteKey}
                onSuccess={handleSuccess}
                options={{
                    theme: 'auto', // Auto para que se adapte al tema del sistema/usuario
                    size: 'normal',
                }}
            />
        </div>
    );
}
