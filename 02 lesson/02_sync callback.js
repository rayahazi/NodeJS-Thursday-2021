// JavaScript is an asyncronous langauge
// This is a syncronous callback
// it is called automatically. 

// is a callback function:
let showName = name => console.log(`Your name is: ${name}`);

// getName is a function with callback function inside:
function getName(){
    let name = "Raaya";
    // callback - call a fuction from another function: 
    showName(name);
}

getName(); // Your name is: Raaya