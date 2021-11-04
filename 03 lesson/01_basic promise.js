
let promise = new Promise((resolve, reject) => {
    let x = true, y = false;
    x === y ? resolve() : reject();
});

// chaining - שרשור פונקציות
promise
    .then(()=>console.log("x and y are Equal"))
    .catch(()=>console.log("x and y are NOT Equal"));

// x and y are Equal
