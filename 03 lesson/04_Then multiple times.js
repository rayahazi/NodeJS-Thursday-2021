// We can chain `then` more than 1 time. 
// If we want to keep the returned variables - we return them in the then.  
let promise = new Promise((resolve, reject)=>{
    let num = Math.random(); // 0-1
    num > 0.5 ? resolve(num) : reject(0);
})

promise
    .then((num)=>{
        console.log(num);
        return num;
    })
    .then((num)=>console.log(Math.round(num * 5)))
    .then(()=>console.log("Still in then"))
    .catch((num)=>console.log(`Error. num is ${num}`))
    // If we add then() after catch - it will always work - for resolve and reject. 
    // similar to finally in Error handling. 
    .then(()=>console.log(`Final message`));

/*
0.8589160971631074
4
Still in then
Final message
----------------------------
Error. num is 0
Final message
*/