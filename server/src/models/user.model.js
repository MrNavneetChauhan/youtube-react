const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email_id: { type: String, rquired: true },
    accessToken: { type: String, required: true },
    image_url: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("user", userSchema);
