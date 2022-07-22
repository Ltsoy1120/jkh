const { Schema, model } = require("mongoose");

const schema = new Schema({
  createDate: { type: String, required: true },
  number: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  numberOfApartment: { type: String, required: true },
  accountBalance: { type: String },
  totalArea: { type: String },
  livingArea: { type: String },
  heatedArea: { type: String },
  numberOfContract: { type: String },
  dateOfContract: { type: String },
  phones: [String],
  docs: [{ type: String }],
  payer: { type: Schema.Types.ObjectId, ref: "Subject" },
  owners: [{ type: Schema.Types.ObjectId, ref: "Subject" }],
  devices: [{ type: Schema.Types.ObjectId, ref: "Device" }],
  closeDate: { type: String },
  reasonOfClosing: { type: String },
  commentOfClosing: { type: String },
  company: { type: Schema.Types.ObjectId, ref: "Company" }
});

module.exports = model("Account", schema);
