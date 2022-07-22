const { Schema, model } = require("mongoose");

const schema = new Schema({
  number: { type: Number, required: true },
  createDate: { type: String, required: true },
  theme: { type: String, required: true },
  client: { type: Schema.Types.ObjectId, ref: "User", required: true },
  notifier: { type: Schema.Types.ObjectId, ref: "User", required: true },
  text: { type: String, required: true }
});

module.exports = model("Notification", schema);
