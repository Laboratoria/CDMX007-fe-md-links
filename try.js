let fs = require('fs');
let path = require('path');
let arg = path.resolve(process.argv[2]);

/*
RECIBIENDO RUTA
MÓDULO QUE IDENTIFICA SI LA RUTA 
ES DE UN ARCHIVO O DE UN DIRECTORIO:
*/

// module.exports = gettingPath = () => {
    fs.stat(arg, (err, stats) => { //consolea error en caso de que la ruta no sea la esperada//
        if(err) {
            console.err()
            return
        }
        if(stats.isDirectory() === true) { //si es ruta de directorio:
          let files = fs.readdirSync(arg) // guardar en una variable el array con el nombre de los archivos
          files.forEach(file => { //recorrer ese array 
             let routes = path.resolve(file) // y por cada archivo crear su ruta absoluta. PREGNTA: Qué pasa si son rutas que no son del directorio actual
            //   console.log(routes) 
              if(path.extname(routes) === ".md") {
                 let mdFiles = [];
                 mdFiles.push(routes) 
                 console.log(mdFiles)
              }
          })
    }
    })    
// }


