/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.post("/signin", UserController.SignIn);
router.post("/signup", UserController.SignUp)
router.get("/confirmation/:token", UserController.ConfirmMail);

module.exports = router;