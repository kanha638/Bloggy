const router = require("express").Router();
const mongoose = require("mongoose");
const { rawListeners } = require("npmlog");

const User = require("../models/User");

router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    let user = await User.findOne({ _id: userId });
    if (user) {
      user = user.toObject();
      delete user.password;
      delete user.createdAt;
      delete user.updatedAt;
      res.status(200).json(user);
    } else {
      res.status(401).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
