const fs = require('fs');
const path = require('path')

//

const dir = async () => {

  const data = []
  const newPromise = new Promise((resolve, reject) => {
    fs.readdir('./', function (err, files) {

      if (err) {
        console.log('Error');
        reject(err)

      } else {

        files.forEach(function (mdFiles) {

          if (mdFiles.match('.md')) {

            const pathAbs = path.resolve(mdFiles)
            data.push(pathAbs)
          
          }
          resolve(data)
        }
        
        );
      }
    })
  });
  const result = await newPromise
  console.log( result)
};
dir(); 
module.exports = dir;



