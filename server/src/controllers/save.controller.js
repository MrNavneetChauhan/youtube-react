const router = require("express").Router();
const Save = require("../models/save.model");

router.post("/", async (req, res) => {
  try {
    const { user_id, video_id } = req.query;
    let video = await Save.findOne({
      user_id: user_id,
      video_id: video_id,
    });
    if (video) {
      return res.status(400).send({
        status: "error",
        message: "Video is already present in the Save section",
      });
    }

    video = await Save.create(req.body);
    return res.status(200).send({
      status: "success",
      message: "Video is added to the save section",
    });
  } catch (err) {
    return res.status(400).send({
      status: "error",
      message: "Please check your internet connection",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const { user_id } = req.query;
    const save = await Save.find({ user_id: user_id }).sort({
      createdAt: -1,
    });
    return res.status(200).send({ status: "success", save: save });
  } catch (err) {
    return res.status(400).send({ status: "error", message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const save = await Save.findByIdAndDelete(req.params.id, {
      new: 1,
    });
    return res
      .status(200)
      .send({
        status: "success",
        message: "Video is removed",
        description: "This video is removed from saved list successfully",
        save:save
      });

  } catch (err) {
    return res.status(400).send({status:"error",message:err.message})
  }
});

module.exports = router;
