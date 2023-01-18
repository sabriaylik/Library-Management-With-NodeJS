
console.log("\n Book Module...");
const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name : {type:String,required:true},
    Year : {type:Date},
    Abstract : {type:String,required:true},
    Info : {type:String,required:true},
    Category :{type: [String],enum:["Action","Historical"]},
    Authors : {
        type:mongoose.Schema.Types.ObjectId,
        ref : "Author"
    },
    LoanInfo : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Loan"
    }
})

const Book = mongoose.model("Book",BookSchema);



module.exports = Book;










