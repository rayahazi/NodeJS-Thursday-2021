# Express routing

routing is the way application can respond to a client in several ways.

Each route can have one and more handler functions. (get, post, put, delete, all).

#### Structure

```
app.METHOD(PATH, HANDLER);
```

- app - in an instance of express
- METHOD - is an HTTP request method, in lowercase
- PATH - is the path on the server
- HANDLER - is a callback function that will run when user access the PATH, with that specific METHOD.

#### request METHOD types:

1. app.get()
2. app.post()
3. app.put()
4. app.delete()
5. app.all() - to handle all HTTP requests
6. app.use() - to define a middleware for requests body.

## Basic routing:

```js
const express = require("express");

const app = express();
const PORT = 3000;

// middleware - תווכה
// middleware is used for POST and PUT requests. (app level)
// the middleware takes the content of the request's body, and parses it to JSON format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("GET request"));
app.post("/", (req, res) => res.send("POST request"));
app.put("/", (req, res) => res.send("PUT request"));
app.delete("/", (req, res) => res.send("DELETE request"));

// All - for all request types.
app.all("/admin", (req, res) => res.send("Access the admin section..."));

app.listen(PORT, () => console.log(`App is running in port ${PORT}`));
```

## request and response

- request - will hold the data from the user.
- response - will handle the returned values.

#### response - we can use one of the options to send data back to the client:

1. res.send() - send a response in various types. (strings, html, array, objects etc...)
2. res.json() - send a JSON response
3. res.render() - render a view template(HTML).
4. res.sendStatus() - set a response status code, and send it as a string.

for example:

```js
const student = {
  id: 1,
  name: "John",
  city: "Ariel",
};

const fruits = ["Apple", "Banana", "Watermelon"];

app.get("/", (req, res) => res.send("<h1>Home page</h1>"));
app.get("/about", (req, res) => res.send("<h1>About our company</h1>"));
app.get("/student", (req, res) => res.send(student));
app.get("/fruits", (req, res) => res.send(fruits));
app.get("/myDetails", (req, res) => res.json({ name: "XYZ", age: 35 }));
app.get("/somefile.txt", (req, res) => res.send("SomeFile.txt")); // SomeFile.txt

app.get("/admin", (req, res) => res.sendStatus(401)); // Unauthorized
```
