const jwt = require('jsonwebtoken');
require("dotenv").config()
// Middleware to verify JWT token
const authenticate = (req, res, next) => {
    let token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ message: 'Missing authorization token' });
    }
  
    try {
      // Verify the JWT token
      token=token.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      req.employeeEmail = decoded.email;
      next();
    } catch (error) {
      console.error('Error verifying token:', error);
      res.status(401).json({ message: 'Invalid authorization token' });
    }
  };

  module.exports={authenticate}