const fs = require('fs')

const fsPromises = require('fs/promises')

fs.readFile('notes.txt', 'utf-8', (err, data) => {
    if(err)
        console.log(err);
    else 
        console.log(data);
})

fsPromises.readFile('notes.txt')
.then(data => data.toString())
.then(data => console.log(data))
.catch(err => console.log(err))