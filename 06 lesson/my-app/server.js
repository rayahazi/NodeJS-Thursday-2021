// import the module express
const express = require("express");

// express() function - Creates an Express application.
const app = express();
const PORT = 3000;

app.get("/", (req, res) => res.send("<h1>Home page</h1>"));
app.post("/", (req, res) => res.send("<h1>post request</h1>"));
app.put("/", (req, res) => res.send("<h1>put request</h1>"));

// listen(port, callback function) -> activate the app
app.listen(PORT, () => console.log(`Listening in port ${PORT}...`));