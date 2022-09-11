const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const cookie = require("cookie");

const userRegister = async (req, res) => {
  try {
    // res.cookie("hello", "hii", {
    //   httpOnly: true,
    // });
    console.log(req.body);
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    if (name && email && password) {
      User.findOne({ email: email }).exec((err, result) => {
        console.log(result);
        if (err) {
          // console.log(err._message);
          console.log(err);
          return res
            .status(502)
            .json({ success: false, message: "DataBase Error" });
        }
        if (result) {
          return res
            .status(402)
            .json({ success: false, message: "User is Already Present" });
        }

        // console.log(hashedPassword);
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
          let data1 = data.toObject();
          delete data1.password;
          const accessToken = jwt.sign({ data1 }, process.env.JWT_SIGN_KEY, {
            expiresIn: "2d",
          });
          // console.log(accessToken);
          res.set(
            "Set-Cookie",
            cookie.serialize("token", accessToken, {
              httpOnly: true,
              secure: process.env.NODE_ENV === "production",
              sameSite: "strict",
              maxAge: 360000,
              path: "/", //cookie valid for whole site
            })
          );
          // console.log(accessToken);
          return res.status(200).json({ success: true, data: data1 });
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
        let user1 = user.toObject();
        delete user1.password;
        const accessToken = jwt.sign({ user1 }, process.env.JWT_SIGN_KEY, {
          expiresIn: "2d",
        });
        // console.log(accessToken);
        res.set(
          "Set-Cookie",
          cookie.serialize("token", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 360000,
            path: "/", //cookie valid for whole site
          })
        );
        return res.status(200).json({ success: true, data: user1 });
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

const userLogout = async (req, res) => {
  try {
    // res.set(
    //   "Set-Cookie",
    //   cookie.serialize("token", "", {
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV === "production",
    //     sameSite: "strict",
    //     expires: new Date(0),
    //     path: "/",
    //   })
    // );
    res.clearCookie("token");
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { userRegister, userlogin, userLogout };
