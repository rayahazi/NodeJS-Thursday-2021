// FS - file system

const fs = require('fs');

// fs.open(FileName, mode, callbackFunc) - asynconous
// create new file if not exists. If exists - overrides it. 
fs.open("myFile.txt", "w", err =>{
    if(err) throw err;
    console.log("File created!");
})

// fs.writeFile(FileName, data, callbackFunc)
// Asynconously write data to a file
// if file exists - add the data(to the beginning)!
// else - if file does not exist - create it, and add the data
let str = "This is my first sentence";
fs.writeFile("myFile.txt", str , err =>{
    if(err) throw err;
    console.log("Data was inserted!");
})

fs.writeFile("myFile.txt", "another line." , err =>{
    if(err) throw err;
    console.log("new data was inserted");
})

// another line.rst sentence

// we can insert any type of data:
const arr = [1, 2, 3];

fs.writeFile("myFile.txt", arr.toString() , err =>{
    if(err) throw err;
    console.log("new data was inserted");
})

// 1,2,3er line.rst sentence
