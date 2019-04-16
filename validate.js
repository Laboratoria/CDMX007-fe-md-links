const https = require('https')
const http = require('http')
var colors = require('colors/safe')

// const arrayLink = ['https://code-maven.com/reading-a-file-with-nodejs', 'https://www.w3schools.com/jsref/jsref_push.asp']

const status = async (data)=>{
   const newPromise = new Promise((resolve, reject) => {
    
    const newArrayLinks =[] 
    let solvedLinks = 0;
    data.forEach(function(linkUs){
    
   if (linkUs.match(/(https:\/\/[^\s]+)/g)) {
    https.get(linkUs, (res) => {
      newArrayLinks.push(`link: ${linkUs} status: ${res.statusCode}`)
      solvedLinks += 1;
  
      if(data.length === solvedLinks) {
        resolve(newArrayLinks);
      }
    }).on('error', (e) => {

    reject(e)
    });
    
   } else {
    http.get(linkUs, (res) => {
      newArrayLinks.push(linkUs + ' ' + res.statusCode)
      solvedLinks += 1;
  
      if(data.length === solvedLinks) {
        resolve(newArrayLinks);
      }
    }).on('error', (e) => {

    reject(e)
    });
   }
   

    })
   
  })
  const result = await newPromise
  return result
  }

module.exports = status
