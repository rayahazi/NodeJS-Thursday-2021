// arrow function: function inside a variable: 

// let func_name = (parameters:optional) => {function body}
// parameters: if we have only 1 parameter - we don't need (). 
// function body: if we have only 1 line   - we don't need {}. 
// function body: if we don't have {} - it will be `return` by default. 

// function without parameters, and with one line - in the body. 
let ReturnMyName = () => console.log("My name is Alex");
ReturnMyName();

// function with 1 parameter(without ()), and with one line - in the body. 
let ReturnMyAge = age => console.log(`My age is: ${age}`);
/* This is the same as the function above:
function ReturnMyAge(age){
    console.log(`My age is: ${age}`)
}
*/

// function with 2 parameters, and with one line - in the body. 
let ReturnMyData = (name, age) => console.log(`My name is: ${name}, My age is: ${age}`);

// if we don't add {} - for 1 line body - it will automatically `return`
ReturnMyData = (name, age) => `My name is: ${name}, My age is: ${age}`;

// When we add {} - we should add return if we want. 
ReturnMyData = (name, age) => {
    return `My name is: ${name}, My age is: ${age}`;
}

// class task:
/*

1. Write an arrow function `Add` - it will get 3 numbers as parameters,
and return the sum of them - in 1 line. 
2. Write an arrow function `myEven` - that will get an array of numbers, 
and will return only the numbers that are even. 

*/

let Add = (n1, n2, n3) => n1 + n2 + n3;
let myEven = (arr) => arr.filter (x => x % 2 == 0); 

console.log(Add(3, 4, 5)); // 12
console.log(myEven([3,4, 5, 2, 8])); // [ 4, 2, 8 ]