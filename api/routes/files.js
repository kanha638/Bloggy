const router = require("express").Router();
const { model } = require("mongoose");
const filesController = require("../controllers/files.controller");

router.get("/blog/:key", filesController.getBlogImage);

module.exports = router;
