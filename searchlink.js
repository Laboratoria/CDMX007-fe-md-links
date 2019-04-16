const fs = require('fs');
  
    
    const linkFinder = (data)=>{
    const findurl = data.match(/(https?:\/\/[^\s]+)/g)
    return findurl
  
           
       }
    
       
  module.exports = linkFinder     
    