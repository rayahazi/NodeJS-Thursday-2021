const express = require('express');
// mongoose:
const mongoose = require('mongoose');
// import the router:
const students = require('./routes/StudentsRoute');

const app = express();
const PORT = 3000;

// middleware - תווכה
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// use the router for students:
app.use('/students', students);

// Connect to MongoDB using mongoose - to University database. 
mongoose.connect('mongodb://localhost:27017/University', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

app.listen(PORT, () => console.log(`Listening in port ${PORT}`));
