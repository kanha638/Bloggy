const router = require("express").Router();

const postController = require("../controllers/posts.controller");

// models import

const Post = require("../models/Post");
// Upload

router.post("/upload", postController.uploadPost);
// Get All posts using get api
router.get("/allposts", postController.getAllPost);
// get information by post id
router.get("/:id", postController.getOnePost);
router.delete("/:id", postController.deletePost);
module.exports = router;
