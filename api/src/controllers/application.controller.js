const moment = require("moment");
const accountService = require("../services/account.service");
const applicationService = require("../services/application.service");
const subjectService = require("../services/subject.service");
const userService = require("../services/user.service");

const applicationController = {
  create: async (req, res, next) => {
    try {
      const applicationData = req.body;
      applicationData.files = [];
      if (req.files) {
        req.files.files &&
          req.files.files.forEach(file => {
            applicationData.files.push(file.filename);
          });
      }
      const user = await userService.getUserById(req.user.user);
      const subject = await subjectService.getSubjectById(req.user.user);
      if (subject) {
        applicationData.applicant = subject;
      } else if (user) {
        applicationData.dispatcher = user;
      }
      if (applicationData.isPhoneBindToAccount) {
        const account = await accountService.getAccountByFilter({
          address: applicationData.address,
          numberOfApartment: applicationData.numberOfApartment
        });
        applicationData.account = account;
        account.phones.push(applicationData.phone);
        await account.save();
      }
      const application = await applicationService.create(applicationData);
      return res.status(201).json({
        message: "Заявка создана",
        application: application
      });
    } catch (error) {
      next(error);
    }
  },
  edit: async (req, res, next) => {
    try {
      const applicationData = req.body;
      console.log("applicationData", applicationData);
      if (!Array.isArray(applicationData.files)) {
        const files = [];
        files.push(applicationData.files);
        applicationData.files = files;
      } else if (!applicationData.files) {
        applicationData.files = [];
      }
      if (req.files) {
        req.files.files &&
          req.files.files.forEach(file => {
            applicationData.files.push(file.filename);
          });
      }
      const application = await applicationService.edit(
        req.params.id,
        applicationData
      );
      return res.json({
        message: "Заявка отредактирована",
        application: application
      });
    } catch (error) {
      next(error);
    }
  },
  inProgress: async (req, res, next) => {
    try {
      const applicationData = req.body;
      console.log("applicationData", applicationData);
      if (!Array.isArray(applicationData.files)) {
        const files = [];
        files.push(applicationData.files);
        applicationData.files = files;
      } else if (!applicationData.files) {
        applicationData.files = [];
      }
      if (req.files) {
        req.files.files &&
          req.files.files.forEach(file => {
            applicationData.files.push(file.filename);
          });
      }
      applicationData.status = "В работе";
      const application = await applicationService.edit(
        req.params.id,
        applicationData
      );
      return res.json({
        message: "Заявка отправлена в работу",
        application: application
      });
    } catch (error) {
      next(error);
    }
  },
  complete: async (req, res, next) => {
    try {
      const applicationData = req.body;

      if (!Array.isArray(applicationData.files)) {
        const files = [];
        files.push(applicationData.files);
        applicationData.files = files;
      } else if (!applicationData.files) {
        applicationData.files = [];
      }
      if (
        !Array.isArray(applicationData.resultFiles) &&
        applicationData.resultFiles
      ) {
        const resultFiles = [];
        resultFiles.push(applicationData.resultFiles);
        applicationData.resultFiles = resultFiles;
      } else if (!applicationData.resultFiles) {
        applicationData.resultFiles = [];
      }
      if (req.files) {
        req.files.files &&
          req.files.files.forEach(file => {
            applicationData.files.push(file.filename);
          });
        req.files.resultFiles &&
          req.files.resultFiles.forEach(file => {
            applicationData.resultFiles.push(file.filename);
          });
      }
      applicationData.status = "Выполнена";
      applicationData.completionDate = moment().format();
      const application = await applicationService.edit(
        req.params.id,
        applicationData
      );
      return res.json({
        message: "Заявка выполнена",
        application: application
      });
    } catch (error) {
      next(error);
    }
  },
  cancel: async (req, res, next) => {
    try {
      const reasonData = req.body;
      const application = await applicationService.cancel(
        req.params.number,
        reasonData
      );
      return res.json(application);
    } catch (error) {
      next(error);
    }
  },
  getApplicationsByCompany: async (req, res, next) => {
    try {
      const applications = await applicationService.getApplicationsByCompany(
        req.params.companyId
      );
      return res.json(applications);
    } catch (error) {
      next(error);
    }
  },
  getApplicationById: async (req, res, next) => {
    try {
      const application = await applicationService.getApplicationById(
        req.params.id
      );
      return res.json(application);
    } catch (error) {
      next(error);
    }
  },
  getMyRequests: async (req, res, next) => {
    try {
      const myId = req.user.user;
      const applications = await applicationService.getMyRequests(myId);
      return res.json(applications);
    } catch (error) {
      next(error);
    }
  },
  getFilteredApplications: async (req, res, next) => {
    try {
      let filter = {};
      console.log("req.body", req.body);
      // для клиента
      // Object.keys(req.body).map(key => {
      //   const filterData = req.body[key];
      //   if (filterData !== "") {
      //     filter[key] = {
      //       $gte: filterData.from,
      //       $lte: filterData.to
      //     };
      //   }
      // });
      Object.keys(req.body).map(key => {
        const filterData = req.body[key];
        if (filterData && filterData !== "") {
          if (
            key === "createDate" ||
            key === "workDate" ||
            key === "doneDate"
          ) {
            filter[key] = {
              $gte: filterData.from,
              $lte: filterData.to
            };
          }
          filter[key] = filterData;
        }
      });
      console.log("filter", filter);
      const applications = await applicationService.getFilteredApplications(
        filter
      );
      return res.json(applications);
    } catch (error) {
      next(error);
    }
  },
  getRequestByNumber: async (req, res, next) => {
    try {
      const application = await applicationService.getRequestByNumber(
        req.params.number
      );
      return res.json(application);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = applicationController;
