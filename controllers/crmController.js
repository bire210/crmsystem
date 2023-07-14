const { employeeModel } = require("../models/employeModel");
const { enquiryModel } = require("../models/enquiryModel");


// Controller for enquiry 
const enquiryControler = async (req, res) => {
  const { name, email, courseInterest } = req.body;

  try {
    // Save the enquiry to the database
    const newEnquiry = new enquiryModel({
      name,
      email,
      courseInterest,
    });

    await newEnquiry.save();

    res.status(201).json({ message: "Enquiry saved successfully" });
  } catch (error) {
    console.error("Error saving enquiry:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



// claim leads controller

const claimLeadsController=async (req, res) => {
    const { leadId } = req.params;
    const { employeeEmail } = req;
  
    try {
      // Find the employee
      const employee = await employeeModel.findOne({ email: employeeEmail });
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
  
      // Find the enquiry and update the claimedBy field
      const enquiry = await enquiryModel.findByIdAndUpdate(
        leadId,
        { claimedBy: employee._id },
        { new: true }
      );
  
      if (!enquiry) {
        return res.status(404).json({ message: 'Enquiry not found' });
      }
  
      res.status(200).json({ message: 'Lead claimed successfully' });
    } catch (error) {
      console.error('Error claiming lead:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }


  // Controller to fetch unclaimed leads

  const fetchUnclaimedLead=async (req, res) => {
    try {
      // Find all unclaimed leads
      const leads = await enquiryModel.find({ claimedBy: null });
  
      res.status(200).json({ leads });
    } catch (error) {
      console.error('Error fetching unclaimed leads:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }



  // Controller to fetch leads claimed by the logged-in user

  const fetchClaimedByLoggedUser= async (req, res) => {
    const { employeeEmail } = req;
  
    try {
      // Find the employee
      const employee = await employeeModel.findOne({ email: employeeEmail });
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
  
      // Find all leads claimed by the employee
      const leads = await enquiryModel.find({ claimedBy: employee._id }).populate("claimedBy", '-password');
  
      res.status(200).json({ leads });
    } catch (error) {
      console.error('Error fetching claimed leads:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }


module.exports = {
  enquiryControler,
  claimLeadsController,
  fetchUnclaimedLead,
  fetchClaimedByLoggedUser
};
