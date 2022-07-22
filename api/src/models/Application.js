const { Schema, model } = require("mongoose");

const schema = new Schema({
  number: { type: Number, required: true },
  type: { type: String },
  text: { type: String },
  address: { type: String, required: true },
  numberOfEntrance: { type: String },
  floor: { type: String },
  numberOfApartment: { type: String, required: true },
  applicantFullName: { type: String },
  accountNumber: { type: String },
  account: { type: Schema.Types.ObjectId, ref: "Account" },
  phone: { type: String, required: true },
  isPhoneBindToAccount: { type: Boolean },
  applicant: { type: Schema.Types.ObjectId, ref: "Subject" },
  dispatcher: { type: Schema.Types.ObjectId, ref: "User" },
  contractor: { type: Schema.Types.ObjectId, ref: "Contractor" },
  performer: { type: Schema.Types.ObjectId, ref: "User" },
  typeOfPerformer: { type: String },
  status: {
    type: String,
    enum: ["Новая", "В работе", "Отложена", "Выполнена", "Отменена"],
    default: "Новая"
  },
  priority: {
    type: String,
    enum: ["Критический", "Высокий", "Средний"],
    default: "Средний"
  },
  createDate: { type: String, required: true },
  workDate: { type: String },
  doneDate: { type: String },
  result: { type: String },
  resultComment: { type: String },
  resultFiles: [{ type: String }],
  reasonForCancel: { type: String },
  executionDateFrom: { type: String },
  executionDateTo: { type: String },
  completionDate: { type: String },
  files: [{ type: String }],
  grade: { type: Number },
  file: { type: String },
  company: { type: Schema.Types.ObjectId, ref: "Company" }
});

module.exports = model("Application", schema);
