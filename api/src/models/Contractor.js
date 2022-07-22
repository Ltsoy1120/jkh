const { Schema, model } = require("mongoose");

const schema = new Schema({
  contractorName: { type: String, required: true },
  address: { type: String, required: true },
  phones: [String],
  logo: { type: String },
  isActive: { type: Boolean },
  typesOfWork: [String],
  createDate: { type: String, required: true },
  head: { type: Schema.Types.ObjectId, ref: "User" },
  requisites: {
    ogrn: String,
    inn: String,
    kpp: String,
    bankName: String,
    bik: String,
    paymentAccount: String,
    correspondentAccount: String
  },
  companies: [{ type: Schema.Types.ObjectId, ref: "Company" }]
});

module.exports = model("Contractor", schema);
