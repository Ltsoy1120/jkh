const contractService = require("../services/contract.service");

const contractController = {
  create: async (req, res, next) => {
    try {
      const contractData = req.body;
      contractData.scans = [];
      if (req.files) {
        req.files.scans &&
          req.files.scans.forEach(scan => {
            contractData.scans.push(scan.filename);
          });
      }
      const contract = await contractService.create(contractData);
      return res.status(201).json({
        message: "Договор добавлен",
        contract: contract
      });
    } catch (error) {
      next(error);
    }
  },
  edit: async (req, res, next) => {
    try {
      const contractData = req.body;
      if (!Array.isArray(contractData.scans) && contractData.scans) {
        const scans = [];
        scans.push(contractData.scans);
        contractData.scans = scans;
      } else if (!contractData.scans) {
        contractData.scans = [];
      }
      if (req.files) {
        req.files.scans &&
          req.files.scans.forEach(scan => {
            contractData.scans.push(scan.filename);
          });
      }
      const contract = await contractService.edit(req.params.id, contractData);
      return res.json({
        message: "Договор отредактирован",
        contract: contract
      });
    } catch (error) {
      next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const contract = await contractService.delete(req.params.id);
      return res.json({
        message: "Договор удален",
        contract: contract
      });
    } catch (error) {
      next(error);
    }
  },
  getContractById: async (req, res, next) => {
    try {
      const contract = await contractService.getContractById(req.params.id);
      return res.json(contract);
    } catch (error) {
      next(error);
    }
  },
  getFilteredContracts: async (req, res, next) => {
    try {
      let filter = {};
      Object.keys(req.body).map(key => {
        if (req.body[key] && req.body[key] !== "") {
          filter[key] = req.body[key];
        }
      });
      const contracts = await contractService.getFilteredContracts(filter);
      return res.json(contracts);
    } catch (error) {
      next(error);
    }
  },
  getContractsByCompany: async (req, res, next) => {
    try {
      const contracts = await contractService.getContractsByCompany(
        req.params.companyId
      );
      return res.json(contracts);
    } catch (error) {
      next(error);
    }
  },
  getAllContracts: async (req, res, next) => {
    try {
      const contracts = await contractService.getAllContracts();
      return res.json(contracts);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = contractController;
