const visitService = require("../services/visit.service");

const visitController = {
  create: async (req, res, next) => {
    try {
      const { office, date, time, topic, text } = req.body;
      let visitData = {
        office,
        date,
        time,
        topic,
        text
      };
      if (req.file) {
        visitData.file = req.file.filename;
      }
      visitData.homeowner = req.user.user;
      const visit = await visitService.create(visitData);

      return res.status(201).json({
        message: "Заявка создана",
        visit
      });
    } catch (error) {
      next(error);
    }
  },
  getVisitsByDate: async (req, res, next) => {
    try {
      const requests = await visitService.getVisitsByDate(req.params.date);
      return res.json(requests);
    } catch (error) {
      next(error);
    }
  },
  getMyVisits: async (req, res, next) => {
    try {
      const myId = req.user.user;
      const visits = await visitService.getMyVisits(myId);
      return res.json(visits);
    } catch (error) {
      next(error);
    }
  },
  getFilteredVisits: async (req, res, next) => {
    try {
      let filter = {};
      Object.keys(req.body).map(key => {
        if (key === "date" && req.body.date !== "") {
          filter.date = {
            $gte: req.body.date.from,
            $lte: req.body.date.to
          };
        } else if (req.body[key] !== "") {
          filter[key] = req.body[key];
        }
      });
      const visits = await visitService.getFilteredVisits(filter);
      return res.json(visits);
    } catch (error) {
      next(error);
    }
  },
  cancel: async (req, res, next) => {
    try {
      const visit = await visitService.cancel(req.params.number);
      return res.json(visit);
    } catch (error) {
      next(error);
    }
  },
  getVisitByNumber: async (req, res, next) => {
    console.log("req.params.number", req.params.number);
    try {
      const visit = await visitService.getVisitByNumber(req.params.number);
      return res.json(visit);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = visitController;
