const moment = require("moment");
const taskService = require("../services/task.service");
const userService = require("../services/user.service");

const taskController = {
  create: async (req, res, next) => {
    try {
      const taskData = req.body;
      taskData.files = [];
      if (req.files) {
        req.files.files &&
          req.files.files.forEach(file => {
            taskData.files.push(file.filename);
          });
        req.files.resultFiles &&
          req.files.resultFiles.forEach(file => {
            taskData.resultFiles.push(file.filename);
          });
      }
      const today = moment().format();
      taskData.createDate = today;
      const user = await userService.getUserById(req.user.user);
      taskData.dispatcher = user;

      const task = await taskService.create(taskData);
      return res.status(201).json({
        message: "Задача создана",
        task: task
      });
    } catch (error) {
      next(error);
    }
  },
  edit: async (req, res, next) => {
    try {
      const taskData = req.body;
      taskData.files = [];
      taskData.resultFiles = [];
      if (taskData.files && typeof taskData.files === "string") {
        taskData.files.push(taskData.files);
      }
      if (taskData.resultFiles && typeof taskData.resultFiles === "string") {
        taskData.resultFiles.push(taskData.resultFiles);
      }
      if (req.files) {
        req.files.files &&
          req.files.files.forEach(file => {
            taskData.files.push(file.filename);
          });
        req.files.resultFiles &&
          req.files.resultFiles.forEach(file => {
            taskData.resultFiles.push(file.filename);
          });
      }

      const task = await taskService.edit(req.params.id, taskData);
      return res.json(task);
    } catch (error) {
      next(error);
    }
  },
  completeTask: async (req, res, next) => {
    try {
      const taskData = req.body;
      taskData.files = [];
      taskData.resultFiles = [];
      if (taskData.files && typeof taskData.files === "string") {
        taskData.files.push(taskData.files);
      }
      if (taskData.resultFiles && typeof taskData.resultFiles === "string") {
        taskData.resultFiles.push(taskData.resultFiles);
      }
      if (req.files) {
        req.files.files &&
          req.files.files.forEach(file => {
            taskData.files.push(file.filename);
          });
        req.files.resultFiles &&
          req.files.resultFiles.forEach(file => {
            taskData.resultFiles.push(file.filename);
          });
      }
      taskData.status = "Выполнена";
      const task = await taskService.edit(req.params.id, taskData);
      return res.json(task);
    } catch (error) {
      next(error);
    }
  },
  postponeTask: async (req, res, next) => {
    try {
      const taskData = req.body;
      taskData.status = "Отложена";
      const task = await taskService.edit(req.params.id, taskData);
      return res.json(task);
    } catch (error) {
      next(error);
    }
  },
  cancelTask: async (req, res, next) => {
    try {
      const taskData = req.body;
      taskData.status = "Отменена";
      const task = await taskService.edit(req.params.id, taskData);
      return res.json(task);
    } catch (error) {
      next(error);
    }
  },
  getTaskById: async (req, res, next) => {
    try {
      const task = await taskService.getTaskById(req.params.id);
      return res.json(task);
    } catch (error) {
      next(error);
    }
  },
  getTasksByCompany: async (req, res, next) => {
    try {
      const tasks = await taskService.getTasksByCompany(req.params.companyId);
      return res.json(tasks);
    } catch (error) {
      next(error);
    }
  },
  getFilteredTasks: async (req, res, next) => {
    try {
      let filter = {};
      console.log("req.body", req.body);

      Object.keys(req.body).map(key => {
        const filterData = req.body[key];
        if (filterData && filterData !== "") {
          if (key === "performers" || key === "observers") {
            filter[key] = {
              $in: filterData
            };
          }
          filter[key] = filterData;
        }
      });
      console.log("filter", filter);
      const tasks = await taskService.getFilteredTasks(filter);
      return res.json(tasks);
    } catch (error) {
      next(error);
    }
  },
  createTaskNotice: async (req, res, next) => {
    try {
      const taskNoticeData = req.body;
      const taskNotice = await taskService.createTaskNotice(taskNoticeData);
      return res.status(201).json({
        message: "Оповещения задач созданы",
        taskType: taskNotice
      });
    } catch (error) {
      next(error);
    }
  },
  getTaskNoticeByCompany: async (req, res, next) => {
    try {
      const taskNotice = await taskService.getTaskNoticeByCompany(
        req.params.companyId
      );
      return res.json(taskNotice);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = taskController;
