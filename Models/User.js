


console.log("\n User Module...");
const mongoose = require("mongoose");





const User = mongoose.model(
    "User",
    new mongoose.Schema({
        // _id: mongoose.Schema.Types.ObjectId,
        Username : String,
        Password : String,
        Mail : String,
        Phone : String,
        Book : {
            type:mongoose.Schema.Types.ObjectId,
            ref : "Book"
        },
        Role : {
            type:String,
            enum : ["Admin","User"],
            default : "User"
        }
    })
)

module.exports = User;






