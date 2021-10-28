/*
The map(callbackFunction, index): any[] function creates new array populated with the results 
of the calling function -> on every element in the array. 

Calls a defined callback function on each element of an array, 
and returns an array that contains the results.
*/

let arr1 = ["apple","banana","juice"];

// option 1 - regular function:
function returnLength(item){
    return item.length;
}
console.log(arr1.map(returnLength)); // [ 5, 6, 5 ]

// option 2 - anonymous function:
console.log(arr1.map(function(item){
    return item.length;
})); // [ 5, 6, 5 ]

// option 3 - arrow function:
console.log(arr1.map(item => item.length )); // [ 5, 6, 5 ]


// --------------------------------------
arr1 = [1, 2, 3, 4];
let double = arr1.map(x => x * 2);
console.log(double) // [ 2, 4, 6, 8 ]


// Class task: Create an array with [4, 9, 16, 25] 
// and return the square root(שורש) for each item using map. 
// -> Show the result in HTML - in header h4. 

