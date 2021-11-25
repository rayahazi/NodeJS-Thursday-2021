const fs = require('fs');

// rename(oldPath, newPath, callback): void -> rename a file: 
fs.rename('myFIle.txt', 'newFile.txt', err=>{
    if(err) throw err;
    console.log("Renamed a file... ")
})

// if exists - Renamed a file... 
// else - 
/*
[Error: ENOENT: no such file or directory, rename 'C:\Users\raya\Desktop\Lessons A 2021\NodeJS B\05 lesson\01_FS\myFIle.txt' -> 'C:\Users\raya\Desktop\Lessons A 2021\NodeJS B\05 lesson\01_FS\newFile.txt'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'rename',
  path: 'C:\\Users\\raya\\Desktop\\Lessons A 2021\\NodeJS B\\05 lesson\\01_FS\\myFIle.txt',
  dest: 'C:\\Users\\raya\\Desktop\\Lessons A 2021\\NodeJS B\\05 lesson\\01_FS\\newFile.txt'
}
*/