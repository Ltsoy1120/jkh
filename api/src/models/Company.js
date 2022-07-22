const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phones: [String],
  timezone: { type: String },
  domen: { type: String },
  website: { type: String },
  logo: { type: String },
  createDate: { type: String, required: true },
  leader: { type: Schema.Types.ObjectId, ref: "User" },
  requisites: {
    ogrn: String,
    inn: String,
    kpp: String,
    bankName: String,
    bik: String,
    paymentAccount: String,
    correspondentAccount: String
  },
  offices: [{ type: Schema.Types.ObjectId, ref: "Office" }],
  contractors: [{ type: Schema.Types.ObjectId, ref: "Contractor" }]
});

module.exports = model("Company", schema);
