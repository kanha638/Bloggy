const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const userUpdate = async (req, res) => {
  try {
    const { userId, name, profdesc, changedPassword, currentPassword } =
      req.body;
    if (userId && name && profdesc && currentPassword) {
      if (userId === req.params.id) {
        const user = await User.findOne({ _id: userId });
        if (user) {
          const check = await bcrypt.compare(currentPassword, user.password);
          if (check) {
            if (changedPassword) {
              const salt = await bcrypt.genSalt(12);
              const hashedPassword = await bcrypt.hash(changedPassword, salt);
              const result = await User.findByIdAndUpdate(
                { _id: userId },
                {
                  $set: {
                    name: name,
                    password: hashedPassword,
                    profdesc: profdesc,
                  },
                },
                { new: true }
              );
              if (result) {
                let result1 = await User.findOne({ _id: userId });
                result1 = result1.toObject();
                // console.log(result1);

                delete result1.password;

                return res.status(200).json({ success: true, data: result1 });
              } else {
                return res
                  .status(501)
                  .json({ success: false, message: "Internal Server Error" });
              }
            } else {
              const result = await User.findByIdAndUpdate(
                { _id: userId },
                {
                  $set: {
                    name: name,
                    profdesc: profdesc,
                  },
                },
                { new: true }
              );
              if (result) {
                let result1 = await User.findOne({ _id: userId });

                result1 = result1.toObject();
                // console.log(result1);
                delete result1.password;
                // console.log(result1);
                return res.status(200).json({ success: true, data: result1 });
              } else {
                return res.status(501).json({
                  success: false,
                  message: "Internal Server Error",
                });
              }
            }
          } else {
            return res
              .status(401)
              .json({ success: false, message: "Wrong Current Password" });
          }
        } else {
          return res.status(404).json({ success: false, message: "Not Found" });
        }
      } else {
        return res
          .status(401)
          .json({ success: false, message: "You are not authenticated" });
      }
    } else {
      return res
        .status(400)
        .json({ success: false, message: "feilds can not be empty" });
    }
  } catch (error) {
    return res
      .status(501)
      .json({ success: false, message: "Internal Sever Error" });
  }
};

module.exports = { userUpdate };
