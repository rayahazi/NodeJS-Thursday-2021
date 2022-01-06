const express = require('express');
// 1. import mongoose module
const mongoose = require('mongoose');
// 2. Import router of students:
const students = require('./routes/studentsRoute');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// add students route:
app.use('/students', students);

mongoose.connect('mongodb://localhost:27017/University', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.get('/', (req, res)=> {
    res.send('<h1>Home page...</h1>');
})

app.listen(port, ()=>console.log(`Listening in port ${port}`));