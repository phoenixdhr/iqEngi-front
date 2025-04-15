/* eslint-disable no-undef */

import { ApolloClient } from '@apollo/client/core';
import { InMemoryCache } from '@apollo/client/cache';
// import { loadEnv } from 'vite';

// const env = loadEnv(import.meta.env.MODE, process.cwd(), '');
const GRAPHQL_URL = import.meta.env.PUBLIC_GRAPHQL_URL;




// Creamos y exportamos una instancia de ApolloClient con la configuración necesaria.
export const clientGql = new ApolloClient({
  // Definimos la URL del servidor GraphQL al que se conectará Apollo Client.
  uri: GRAPHQL_URL,// env.PUBLIC_GRAPHQL_URL, //"https://iqengi-backend-production.up.railway.app/graphql",


  credentials: 'include', // Esta línea asegura que se envíen las cookies

  // Configuramos la caché para almacenar en memoria los resultados de las consultas.
  cache: new InMemoryCache(),

  // Definimos los encabezados HTTP que se enviarán con cada solicitud.
  headers: {
    
    // Configuramos la cabecera "Authorization" con un token JWT almacenado en localStorage.
    // Se usa para autenticar las solicitudes al servidor GraphQL.
    Authorization: typeof localStorage !== 'undefined' // Verificamos si localStorage está disponible.
      ? `Bearer ${localStorage.getItem("jwt_token")}` // Si existe, obtenemos el token JWT y lo agregamos en la cabecera.
      : '', // Si no hay token, enviamos una cadena vacía.
  },
});
