const { Schema, model } = require("mongoose");
const favouriteSchema = new Schema(
  {
    channel_title: { type: String, required: true },
    duration: { type: String, require: true },
    posted_at: { type: String, required: true },
    video_thumbnail: { type: String, required: true },
    video_title: { type: String, required: true },
    views: { type: String, required: true },
    user_id: { type: Schema.Types.ObjectId, ref: "user", required: true },
    video_id: { type: String, required: true },
  },
  {
    versionKey:false,
    timestamps:true
  }
);

module.exports = model("favourite", favouriteSchema);
