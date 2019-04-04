// let arr = [];
// let links = new Object ();
//     links.text = text
//     links.href = href
//     links.file = path
let fs = require('fs');
// let path = require('path');
let x = process.argv[2];


    fs.readFile(x, 'utf-8', (err, content) => {
        if(err) {
            return console.log(err)
        }
       gettingLinks(content)
    })

const gettingLinks = (content) => {
    const regExpText = /!?\[(.*)\]/gi;
    const regExpLinks = /(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;
    let results = content.match(regExpText);
    results.join.content.match(regExpLinks)
    links = results
    console.log(links)
}

// class Link  {
//     constructor(text, href) {
//       this.text = text;
//       this.href = href;
//     }
//   }
  
// function x(content , mdFiles) {
//     'use strict';
//     const re = /!?\[(.*)\]\((.*?)\)/gi;  
  
//     let matches = re.exec(content); // Cambio Método .match a método .exec() para poder sacar los corchetes
//     let result = [];
//     let text = [];  
  
//     do {
//       let temp = matches[1];
//       text.push(temp);
//     } while ((matches = re.exec(content)) !== null);
    
//     const reHref = /(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;
//     let href = content.match(reHref);
  
//     if (text.length === href.length) {
//       for (let i = 0; i < text.length; i++) {
//         const one = new Link(text[i], href[i]);
//         result.push(one);
//       }
//       return console.log(JSON.stringify(result, null, ' '));
//     } else {
//       return ('El texto ingresado contiene un error, por favor corríjalo  e intente nuevamente');
//     };
//   };