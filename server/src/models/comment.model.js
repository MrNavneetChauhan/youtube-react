const { Schema, model } = require("mongoose");
const commentSchema = new Schema(
  {
    comment: { type: String, required: true },
    profile: { type: String, required: true },
    videoId: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("comment", commentSchema);
