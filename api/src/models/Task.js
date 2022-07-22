const { Schema, model } = require("mongoose");

const schema = new Schema({
  createDate: { type: String, required: true },
  number: { type: Number, required: true },
  basisForTask: { type: String, required: true },
  numberOfBasis: { type: String, required: true },
  taskName: { type: String, required: true },
  priority: {
    type: String,
    enum: ["Критический", "Высокий", "Средний"],
    default: "Средний"
  },
  taskType: { type: String },
  deadline: { type: String },
  newDeadline: { type: String },
  reasonOfPostpone: { type: String },
  remindOfDeadline: { type: Boolean, default: false },
  remindHow: { type: String },
  remindWho: { type: String },
  remindWhen: { type: String },
  remindDays: { type: String },
  address: { type: String },
  numberOfApartment: { type: String },
  text: { type: String },
  files: [{ type: String }],
  dispatcher: { type: Schema.Types.ObjectId, ref: "User" },
  performers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  observers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  status: {
    type: String,
    enum: ["Новая", "В работе", "Отложена", "Выполнена", "Отменена"],
    default: "Новая"
  },
  resultComment: { type: String },
  resultCommentDate: { type: String },
  resultFiles: [{ type: String }],
  reasonForCancel: { type: String },
  company: { type: Schema.Types.ObjectId, ref: "Company" }
});

module.exports = model("Task", schema);
