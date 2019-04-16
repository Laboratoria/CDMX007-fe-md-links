const fs = require('fs');

const file = process.argv[2]

const readMyFile = async () => {
     
   const myPromise = new Promise((resolve, reject) => {

       //const readmeString = "";

     fs.readFile(file, 'utf-8', (err, data) => {
  
       if (err) {
         reject (err);
       } else {

         resolve(data)
       }
     })
  
   });
   const result = await myPromise
   return result
  }

  

 

module.exports= readMyFile;

   




// readMyFile(file).then((data) =>{
// console.log(data)
// })





  