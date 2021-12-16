/* 4 states:
1. Create a file if not exists 
2. Create an array, and add the current date to it
3. Write the array to the file
4. Read from the file the array
*/

// Import fs - we have read/write from a file:
const fs = require('fs');

// Create file if not exist, and insert the empty array
if(!fs.existsSync('dates.json')){
    fs.writeFileSync('dates.json','[]');
}

// Get all the previous data from the file, 
let arrDates = fs.readFileSync('dates.json').toString();
// convert to array - using JSON
arrDates = JSON.parse(arrDates);

// return the number of milliseconds from 1/1/1970
arrDates.push({'Current time' : Date.now()});

// ------- write to a file: ------
// JSON.stringify() - converts JSON to string
fs.writeFileSync('dates.json', JSON.stringify(arrDates));

// ------- read from a file: ------
let result = fs.readFileSync('dates.json').toString();
console.log(result); // [{"Current time":1620135622738}]