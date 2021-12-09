/* Array of students: [{}, {}, {}]
GET - show all the students
POST - add new student to the array
PUT - update avgGrade for student
DELETE - delete a student from the array
*/

// import express module:
const express = require('express');

// Creates an Express application.
const app = express();
const PORT = 3000;

// middleware - POST / PUT -> Get the values from the request's body. 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Array of students - will be updated after every request:
let StudentsArray = [];

// GET - show all the students
app.get('/', (req, res) => {
    res.send(StudentsArray);
    res.status(200); // 200 = OK
});

// POST - add new student to the array
app.post('/add', (req,res)=>{
    StudentsArray.push(req.body);
    res.send("New student was added to the list");
    res.status(201); // 201 = CREATED
})

// PUT - update avgGrade for student
// params: get the student's name + body: get the new avgGrade

// localhost:3000/update/John, localhost:3000/update/Alex
app.put('/update/:s', (req,res)=>{
    // Student will be the student object in the array - with the same name from params
    // find() - Returns the value of the first element in the array where predicate is true, and undefined otherwise.
    let student = StudentsArray.find(st => st.name === req.params.s);

    // if we found a student:
    if(student != undefined) student.avgGrade = req.body.avgGrade;

    res.send("Student grade was updated successfully");
    res.status(200); // OK
})

// DELETE - delete a student from the array
// We will get the student's name from params - and delete it
app.delete('/delete/:s', (req,res)=>{

    // filter() - Returns the elements of an array that meet the condition specified in a callback function.
    // the function will return all elements except from the value in the params(student's name)
    StudentsArray = StudentsArray.filter(st => st.name !== req.params.s);

    res.send("Student was deleted successfully");
})

app.listen(PORT, ()=>console.log(`Listening in port ${PORT}`));