// Console is the most basic module in NodeJS
// There is no need to import the module. (basic)

// Prints to stdout with newline.
console.log("Hello world!"); // Hello world!
console.warn("This is a warning!!!"); // This is a warning!!!
console.error("This is an error");

console.clear(); // will clear the terminal
console.log("New page..");

// console.table - show the data in a table:
console.log([[1,2,3], [4, 5, 6]]); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
console.table([[1,2,3], [4, 5, 6]]);
/*
┌─────────┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │
├─────────┼───┼───┼───┤
│    0    │ 1 │ 2 │ 3 │
│    1    │ 4 │ 5 │ 6 │
└─────────┴───┴───┴───┘
*/