const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mogoose.model("categories", CategorySchema);
