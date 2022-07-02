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
router.get("/allposts", async (req, res) => {
  try {
    let result = await Post.find();
    res.status(200).json(result);
  } catch (error) {
    res.send(error);
  }
});

// get information by post id
router.get("/post/:id", async (req, res) => {
  try {
    
    const postId = req.params.id;
    let post = await Post.findOne({ _id: postId });
    if(!post){
      res.status(401).json({"message" : "post is not found"})
    }
    else{
      post = post.toObject();
      res.status(200).json(post);
    }
      
    
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
