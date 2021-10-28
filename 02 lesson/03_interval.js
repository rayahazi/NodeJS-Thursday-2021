// interval(function, milliseconds) - we can use setInterval for clocks, timers

const a = ()=>console.log("Task A");
const b = ()=>console.log("Task B");

setInterval(a, 1000);
b();