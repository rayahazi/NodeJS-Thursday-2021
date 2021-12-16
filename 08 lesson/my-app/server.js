// We have 2 files:
// 1. server.js -> server
// 2. req.http  -> client

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// middleware - allow us to get the request's body:
// It is placed between the request and the server. 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// create the file if not exists, and add new  empty array - []
if(!fs.existsSync('people.json'))
    fs.writeFileSync('people.json', '[]');

// get - return the data from the file
app.get('/all', (req, res)=>{
    // Send to the client the data from the file - people.json
    res.send(fs.readFileSync('people.json').toString());
    res.status(200); // OK
});

// post - read from the file, convert to JSON, 
// update the array, write to the file, show a message to the client & status
// Client sends: {id: , name: , age: , favFood: }
app.post('/add', (req, res)=>{
    // read from the file
    let peopleArr = fs.readFileSync('people.json').toString();
    // convert the string to JSON - so we can use push(). 
    peopleArr = JSON.parse(peopleArr);

    // add to the array the data from the client: 
    peopleArr.push(req.body);

    fs.writeFileSync('people.json', JSON.stringify(peopleArr));

    // show response message to the client:
    res.send('New person was added successfully');
    res.status(201); // CREATED
})

// put - update the favFood for person(by id). 
// http://localhost:3000/update/1, http://localhost:3000/update/2

// Example:
// [{id: 1, name: 'x', favFood: 'A'}, {id: 2, name: 'y', favFood: 'B'}, {}]
// http://localhost:3000/update/1 body: {favFood: 'c'}

// the client sends the id in params, and the new variable in body. 
app.put('/update/:id', (req, res)=>{
     let peopleArr = fs.readFileSync('people.json').toString();
     peopleArr = JSON.parse(peopleArr);

     // use find() to get the person with the right id from params
     // id from params is a string, we must convert to number(using + prefix)
     let myPerson = peopleArr.find(x => x.id === +req.params.id);
     
     // update the person - if exists:
     if(myPerson !== undefined) 
        myPerson.favFood = req.body.favFood;
    
    fs.writeFileSync('people.json', JSON.stringify(peopleArr));

    // show response message to the client:
    res.send("Person's fav food was updated successfully");
    res.status(200); // CREATED
} )


app.delete('/delete/:id', (req, res)=>{
    let peopleArr = fs.readFileSync('people.json').toString();
    peopleArr = JSON.parse(peopleArr);

    peopleArr = peopleArr.filter(x => x.id !== +req.params.id);

    console.log(peopleArr);
    fs.writeFileSync('people.json', JSON.stringify(peopleArr));

    res.send("Person was deleted successfully");
})

app.listen(PORT, ()=>console.log(`Run in port ${PORT}`))

