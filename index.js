const fs = require('fs');
const process = require('process');

const [,, command, fileName, ...fileContent] = process.argv;
const content = fileContent.join(' ');

function createFile(fileName, content) {
    fs.writeFile(fileName, content, (err) => {
        if (err) {
            console.error('Error al crear el archivo:', err);
        } else {
            console.log(`Archivo ${fileName} creado con éxito.`);
        }
    });
}

function readFile(fileName) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
        } else {
            console.log(`Contenido del archivo ${fileName}:`);
            console.log(data);
        }
    });
}

function updateFile(fileName, content) {
    fs.appendFile(fileName, content, (err) => {
        if (err) {
            console.error('Error al modificar el archivo:', err);
        } else {
            console.log(`Archivo ${fileName} modificado con éxito.`);
        }
    });
}

function deleteFile(fileName) {
    fs.unlink(fileName, (err) => {
        if (err) {
            console.error('Error al eliminar el archivo:', err);
        } else {
            console.log(`Archivo ${fileName} eliminado con éxito.`);
        }
    });
}

switch (command) {
    case 'create':
        createFile(fileName, content);
        break;
    case 'read':
        readFile(fileName);
        break;
    case 'update':
        updateFile(fileName, content);
        break;
    case 'delete':
        deleteFile(fileName);
        break;
    default:
        console.log('Comando no reconocido. Utiliza "create", "read", "update" o "delete".');
}
