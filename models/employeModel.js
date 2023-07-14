const mongoose = require('mongoose');

// Define Employee schema and model
const employeeSchema = new mongoose.Schema({
   name: { type: String, required: true },
    email: { type: String, unique: true,required: true },
    password: { type: String, required: true },
  });
  
  const employeeModel = mongoose.model('Employee', employeeSchema);
  module.exports={employeeModel}