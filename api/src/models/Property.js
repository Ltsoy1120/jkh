const { Schema, model } = require("mongoose");

const schema = new Schema({
  subject: { type: Schema.Types.ObjectId, ref: "Subject" },
  startDateOfOwnership: { type: String },
  endDateOfOwnership: { type: String },
  statusOfOwnership: { type: String },
  registerNumber: { type: String },
  accountNumber: { type: String },
  address: { type: String },
  numberOfApartment: { type: String },
  account: { type: Schema.Types.ObjectId, ref: "Account" },
  shareOfOwnership: { type: String },
  statusOfOwnership: { type: String },
  comment: { type: String },
  docs: [{ type: String }]
});

module.exports = model("Property", schema);
