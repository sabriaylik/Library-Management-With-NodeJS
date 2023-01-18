const express = require("express");
const UserController = require("../Controllers/Usercontroller");
const router = express.Router();


router.post("/login",UserController.Login);
router.post("/register",UserController.Register);


module.exports = router;