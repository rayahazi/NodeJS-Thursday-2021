// JS - is asynconous!! 
// All the functions of fs module are asynconous. -> Unless we use Sync. 
// For example: writeFile(), writeFileSync()

const fs = require('fs');

// writeFile() - will create the file(if not exists) and will insert new data. 
fs.writeFile('myFile.txt', 'This is my first sentence...', err =>{
    if(err) throw err;
    console.log("Saved first data");
})

// If there is data in the file - it overrides from the start!!!
fs.writeFile('myFile.txt', 'Another text...', err =>{
    if(err) throw err;
    console.log("Saved second data");
})
// Another text...t sentence...


// Append - will add the data to the end of the file. 
fs.appendFile('myFile.txt', '\nAppended text', err =>{
    if(err) throw err;
    console.log("Appedned data");
})

// Append array - to the end of the file:
let arr = [1, 2, 3];
fs.appendFile('myFile.txt', '\n' + arr.toString(), err =>{
    if(err) throw err;
    console.log("Appedned array");
})

// Append object: 

let person = {id: 1, name: 'Alex'};

// use JSON.stringify() - to convert object to string:
fs.appendFile('myFile.txt', '\n' + JSON.stringify(person), err =>{
    if(err) throw err;
    console.log("Appedned array");
})