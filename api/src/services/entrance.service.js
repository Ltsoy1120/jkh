const Entrance = require("../models/Entrance");

const entranceService = {
  create: async entranceData => {
    const entrance = await Entrance.create(entranceData);
    return entrance;
  },
  edit: async (entranceId, entranceData) => {
    const entrance = await Entrance.findByIdAndUpdate(entranceId, entranceData);
    return entrance;
  },
  delete: async entranceId => {
    const entrance = await Entrance.findByIdAndRemove(entranceId);
    return entrance;
  },
  getEntrancesByHouse: async houseId => {
    const entrances = await Entrance.find({ house: houseId });
    return entrances;
  },
  getEntranceById: async entranceId => {
    const entrance = await Entrance.findById(entranceId);
    return entrance;
  },
  getFilteredEntrances: async filter => {
    const entrance = await Entrance.find(filter);
    return entrance;
  }
};

module.exports = entranceService;
