let promise = new Promise((resolve, reject)=>{
    let num = Math.random(); // number between 0-1
    num > 0.5 ? resolve(`Success: num = ${num}`) 
    : reject(`Failure: num too small, num = ${num}`);
});

promise
    .then(msg => console.log(msg))
    .catch(msg => console.log(msg));

/*
Class task:
1. Create a function that will return a promise,
and will get the user password, and username as parameters
2. The promise will return resolve with success message if username and pass are correct
or reject with error message if do not match. 

The correct usename & password: Alex, 12345678. 
*/





