const router = require("express").Router();
const mongoose = require("mongoose");

// models import

const Post = require("../models/Post");
// Upload

router.post("/upload", async (req, res) => {
  try {
    let result = new Post(req.body);
    result = await result.save();
    res.status(200).json(result);
  } catch (error) {
    res.send(error);
  }
});

// Get All posts using get api

module.exports = router;
