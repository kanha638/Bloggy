const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
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
      type: String,
      default: "Hey! there",
    },
    profpic: {
      type: String,
      default:
        "https://as2.ftcdn.net/v2/jpg/03/32/59/65/1000_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg",
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", UserSchema);
