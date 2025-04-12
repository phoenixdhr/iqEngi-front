// 0. En la pagina "https://iqengi-backend-production.up.railway.app/graphql" > en Devtool selecciona la herramienta "select an element in the page to inspect it" > pasa el mouse por todas las colecciones
// 1. En la pagina "https://iqengi-backend-production.up.railway.app/graphql" > Copiar y pegar todo el codigo de este archivo en la pagina de la api usada en apollo
// 2. En la pagina "https://iqengi-backend-production.up.railway.app/graphql" en devtool ir a > aplicaciones ir a > Local Storage, selecionar > engine:tabbedOperationValues > copiar el json que aparece abajo
// 3. Pegar el json copiado en > src/graphql/queries-text.json
// 4. Ejecutar el archivo graphql-generate.js > node script/graphql-generate.js    (se genera el archivo src/graphql/generate/operations.graphql)
// 5. Ejecutar en la terminal > npx graphql-codegen --debug (se genera el archivo src/graphql/generate/graphql.ts)
// 6. en el archivo graphql.ts cambiar la linea de importacion : import { gql } from '@apollo/client'; por import { gql } from '@apollo/client/core';

const elementosColecciones = document.querySelectorAll(
    'li[data-testid="operation_collection"]',
);

async function getColeccions() {
    const totalColecciones = elementosColecciones.length;

    console.log('Total Colecciones: ', totalColecciones);
    let conteoColecciones = 0;

    for (const elemento of elementosColecciones) {
        await new Promise((resolve) => setTimeout(resolve, 2500));
        elemento.click();
        await new Promise((resolve) => setTimeout(resolve, 2500));

        conteoColecciones = conteoColecciones + 1;
        console.log(
            `click en Coleccion ${conteoColecciones}: ${elemento.querySelector('.truncate').innerText}`,
        );
    }
    console.log('Terminó la ejecución Coleciones.');

    const elementosQuerys = document.querySelectorAll(
        'li[data-testid="operation_collection_entry"]',
    );

    async function recorrerYClickeaQueries() {
        const totalQuerys = elementosQuerys.length;

        console.log('TotalQuerys: ', totalQuerys);
        let conteoQuery = 0;

        for (const elemento of elementosQuerys) {
            elemento.click();
            await new Promise((resolve) => setTimeout(resolve, 5000));
            conteoQuery = conteoQuery + 1;
            console.log(
                `Query ${conteoQuery}: ${elemento.querySelector('.h-6.items-center.truncate.font-mono.text-sm.truncate').innerText} `,
            );
        }
        console.log('Terminó la ejecución Querys.');
    }

    recorrerYClickeaQueries();
}

getColeccions();
