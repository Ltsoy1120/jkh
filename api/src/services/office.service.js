const Office = require("../models/Office");

const officeService = {
  create: async officeData => {
    const office = await Office.create(officeData);
    return office;
  },
  edit: async (officeId, officeData) => {
    const office = await Office.findByIdAndUpdate(officeId, officeData);
    return office;
  },
  delete: async officeId => {
    const office = await Office.findByIdAndRemove(officeId);
    return office;
  },
  getOfficeById: async id => {
    const office = await Office.findById(id);
    return office;
  },
  getOfficesByCompany: async companyId => {
    const offices = await Office.find({ company: companyId });
    console.log("offices", offices);
    return offices;
  },
  getOffices: async () => {
    const offices = await Office.find();
    console.log("offices", offices);
    return offices;
  }
};

module.exports = officeService;
