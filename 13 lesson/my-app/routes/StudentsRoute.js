// This file will contain all the routes for students

const express = require('express');
const Student = require('../model/Students');

// Create internal router:
const router = express.Router();

// GET - Get all the students:
router.get('/', (req, res)=>{
    // find() - is a mongoDB command to get all objects
    // exec() -> will run the command in the db. 
    Student.find({}).exec((err, students) => {
        if (err) console.log(err.message);
        else res.json(students);
    })
})

// GET - get specific student:
// http://localhost:3000/students/John
router.get('/:name', (req, res)=>{
    Student.findOne({ name: req.params.name }).exec((err, student) => {
        if (err || student === null) {
            res.status(404);
            res.send("Error.. student was not found!!");
        }
        else {
            res.status(200);
            res.json(student)
        }
    })
})

// POST - Add a new student(object) to the collection
// http://localhost:3000/students/add
router.post('/add', (req, res) => {
    // Create a new student, and get the data from the request body
    let newStudent = new Student();
    newStudent.name = req.body.name;
    newStudent.age = req.body.age;
    newStudent.address = req.body.address;

    newStudent.save((err, student)=> {
        if (err){
            res.status(404);
            res.send('Failed saving...');
        }
        else{
            res.status(201);
            res.send('New student was added successfully');
        }
    });
});

// PUT - Update the student's age: 
// params - student's name, body - new age. 
router.put('/update/:name', (req, res) => {

    // findOneAndUpdate({ who to update },{ new data }, (err, success))
    Student.findOneAndUpdate(
        { name: req.params.name }, { $set: {age: req.body.newAge} }, 
        (err, updatedStudent) => {
            if(err || updatedStudent === null) {
                res.status(404);
                res.send(`Failed updating student's age...`);
        }else{
            res.status(200);
            res.send(`Student's age was updated successfully`);
        }}
    )
})

// DELETE - delete a student using it's name in params
router.delete('/delete/:name', (req, res)=>{
    // Deletes the first document that matches conditions from the collection. 
    Student.findOneAndDelete({ name: req.params.name })
    .exec((err, student)=>{
        if(err || student === null) {
            res.status(404);
            res.send(`Failed deleting student...`);
        }else{
            res.status(200);
            res.send(`Student was deleted successfully`);
        }
    })
})

// export the file
module.exports = router;