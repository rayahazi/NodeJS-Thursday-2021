# Promise

A promise is an object representing 

    * compeletion
    * failure
for asyncronous operation. 

* Asyncronous operation - access to Database, fetch data from other URL.  

* A promise is a returned object to which you attack a callback, instead of passing callbacks into a function. 
* Callbacks can create `Callback hell` - hard to maintain and understand the code. 
```
func(func){
    func(func){
        func()
    }
}
```
* Promises are best for asyncronous operation. 

### Why use Promise?
* Improve code readability. 
* Better for asyncronous operation. 
* Better error handling.

### 4 states of promise:

1. fulfilled - Action when promise succeeded. 
2. rejected - when promise is failed. 
3. pending - promise is still running. (or success or failure). 
4. settled - when promise has success or failure. 

### Syntax:

* Use the promise constructor:
```js
const promise = new Promise((resolve, reject)=>{
    // do something... 
});
```

### Then

* The then() method returns a Promise. 
* It takes 2 parameters: callback function for success or failure, for that promise. 
```js
// there is a promise: we call it with then:
promise.then(()=>console.log("x and y are Equal"))
```

### Catch
* Catches the errors - failure of the promise. 
```js
promise
    .then(()=>console.log("x and y are Equal"))
    .catch(()=>console.log("x and y are NOT Equal"));

```
