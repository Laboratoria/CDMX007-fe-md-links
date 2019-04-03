let myModule = require('./modulo')
let arg = path.resolve(process.argv[2]);

myModule(arg , (err, list) => {
    if(err) { 
    return console.error('Error:', err)
    }
    list.console.log(list)
})
