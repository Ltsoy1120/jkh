const House = require("../models/House");

const houseService = {
  create: async houseData => {
    const house = await House.create(houseData);
    return house;
  },
  edit: async (houseId, houseData) => {
    const house = await House.findByIdAndUpdate(houseId, houseData);
    return house;
  },
  delete: async houseId => {
    const house = await House.findByIdAndRemove(houseId);
    return house;
  },
  getHouseById: async id => {
    const house = await House.findById(id);
    return house;
  },
  getHouses: async () => {
    const houses = await House.find();
    return houses;
  },
  getFilteredHouses: async filter => {
    const houses = await House.find(filter);
    return houses;
  },
  getHousesByCompany: async companyId => {
    const houses = await House.find({ company: companyId });
    // await helpers.buildExcelFile(houses);
    return houses;
  },
  getAllHouses: async () => {
    const houses = await House.find();
    return houses;
  }
};

module.exports = houseService;
