const moment = require("moment");
const officeService = require("../services/office.service");

const officeController = {
  create: async (req, res, next) => {
    try {
      const officeData = req.body;
      const office = await officeService.create(officeData);
      return res.status(201).json({
        message: "Офис добавлен",
        office: office
      });
    } catch (error) {
      next(error);
    }
  },
  edit: async (req, res, next) => {
    try {
      const officeData = req.body;
      const office = await officeService.edit(req.params.id, officeData);
      return res.json({
        message: "Офис отредактирован",
        office: office
      });
    } catch (error) {
      next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const office = await officeService.delete(req.params.id);
      return res.json({
        message: "Офис удален",
        office: office
      });
    } catch (error) {
      next(error);
    }
  },
  getOfficeById: async (req, res, next) => {
    try {
      const office = await officeService.getOfficeById(req.params.id);
      return res.json(office);
    } catch (error) {
      next(error);
    }
  },
  getOfficesByCompany: async (req, res, next) => {
    try {
      const offices = await officeService.getOfficesByCompany(req.params.id);
      return res.json(offices);
    } catch (error) {
      next(error);
    }
  },
  getOffices: async (req, res, next) => {
    try {
      const offices = await officeService.getOffices();
      return res.json(offices);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = officeController;
