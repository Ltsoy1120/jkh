const { Schema, model } = require("mongoose");

const schema = new Schema({
  address: { type: String, required: true },
  numberOfApartment: { type: String, required: true },
  number: { type: Number, required: true, unique: true },
  type: { type: String },
  manufacturer: { type: String },
  model: { type: String },
  location: { type: String, required: true },
  isSeal: { type: Boolean },
  installationDate: { type: String },
  dateOfSealing: { type: String },
  commissioningDate: { type: String },
  periodOfCheck: { type: String },
  checkDate: { type: String },
  assignment: {
    type: String,
    enum: [
      "Холодная вода",
      "Горячая вода",
      "Электроэнергия",
      "Тепловая энергия"
    ],
    required: true
  },
  docs: [{ type: String }],
  tariff: {
    type: String,
    required: true,
    default: "Однотарифный"
  },
  firstData: { type: Number },
  firstDataDay: { type: Number },
  firstDataNight: { type: Number },
  firstDataT1: { type: Number },
  firstDataT2: { type: Number },
  firstDataT3: { type: Number },
  lastData: { type: Number },
  lastDataDay: { type: Number },
  lastDataNight: { type: Number },
  lastDataT1: { type: Number },
  lastDataT2: { type: Number },
  lastDataT3: { type: Number },
  difference: { type: Number },
  differenceDay: { type: Number },
  differenceNight: { type: Number },
  differenceT1: { type: Number },
  differenceT2: { type: Number },
  differenceT3: { type: Number },
  periodOfNoData: { type: String },
  checkMessage: { type: String },
  account: { type: Schema.Types.ObjectId, ref: "Account", required: true },
  company: { type: Schema.Types.ObjectId, ref: "Company", required: true }
});

module.exports = model("Device", schema);
