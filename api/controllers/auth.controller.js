const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("../models/User");

const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    if (name && email && password) {
      User.findOne({ email: email }).exec((err, result) => {
        if (err) {
          console.log(err._message);
          return res
            .status(err.staus)
            .json({ success: false, message: "DataBase Error" });
        }
        if (result) {
          return res
            .status(402)
            .json({ success: false, message: "User is Already Present" });
        }

        console.log(hashedPassword);

        let user = new User({
          name: name,
          email: email,
          password: hashedPassword,
        });
        user.save((err, data) => {
          if (err) {
            return res
              .status(501)
              .json({ success: false, message: "Internal Server Error1" });
          }
          data.toObject();
          delete data.password;
          return res.status(200).json({ success: true, data: data });
        });
      });
    }
  } catch (error) {
    res.status(501).json({ success: false, message: "Internal Server Error2" });
  }
};

const userlogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (user) {
      const check = await bcrypt.compare(password, user.password);
      if (check) {
        user.toObject();
        delete user.password;
        return res.status(200).json({ success: true, data: user });
      } else {
        return res
          .status(400)
          .json({ success: false, message: "wrong credentials" });
      }
    } else {
      return res
        .status(400)
        .json({ success: false, message: "wrong credentials" });
    }
  } catch (error) {
    return res
      .status(501)
      .json({ success: false, message: "Internal Server Error2" });
  }
};

module.exports = { userRegister, userlogin };
