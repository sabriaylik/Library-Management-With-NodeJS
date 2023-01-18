


const express = require("express");
const router = express.Router();
const BookController = require("../Controllers/Bookcontroller");


router.get("/allboks",BookController.AllBooks);
router.get("/:id",BookController.FindBook);
router.delete("/:id",BookController.DeleteBook);
router.post("/:id",BookController.UpdateBook);


module.exports = router;