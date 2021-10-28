// the forEach() function executes a provided function once for each array element. 
// forEach((item, index)=>{}); forEach gets item(each value in the array) and index(optional)

const arr1 = ["a","b","c"];
arr1.forEach(item => console.log(item + '!'));
/*
a!
b!
c!
*/

// example 2: as you can see - the missing value didn't invoke the forEach function. 
const arr2 = [1, 3, , 7];
let numOfCallbackRuns = 0;

arr2.forEach(item => {
    console.log(item);
    numOfCallbackRuns++;
})
console.log(`numOfCallbackRuns: ${numOfCallbackRuns}`); // numOfCallbackRuns: 3

// example 3:
function showIndex(element, index){
    console.log(`arr[${index}] = ${element}`);
}

[2, 5, ,9].forEach(showIndex);
/*
arr[0] = 2
arr[1] = 5
arr[3] = 9
*/



// Class task: use forEach to loop over an array - [1-6]. for each item - print the num*3 + index.

// Solution 1
let arr = [1, 2, 3 ,4, 5 ,6];
function func(item, index){
    console.log(`arr[${index}] = ${item*3}`)
}
arr.forEach(func);

// Solution 2
[1, 2, 3 ,4, 5 ,6].forEach((item, index)=> console.log(`arr[${index}] = ${item*3}`));