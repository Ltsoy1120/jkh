const { Schema, model } = require("mongoose");

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  lastName: { type: String, required: true },
  name: { type: String, required: true },
  patronymic: { type: String },
  registerDate: { type: String },
  dateOfBirth: { type: String },
  address: { type: String },
  avatar: { type: String },
  account: { type: String },
  phones: [{ type: String }],
  position: { type: String },
  role: { type: String, required: true, default: "user" },
  // typeOfPayer: { type: String }, //payer
  company: { type: Schema.Types.ObjectId, ref: "Company" },
  contractor: { type: Schema.Types.ObjectId, ref: "Contractor" },
  isActive: { type: Boolean }, //employee
  department: { type: String }, //employee
  subordinates: [{ type: String }], //employee
  typesOfRequests: { type: String }, //employee
  nameOfRequests: { type: String }, //employee
  sendPassword: { type: Boolean }, //employee
  fullnameInParent: { type: String }, //leader
  basisForAppointment: { type: String } //leader
  // startDateOfOwnership: { type: String }, //owner
  // shareOfOwnership: { type: String }, //owner
  // statusOfOwnership: { type: String } //owner
});

module.exports = model("User", schema);
