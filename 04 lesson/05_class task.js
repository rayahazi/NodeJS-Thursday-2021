/*
Class task:
1. Create an array of 3 object people:
2. Each person will have: 
    * id
    * name
    * city
3. Create new file `people.json` 
4. Add the data to it. 
*/

const fs = require('fs');

let arr = [
    {id:1, name: 'A', city:'Ariel'},
    {id:2, name: 'B', city:'Jerusalem'},
    {id:3, name: 'C', city:'Tel-Aviv'},
]

fs.writeFile('people.json', JSON.stringify(arr), err => {
    if(err) throw err;
    console.log("Success");
})
