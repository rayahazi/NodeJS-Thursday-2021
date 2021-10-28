const a = () => console.log("Task A");
const b = () => console.log("Task B");

// setTimeout(function, milliseconds) 
// will execute the function after milliseconds. 
// 1000 milliseconds = 1 second
setTimeout(a, 2000);
b();
/*
Task B
Task A
*/