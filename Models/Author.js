

console.log("\n Author Module...");





const  mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : {type:String,required:true},
    books : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Book"
    },
    about : {type:String}
})





const Author = mongoose.model("Author",AuthorSchema);


module.exports = Author;

