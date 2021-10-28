let person = {
    name: "John",
    age:23
}

let Add = (num1, num2) => num1 + num2;

// alow us to use the variable outside the file
module.exports = {
    myPerson: person, 
    Add: Add
}

// auto complete