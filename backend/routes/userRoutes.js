const express = require("express");
const router = express.Router();

const authController = require("./../controllers/authController");

router.post("/signup", authController.signup);
router.post("/login", authController.login);



//! PASSWORD FORGET & RESET
router.post('/forgetPassword', authController.forgetPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

module.exports = router;