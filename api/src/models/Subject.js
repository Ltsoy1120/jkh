const { Schema, model } = require("mongoose");

const schema = new Schema({
  //generalData
  registerDate: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  lastName: { type: String, required: true },
  name: { type: String, required: true },
  patronymic: { type: String },
  dateOfBirth: { type: String },
  gender: { type: String },
  phones: [{ type: String }],
  placeOfWork: { type: String },
  workPhone: { type: String },
  type: { type: String },
  isActive: { type: Boolean },
  company: { type: Schema.Types.ObjectId, ref: "Company" },
  // passportData
  passportSeries: { type: String },
  passportNumber: { type: String },
  departmentCode: { type: String },
  dateOfIssue: { type: String },
  issuedBy: { type: String },
  // propertyData
  properties: [{ type: Schema.Types.ObjectId, ref: "Property" }],
  // registerData
  startDateOfRegister: { type: String },
  endDateOfRegister: { type: String },
  registerAccount: { type: Schema.Types.ObjectId, ref: "Account" },
  registerStatus: { type: String },
  reasonOfLeaving: { type: String },
  reasonForArrival: { type: String },
  previosRegisterPlace: { type: String },
  newRegisterPlace: { type: String },
  registerComment: { type: String },
  registerDocs: [{ type: String }]
});

module.exports = model("Subject", schema);
