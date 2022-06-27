const router = require("express").Router();
// const { response } = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");

// User Resistration

router.post("/register", async (req, resp) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    let result = await user.save();
    result = result.toObject();
    delete result.password;

    return resp.status(200).json(result);
  } catch (err) {
    return resp.status(505).json(err);
  }
});

// User Login

module.exports = router;
