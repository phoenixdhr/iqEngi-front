'use client';

import { useState, useEffect } from 'react';
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {
    ChevronDownIcon,
    BriefcaseIcon,
    PlayCircleIcon,
    NewspaperIcon,
    CalendarIcon,
} from '@heroicons/react/20/solid';
import ThemeToggle from '../atoms/ThemeToggle';

/**
 * Lista de elementos del menú "Comunidad"
 * Cada elemento contiene un nombre, descripción, enlace e ícono.
 */
const communityItems = [
    {
        name: 'Blog',
        description: 'Entérate de novedades y lo último de la industria',
        href: '/blog',
        icon: NewspaperIcon,
    },
    {
        name: 'Calendario',
        description: 'Revisa nuestros eventos y actividades',
        href: '/calendario',
        icon: CalendarIcon,
    },
];
/**
 * Llamadas a la acción, enlaces rápidos hacia otras plataformas
 */
const callsToAction = [
    { name: 'Youtube', href: '#', icon: PlayCircleIcon },
    { name: 'LinkedIn', href: '#', icon: BriefcaseIcon },
];

const mainMenuItems = [
    { name: 'Home', href: '/' },
    { name: 'Cursos', href: '/cursos' },
    { name: 'Contáctanos', href: '/contactanos' },
    { name: 'Favoritos', href: '/favoritos' },
    { name: 'Comunidad', isDropdown: true },
];

// Después:
interface NavbarProps {
    currentUrl: string;
}

/**
 * Componente Navbar principal que maneja navegación en desktop y móvil.
 * Incluye lógica de apertura del menú móvil y efectos visuales.
 */
export default function Navbar({ currentUrl }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    /**
     * Efecto que ajusta el padding del <body> al abrir el menú móvil
     * para evitar el salto por desaparición del scrollbar.
     */
    useEffect(() => {
        if (mobileMenuOpen) {
            const scrollBarWidth =
                window.innerWidth - document.documentElement.clientWidth;
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        } else {
            document.body.style.paddingRight = '';
        }
    }, [mobileMenuOpen]);

    function openModalLogin() {
        window.dispatchEvent(new Event('listener-login-modal'));
    }

    return (
        <header className="sticky top-0 z-40" style={{ backgroundColor: 'var(--color-bg)' }}>
            <nav
                aria-label="Global"
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            >
                {/* Logo y nombre de marca */}
                <div className="flex items-center lg:flex-1">
                    <a href="/" className="flex items-center space-x-2">
                        <img
                            className="h-8 lg:h-10 w-auto"
                            src="/favicon.svg"
                            alt="IqEngi"
                        />
                        <span className="bg-clip-text text-transparent font-bold text-2xl lg:text-3xl" style={{ background: 'var(--gradient-button-primary)', WebkitBackgroundClip: 'text' }}>
                            IQ-ENGI
                        </span>
                    </a>
                </div>

                {/* Botones visibles en pantallas pequeñas (theme, login y menú) */}
                <div className="flex lg:hidden h-8 items-center space-x-2">
                    <ThemeToggle />
                    <button
                        type="button"
                        onClick={() => openModalLogin()}
                        className="gap-x-2.5 text-white font-medium rounded-lg text-base px-5 h-full hover:scale-105 transition-transform focus:ring-4"
                        style={{ background: 'var(--gradient-button-primary)' }}
                    >
                        Acceder
                    </button>
                    {!mobileMenuOpen && (
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 hover:scale-105 transition-transform"
                            style={{ color: 'var(--color-text-muted)' }}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    )}
                </div>

                {/* Menú de navegación para pantallas grandes */}
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    {mainMenuItems.map((item) =>
                        item.isDropdown ? (
                            <Popover key={item.name} className="relative">
                                <PopoverButton className="flex items-center gap-x-1 text-base font-semibold" style={{ color: 'var(--color-text)' }}>
                                    {item.name}
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="h-5 w-5 flex-none"
                                        style={{ color: 'var(--color-text-muted)' }}
                                    />
                                </PopoverButton>
                                <PopoverPanel className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl ring-1 shadow-lg ring-gray-900/5 transition" style={{ backgroundColor: 'var(--color-bg)' }}>
                                    {/* Aquí se renderizan los elementos de communityItems */}
                                    <div className="p-4">
                                        {communityItems.map((subitem) => (
                                            <div
                                                key={subitem.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-base hover:opacity-80 transition-opacity"
                                            >
                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg" style={{ backgroundColor: 'var(--color-surface)' }}>
                                                    <subitem.icon
                                                        className="h-6 w-6"
                                                        style={{ color: 'var(--color-text-muted)' }}
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <div className="flex-auto">
                                                    <a
                                                        href={subitem.href}
                                                        className="block font-semibold"
                                                        style={{ color: 'var(--color-text)' }}
                                                    >
                                                        {subitem.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                    <p className="mt-1" style={{ color: 'var(--color-text-muted)' }}>
                                                        {subitem.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Aquí se renderizan los enlaces rápidos de callsToAction */}
                                    <div className="grid grid-cols-2 divide-x divide-gray-900/5" style={{ backgroundColor: 'var(--color-surface)' }}>
                                        {callsToAction.map((action) => (
                                            <a
                                                key={action.name}
                                                href={action.href}
                                                className="flex items-center justify-center gap-x-2.5 p-3 text-base font-semibold hover:opacity-80 transition-opacity"
                                                style={{ color: 'var(--color-text)' }}
                                            >
                                                <action.icon
                                                    className="h-5 w-5 flex-none"
                                                    style={{ color: 'var(--color-text-muted)' }}
                                                    aria-hidden="true"
                                                />
                                                {action.name}
                                            </a>
                                        ))}
                                    </div>
                                </PopoverPanel>
                            </Popover>
                        ) : (
                            <div key={item.href}>
                                <a
                                    href={item.href}
                                    className="text-base font-semibold"
                                    style={{ color: 'var(--color-text)' }}
                                >
                                    {item.name}
                                </a>
                                {currentUrl === item.href ? (
                                    <div className="border-b-2 transition-all duration-300" style={{ borderColor: 'var(--color-text)' }} />
                                ) : (
                                    <div />
                                )}
                            </div>
                        ),
                    )}
                </PopoverGroup>

                {/* Botón "Acceder" y toggle de tema para pantallas grandes */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-3">
                    <ThemeToggle />
                    <button
                        type="button"
                        onClick={() => openModalLogin()}
                        className="text-white font-medium rounded-lg text-base px-5 py-2.5 transition-transform hover:scale-105 focus:ring-4"
                        style={{ background: 'var(--gradient-button-primary)' }}
                    >
                        Acceder
                    </button>
                </div>
            </nav>

            {/* Menú móvil tipo diálogo animado que aparece desde la derecha */}
            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="lg:hidden"
            >
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" style={{ backgroundColor: 'var(--color-bg)' }}>
                    {/* Encabezado del menú móvil con logo y botón cerrar */}
                    <div className="flex items-center justify-between px-2.5">
                        {/*logo y Nombre*/}

                        <a
                            href="/"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md space-x-2"
                        >
                            <span className="sr-only">Your Contáctanos</span>

                            <img
                                className="h-8 lg:h-10 w-auto"
                                src="/favicon.svg"
                                alt="IqEngi"
                            />
                            <span className="bg-clip-text text-transparent font-bold text-2xl lg:text-3xl" style={{ background: 'var(--gradient-button-primary)', WebkitBackgroundClip: 'text' }}>
                                IQ-ENGI
                            </span>
                        </a>

                        {/*Boton Acceder*/}
                        <button
                            type="button"
                            onClick={() => {
                                setMobileMenuOpen(false);
                                openModalLogin();
                            }}
                            className="ml-auto h-8 text-white font-medium rounded-lg text-base px-5 mr-4 hover:scale-105 transition-transform focus:ring-4"
                            style={{ background: 'var(--gradient-button-primary)' }}
                        >
                            Acceder
                        </button>

                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 hover:scale-105 transition-transform"
                            style={{ color: 'var(--color-text-muted)' }}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Secciones de navegación dentro del menú móvil */}
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y" style={{ borderColor: 'var(--color-border)' }}>
                            <div className="space-y-2 py-6">
                                {/* Recorremos mainMenuItems. Si el item tiene isDropdown, renderizamos el Disclosure (menú colapsable), si no, un enlace normal */}
                                {mainMenuItems.map((item) =>
                                    item.isDropdown ? (
                                        // Renderiza el menú colapsable para "Comunidad" en móvil
                                        <Disclosure
                                            as="div"
                                            className="-mx-3"
                                            key={item.name}
                                        >
                                            <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base font-semibold hover:opacity-80 transition-opacity" style={{ color: 'var(--color-text)' }}>
                                                {item.name}
                                                <ChevronDownIcon
                                                    aria-hidden="true"
                                                    className="h-5 w-5 flex-none group-data-open:rotate-180"
                                                />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {/* Elementos del submenú de Comunidad y llamadas a la acción */}
                                                {[
                                                    ...communityItems,
                                                    ...callsToAction,
                                                ].map((item) => (
                                                    <DisclosureButton
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pr-3 pl-6 text-base font-semibold hover:opacity-80 transition-opacity"
                                                        style={{ color: 'var(--color-text)' }}
                                                    >
                                                        {item.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </Disclosure>
                                    ) : (
                                        // Renderiza un enlace normal para los demás items
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold hover:opacity-80 transition-opacity"
                                            style={{ color: 'var(--color-text)' }}
                                        >
                                            {item.name}
                                        </a>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
