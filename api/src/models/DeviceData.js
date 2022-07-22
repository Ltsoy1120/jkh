const { Schema, model } = require("mongoose");

const schema = new Schema({
  createDate: { type: String, required: true },
  tariff: { type: String, required: true },
  periodMonth: { type: String },
  periodYear: { type: String },
  device: { type: Schema.Types.ObjectId, ref: "Device", required: true },
  account: { type: Schema.Types.ObjectId, ref: "Account" },
  lastData: { type: Number },
  lastDataDay: { type: Number },
  lastDataNight: { type: Number },
  lastDataT1: { type: Number },
  lastDataT2: { type: Number },
  lastDataT3: { type: Number },
  currentData: { type: Number },
  currentDataDay: { type: Number },
  currentDataNight: { type: Number },
  currentDataT1: { type: Number },
  currentDataT2: { type: Number },
  currentDataT3: { type: Number },
  difference: { type: Number },
  differenceDay: { type: Number },
  differenceNight: { type: Number },
  differenceT1: { type: Number },
  differenceT2: { type: Number },
  differenceT3: { type: Number }
});

module.exports = model("DeviceData", schema);
