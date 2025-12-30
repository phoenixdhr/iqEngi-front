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
        <div className="flex justify-center my-4 w-full h-[65px]">
            <Turnstile
                siteKey={siteKey}
                onSuccess={handleSuccess}
                options={{
                    theme: 'dark',
                    size: 'normal',
                }}
            />
        </div>
    );
}
