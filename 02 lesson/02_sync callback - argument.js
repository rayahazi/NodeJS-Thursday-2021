
let showName = name => console.log(`Your name is: ${name}`);
let printBasicName = name => console.log(name);

// Add parameter of type function:
let getName = (func) => func('Raaya');
/*
function getName(func) { 
    func('Raaya');
}
*/

getName(showName); // Your name is: Raaya
getName(printBasicName); //  Raaya