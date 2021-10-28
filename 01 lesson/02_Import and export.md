## Import and Export - ייבוא וייצוא של קבצים

* For MD: Markdown preview

In case we want to use data from 1 file in another file - we will use `import and export`.

- file1:

```js
const person1 = {
  name: "Alex",
  age: 17,
};

module.exports = person1;
```

- file2:

```js
const myPerson = require("./file1");

console.log(myPerson);
// { name: 'Alex', age: 17 }
```

### Export more than 1 item

Note: We can change the names of items.

- file1:

```js
const person1 = {
  name: "Alex",
  age: 17,
};

const Add = (num1, num2) => num1 + num2;

// Export more than 1 item - using object
module.exports = {
  Person: person1,
  Add: Add,
};
```

- file2:

```js
const file1 = require("./file1");

console.log(file1.Person);
console.log(file1.Add(4, 6));
/*
{ name: 'Alex', age: 17 }
10
*/
```
