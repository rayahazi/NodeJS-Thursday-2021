
let arr = ['a', 'b', 'c', 'dd', 'ee', 'ff'];

// find:
let myVariable = arr.find(x => x.length > 1);
console.log(myVariable); // dd

myVariable = arr.find(x => x == 'b');
console.log(myVariable); // b

// filter - return array
let newArr = arr.filter(x => x.length > 1);
console.log(newArr); // [ 'dd', 'ee', 'ff' ]

newArr = arr.filter(x => x.length != 2);
console.log(newArr); // [ 'a', 'b', 'c' ]