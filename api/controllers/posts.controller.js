const mongoose = require("mongoose");
const Post = require("../models/Post");

const uploadPost = async (req, res) => {
  try {
    const { title, desc, author } = req.body;
    const image_urn = req.file?.filename;
    // console.log(req.body);
    // const result = "hello";
    console.log(image_urn);
    let result = new Post({
      authorid: author,
      title: title,
      Desc: desc,
      image_urn: image_urn,
    });
    result = await result.save();
    // console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res.send(error);
  }
};
const getAllPost = async (req, res) => {
  try {
    let result = await Post.find();
    res.status(200).json(result);
  } catch (error) {
    res.send(error);
  }
};
const getOnePost = async (req, res) => {
  try {
    const token = req.cookies.accessToken;
    console.log(token);
    const postId = req.params.id;
    let post = await Post.findOne({ _id: postId });
    if (!post) {
      res.status(401).json({ message: "post is not found" });
    } else {
      post = post.toObject();
      res.status(200).json(post);
    }
  } catch (error) {
    res.send(error);
  }
};

const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Post.findById(id);
    if (result) {
      const requserid = req.body.userid;
      if (requserid === result.authorid) {
        await Post.deleteOne({ _id: id });
      } else {
      }
    } else {
      return res.status(501).json({ message: "post does not exist" });
    }
  } catch (error) {
    return res
      .status(501)
      .json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { uploadPost, getAllPost, getOnePost, deletePost };
