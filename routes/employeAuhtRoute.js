const express=require("express");
const { registerControler, loginControler } = require("../controllers/authController");

const employeAuthRoute=express.Router();


// Route for Epmployee registration
employeAuthRoute.post("/register",registerControler)


// Route for Epmployee login
employeAuthRoute.post("/login",loginControler)

module.exports={employeAuthRoute}