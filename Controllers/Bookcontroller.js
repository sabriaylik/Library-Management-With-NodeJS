const { json } = require("express");
const mongoose = require("mongoose");
const Book = require("../Models/Book");

const FindBook = async (req,res) => {

    let id = req.params.id;
    Book.findById(id).exec(function(err,value){
        res.status(200).json({
            success : true,
            data    : value
        });
    })
    
    // });
}


const DeleteBook = async (req,res) => {
    Book.findByIdAndDelete(req.params.id).exec()
    .then(result => {
        res.status(200).json({
            success : true,
            message : "Book is delete."
        })
    })
}



const UpdateBook = async (req,res) => {
    Book.findByIdAndUpdate(req.params.id,req.body)
    .then(()=>{
        res.status(200).send("Book is updated...");
    })
    .catch((err) => {
        res.status(404).send(err);
    })
}


const AllBooks = async (req,res) => {
    const values = await Book.find()
}

module.exports = {
    FindBook,
    DeleteBook,
    UpdateBook,
    AllBooks,
}

