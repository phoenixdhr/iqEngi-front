// Define y exporta funciones utilitarias para manipular el DOM
export const $ = (id: string): HTMLElement | null =>
    document.getElementById(id);

export const showElement = (id: string): void => {
    const element = $(id);
    if (element) {
        element.classList.remove('hidden');
        if (id === 'login-modal') {
            element.classList.add('flex');
        }
    }
};

export const hideElement = (id: string): void => {
    const element = $(id);
    if (element) {
        element.classList.add('hidden');
        if (id === 'login-modal') {
            element.classList.remove('flex');
        }
    }
};

export const clearFields = (ids: string[]): void => {
    ids.forEach((id) => {
        const element = $(id);
        if (element) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                (element as HTMLInputElement).value = '';
            } else {
                element.textContent = '';
            }
        }
    });
};
