const fetch     = require('node-fetch');
const colors    = require('colors');

const fetchData      = async (url, pathFile, text) => {
  const resultFetch  = await fetch(url)
    .then(data => data)
    .catch(err => 

      console.log(colors.red("Esta no es una URL: ", url))
      )
  if (resultFetch === undefined) return console.log(colors.red("No obtuvimos respuesta"))
    
  console.log(`${pathFile.yellow} - ${resultFetch.url.blue} -Status: ${resultFetch.statusText.green} - ${resultFetch.status} - ${text}`)
}


const getLinks = (pathFile, data, options) => {
  const markdownRegex = /\[([^\[\]]+)\]\(([^)]+)/g;
  const result = data.match(markdownRegex);

  

  const linkRegex = /\(([^)]+)/; //agarra unicamente el link 
  const textRegex = /\[([^\(([^)]+)/; //obtiene el texto 
  if (options === 'stats') {
      getStats(result)
  };
  
  result.forEach(element => {
    const link = element.match(linkRegex);
    const text = element.match(textRegex);
    // const arrlink= element.split(('](')||('] ('));
    const sliceText = text[1].slice(0, -1);

    if (options === 'validate') {
      // fetchData(arrlink[1], pathFile, arrlink[0].slice(1))
      fetchData(link[1],pathFile,sliceText)
      }
    else if(options === 'stats'){
      return 
    }
    else{
      return console.log(`${pathFile.yellow} - ${link[1].blue} - ${ sliceText}`);
    }
  })  
}


const getStats = (result) => {
  let totalLinks       = result.length;
  let uniqueLinks      = 0;
  let duplicatedLinks  = 0;
  for (let i = 0; i < result.length; i++) {
    for (let j = i+1; j < result.length; j++) {
      if (result[i] === result[j]) {
        console.log(result[i], result[j])
        duplicatedLinks++;
      }
    }
  }
  console.log(duplicatedLinks)
  uniqueLinks = totalLinks - duplicatedLinks;
  return console.log(`
             Total de Links:${colors.blue(totalLinks)} 
             Links únicos: ${colors.green(uniqueLinks)}
             Links duplicados: ${colors.red(duplicatedLinks)}`)
}



module.exports = {
  getLinks,
  getStats,
  getStats
};


//Ejemplos de como  funciona split/slice
//console.log('sin texto :',result[6].split(('](')||('] ('))[0].slice(1));
  //console.log('sin texto :',result[6].split(('](')||('] ('))[1]);