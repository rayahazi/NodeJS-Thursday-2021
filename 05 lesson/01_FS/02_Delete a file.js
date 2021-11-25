const fs = require('fs');

// Asynchronous delete a file it refers to.

fs.unlink('myFile.txt', err => {
    if(err) console.log(err);
    console.log("Deleted!");
})

// If file does not exist - throw error: It will stop the program. 
// if we use something else than `thorw` - it will continue. 
setTimeout(()=>console.log("Some messge"), 1000);

/*
[Error: ENOENT: no such file or directory, unlink 'C:\Users\raya\Desktop\Lessons A 2021\NodeJS B\05 lesson\01_FS\myFile.txt'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'unlink',
  path: 'C:\\Users\\raya\\Desktop\\Lessons A 2021\\NodeJS B\\05 lesson\\01_FS\\myFile.txt'
}
Deleted!
Some messge
*/