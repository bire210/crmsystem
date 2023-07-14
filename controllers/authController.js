const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config()
const {employeeModel}=require("../models/employeModel")

const registerControler = async (req, res) => {
    const { name,email, password } = req.body;

    try {
      // Check if the employee already exists
      const existingEmployee = await employeeModel.findOne({ email });
      if (existingEmployee) {
        return res.status(400).json({ message: 'Employee already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new employee
      const newEmployee = new employeeModel({
        name,
        email,
        password: hashedPassword,
      });
  
      // Save the employee to the database
      await newEmployee.save();
  
      res.status(201).json({ message: 'Employee registered successfully' });
    } catch (error) {
      console.error('Error registering employee:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  
};

const loginControler = async (req, res) => {
    const { email, password } = req.body;

    try {
      // Find the employee by email
      const employee = await employeeModel.findOne({ email });
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
  
      // Compare the password
      const passwordMatch = await bcrypt.compare(password, employee.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid password' });
      }
      
  
      // Generate a JWT token
      const token = jwt.sign({ email: employee.email }, process.env.JWT_KEY);
  
      res.status(200).json({ token });
    } catch (error) {
      console.error('Error logging in employee:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
  registerControler,
  loginControler,
};
