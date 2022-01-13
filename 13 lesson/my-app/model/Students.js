// Create the model for each object:
const mongoose = require('mongoose');

// Schema - collection
let StudentSchema = new mongoose.Schema(
    {
        name: String, 
        age: Number, 
        address: Object
    },
    {
        strict: false
    }
)

// Use model to export the Schema:
const StudentModel = mongoose.model("StudentSchema", StudentSchema);

// Export the model outside the file:
module.exports = StudentModel;