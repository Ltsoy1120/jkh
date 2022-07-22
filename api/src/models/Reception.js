const { Schema, model } = require("mongoose");

const schema = new Schema({
  number: { type: Number, required: true },
  createDate: { type: String, required: true },
  office: { type: Schema.Types.ObjectId, ref: "Office" },
  date: { type: String, required: true },
  time: { type: String, required: true },
  topic: {
    type: String,
    required: true,
    enum: [
      "Вопросы по квитанциям",
      "Личные вопросы",
      "Прочие вопросы",
      "Юридические вопросы",
      "Технические вопросы"
    ]
  },
  address: { type: String },
  numberOfApartment: { type: String },
  homeowner: { type: Schema.Types.ObjectId, ref: "Subject" }, //for client
  account: { type: Schema.Types.ObjectId, ref: "Account" },
  text: { type: String },
  files: [{ type: String }],
  visiterName: { type: String },
  visiterPhone: { type: String },
  dispatcher: { type: Schema.Types.ObjectId, ref: "User" },
  responsiblePerson: { type: Schema.Types.ObjectId, ref: "User" },
  status: {
    type: String,
    enum: ["На согласовании", "Согласован", "Завершен", "Отменен"],
    default: "На согласовании"
  },
  resultComment: { type: String },
  resultFiles: [{ type: String }],
  reasonForCancel: { type: String },
  grade: { type: Number },
  company: { type: Schema.Types.ObjectId, ref: "Company" }
});

module.exports = model("Reception", schema);
