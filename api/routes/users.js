const router = require("express").Router();
const mongoose = require("mongoose");
const { rawListeners } = require("npmlog");
const userController = require("../controllers/user.controller");

const User = require("../models/User");

// Getting the User from Its Id
router.get("/:id", userController.getUser);
// For update
router.put("/:id", userController.userUpdate);

module.exports = router;
