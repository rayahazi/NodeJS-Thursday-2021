// JSON - javascript object notation
// {key:value, key:value} - this is a json object


// key - can be any string
// value - can be number, string, boolean, function, array, JSON
let person = {
    id:1, 
    name: "Alex", 
    isMale: true, 
    lessons: ['Math', 'History'],
    SayHello: () => console.log("Hello users!"), 
    address:{
        city:"Ariel", 
        country:"Israel", 
        zipCode:548676
    }
}

console.log(person.id);
console.log(person.name);
console.log(person.isMale);
console.log(person.lessons[1]);
console.log(person.SayHello());
console.log(person.address.zipCode);

// JSON to string:
let str = JSON.stringify(person);

// string to JSON:
let myPerson = JSON.parse(str);
