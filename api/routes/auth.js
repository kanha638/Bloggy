const router = require("express").Router();
const { response } = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const authController = require("../controllers/auth.controller");

// User Resistration
router.post("/register", authController.userRegister);

// User Login
router.post("/login", authController.userlogin);

module.exports = router;
