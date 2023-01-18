const mongoose = require("mongoose");
const Loan = require("../Models/Loan");





function LoanBook(req,res){
    let id = req.body.id;
    res.send(id);
}




module.exports = {
    LoanBook,
    
}