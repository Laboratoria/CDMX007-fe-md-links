
const fetch = require('node-fetch');
var colors = require('colors');

const arrayLink = ['https://code-maven.com/reading-a-file-with-odejs', 'https://www.w3schools.com/jsref/jsref_push.asp']

const validate = (data)=> {
    
    
    // const newArry = []
    data.forEach( element => {

    fetch(element)
    .then(res => {
        
    const linksStatus= `${element}` + ' ' + res.status + ' ' + res.statusText
    // newArry.push(linksStatus)
    console.log(linksStatus)
    
    })
    .catch(err => console.log(err))
}
)

}

// module.exports = validate