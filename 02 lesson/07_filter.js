// filter() function will create new array, after filtering the previous array.

// regular function:
function isBigEngough(value){
    return value >= 10;
}
let filtered = [12, 5, 6, 29, 56].filter(isBigEngough);
console.log(filtered); // [ 12, 29, 56 ]

// A - use arrow function

filtered = ["apple","banana","lemon", "orange","watermaleon"].filter(item => item.length > 5);
console.log(filtered); // [ 'banana', 'orange', 'watermaleon' ]

// B - anonymous function
filtered = [0, 4, 1, 5, 8].filter(function(item){
    return item % 2 === 0; 
})
console.log(filtered); // [ 0, 4, 8 ]

