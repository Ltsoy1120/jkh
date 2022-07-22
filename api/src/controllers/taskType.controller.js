const moment = require("moment");
const taskTypeService = require("../services/taskType.service");
const userService = require("../services/user.service");

const taskTypeController = {
  create: async (req, res, next) => {
    try {
      const taskTypeData = req.body;
      taskTypeData.createDate = moment().format();
      const user = await userService.getUserById(req.user.user);
      taskTypeData.dispatcher = user;

      const taskType = await taskTypeService.create(taskTypeData);
      return res.status(201).json({
        message: "Тип задачи создан",
        taskType: taskType
      });
    } catch (error) {
      next(error);
    }
  },
  disable: async (req, res, next) => {
    try {
      const taskType = await taskTypeService.disable(req.params.id);
      return res.json(taskType);
    } catch (error) {
      next(error);
    }
  },
  edit: async (req, res, next) => {
    const taskTypeData = req.body;
    try {
      const taskType = await taskTypeService.edit(req.params.id, taskTypeData);
      return res.json(taskType);
    } catch (error) {
      next(error);
    }
  },
  getTaskTypeById: async (req, res, next) => {
    try {
      const taskType = await taskTypeService.getTaskTypeById(req.params.id);
      return res.json(taskType);
    } catch (error) {
      next(error);
    }
  },
  getTaskTypesByCompany: async (req, res, next) => {
    try {
      const taskType = await taskTypeService.getTaskTypesByCompany(
        req.params.companyId
      );
      return res.json(taskType);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = taskTypeController;
