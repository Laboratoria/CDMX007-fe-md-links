const parseArgs = require('minimist')
const mdLinks = require("./md-links.js");
const validateOptions = require("./validateOptions.js");
const argv = parseArgs(process.argv.slice(2), {
  boolean: [ 'validate' ],
  boolean: [ 'stats' ],
  alias: { v: 'validate', s: 'stats' }
  // '--': true
  // stopEarly: true, /* populate _ with first non-option */
  // unknown: function () { ... } /* invoked on unknown param */
});


// const optionAssign = (args) => {
// 	let optionsSelected = {validate: false, stats: false};
// 	solicitude.forEach(element => {
// 		if (element.includes('--validate')) {
// 			optionsSelected.validate = true;
// 		}
// 		if (element.includes('--stats')) {
// 			optionsSelected.stats = true;
// 		}
// 	});
// 	return optionsSelected
// }
//
// let options = optionAssign(dataEntered);


mdLinks(argv._[0], argv)
.then(array => {

	validateOptions(array, argv)

	// console.log(array);
	// console.log(argv);
})
.catch(error => console.error(error));





//
// pathFunctions.validateAbsolute(dataEntered[2])
// 		.then(newPath => {
// 			pathFunctions.validateDirectory(newPath)
// 			.then(validationDir => {
// 				if (validationDir) {
// 					pathFunctions.readDirectory(newPath, '.md')
// 					.then(filesArray => {
// 						// console.log(filesArray);
// 						let linksFileArray = [];
// 						const filesCount = filesArray.length;
// 						filesArray.forEach(element => {
// 							pathFunctions.readFiles(element)
// 							.then(file =>{
// 								const linksArray = pathFunctions.obtainLinks(file, element);
// 								// console.log(linksArray);
// 								linksFileArray.push(linksArray);
// 								if (linksFileArray.length == filesCount) {
// 									console.log(linksFileArray);
// 								}
// 							})
// 							.catch(error => console.error(error));
// 						});
// 					})
// 					.catch(error => console.error(error));
// 				}
// 			})
// 			.catch(error => console.error(error));
// 			pathFunctions.validateFile(newPath)
// 			.then(validationFile => {
// 				if(validationFile){
// 					pathFunctions.readFiles(newPath)
// 					.then(file =>{
// 						// console.log(file);
// 						const linksArray = pathFunctions.obtainLinks(file, newPath);
// 						console.log(linksArray);
//
// 					})
// 					.catch(error => console.error(error));
// 				}
// 			})
// 			.catch(error => console.error(error));
// 		})
// 		.catch(error => console.error(error));
//






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
