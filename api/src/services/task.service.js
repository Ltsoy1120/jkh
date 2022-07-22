const Task = require("../models/Task");
const TaskNotice = require("../models/TaskNotice");

const taskService = {
  create: async taskData => {
    const lastNumber = await Task.find().sort({ number: -1 }).limit(1);
    let number = 0;
    if (!lastNumber[0]) {
      number = 1;
    } else {
      number = lastNumber[0].number + 1;
    }
    taskData.number = number;
    const task = await Task.create(taskData);
    return task;
  },
  edit: async (taskId, taskData) => {
    const task = await Task.findByIdAndUpdate(taskId, taskData);
    return task;
  },
  getTaskById: async id => {
    const task = await Task.findById(id)
      .populate("dispatcher")
      .populate("performers")
      .populate("observers");
    return task;
  },
  getTasksByCompany: async companyId => {
    const tasks = await Task.find({ company: companyId })
      .populate("dispatcher")
      .populate("performers")
      .populate("observers");
    return tasks;
  },
  getFilteredTasks: async filter => {
    const tasks = await Task.find(filter)
      .populate("dispatcher")
      .populate("performers")
      .populate("observers");
    return tasks;
  },
  createTaskNotice: async data => {
    const taskNotice = await TaskNotice.create(data);
    return taskNotice;
  },
  getTaskNoticeByCompany: async companyId => {
    const taskNotice = await TaskNotice.findOne({ company: companyId });
    return taskNotice;
  }
};

module.exports = taskService;
