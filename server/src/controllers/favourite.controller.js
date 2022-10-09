const router = require("express").Router();
const Favourite = require("../models/favourite.model");

router.post("/", async (req, res) => {
  try {
    const { user_id, video_id } = req.query;
    let video = await Favourite.findOne({
      user_id: user_id,
      video_id: video_id,
    });
    if (video) {
      return res.status(400).send({
        status: "error",
        message: "Video is already present in the Favorite section",
      });
    }

    video = await Favourite.create(req.body);
    return res.status(200).send({
      status: "success",
      message: "Video is added to the liked videos section",
      del_id:video._id
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
    const favourite = await Favourite.find({ user_id: user_id }).sort({
      createdAt: -1,
    });
    return res.status(200).send({ status: "success", favourite: favourite });
  } catch (err) {
    return res.status(400).send({ status: "error", message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const favourite = await Favourite.findByIdAndDelete(req.params.id, {
      new: 1,
    });
    return res
      .status(200)
      .send({
        status: "success",
        message: "Video is Disliked",
        description: "This video is disliked successfully",
        favourite:favourite
      });

  } catch (err) {
    return res.status(400).send({status:"error",message:err.message})
  }
});

module.exports = router;
