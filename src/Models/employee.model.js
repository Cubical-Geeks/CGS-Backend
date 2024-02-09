const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    joiningDate: {
        type: Date,
        required: true
    },
    fathersName: {
        type: String,
        required: true
    },
    cnic: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    reference: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    emergencyPhone: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {timestamps: true})

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;