const moment = require("moment");
const { nanoid } = require("nanoid");
const companyService = require("../services/company.service");
const userService = require("../services/user.service");
const officeService = require("../services/office.service");
const contractorService = require("../services/contractor.service");

const companyController = {
  create: async (req, res, next) => {
    try {
      const companyData = req.body;
      companyData.createDate = moment().format();
      if (req.file) {
        companyData.logo = req.file.filename;
      }
      console.log("companyData", companyData);

      const company = await companyService.create(companyData);
      return res.status(201).json({
        message: "Компания добавлена",
        company: company
      });
    } catch (error) {
      next(error);
    }
  },
  addLeader: async (req, res, next) => {
    try {
      const leaderData = req.body;
      const leaderPassword = nanoid(8);
      leaderData.password = leaderPassword;
      console.log("password", leaderData.password);
      leaderData.role = "leader";
      leaderData.company = req.params.id;
      const leader = await userService.register(leaderData);

      const company = await companyService.addLeader(
        req.params.id,
        leader.user._id
      );
      console.log("company", company);
      return res.json({
        message: "Руководитель добавлен",
        company: company
      });
    } catch (error) {
      next(error);
    }
  },
  addRequisites: async (req, res, next) => {
    try {
      const requisitesData = req.body;
      const company = await companyService.addRequisites(
        req.params.id,
        requisitesData
      );
      return res.json({
        message: "Реквизиты добавлены",
        company: company
      });
    } catch (error) {
      next(error);
    }
  },
  addOffice: async (req, res, next) => {
    try {
      const officeData = req.body;
      const office = await officeService.create(officeData);
      const company = await companyService.addOffice(req.params.id, office._id);
      return res.json({
        message: "Офис добавлен",
        company: company
      });
    } catch (error) {
      next(error);
    }
  },
  addContractor: async (req, res, next) => {
    try {
      const { companyId, contractorId } = req.params;
      const company = await companyService.addContractor(
        companyId,
        contractorId
      );
      return res.json({
        message: "Подрядчик добавлен",
        company: company
      });
    } catch (error) {
      next(error);
    }
  },
  addNewContractor: async (req, res, next) => {
    try {
      const contractorData = req.body;
      contractorData.createDate = moment().format();
      if (req.file) {
        contractorData.logo = req.file.filename;
      }
      const contractor = await contractorService.create(contractorData);
      const company = await companyService.addContractor(
        req.params.companyId,
        contractor._id
      );
      return res.status(201).json({
        message: "Подрядчик добавлен",
        company: company,
        newContractorId: contractor._id
      });
    } catch (error) {
      next(error);
    }
  },
  editCompany: async (req, res, next) => {
    try {
      const companyData = req.body;
      if (req.file) {
        companyData.file = req.file.filename;
      }
      const company = await companyService.editCompany(
        req.params.id,
        companyData
      );
      return res.json({
        message: "Компания отредактирована",
        company: company
      });
    } catch (error) {
      next(error);
    }
  },
  editLeader: async (req, res, next) => {
    try {
      const leaderData = req.body;
      const company = await companyService.editLeader(
        req.params.id,
        leaderData
      );
      return res.json({
        message: "Лидер компании отредактирован",
        company: company
      });
    } catch (error) {
      next(error);
    }
  },
  editRequisites: async (req, res, next) => {
    try {
      const requisitesData = req.body;
      const company = await companyService.editRequisites(
        req.params.id,
        requisitesData
      );
      return res.json({
        message: "Реквизиты компании отредактированы",
        company: company
      });
    } catch (error) {
      next(error);
    }
  },
  deleteCompany: async (req, res, next) => {
    try {
      const company = await companyService.deleteCompany(req.params.id);
      return res.json({
        message: "Компания удалена",
        company: company
      });
    } catch (error) {
      next(error);
    }
  },
  deleteLeader: async (req, res, next) => {
    try {
      const company = await companyService.deleteLeader(req.params.id);
      return res.json({
        message: "Руководитель удален",
        company: company
      });
    } catch (error) {
      next(error);
    }
  },
  // deleteRequisites: async (req, res, next) => {
  //   try {
  //     const company = await companyService.deleteRequisites(req.params.id);
  //     return res.json({
  //       message: "Руководитель удален",
  //       company: company
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // },
  deleteOffice: async (req, res, next) => {
    try {
      const company = await companyService.deleteOffice(
        req.params.id,
        req.params.officeId
      );
      return res.json({
        message: "Офис удален",
        company: company
      });
    } catch (error) {
      next(error);
    }
  },
  getCompanyById: async (req, res, next) => {
    try {
      const company = await companyService.getCompanyById(req.params.id);
      return res.json(company);
    } catch (error) {
      next(error);
    }
  },
  getCompanyWithContractors: async (req, res, next) => {
    try {
      const company = await companyService.getCompanyWithContractors(
        req.params.id
      );
      return res.json(company);
    } catch (error) {
      next(error);
    }
  },
  getCompanies: async (req, res, next) => {
    try {
      const companies = await companyService.getCompanies();
      return res.json(companies);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = companyController;
