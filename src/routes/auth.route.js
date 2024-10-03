const express = require("express");
const authController = require("../controller/auth.controller");
const router = express.Router();

router.post("/submit", authController.registerUser);
router.post("/login", authController.loginUser);
router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

module.exports = router;
