const { Schema, model } = require("mongoose");

const schema = new Schema({
  number: { type: Number, required: true },
  office: { type: String },
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
  // homeowner: { type: Schema.Types.ObjectId, ref: "User", required: true },  //for client
  account: { type: Schema.Types.ObjectId, ref: "Account" },
  text: { type: String },
  files: [{ type: String }],

  dispatcher: { type: Schema.Types.ObjectId, ref: "User" },
  responsiblePerson: { type: Schema.Types.ObjectId, ref: "User" },
  status: {
    type: String,
    enum: ["Новое", "В обработке", "Отложено", "Выполнено", "Отменено"],
    default: "Новое"
  },
  result: { type: String },
  resultFile: { type: String },
  grade: { type: Number }
});

module.exports = model("Visit", schema);
