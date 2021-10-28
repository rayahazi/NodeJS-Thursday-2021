# Callback

A callback function is a function passed into another function as an argument.

```js
function print(callback) {
  callback();
}
```

### Built-in callback functions:

1. setTimeout(), setInterval()
   - setTimeout(function, milliseconds) - will execute the function after milliseconds.
   - setInterval(function, milliseconds) - will execute the function after every amount of milliseconds without stopping (unlesss we tell it to stop).
2. forEach()
3. map()
4. filter()

### JavaScript is asyncronous

If some code will take more time to execute - for example - will wait a few seconds until the code will run (in setTimeout, setInterval etc..) - the program will keep that code in the waiting,
meanwhile - it will run the next lines.

> Note: JavaScript workds in 1 thread!!!

1. Advantage: time of execution is shorter.
2. Disadvantage: the code in the next lines - might need the code that takes time to run. 
