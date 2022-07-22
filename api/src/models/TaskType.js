const { Schema, model } = require("mongoose");

const schema = new Schema({
  createDate: { type: String, required: true },
  name: { type: String, required: true },
  isActive: { type: Boolean, default: true, required: true },
  dispatcher: { type: Schema.Types.ObjectId, ref: "User" },
  performers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  company: { type: Schema.Types.ObjectId, ref: "Company" }
});

module.exports = model("TaskType", schema);
