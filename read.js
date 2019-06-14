const fs       = require('fs');
const mdlinks  = require('./mdlinks');


const readFile = (filepath, options) => {
  console.log(filepath);
  fs.readFile(filepath, 'utf-8', (err,  data) => {
    
    if (err) return console.log(err);
    
    mdlinks.getLinks(filepath, data, options);                                                     
  })
}

// const path     = require('path');
// const readDir = (dir) => {
//     fs.readdir('./', (err, files) => {
//           if (err) {
//             console.log(err);
//           } else {
//             files.forEach(element => {
//               if (path.extname(element) === '.md') {               
//                 fs.readFile(element, 'utf-8', (err,  data) => {
//                   if (err) {
//                     console.log(err);
//                   } else {
//                   mdlinks.getLinks(pathfile,data,validate);                                                     
//                 }
//               })
//             }
//           })
           
//         }
//       })
//     }
   
    

module.exports = {
  // readDir, 
  readFile 
};