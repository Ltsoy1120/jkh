const { Schema, model } = require("mongoose");

const schema = new Schema({
  number: { type: Number, required: true },
  text: { type: String },
  sender: { type: Schema.Types.ObjectId, ref: "Subject" },
  dispatcher: { type: Schema.Types.ObjectId, ref: "User" },
  contractor: { type: Schema.Types.ObjectId, ref: "Contractor" },
  performer: { type: Schema.Types.ObjectId, ref: "User" },
  address: { type: String, required: true },
  numberOfApartment: { type: String, required: true },
  senderFullName: { type: String },
  account: { type: Schema.Types.ObjectId, ref: "Account" },
  phone: { type: String, required: true },
  status: {
    type: String,
    enum: ["Новое", "В работе", "Отложено", "Выполнено", "Отменено"],
    default: "Новое"
  },
  priority: {
    type: String,
    enum: ["Критический", "Высокий", "Средний"],
    default: "Средний"
  },
  type: {
    type: String,
    enum: [
      "Жалоба",
      "Вопрос",
      "Предложение",
      "Уведомление",
      "Претензия",
      "Запрос",
      "Перерасчет"
    ]
  },
  createDate: { type: String, required: true },
  workDate: { type: String },
  doneDate: { type: String },
  result: { type: String },
  resultComment: { type: String },
  resultFiles: [{ type: String }],
  reasonForCancel: { type: String },
  grade: { type: Number },
  files: [{ type: String }],
  needAnswer: { type: Boolean, default: false },
  company: { type: Schema.Types.ObjectId, ref: "Company" }
});

module.exports = model("Appeal", schema);
