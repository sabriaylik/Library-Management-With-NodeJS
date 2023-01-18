 

console.log("\n Loan Module...");
const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema({
    User : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    LoanDate : {type:Date,default: new Date(),required:true},
    DueDate : {type:Date,default : ()=> {
                    const today =new Date();
                    return today.setDate(today.getDate()+15);
                    },
                    required:true
},
    Punishment : {type : Number}
})


const Loan = mongoose.model("Loan",LoanSchema);

module.exports = Loan;
