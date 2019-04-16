#!/usr/bin/env node

let fs = require('fs');
let path = require('path');
let arg = path.resolve(process.argv[2]);
let markdownLinkExtractor = require('markdown-link-extractor');
let fetch = require('node-fetch');
/*
RECIBIENDO ARGUMENDOS DE LA LÍNEA DE COMANDO:
FUNCIÓN QUE IDENTIFICA SI LA RUTA INGRESADA EN CLI
ES DE UN ARCHIVO O DE UN DIRECTORIO:
*/

const gettingPath = (arg) => {
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
      return mdFiles
      // console.log(mdFiles)
    } else {
      readingFiles(arg)
      return arg
    }
  })
}
gettingPath(arg)

/*
RECIBIENDO RUTA DE ARCHIVO 
MD PARA LEERLO, CONVERTIRLO 
A STRING Y BUSCAR LINKS POR AHORA
SOLO BUSCARÁ LINKS CON MARKDOWN LINK 
EXTRACTOR LOS ENVIARÁ A LA FUNCIÓN 
DE VALIDAR Y STATS
*/

const readingFiles = (mdRoute) => {
  fs.readFile(mdRoute, 'utf-8', (err, content) => {
    if (err) {
      return console.log(err)
    }
    let links = markdownLinkExtractor(content);
    links.forEach((link) => {
      if(process.argv[3] === "--validate"){ 
      validating(link);
    } 
  });
      if(process.argv[3] === "--stats") {
        counting(links)
      }
  })
}

/*
RECIBIENDO LINKS Y CON FETCH
SE VERIFICA EL STATUS DE CADA LINK
*/

const validating = (link) => {
  fetch(link)
    .then(res => {
      console.log(arg + " " + res.statusText + " " + res.status + " " + res.url)
    });
}
  
const counting = (links) => {
  console.log('Total: ' + links.length)
}


/* ESTO ESTÁ PENDIENTE: (intentos en archivos links y links2 .js)
FUNCIÓN QUE BUSCA EN EL ARCHIVO MD
LOS LINKS, ESTA DEBE DEVOLVER UNA PROMESA
EN FORMA DE ARRAY CON OBJETOS QUE TIENEN LAS
SIGUIENTES PROPIEDADES:
link.href = url
link.text = texto dentro del link
link.file = ruta del archivo donde se encontró el link */

