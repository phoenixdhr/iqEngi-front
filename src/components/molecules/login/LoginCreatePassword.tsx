// import React, { useState, useEffect } from 'react';
// import { clientGql } from '@graphql-astro/apolloClient.ts';
// import { SignupDocument, type Usuario } from '@graphql-astro/generated/graphql';

// /**
//  * Componente funcional para crear una contraseña.
//  *
//  * Este componente muestra un formulario para que el usuario ingrese y confirme
//  * su contraseña. Se valida en tiempo real si ambas contraseñas coinciden utilizando
//  * un hook useEffect, de modo que se muestre un mensaje de error de forma inmediata.
//  *
//  * @returns {JSX.Element} El formulario de creación de contraseña.
//  */
// const CreatePassword: React.FC = () => {
//     const [password, setPassword] = useState<string>('');
//     const [confirmPassword, setConfirmPassword] = useState<string>('');
//     const [error, setError] = useState<boolean>(false);

//     /**
//      * useEffect que se ejecuta cada vez que cambian las contraseñas.
//      *
//      * Comprueba si ambos campos están llenos y si las contraseñas no coinciden, se activa la bandera de error.
//      */
//     useEffect(() => {
//         if (password && confirmPassword && password !== confirmPassword) {
//             setError(true);
//         } else {
//             setError(false);
//         }
//     }, [password, confirmPassword]);

//     /**
//      * Maneja el cambio del campo de contraseña.
//      *
//      * @param {React.ChangeEvent<HTMLInputElement>} e Evento de cambio del input.
//      */
//     const handlePasswordChange = (
//         e: React.ChangeEvent<HTMLInputElement>,
//     ): void => {
//         setPassword(e.target.value);
//     };

//     /**
//      * Maneja el cambio del campo de confirmación de contraseña.
//      *
//      * @param {React.ChangeEvent<HTMLInputElement>} e Evento de cambio del input.
//      */
//     const handleConfirmPasswordChange = (
//         e: React.ChangeEvent<HTMLInputElement>,
//     ): void => {
//         setConfirmPassword(e.target.value);
//     };

//     /**
//      * Maneja el envío del formulario.
//      *
//      * Comprueba nuevamente que las contraseñas coincidan; de no ser así, se evita el envío
//      * y se muestra el mensaje de error. En caso contrario, se procede a ejecutar la mutación GraphQL.
//      *
//      * @param {React.FormEvent<HTMLFormElement>} e Evento de envío del formulario.
//      */
//     const handleSubmit = async (
//         e: React.FormEvent<HTMLFormElement>,
//     ): Promise<void> => {
//         e.preventDefault();
//         if (password && confirmPassword && password !== confirmPassword) {
//             setError(true);
//             return;
//         }
//         setError(false);
//         const email = 'test@test.com';
//         try {
//             const { data } = await clientGql.mutate({
//                 mutation: SignupDocument,
//                 variables: { email, password },
//             });
//             const usuario: Usuario = data.usuario_findByEmail;
//             console.log('usuario:', usuario);
//         } catch (error) {
//             console.error('Error al crear la contraseña:', error);
//         }
//     };

//     return (
//         <div className="w-full">
//             <div className="text-center">
//                 <h2 className="text-xl font-semibold mb-1">
//                     Crea una contraseña
//                 </h2>
//                 <p className="text-sm text-gray-500 mb-4">
//                     Debe tener al menos 10 caracteres
//                 </p>
//             </div>
//             <form
//                 className="space-y-6"
//                 id="createPasswordForm"
//                 onSubmit={handleSubmit}
//             >
//                 <input
//                     id="passwordInput"
//                     type="password"
//                     placeholder="Contraseña"
//                     required
//                     value={password}
//                     onChange={handlePasswordChange}
//                     className="w-full h-12 px-4 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 rounded-full text-gray-900 text-center placeholder:text-center"
//                 />
//                 <input
//                     id="confirmPasswordInput"
//                     type="password"
//                     placeholder="Confirmar contraseña"
//                     required
//                     value={confirmPassword}
//                     onChange={handleConfirmPasswordChange}
//                     className="w-full h-12 px-4 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 rounded-full text-gray-900 text-center placeholder:text-center"
//                 />
//                 <button
//                     type="submit"
//                     className="w-full h-12 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 font-medium text-sm hover:scale-105 transition-transform rounded-full"
//                 >
//                     Continuar
//                 </button>
//             </form>
//             {error && (
//                 <p id="error-message" className="text-red-500 mt-2">
//                     Las contraseñas no coinciden.
//                 </p>
//             )}
//             <div className="h-8"></div>
//             <p className="text-xs text-gray-500 text-center mt-6">
//                 Al crear una cuenta en IqEngi, aceptas los{' '}
//                 <a href="#" className="text-purple-dark-400 underline">
//                     Términos de Servicio
//                 </a>{' '}
//                 y{' '}
//                 <a href="#" className="text-purple-dark-400 underline">
//                     Políticas de Privacidad
//                 </a>
//                 .
//             </p>
//         </div>
//     );
// };

// export default CreatePassword;

import React, { useState, useEffect, type JSX } from 'react';
import { clientGql } from '@graphql-astro/apolloClient.ts';
import { SignupDocument, type Usuario } from '@graphql-astro/generated/graphql';

/**
 * Componente funcional para crear una contraseña.
 *
 * Este componente muestra un formulario para que el usuario ingrese y confirme su contraseña.
 * Se valida en tiempo real utilizando useEffect y se realiza la mutación GraphQL al enviar el formulario.
 *
 * @returns {JSX.Element} Elemento JSX con el formulario de creación de contraseña.
 */
export default function CreatePassword(): JSX.Element {
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    function checkPassword() {
        if (password && confirmPassword && password !== confirmPassword) {
            setError(true);
        } else {
            setError(false);
        }
    }

    /**
     * Efecto que verifica si las contraseñas coinciden.
     * Se ejecuta cada vez que los valores de `password` o `confirmPassword` cambian.
     */
    useEffect(() => {
        checkPassword();
    }, [password, confirmPassword]);

    /**
     * Maneja el cambio en el input de la contraseña.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e Evento de cambio del input.
     */
    function handlePasswordChange(
        e: React.ChangeEvent<HTMLInputElement>,
    ): void {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    /**
     * Maneja el cambio en el input de confirmación de contraseña.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e Evento de cambio del input.
     */
    function handleConfirmPasswordChange(
        e: React.ChangeEvent<HTMLInputElement>,
    ): void {
        console.log(e.target.value);

        setConfirmPassword(e.target.value);
    }

    /**
     * Maneja el envío del formulario de creación de contraseña.
     *
     * Valida que ambas contraseñas coincidan antes de proceder con la mutación GraphQL.
     *
     * @param {React.FormEvent<HTMLFormElement>} e Evento de envío del formulario.
     * @returns {Promise<void>} Promesa que se resuelve al completar la operación.
     */
    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>,
    ): Promise<void> {
        e.preventDefault();
        if (password && confirmPassword && password !== confirmPassword) {
            setError(true);
            return;
        }
        setError(false);
        const email = 'test@test.com';
        try {
            const { data } = await clientGql.mutate({
                mutation: SignupDocument,
                variables: { email, password },
            });
            const usuario: Usuario = data.usuario_findByEmail;
            console.log('usuario:', usuario);
        } catch (error) {
            console.error('Error al crear la contraseña:', error);
        }
    }

    return (
        <div className="w-full">
            <div className="text-center">
                <h2 className="text-xl font-semibold mb-1">
                    Crea una contraseña
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                    Debe tener al menos 10 caracteres
                </p>
            </div>
            <form
                className="space-y-6"
                id="createPasswordForm"
                onSubmit={handleSubmit}
            >
                <input
                    id="passwordInput"
                    type="password"
                    placeholder="Contraseña"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full h-12 px-4 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 rounded-full text-gray-900 text-center placeholder:text-center"
                />
                <input
                    id="confirmPasswordInput"
                    type="password"
                    placeholder="Confirmar contraseña"
                    required
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className="w-full h-12 px-4 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 rounded-full text-gray-900 text-center placeholder:text-center"
                />
                <button
                    type="submit"
                    className="w-full h-12 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 font-medium text-sm hover:scale-105 transition-transform rounded-full"
                >
                    Continuar
                </button>
            </form>
            {error && (
                <p id="error-message" className="text-red-500 mt-2">
                    Las contraseñas no coinciden.
                </p>
            )}
            <div className="h-8"></div>
            <p className="text-xs text-gray-500 text-center mt-6">
                Al crear una cuenta en IqEngi, aceptas los{' '}
                <a href="#" className="text-purple-dark-400 underline">
                    Términos de Servicio
                </a>{' '}
                y{' '}
                <a href="#" className="text-purple-dark-400 underline">
                    Políticas de Privacidad
                </a>
                .
            </p>
        </div>
    );
}
