const mongoose = require('mongoose')

const EmployeeDataSchema = new mongoose.Schema({
    department: String,
    age: String,
})

const EmployeeDataModel = mongoose.model(
    "employees_data", EmployeeDataSchema
)

module.exports = EmployeeDataModel

