const { Schema, model } = require("mongoose");

const schema = new Schema({
  createDate: { type: String, required: true },
  numberOfApartment: { type: String, required: true },
  numberOfEntrance: { type: String },
  cadastralNumber: { type: String },
  typeOfApartment: { type: String },
  characteristic: { type: String },
  totalArea: { type: String },
  livingArea: { type: String },
  account: { type: String },
  accountArea: { type: String },
  house: { type: Schema.Types.ObjectId, ref: "House" }
});

module.exports = model("Apartment", schema);
