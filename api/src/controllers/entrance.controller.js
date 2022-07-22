const entranceService = require("../services/entrance.service");

const entranceController = {
  create: async (req, res, next) => {
    try {
      const entranceData = req.body;
      const entrance = await entranceService.create(entranceData);
      return res.json({
        message: "Подъезд добавлен",
        entrance: entrance
      });
    } catch (error) {
      next(error);
    }
  },
  edit: async (req, res, next) => {
    try {
      const entranceData = req.body;
      const entrance = await entranceService.edit(req.params.id, entranceData);
      return res.json({
        message: "Подъезд отредактирован",
        entrance: entrance
      });
    } catch (error) {
      next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const entrance = await entranceService.delete(req.params.id);
      return res.json({
        message: "Подъезд удален",
        entrance: entrance
      });
    } catch (error) {
      next(error);
    }
  },
  getEntrancesByHouse: async (req, res, next) => {
    try {
      const entrances = await entranceService.getEntrancesByHouse(
        req.params.houseId
      );
      return res.json(entrances);
    } catch (error) {
      next(error);
    }
  },
  getEntranceById: async (req, res, next) => {
    try {
      const entrance = await entranceService.getEntranceById(req.params.id);
      return res.json(entrance);
    } catch (error) {
      next(error);
    }
  },
  getFilteredEntrances: async (req, res, next) => {
    try {
      let filter = {};
      Object.keys(req.body).map(key => {
        if (req.body[key] !== "") {
          filter[key] = req.body[key];
        }
      });
      console.log("filter", filter);
      const entrances = await entranceService.getFilteredEntrances(filter);
      return res.json(entrances);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = entranceController;
