const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: string,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profdesc: {
      type: Text,
      default: "Hey! there",
    },
    profpic: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mogoose.model("users", UserSchema);
