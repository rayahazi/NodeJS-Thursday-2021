
# Class task:
1. Create a function that gets 2 parameters(numbers) and return a promise. 
2. If numbers are equal - will return resolve() with the sum of the 2 numbers. 
3. Else - return reject() with 0.
4. Call the function - and chain 3 then: 
    * print the sum of them. 
    * print the sum/2 - which is the number of each one. 
    * print - "Good, we can use these numbers.", and call a function that will 
      get the number(sum) as radius, and print a circle's space with it.
5. Add catch - to print "we cannot use these numbers". 
6. Add final then to print "Calculation ends". 


```js

// Function to calculate space of circle: 
const calcCircle = radius => (Math.PI * radius * radius);

const myFunc = (num1, num2) => {
   return new Promise((resolve,reject)=>{
       num1 === num2 ? resolve(num1+num2) : reject(0);
   })
}

myFunc(4, 4)
    .then((sum) => {
        console.log(sum); // 8
        return sum;
    })
    .then((sum)=> {
        console.log(`Each number is: ${sum/2}`);
        return sum;
    })
    .then((sum)=>{
        console.log("Good, we can use these numbers!");
        console.log(calcCircle(sum));
    })
    .catch((err)=>console.log("we cannot use these numbers"))
    .then(()=>console.log("Calculation ends"));

/*
C:\Users\raya\Desktop\B 2021 Semester\NodeJS\03 lesson>node 02_Answer.js
8
Each number is: 4
Good, we can use these numbers!
12.566370614359172
Calculation ends
C:\Users\raya\Desktop\B 2021 Semester\NodeJS\03 lesson>node 02_Answer.js
we cannot use these numbers
Calculation ends
*/
```
