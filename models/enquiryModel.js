const mongoose = require('mongoose');

// Define Enquiry schema and model
const enquirySchema = new mongoose.Schema({
    name:{ type: String, required: true },
    email: { type: String, required: true },
    courseInterest:{ type: String, required: true },
    claimedBy: { type: mongoose.Schema.Types.ObjectId, default:null,ref: 'Employee' },
  });
  
  const enquiryModel = mongoose.model('Enquiry', enquirySchema);
  module.exports={enquiryModel}