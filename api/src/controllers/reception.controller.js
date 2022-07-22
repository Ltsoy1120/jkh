const receptionService = require("../services/reception.service");
const subjectService = require("../services/subject.service");
const userService = require("../services/user.service");

const receptionController = {
  create: async (req, res, next) => {
    try {
      const receptionData = req.body;

      receptionData.files = [];
      if (req.files) {
        req.files.files &&
          req.files.files.forEach(file => {
            receptionData.files.push(file.filename);
          });
      }
      const user = await userService.getUserById(req.user.user);
      const subject = await subjectService.getSubjectById(req.user.user);
      if (subject) {
        receptionData.homeowner = subject;
      } else if (user) {
        receptionData.dispatcher = user;
      }
      const reception = await receptionService.create(receptionData);

      return res.status(201).json({
        message: "Запись на прием создана",
        reception: reception
      });
    } catch (error) {
      next(error);
    }
  },
  edit: async (req, res, next) => {
    try {
      const receptionData = req.body;
      receptionData.files = [];
      if (receptionData.files && typeof receptionData.files === "string") {
        receptionData.files.push(receptionData.files);
      }
      if (req.files) {
        req.files.files &&
          req.files.files.forEach(file => {
            receptionData.files.push(file.filename);
          });
      }

      const reception = await receptionService.edit(
        req.params.id,
        receptionData
      );
      return res.json({
        message: "Запись на прием отредактирована",
        reception: reception
      });
    } catch (error) {
      next(error);
    }
  },
  confirm: async (req, res, next) => {
    try {
      const receptionData = req.body;
      receptionData.files = [];
      if (receptionData.files && typeof receptionData.files === "string") {
        receptionData.files.push(receptionData.files);
      }
      if (req.files) {
        req.files.files &&
          req.files.files.forEach(file => {
            receptionData.files.push(file.filename);
          });
      }
      receptionData.status = "Согласован";
      const reception = await receptionService.edit(
        req.params.id,
        receptionData
      );
      return res.json({
        message: "Прием согласован",
        reception: reception
      });
    } catch (error) {
      next(error);
    }
  },
  complete: async (req, res, next) => {
    try {
      const receptionData = req.body;
      receptionData.files = [];
      if (receptionData.files && typeof receptionData.files === "string") {
        receptionData.files.push(receptionData.files);
      }
      if (req.files) {
        req.files.files &&
          req.files.files.forEach(file => {
            receptionData.files.push(file.filename);
          });
      }
      receptionData.status = "Завершен";
      const reception = await receptionService.edit(
        req.params.id,
        receptionData
      );
      return res.json({
        message: "Прием завершен",
        reception: reception
      });
    } catch (error) {
      next(error);
    }
  },
  cancel: async (req, res, next) => {
    try {
      const reception = await receptionService.cancel(
        req.params.number,
        req.body
      );
      return res.json(reception);
    } catch (error) {
      next(error);
    }
  },
  getReceptionsByDate: async (req, res, next) => {
    try {
      const filter = req.body;
      const requests = await receptionService.getReceptionsByDate(filter);
      return res.json(requests);
    } catch (error) {
      next(error);
    }
  },
  getReceptionsByCompany: async (req, res, next) => {
    try {
      const receptions = await receptionService.getReceptionsByCompany(
        req.params.id
      );
      return res.json(receptions);
    } catch (error) {
      next(error);
    }
  },
  getMyVisits: async (req, res, next) => {
    try {
      const myId = req.user.user;
      const visits = await receptionService.getMyVisits(myId);
      return res.json(visits);
    } catch (error) {
      next(error);
    }
  },
  getFilteredReceptions: async (req, res, next) => {
    try {
      let filter = {};
      Object.keys(req.body).map(key => {
        if (key === "date" && req.body.date) {
          filter.date = {
            $gte: req.body.date.from ? req.body.date.from : req.body.date,
            $lte: req.body.date.to ? req.body.date.to : req.body.date
          };
        } else if (req.body[key] !== "") {
          filter[key] = req.body[key];
        }
      });
      console.log("filter", filter);

      const receptions = await receptionService.getFilteredReceptions(filter);
      return res.json(receptions);
    } catch (error) {
      next(error);
    }
  },
  getVisitByNumber: async (req, res, next) => {
    console.log("req.params.number", req.params.number);
    try {
      const visit = await receptionService.getVisitByNumber(req.params.number);
      return res.json(visit);
    } catch (error) {
      next(error);
    }
  },
  getReceptionById: async (req, res, next) => {
    try {
      const reception = await receptionService.getReceptionById(req.params.id);
      return res.json(reception);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = receptionController;
