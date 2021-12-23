const express = require("express");
const router = express.Router();
const postControllers = require("../controllers/post.controller");

// @route GET && POST - /posts
router
  .route("/")
  .get(postControllers.getAllPosts)
  .post(postControllers.createPost);

router.route("/:id").get(postControllers.getPostById);

module.exports = router;
