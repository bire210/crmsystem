

const express=require("express");
const { authenticate } = require("../midilewares/authenticateMidileware");
const { enquiryControler, claimLeadsController, fetchUnclaimedLead, fetchClaimedByLoggedUser } = require("../controllers/crmController");

const crmRouter=express.Router();



// Public form API to capture leads
crmRouter.post("/enquiry",enquiryControler)


// API to claim leads
crmRouter.patch("/leads/:leadId/claim",authenticate,claimLeadsController)


// API to fetch unclaimed leads
crmRouter.get("/leads/unclaimed",authenticate,fetchUnclaimedLead)

// API to fetch leads claimed by the logged-in user
crmRouter.get("/leads/claimed",authenticate,fetchClaimedByLoggedUser)

module.exports={crmRouter}