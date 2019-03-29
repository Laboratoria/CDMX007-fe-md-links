module.exports = () => {
  // ...
};

let fs = require('fs'); //Traer modulo de file system
let fileRoute = process.argv[2] /*guardar en una variable la ruta que ingresan en consola para pasarla como parametro 
a la función de leer archivo e imprimirlo en la consola*/

fs.readFile(fileRoute, 'utf8' , (err, content) => {
    if(err) {
        return console.log(err)
    } //agregar qué hacer en caso de error
    console.log(content)
});
/*función para leer archivo de forma asíncrona (no usa Sync): readFile tiene 3
argumentos: 1 = la ruta del archivo 2 = el formato de codificación de caracteres utf8
3 = callback que procesa el resultado y se invoca al terminar la lectura del archivo */