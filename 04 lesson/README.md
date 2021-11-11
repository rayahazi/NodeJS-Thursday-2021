# NodeJS Core modules

- module = file

https://nodejs.org/dist/latest-v16.x/docs/api/

There are many core modules in NodeJS, we will talk about 3 of them:

1. Console
2. OS (Operating System)
3. FS (File System)

### 1. Console

1. console.log(); - output to the screen(terminal)
2. console.warn(); - output a warning
3. console.error(); - output an error
4. console.clear(); - clear the data in the terminal
5. console.table(); - show data in a table

### 2. OS - Operating System

// The os module provides operating system-related utility methods and properties.

- We must import that module:

```js
const os = require("os");
```

1. console.log(os.platform());
2. console.log(os.cpus());
3. console.log(os.totalmem());
4. console.log(os.freemem());
5. console.log(os.networkInterfaces());

### FS - File system

we can do using fs:

1. create
2. read
3. update
4. delete
5. rename

