const propertyService = require("../services/property.service");

const propertyController = {
  edit: async (req, res, next) => {
    try {
      const propertyData = req.body;
      const property = await propertyService.edit(req.params.id, propertyData);
      return res.json(property);
    } catch (error) {
      next(error);
    }
  },
  getPropertyById: async (req, res, next) => {
    try {
      const property = await propertyService.getPropertyById(req.params.id);
      return res.json(property);
    } catch (error) {
      next(error);
    }
  },
  getPropertyByAccount: async (req, res, next) => {
    try {
      const property = await propertyService.getPropertyByAccount(
        req.params.id
      );
      return res.json(property);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = propertyController;
