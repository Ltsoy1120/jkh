const Contract = require("../models/Contract");

const contractService = {
  create: async contractData => {
    const contract = await Contract.create(contractData);
    return contract;
  },
  edit: async (contractId, contractData) => {
    const contract = await Contract.findByIdAndUpdate(contractId, contractData);
    return contract;
  },
  delete: async contractId => {
    const contract = await Contract.findByIdAndRemove(contractId);
    return contract;
  },
  getContractById: async id => {
    const contract = await Contract.findById(id);
    return contract;
  },
  getContracts: async () => {
    const contracts = await Contract.find();
    return contracts;
  },
  getFilteredContracts: async filter => {
    const contracts = await Contract.find(filter);
    console.log("contracts", contracts);

    return contracts;
  },
  getContractsByCompany: async companyId => {
    const contracts = await Contract.find({ company: companyId });
    return contracts;
  },
  getAllContracts: async () => {
    const contracts = await Contract.find();
    return contracts;
  }
};

module.exports = contractService;
