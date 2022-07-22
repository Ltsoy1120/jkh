const { Schema, model } = require("mongoose");

const schema = new Schema({
  numberOfEntrance: { type: String, required: true },
  conditionOfEntrance: String,
  yearOfConstruction: String,
  numberOfFloors: { type: String, required: true },
  apartmentsFromTo: { type: String, required: true },
  house: { type: Schema.Types.ObjectId, ref: "House" }
});

module.exports = model("Entrance", schema);
