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

/**
 * Lista de elementos del menú "Comunidad"
 * Cada elemento contiene un nombre, descripción, enlace e ícono.
 */
const communityItems = [
    {
        name: 'Blog',
        description: 'Entérate de novedades y lo último de la industria',
        href: '#',
        icon: NewspaperIcon,
    },
    {
        name: 'Calendario',
        description: 'Revisa nuestros eventos y actividades',
        href: '#',
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

/**
 * Componente Navbar principal que maneja navegación en desktop y móvil.
 * Incluye lógica de apertura del menú móvil y efectos visuales.
 */
export default function Navbar() {
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
        <header className="bg-white sticky top-0 z-40">
            <nav
                aria-label="Global"
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            >
                {/* Logo y nombre de marca */}
                <div className="flex items-center lg:flex-1">
                    <a href="#" className="flex items-center space-x-2">
                        <img
                            className="h-8 lg:h-10 w-auto"
                            src="/favicon.svg"
                            alt="IqEngi"
                        />
                        <span className="bg-gradient-to-br from-purple-600 to-blue-500 bg-clip-text text-transparent font-bold text-2xl lg:text-3xl">
                            IQ-ENGI
                        </span>
                    </a>
                </div>

                {/* Botones visibles en pantallas pequeñas (login y menú) */}
                <div className="flex lg:hidden h-8">
                    <button
                        type="button"
                        onClick={() => openModalLogin()}
                        className="gap-x-2.5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 font-medium rounded-lg text-base px-5 h-full mr-4 hover:scale-105 transition-transform"
                    >
                        Acceder
                    </button>
                    {!mobileMenuOpen && (
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:scale-105 transition-transform"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    )}
                </div>

                {/* Menú de navegación para pantallas grandes */}
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <a
                        href="#"
                        className="text-base font-semibold text-gray-900"
                    >
                        Home
                    </a>
                    <a
                        href="/cursos"
                        className="text-base font-semibold text-gray-900"
                    >
                        Cursos
                    </a>
                    <a
                        href="#"
                        className="text-base font-semibold text-gray-900"
                    >
                        Contáctanos
                    </a>

                    {/* Menú desplegable para "Comunidad" */}
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-base font-semibold text-gray-900">
                            Comunidad
                            <ChevronDownIcon
                                aria-hidden="true"
                                className="h-5 w-5 flex-none text-gray-400"
                            />
                        </PopoverButton>
                        <PopoverPanel className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition">
                            <div className="p-4">
                                {communityItems.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-base hover:bg-gray-50"
                                    >
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon
                                                className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div className="flex-auto">
                                            <a
                                                href={item.href}
                                                className="block font-semibold text-gray-900"
                                            >
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Enlaces rápidos a redes sociales */}
                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                {callsToAction.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-base font-semibold text-gray-900 hover:bg-gray-100"
                                    >
                                        <item.icon
                                            className="h-5 w-5 flex-none text-gray-400"
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>
                </PopoverGroup>

                {/* Botón "Acceder" para pantallas grandes */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
                    <button
                        type="button"
                        onClick={() => openModalLogin()}
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 font-medium rounded-lg text-base px-5 py-2.5 mr-2 transition-transform hover:scale-105"
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
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    {/* Encabezado del menú móvil con logo y botón cerrar */}
                    <div className="flex items-center justify-between px-2.5">
                        {/*logo y Nombre*/}

                        <a
                            href="#"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md space-x-2"
                        >
                            <span className="sr-only">Your Contáctanos</span>

                            <img
                                className="h-8 lg:h-10 w-auto"
                                src="/favicon.svg"
                                alt="IqEngi"
                            />
                            <span className="bg-gradient-to-br from-purple-600 to-blue-500 bg-clip-text text-transparent font-bold text-2xl lg:text-3xl">
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
                            className="ml-auto h-8 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 font-medium rounded-lg text-base px-5  mr-4 hover:scale-105 transition-transform"
                        >
                            Acceder
                        </button>

                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:scale-105 transition-transform"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Secciones de navegación dentro del menú móvil */}
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Home
                                </a>
                                <a
                                    href="/cursos"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Cursos
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Contáctanos
                                </a>

                                {/* Submenú colapsable para "Comunidad" */}
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base font-semibold text-gray-900 hover:bg-gray-50">
                                        Comunidad
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="h-5 w-5 flex-none group-data-open:rotate-180"
                                        />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[
                                            ...communityItems,
                                            ...callsToAction,
                                        ].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pr-3 pl-6 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
