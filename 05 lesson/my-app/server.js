// import the module express
const express = require("express");

// express() function - Creates an Express application.
const app = express();
const PORT = 3000;

// get(path, (req,res) => {}) - will retrieve a web page
// res.send() - send answer to the client
app.get('/', (req, res) => {res.send('<h2>GET request</h2>')});

// post - will get data from client - and keep it. 
app.post('/', (req, res) => {res.send('<h2>POST request</h2>')});

// listen(port, callback function) -> activate the app (Listen for connections.)
app.listen(PORT, () => console.log(`Listening in port ${PORT}...`));

