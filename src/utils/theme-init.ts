/**
 * Funciones de utilidad para inicialización y gestión de temas
 * Asegura una aplicación consistente de temas en todas las páginas y navegación
 */

/**
 * Aplica el tema al elemento document
 * Utiliza tanto clases (.dark) como atributos de datos (data-theme) para máxima compatibilidad
 * @param isDark - true para tema oscuro, false para tema claro
 */
export function applyTheme(isDark: boolean): void {
    // Obtenemos el elemento raíz del documento HTML
    const htmlElement = document.documentElement;

    if (isDark) {
        // Aplicamos tema oscuro: añadimos la clase 'dark' y establecemos el atributo data-theme
        htmlElement.classList.add('dark');
        htmlElement.setAttribute('data-theme', 'dark');
    } else {
        // Aplicamos tema claro: removemos la clase 'dark' y establecemos el atributo data-theme
        htmlElement.classList.remove('dark');
        htmlElement.setAttribute('data-theme', 'light');
    }
}

/**
 * Inicializa el tema basándose en localStorage o preferencia del sistema - Configura e inicializa el tema en la aplicación
 * Retorna el tema que fue aplicado
 * @returns boolean - true si se aplicó tema oscuro, false si se aplicó tema claro
 */
export function initializeTheme(): boolean {
    // Verificamos si hay una preferencia de tema guardada en localStorage
    const savedTheme = localStorage.getItem('theme');

    let isDark: boolean;

    if (savedTheme) {
        // Si existe una preferencia guardada, la utilizamos
        isDark = savedTheme === 'dark';
    } else {
        // Si no hay preferencia guardada, verificamos la preferencia del sistema operativo
        // matchMedia nos permite consultar las media queries CSS desde JavaScript
        isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // Aplicamos el tema determinado
    applyTheme(isDark);
    
    // Retornamos el estado del tema aplicado
    return isDark;
}

/**
 * Obtiene el estado actual del tema -  Solo consulta cuál es el tema actual
 * @returns boolean - true si el tema actual es oscuro, false si es claro
 */
export function getCurrentTheme(): boolean {
    // Primero verificamos si hay una preferencia guardada en localStorage
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        // Si hay una preferencia guardada, la retornamos
        return savedTheme === 'dark';
    }
    
    // Si no hay preferencia guardada, consultamos la preferencia del sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Establece el tema y lo persiste en localStorage
 * @param isDark - true para establecer tema oscuro, false para tema claro
 */
export function setTheme(isDark: boolean): void {
    // Aplicamos el tema al DOM
    applyTheme(isDark);
    
    // Guardamos la preferencia en localStorage para persistir entre sesiones
    // Convertimos el boolean a string para almacenarlo
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}