// 1. import mongoose module
const mongoose = require('mongoose');

let StudentSchema = new mongoose.Schema(
    {
        name: String, 
        age: Number, 
        address: Object
    },
    {
        strict: false
    }
);

// Model - constructor for schema
const StudentModel = mongoose.model("StudentSchema", StudentSchema);

module.exports = StudentModel;