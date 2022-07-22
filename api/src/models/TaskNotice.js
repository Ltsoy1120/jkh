const { Schema, model } = require("mongoose");

const schema = new Schema({
  isNoticeToPerformer: { type: Boolean, default: true, required: true },
  isNoticeToObserver: { type: Boolean, default: true, required: true },
  company: { type: Schema.Types.ObjectId, ref: "Company" }
});

module.exports = model("TaskNotice", schema);
