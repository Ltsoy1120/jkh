const { Schema, model } = require("mongoose");

const schema = new Schema({
  createDate: { type: String, required: true },
  periodMonth: { type: String, required: true },
  periodYear: { type: String, required: true },
  device: { type: Schema.Types.ObjectId, ref: "Device", required: true },
  homeowner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  account: { type: Schema.Types.ObjectId, ref: "Account" },
  file: { type: String, required: true },
  status: {
    type: String,
    enum: ["Не оплачена", "На проверке", "Оплачена"],
    default: "Не оплачена"
  },
  sum: {
    type: Number,
    required: true
  }
});

module.exports = model("Receipt", schema);
