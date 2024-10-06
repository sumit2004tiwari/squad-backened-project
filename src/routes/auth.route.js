const express = require("express");
const authController = require("../controller/auth.controller");
const propertyController  = require("../controller/property.controller");
const validation = require("../middelware/validation.middleware")
const router = express.Router();

// validation route since login
router.get("/validation" ,  validation.validate)

// user router 
router.post("/submit", authController.registerUser);
router.post("/login", authController.loginUser );
router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

// property router 

router.post("/property" ,validation.validate , propertyController.propertyData);

module.exports = router;
