const fs = require('fs');
const path = require('path');
const pathFunctions = require('./pathFunctions');

const dataEntered = process.argv;

pathFunctions.validateAbsolute(dataEntered[2])
.then(newPath => {
	pathFunctions.validateDirectory(newPath)
	.then(validationDir => {
		if (validationDir) {
			pathFunctions.readDirectory(newPath, '.md')
			.then(filesArray => {
				console.log(filesArray);
				filesArray.forEach(element => {
					pathFunctions.readFiles(element)
					.then(file =>{
						console.log(file);
					})
					.catch(error => console.error(error));
				});
			})
			.catch(error => console.error(error));
		}
	})
	.catch(error => console.error(error));
	pathFunctions.validateFile(newPath)
	.then(validationFile => {
		if(validationFile){
			pathFunctions.readFiles(newPath)
			.then(file =>{
				console.log(file);
			})
			.catch(error => console.error(error));
		}
	})
	.catch(error => console.error(error));
})
.catch(error => console.error(error));









// module.exports = mdLinks = (path, options) => {
//   return new Promise((resolve, reject) => {
//     let dataReadme = [];
//
//     if (options == undefined) {
//     }else if (options[0]) {
//
//     }
//     //...
//     resolve(dataReadme);
//   });
// };




// readFile('./README.md')
// 	.then(pathMod.resolve())
// 	.then(readFile)
// 	.then(data => console.log(data))
// 	.catch(error => console.error(error));
