const express = require('express');
const Student = require('../model/Students');

const router = express.Router();

// Get all the students
router.get('/', (req, res)=> {
    Student.find({}).exec((err, students) => {
        if(err) console.log(`Error`);
        else res.json(students);
    })
})

module.exports = router;