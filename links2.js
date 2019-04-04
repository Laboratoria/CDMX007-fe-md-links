// // let arr = [];
// // let links = new Object ();
// //     links.text = text
// //     links.href = href
// //     links.file = path
// let fs = require('fs');
// let path = require('path');
// let x = process.argv[2];
// let markdownLinkExtractor = require('markdown-link-extractor');

//     fs.readFile(x, 'utf-8', (err, content) => {
//         if(err) {
//             return console.log(err)
//         }
//        gettingLinks(content)
//     })

//     let links = new Object (); 

// const gettingLinks = (content) => {
//     const regExp = /!?\[(.*)\]/gi;
//   let results = content.match(regExp);
//   results.forEach(text => {
      
//       links.text = text
//       let link = markdownLinkExtractor(content) 
//       link.forEach((link) => {
//          console.log(link)
//           //   var link = markdownLinkExtractor(content);
//           //   link.forEach(function (link) {
//               //       links.href = link
//               //     }) 
//               console.log(links)
//             })

// var obj1 = new Object();  
// obj1.Name = "A Person";  
// obj1.TelNo = "12345"; 
            
let fetch = require('node-fetch');

fetch('https://www.genbeta.com/desarrollo')
    .then(res => {
        console.log(res.ok);
        console.log(res.status);
        console.log(res.statusText);
        console.log(res)
    });

// // var markdown = fs.readFileSync('README.md').toString();

// // var links = markdownLinkExtractor(markdown);

// // links.forEach(function (link) {
// //     console.log(link);
// // });

// // const gettingLinks = (content) => {
// //     const regExp = /!?\[(.*)\]/gi;
// //     let results = content.match(regExp);
// //     console.log(results)
// // }

// // class Link  {
// //     constructor(text, href) {
// //       this.text = text;
// //       this.href = href;
// //     }
// //   }
  
// // function x(content , mdFiles) {
// //     'use strict';
// //     const re = /!?\[(.*)\]\((.*?)\)/gi;  
  
// //     let matches = re.exec(content); // Cambio Método .match a método .exec() para poder sacar los corchetes
// //     let result = [];
// //     let text = [];  
  
// //     do {
// //       let temp = matches[1];
// //       text.push(temp);
// //     } while ((matches = re.exec(content)) !== null);
    
// //     const reHref = /(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;
// //     let href = content.match(reHref);
  
// //     if (text.length === href.length) {
// //       for (let i = 0; i < text.length; i++) {
// //         const one = new Link(text[i], href[i]);
// //         result.push(one);
// //       }
// //       return console.log(JSON.stringify(result, null, ' '));
// //     } else {
// //       return ('El texto ingresado contiene un error, por favor corríjalo  e intente nuevamente');
// //     };
// //  