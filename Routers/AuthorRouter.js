const Author = require("../Models/Author");
const AuthorController = require("../Controllers/Authorcontroller");

const express = require("express");
const router = express.Router();

router.get("/allusers",AuthorController.GetAllUsers);

router.get("/allbooks",AuthorController.GetAllBooks);




module.exports = router;