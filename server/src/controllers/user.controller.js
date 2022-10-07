const User = require("../models/user.model");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    return res.status(200).send(user);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = router;
