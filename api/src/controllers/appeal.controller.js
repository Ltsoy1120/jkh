const moment = require("moment");
const accountService = require("../services/account.service");
const appealService = require("../services/appeal.service");
const subjectService = require("../services/subject.service");
const userService = require("../services/user.service");

const appealController = {
  create: async (req, res, next) => {
    try {
      const appealData = req.body;
      appealData.files = [];
      if (req.files) {
        req.files.files &&
          req.files.files.forEach(file => {
            appealData.files.push(file.filename);
          });
      }
      if (appealData.needAnswer && typeof needAnswer === "string") {
        needAnswer = JSON.parse(req.body.needAnswer);
      }
      const user = await userService.getUserById(req.user.user);
      const subject = await subjectService.getSubjectById(req.user.user);
      if (subject) {
        appealData.sender = subject;
      } else if (user) {
        appealData.dispatcher = user;
      }
      if (appealData.isPhoneBindToAccount) {
        const account = await accountService.getAccountByFilter({
          address: appealData.address,
          numberOfApartment: appealData.numberOfApartment
        });
        account.phones.push(appealData.phone);
        await account.save();
      }

      const appeal = await appealService.create(appealData);
      return res.status(201).json({
        message: "Обращение создано",
        appeal: appeal
      });
    } catch (error) {
      next(error);
    }
  },
  edit: async (req, res, next) => {
    try {
      const appealData = req.body;
      if (!Array.isArray(appealData.files)) {
        const files = [];
        files.push(appealData.files);
        appealData.files = files;
      } else if (!appealData.files) {
        appealData.files = [];
      }
      if (req.files) {
        req.files.files &&
          req.files.files.forEach(file => {
            appealData.files.push(file.filename);
          });
      }
      const appeal = await appealService.edit(req.params.id, appealData);
      return res.json({
        message: "Обращение отредактировано",
        appeal: appeal
      });
    } catch (error) {
      next(error);
    }
  },
  done: async (req, res, next) => {
    try {
      const appealData = req.body;

      if (!Array.isArray(appealData.files)) {
        const files = [];
        files.push(appealData.files);
        appealData.files = files;
      } else if (!appealData.files) {
        appealData.files = [];
      }
      if (!Array.isArray(appealData.resultFiles) && appealData.resultFiles) {
        const resultFiles = [];
        resultFiles.push(appealData.resultFiles);
        appealData.resultFiles = resultFiles;
      } else if (!appealData.resultFiles) {
        appealData.resultFiles = [];
      }
      if (req.files) {
        req.files.files &&
          req.files.files.forEach(file => {
            appealData.files.push(file.filename);
          });
        req.files.resultFiles &&
          req.files.resultFiles.forEach(file => {
            appealData.resultFiles.push(file.filename);
          });
      }
      appealData.status = "Выполнено";
      appealData.doneDate = moment().format();
      const appeal = await appealService.edit(req.params.id, appealData);
      return res.json({
        message: "Обращение закрыто",
        appeal: appeal
      });
    } catch (error) {
      next(error);
    }
  },
  cancel: async (req, res, next) => {
    try {
      const appeal = await appealService.cancel(req.params.number);
      return res.json(appeal);
    } catch (error) {
      next(error);
    }
  },
  getMyAppeals: async (req, res, next) => {
    try {
      const myId = req.user.user;
      const appeals = await appealService.getMyAppeals(myId);
      return res.json(appeals);
    } catch (error) {
      next(error);
    }
  },
  getAppealById: async (req, res, next) => {
    try {
      const appeal = await appealService.getAppealById(req.params.id);
      return res.json(appeal);
    } catch (error) {
      next(error);
    }
  },
  getAppealsByCompany: async (req, res, next) => {
    try {
      const appeals = await appealService.getAppealsByCompany(
        req.params.companyId
      );
      return res.json(appeals);
    } catch (error) {
      next(error);
    }
  },
  getFilteredAppeals: async (req, res, next) => {
    try {
      let filter = {};
      console.log("req.body", req.body);

      Object.keys(req.body).map(key => {
        if (key === "createDate" && req.body.createDate) {
          filter.createDate = {
            $gte: req.body.createDate.from,
            $lte: req.body.createDate.to
          };
        } else if (req.body[key] && req.body[key] !== "") {
          filter[key] = req.body[key];
        }
      });
      console.log("filter", filter);
      const appeals = await appealService.getFilteredAppeals(filter);
      console.log("appeals", appeals);

      return res.json(appeals);
    } catch (error) {
      next(error);
    }
  },
  getAppealByNumber: async (req, res, next) => {
    try {
      const appeal = await appealService.getAppealByNumber(req.params.number);
      return res.json(appeal);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = appealController;
