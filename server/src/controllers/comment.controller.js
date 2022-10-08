const router = require("express").Router();
const Comment = require("../models/comment.model");

router.get("/", async (req, res) => {
  try {
    const {videoId} = req.query;
    const comments = await Comment.find({videoId:videoId}).lean().exec();
    return res.status(200).send({ status: "success", comments: comments });
  } catch (err) {
    return res.status(400).send({ status: "error", message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    return res.status(200).send({ status: "success", comment: comment });
  } catch (err) {
    return res.status(400).send({ status: "error", message: err.message });
  }
});

module.exports = router;