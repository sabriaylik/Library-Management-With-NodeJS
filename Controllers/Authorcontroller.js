const mongoose = require("mongoose");
const Author = require("../Models/Author");
const User = require("../Models/User");
const Book = require("../Models/Book");


const GetAllUsers = function(req,res){
  
    User.find({}, function(err, users) {
        var userMap = {};
        users.forEach(function(user) {
          userMap[user._id] = user;
        });
    
        res.send(userMap);  
      });
    }

const GetAllBooks = function(req,res){
    Book.find().exec(function(users){
        res.send(users);
    })
    }




module.exports = {
    GetAllUsers,
    GetAllBooks ,
}