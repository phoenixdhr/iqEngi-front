'use client';

import { useState } from 'react';
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

import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/20/solid';

/**
 * Elementos del menú desplegable de "Comunidad"
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
 * Acciones rápidas o enlaces externos
 */
const callsToAction = [
    { name: 'Youtube', href: '#', icon: PlayCircleIcon },
    { name: 'LinkedIn', href: '#', icon: BriefcaseIcon },
];

/**
 * Componente principal de la barra de navegación
 * Controla visibilidad de menú móvil y muestra los enlaces principales del sitio.
 */
export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Estado para abrir/cerrar menú móvil

    return (
        <header className="bg-white sticky top-0 z-50">
            {/* Navegación principal */}
            <nav
                aria-label="Global"
                className="mx-auto flex max-w-7xl items-center justify-between p-6  lg:px-8"
            >
                {/* Logo */}
                <div className="flex items-center lg:flex-1">
                    <a href="#" className="flex items-center space-x-2">
                        <img
                            className="h-8 lg:h-10 w-auto"
                            src="/favicon.svg"
                            alt="IqEngi"
                        />

                        {/* <span className="sr-only">IqEngi</span> */}
                        <span className="bg-gradient-to-br  from-purple-600 to-blue-500 bg-clip-text text-transparent font-bold text-2xl lg:text-3xl">
                            IQ-ENGI
                        </span>
                    </a>
                </div>

                {/* Acciones en pantalla pequeña (Acceder, login, menú) */}
                <div className="flex lg:hidden">
                    {/* Botón para Acceder */}
                    <button
                        type="button"
                        onClick={() =>
                            window.dispatchEvent(new Event('open-login-modal'))
                        }
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-4 hover:scale-105 transition-transform "
                    >
                        Acceder
                    </button>

                    {/* Ícono de login con flecha */}
                    <div className="flex items-center justify-between me-3 hover:scale-105 transition-transform">
                        <a
                            href="#"
                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                        >
                            <ArrowRightStartOnRectangleIcon
                                className="h-5 w-5 flex-none text-gray-400"
                                aria-hidden="true"
                            />
                        </a>
                    </div>

                    {/* Botón hamburguesa para abrir menú móvil */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:scale-105 transition-transform"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>

                {/* Menú principal en pantallas grandes */}
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <a
                        href="#"
                        className="text-sm/6 font-semibold text-gray-900"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="text-sm/6 font-semibold text-gray-900"
                    >
                        Cursos
                    </a>
                    <a
                        href="#"
                        className="text-sm/6 font-semibold text-gray-900"
                    >
                        Contáctanos
                    </a>

                    {/* Menú desplegable de Comunidad */}
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                            Comunidad
                            <ChevronDownIcon
                                aria-hidden="true"
                                className="size-5 flex-none text-gray-400"
                            />
                        </PopoverButton>

                        {/* Panel con enlaces de comunidad */}
                        <PopoverPanel className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition">
                            <div className="p-4">
                                {communityItems.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon
                                                className="size-6 text-gray-600 group-hover:text-indigo-600"
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
                            {/* Acciones rápidas como enlaces a redes */}
                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                {callsToAction.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                                    >
                                        <item.icon
                                            className="size-5 flex-none text-gray-400"
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>
                </PopoverGroup>

                {/* Botón Acceder y login (pantallas grandes) */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
                    <div className="flex">
                        <button
                            type="button"
                            onClick={() =>
                                window.dispatchEvent(
                                    new Event('open-login-modal'),
                                )
                            }
                            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 animate-jump hover:animate-none hover:scale-105 transition-transform "
                        >
                            Acceder
                        </button>
                    </div>
                    <a
                        onClick={() =>
                            window.dispatchEvent(new Event('open-login-modal'))
                        }
                        className="text-sm font-semibold leading-6 text-gray-900 hover:scale-105 transition-transform"
                    >
                        Iniciar Sesión <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>

            {/* Menú móvil con animación desde el lateral derecho */}
            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="lg:hidden"
            >
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    {/* Encabezado del menú móvil con logo y botón de cerrar */}
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Contáctanos</span>
                            <img
                                alt=""
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>

                    {/* Contenido del menú móvil con enlaces y secciones colapsables */}
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {/* Enlaces principales */}
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Home
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Cursos
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Contáctanos
                                </a>

                                {/* Menú colapsable "Comunidad" */}
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        Comunidad
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="size-5 flex-none group-data-open:rotate-180"
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
                                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                            </div>

                            {/* Sección inferior con login */}
                            <div className="py-6 flex items-center justify-between hover:scale-105 transition-transform ">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 hover:scale-105 transition-transform"
                                >
                                    Iniciar Sesión
                                </a>
                                <ArrowRightStartOnRectangleIcon
                                    className="h-5 w-5 flex-none text-gray-400"
                                    aria-hidden="true"
                                />
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
