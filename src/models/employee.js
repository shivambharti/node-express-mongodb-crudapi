const mongoose = require('mongoose')
const employeeschema = new mongoose.Schema({
    name:{
        type: String,
        required: true

    },
    email: String,
    password: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Employees',employeeschema)