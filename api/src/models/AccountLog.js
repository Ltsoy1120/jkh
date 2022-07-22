const { Schema, model } = require("mongoose");

const schema = new Schema({
  createDate: { type: String, required: true },
  createTime: { type: String, required: true },
  message: { type: String, required: true },
  author: { type: String },
  account: { type: Schema.Types.ObjectId, ref: "Account" }
});

module.exports = model("AccountLog", schema);
