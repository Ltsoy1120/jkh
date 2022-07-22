const { Schema, model } = require("mongoose");

const schema = new Schema({
  number: { type: String, required: true },
  status: { type: String },
  name: { type: String },
  startDate: { type: String },
  endDate: { type: String },
  controlObjects: [String],
  scans: [{ type: String }],
  company: { type: Schema.Types.ObjectId, ref: "Company" }
});

module.exports = model("Contract", schema);
