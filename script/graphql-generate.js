
import { readFile, writeFile } from 'fs/promises';

// Función para leer el archivo JSON y generar el archivo .graphql
async function generarArchivoGraphQL() {
  try {
    // Leer el contenido del archivo JSON
    const data = await readFile('./src/graphql-astro/queries-text.json', 'utf8');
    
    // Parsear el JSON a un objeto de JavaScript
    const operations = JSON.parse(data);

    let fileContent = "";

    // Recorremos las claves y formateamos el contenido
    for (const key in operations) {
      if (Object.hasOwnProperty.call(operations, key)) {
        const op = operations[key];
        if (op && op.trim() !== "") {
          fileContent += `# Operation ${key}\n${op.replace(/\r\n/g, '\n')}\n\n`;
        }
      }
    }

    // Escribe el contenido en el archivo 'operations.graphql'
    await writeFile('./src/graphql-astro/generated/operations.graphql', fileContent, 'utf8');
    console.log("✅ Archivo 'operations.graphql' creado exitosamente.");
  } catch (error) {
    console.error("❌ Error al procesar el archivo:", error);
  }
}

// Ejecutamos la función
generarArchivoGraphQL();
