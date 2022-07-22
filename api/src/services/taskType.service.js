const TaskType = require("../models/TaskType");

const taskTypeService = {
  create: async data => {
    const taskType = await TaskType.create(data);
    return taskType;
  },
  disable: async taskTypeId => {
    const taskType = await TaskType.findById(taskTypeId);
    taskType.isActive = false;
    await taskType.save();
    return taskType;
  },
  edit: async (taskTypeId, taskTypeData) => {
    const taskType = await TaskType.findByIdAndUpdate(taskTypeId, taskTypeData);
    return taskType;
  },
  getTaskTypeById: async id => {
    const taskType = await TaskType.findById(id).populate("performers");
    return taskType;
  },
  getTaskTypesByCompany: async companyId => {
    const taskTypes = await TaskType.find({ company: companyId }).populate(
      "performers"
    );
    return taskTypes;
  }
};

module.exports = taskTypeService;
