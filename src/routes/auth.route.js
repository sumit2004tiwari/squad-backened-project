const express = require("express");
const authController = require("../controller/auth.controller");
const InputFieldValidate = require("../middelware/InputFieldValiditor.middelware")
const {signupValidationRules , loginVAlidationRules } = require("../middelware/InputFieldValiditor.middelware")
const router = express.Router();



// user router 
router.post("/submit" , authController.registerUser);
router.patch("/login" ,  authController.loginUser );
router.post("/forgotPassword" , authController.forgotPassword);
router.patch("/resetPassword/:token" , authController.resetPassword);
router.patch("/logout" , authController.logoutUser)


module.exports = router;
