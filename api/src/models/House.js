const { Schema, model } = require("mongoose");

const schema = new Schema({
  address: { type: String, required: true },
  geo: { type: String },
  timezone: { type: String },
  cadastralNumber: { type: String },
  fiasCode: { type: String },
  yearOfCommissioning: { type: String },
  totalArea: { type: String },
  numberOfFloors: { type: Number },
  numberOfUnderFloors: { type: Number },
  culturalStatus: { type: String },
  condition: { type: String },
  lifeCicleStage: { type: String },
  energyEfficiencyClass: { type: String },
  classAddedDate: { type: String },
  typeOfControl: { type: String },
  basisOfControl: { type: String },
  startDate: { type: String },
  endDate: { type: String },
  countOfAccounts: { type: Number },
  countOfApartments: { type: Number },
  comments: { type: String },
  docs: [{ type: String }],
  photos: [{ type: String }],
  company: { type: Schema.Types.ObjectId, ref: "Company" }
});

module.exports = model("House", schema);
