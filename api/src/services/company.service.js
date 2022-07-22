const Company = require("../models/Company");
const officeService = require("./office.service");
const userService = require("./user.service");

const companyService = {
  create: async companyData => {
    const company = await Company.create(companyData);
    return company;
  },
  addLeader: async (companyId, leaderId) => {
    console.log("leaderId", leaderId);

    const company = await Company.findById(companyId);
    company.leader = leaderId;
    await company.save();
    return company;
  },
  addRequisites: async (companyId, requisitesData) => {
    const company = await Company.findById(companyId);
    company.requisites = requisitesData;
    await company.save();
    return company;
  },
  addOffice: async (companyId, officeId) => {
    const company = await Company.findById(companyId);
    company.offices.push(officeId);
    await company.save();
    return company;
  },
  addContractor: async (companyId, contractorId) => {
    const company = await Company.findById(companyId);
    company.contractors.push(contractorId);
    await company.save();
    return company;
  },
  editCompany: async (id, companyData) => {
    const company = await Company.findByIdAndUpdate(id, companyData);
    return company;
  },
  editLeader: async (companyId, leaderData) => {
    const company = await Company.findById(companyId);
    const leaderId = company.leader._id;
    await userService.editUser(leaderId, leaderData);
    await company.save();
    return company;
  },
  editRequisites: async (companyId, requisitesData) => {
    const company = await Company.findById(companyId);
    company.requisites = requisitesData;
    await company.save();
    return company;
  },
  deleteCompany: async companyId => {
    const company = await Company.findByIdAndRemove(companyId);
    company.leader && (await userService.deleteUser(company.leader._id));
    company.offices &&
      (await company.offices.map(office => officeService.delete(office._id)));
    return company;
  },
  deleteLeader: async companyId => {
    const company = await Company.findById(companyId);
    const deletedUser = await userService.deleteUser(company.leader._id);
    company.leader = null;
    await company.save();
    return company, deletedUser;
  },
  deleteOffice: async (companyId, officeId) => {
    const company = await Company.findById(companyId);
    company.offices.pull(officeId);
    await company.save();
    await officeService.delete(officeId);
    return company;
  },
  getCompanyById: async id => {
    const company = await Company.findById(id)
      .populate("leader")
      .populate("offices");
    return company;
  },
  getCompanyWithContractors: async id => {
    const company = await Company.findById(id).populate({
      path: "contractors",
      populate: {
        path: "head",
        model: "User"
      }
    });
    return company;
  },
  getCompanies: async () => {
    const companies = await Company.find().populate("leader");
    console.log("companies", companies);
    return companies;
  }
};

module.exports = companyService;
