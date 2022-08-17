const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    Desc: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    authorid: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      default: ["sports"],
      required: false,
    },
    likes: {
      type: Array,
      default: [],
      required: false,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("posts", PostSchema);
