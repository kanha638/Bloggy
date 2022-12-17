const router = require("express").Router();

const postController = require("../controllers/posts.controller");

// models import

const Post = require("../models/Post");
const { upload } = require("../middleware/multerUploader");
// Upload

router.post("/upload", upload.single("file"), postController.uploadPost);
// Get All posts using get api
router.get("/allposts", postController.getAllPost);
// get information by post id
router.get("/:id", postController.getOnePost);
router.delete("/:id", postController.deletePost);
module.exports = router;
