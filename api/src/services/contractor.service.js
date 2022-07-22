const ApiError = require("../exceptions/api-error");
const Contractor = require("../models/Contractor");
const userService = require("./user.service");

const contractorService = {
  create: async contractorData => {
    const candidate = await Contractor.findOne({
      contractorName: contractorData.contractorName
    });
    if (candidate) {
      throw ApiError.BadRequest("Такой подрядчик уже существует");
    }
    const contractor = await Contractor.create(contractorData);
    return contractor;
  },
  addHead: async (contractorId, headId) => {
    const contractor = await Contractor.findById(contractorId);
    contractor.head = headId;
    await contractor.save();
    return contractor;
  },
  getContractorsByCompany: async companyId => {
    const contractors = await Contractor.find({ company: companyId }).populate(
      "head"
    );
    return contractors;
  },
  deleteContractor: async contractorId => {
    const contractor = await Contractor.findByIdAndRemove(contractorId);
    contractor.head && (await userService.deleteUser(contractor.head._id));
    return contractor;
  },
  getContractorById: async id => {
    const contractor = await Contractor.findById(id).populate("head");
    return contractor;
  },
  editContractor: async (id, contractorData) => {
    const contractor = await Contractor.findByIdAndUpdate(id, contractorData);
    return contractor;
  },
  editHead: async (contractorId, headData) => {
    const contractor = await Contractor.findById(contractorId);
    const headId = contractor.head._id;
    await userService.editUser(headId, headData);
    await contractor.save();
    return contractor;
  },
  addRequisites: async (contractorId, requisitesData) => {
    const contractor = await Contractor.findById(contractorId);
    contractor.requisites = requisitesData;
    await contractor.save();
    return contractor;
  },
  editRequisites: async (contractorId, requisitesData) => {
    const contractor = await Contractor.findById(contractorId);
    contractor.requisites = requisitesData;
    await contractor.save();
    return contractor;
  },
  addTypesOfWork: async (contractorId, typesOfWorkData) => {
    const contractor = await Contractor.findById(contractorId);
    contractor.typesOfWork = typesOfWorkData;
    await contractor.save();
    return contractor;
  },
  editTypesOfWork: async (contractorId, typesOfWorkData) => {
    const contractor = await Contractor.findById(contractorId);
    contractor.typesOfWork = typesOfWorkData;
    await contractor.save();
    return contractor;
  },
  getAllContractors: async () => {
    const contractors = await Contractor.find().populate("head");
    return contractors;
  }

  // deleteLeader: async companyId => {
  //   const company = await Company.findById(companyId);
  //   const deletedUser = await userService.deleteUser(company.leader._id);
  //   company.leader = null;
  //   await company.save();
  //   return company, deletedUser;
  // },

  // getCompanies: async () => {
  //   const companies = await Company.find().populate("leader");
  //   console.log("companies", companies);
  //   return companies;
  // }
};

module.exports = contractorService;
