// require("dotenv").config()
require("./Models/DBConnect");
// const User = require("./Models/User");
// const Author = require("./Models/Author");
// const Book = require("./Models/Book");
// const Loan = require("./Models/Loan");

const express = require("express");
const UserRouter = require("./Routers/UserRouter");
const AuthorRouter = require("./Routers/AuthorRouter");
const BookRouter = require("./Routers/BookRouter");
const LoanRouter = require("./Routers/LoanRouter");
const PORT = process.env.PORT || 3000 ;
const app = express();


app.use(express.json())



app.use("/api/user/",UserRouter);
app.use("/api/author/",AuthorRouter);
app.use("/api/book/",BookRouter);
app.use("/api/loan/",LoanRouter);


app.listen(PORT ,()=>{
    console.log("App is running on ",PORT)
}
)

