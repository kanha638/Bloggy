const router = require("express").Router();
const { response } = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");

// User Resistration

router.post("/register", async (req, resp) => {
  try {
    const user1 = await User.findOne({ email: req.body.email });
    if (!user1) {
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
    } else {
      resp.status(400).json("user already present with this email");
    }
  } catch (err) {
    return resp.status(505).json(err);
  }
});

// User Login

router.post("/login", async (req, resp) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return resp.status(400).json({ alert: "wrong credintials" });
    }
    const check = await bcrypt.compare(req.body.password, user.password);
    if (!check) {
      return resp.status(400).json({ alert: "wrong credintials" });
    }
    user = user.toObject();
    delete user.password;
    return resp.status(200).json(user);
  } catch (error) {
    return resp.status(501).json(error);
  }
});
module.exports = router;
