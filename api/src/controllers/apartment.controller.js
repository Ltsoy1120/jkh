const apartmentService = require("../services/apartment.service");

const apartmentController = {
  create: async (req, res, next) => {
    try {
      const apartmentData = req.body;
      const apartment = await apartmentService.create(apartmentData);
      return res.json({
        message: "Помещение добавлено",
        apartment: apartment
      });
    } catch (error) {
      next(error);
    }
  },
  edit: async (req, res, next) => {
    try {
      const apartmentData = req.body;
      const apartment = await apartmentService.edit(
        req.params.id,
        apartmentData
      );
      return res.json({
        message: "Помещение отредактировано",
        entrance: apartment
      });
    } catch (error) {
      next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const apartment = await apartmentService.delete(req.params.id);
      return res.json({
        message: "Помещение удалено",
        apartment: apartment
      });
    } catch (error) {
      next(error);
    }
  },
  getApartmentsByHouse: async (req, res, next) => {
    try {
      const apartments = await apartmentService.getApartmentsByHouse(
        req.params.houseId
      );
      return res.json(apartments);
    } catch (error) {
      next(error);
    }
  },
  getApartmentById: async (req, res, next) => {
    try {
      const apartment = await apartmentService.getApartmentById(req.params.id);
      return res.json(apartment);
    } catch (error) {
      next(error);
    }
  },
  getFilteredApartments: async (req, res, next) => {
    try {
      let filter = {};
      Object.keys(req.body).map(key => {
        if (req.body[key] !== "") {
          filter[key] = req.body[key];
        }
      });
      const apartments = await apartmentService.getFilteredApartments(filter);
      return res.json(apartments);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = apartmentController;
