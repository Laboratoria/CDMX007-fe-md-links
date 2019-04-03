let fs = require('fs');
let path = require('path');
let arg = path.resolve(process.argv[2]);


/*
RECIBIENDO RUTA
MÓDULO QUE IDENTIFICA SI LA RUTA 
ES DE UN ARCHIVO O DE UN DIRECTORIO:
*/

// module.exports = gettingPath = () => {
let mdFiles = [];
fs.stat(arg, (err, stats) => { //consolea error en caso de que la ruta no sea la esperada//
    if (err) {
        console.err() //consolear error
        return
    }
    if (stats.isDirectory() == true) {
        let files = fs.readdirSync(arg)
        // console.log(files)
        files.forEach(file => {
            if (path.extname(file) === ".md") {
                mdFiles.push(path.join(arg, file))
            }
        })
        readingFiles(mdFiles.toString())
        // console.log(mdFiles)
    } else {
        readingFiles(arg)
        return arg
    }
})

readingFiles = (filePath) => {
    console.log(filePath)
    let filex = fs.readFileSync(filePath, 'utf8')
    console.log(filex)
}
   