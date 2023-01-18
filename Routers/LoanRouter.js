const Loan = require("../Models/Loan");
const LoanController = require("../Controllers/Loancontroller");
const express = require("express");
const router = express.Router();


router.get("/loanbook/:id",LoanController.LoanBook);






module.exports = router;