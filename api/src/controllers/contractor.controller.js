const moment = require("moment");
const { nanoid } = require("nanoid");
const userService = require("../services/user.service");
const contractorService = require("../services/contractor.service");

const contractorController = {
  addContractor: async (req, res, next) => {
    try {
      const contractorData = req.body;
      contractorData.createDate = moment().format();
      if (req.file) {
        contractorData.logo = req.file.filename;
      }
      const contractor = await contractorService.create(contractorData);
      return res.status(201).json({
        message: "Подрядчик добавлен",
        contractor: contractor
      });
    } catch (error) {
      next(error);
    }
  },
  addHead: async (req, res, next) => {
    try {
      const headData = req.body;
      const headPassword = nanoid(8);
      headData.password = headPassword;
      console.log("password", headData.password);
      headData.role = "head";
      headData.contractor = req.params.id;
      const head = await userService.register(headData);
      const contractor = await contractorService.addHead(
        req.params.id,
        head.user._id
      );
      return res.json({
        message: "Руководитель добавлен",
        contractor: contractor
      });
    } catch (error) {
      next(error);
    }
  },
  getContractorsByCompany: async (req, res, next) => {
    try {
      const contractors = await contractorService.getContractorsByCompany(
        req.params.companyId
      );
      return res.json(contractors);
    } catch (error) {
      next(error);
    }
  },
  deleteContractor: async (req, res, next) => {
    try {
      const contractor = await contractorService.deleteContractor(
        req.params.id
      );
      return res.json({
        message: "Подрядчик удален",
        contractor: contractor
      });
    } catch (error) {
      next(error);
    }
  },
  getContractorById: async (req, res, next) => {
    try {
      const contractor = await contractorService.getContractorById(
        req.params.id
      );
      return res.json(contractor);
    } catch (error) {
      next(error);
    }
  },
  editContractor: async (req, res, next) => {
    try {
      const contractorData = req.body;
      if (req.file) {
        contractorData.file = req.file.filename;
      }
      const contractor = await contractorService.editContractor(
        req.params.id,
        contractorData
      );
      return res.json({
        message: "Подрядчик отредактирован",
        contractor: contractor
      });
    } catch (error) {
      next(error);
    }
  },
  editHead: async (req, res, next) => {
    try {
      const headData = req.body;
      const contractor = await contractorService.editHead(
        req.params.id,
        headData
      );
      return res.json({
        message: "Руководитель подрядчика отредактирован",
        contractor: contractor
      });
    } catch (error) {
      next(error);
    }
  },
  addRequisites: async (req, res, next) => {
    try {
      const requisitesData = req.body;
      const contractor = await contractorService.addRequisites(
        req.params.id,
        requisitesData
      );
      return res.json({
        message: "Реквизиты добавлены",
        contractor: contractor
      });
    } catch (error) {
      next(error);
    }
  },
  editRequisites: async (req, res, next) => {
    try {
      const requisitesData = req.body;
      const contractor = await contractorService.editRequisites(
        req.params.id,
        requisitesData
      );
      return res.json({
        message: "Реквизиты отредактированы",
        contractor: contractor
      });
    } catch (error) {
      next(error);
    }
  },
  addTypesOfWork: async (req, res, next) => {
    try {
      const typesOfWorkData = req.body;
      const contractor = await contractorService.addTypesOfWork(
        req.params.id,
        typesOfWorkData
      );
      return res.json({
        message: "Виды работ добавлены",
        contractor: contractor
      });
    } catch (error) {
      next(error);
    }
  },
  editTypesOfWork: async (req, res, next) => {
    try {
      const typesOfWorkData = req.body;
      const contractor = await contractorService.editTypesOfWork(
        req.params.id,
        typesOfWorkData
      );
      return res.json({
        message: "Виды работ отредактированы",
        contractor: contractor
      });
    } catch (error) {
      next(error);
    }
  },
  getAllContractors: async (req, res, next) => {
    try {
      const contractors = await contractorService.getAllContractors();
      return res.json(contractors);
    } catch (error) {
      next(error);
    }
  }

  // deleteLeader: async (req, res, next) => {
  //   try {
  //     const company = await companyService.deleteLeader(req.params.id);
  //     return res.json({
  //       message: "Руководитель удален",
  //       company: company
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // },
  // // deleteRequisites: async (req, res, next) => {
  // //   try {
  // //     const company = await companyService.deleteRequisites(req.params.id);
  // //     return res.json({
  // //       message: "Руководитель удален",
  // //       company: company
  // //     });
  // //   } catch (error) {
  // //     next(error);
  // //   }
  // // },
  // deleteOffice: async (req, res, next) => {
  //   try {
  //     const company = await companyService.deleteOffice(
  //       req.params.id,
  //       req.params.officeId
  //     );
  //     return res.json({
  //       message: "Офис удален",
  //       company: company
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // },

  // getCompanies: async (req, res, next) => {
  //   try {
  //     const companies = await companyService.getCompanies();
  //     return res.json(companies);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
};

module.exports = contractorController;
