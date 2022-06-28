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
        "https://www.pngitem.com/pimgs/m/79-791921_male-profile-round-circle-users-profile-round-icon.png",
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", UserSchema);
