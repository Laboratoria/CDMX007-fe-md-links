

// var fs = require('fs');

// const linkUs='https://code-maven.com/reading-a-file-with-nodejs'

// const linkPrub = (linkUs)=> {
    
//     const newLinksArray=[]
    
//     const link = /(https?:\/\/[^\s]+)/g;
    
//     if(linkUs.match(link)){
//     newLinksArray.push(linkUs)
//     }
//      else {
//       console.log("Bye");  
//      }
//       return newLinksArray

//     }

//     console.log(linkPrub(linkUs))
    
    // const https = require('https');
     

    // const linkUs=['https://code-maven.com/reading-a-file-with-nodejs', 'https://code-maven.com/read-a-file-with-nodejs']

    // const status = ()=>{

    // linkUs.forEach(function(linkUs){

    // https.get(linkUs, (res) => {
    //     console.log(res.statusCode, linkUs);
      
    //   }).on('error', (e) => {
    //     console.error(e);
    //   });
    //  })


    // }
    

    // status()
   

    const fs = require('fs');
  
    
    const linkFinder = ()=>{
    const link = '[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que'

    const findurl = link.match(/(https?:\/\/[^\s]+)/g)
    console.log(findurl)
  
           
       }
    
         linkFinder()
    
    
    //module.exports.linkFinder= linkFinder;
        
    // const urlRegex = ;
    // if(link.match(urlRegex)){
    //     console.log(urlRegex);
    //    }
    //     else{
    //      console.log("error");  
    //     }