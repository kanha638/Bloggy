const router = require("express").Router();
// const { response } = require("express");
const User = require("../models/User");

// User Resistration

router.post("/register", async (req, resp) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const user = new User({ name, email, password });
    const newuser = await user.save();
    return resp.status(200).json(newuser);
  } catch (err) {
    return resp.status(505).json(err);
  }
});

// User Login

module.exports = router;
