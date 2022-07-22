const entranceService = require("../services/entrance.service");
const houseService = require("../services/house.service");

const houseController = {
  create: async (req, res, next) => {
    try {
      const houseData = req.body;
      houseData.countOfAccounts = 0;
      houseData.countOfApartments = 0;
      const house = await houseService.create(houseData);
      return res.status(201).json({
        message: "Дом добавлен",
        house: house
      });
    } catch (error) {
      next(error);
    }
  },
  edit: async (req, res, next) => {
    try {
      const houseData = req.body;
      if (!Array.isArray(houseData.photos) && houseData.photos) {
        const photos = [];
        photos.push(houseData.photos);
        houseData.photos = photos;
      } else if (!houseData.photos) {
        houseData.photos = [];
      }
      if (!Array.isArray(houseData.docs) && houseData.docs) {
        const docs = [];
        docs.push(houseData.docs);
        houseData.docs = docs;
      } else if (!houseData.docs) {
        houseData.docs = [];
      }

      if (req.files) {
        req.files.photos &&
          req.files.photos.forEach(photo => {
            houseData.photos.push(photo.filename);
          });
        req.files.docs &&
          req.files.docs.forEach(doc => {
            houseData.docs.push(doc.filename);
          });
      }
      const house = await houseService.edit(req.params.id, houseData);
      return res.json({
        message: "Дом отредактирован",
        house: house
      });
    } catch (error) {
      next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const house = await houseService.delete(req.params.id);
      return res.json({
        message: "Дом удален",
        house: house
      });
    } catch (error) {
      next(error);
    }
  },
  addEntrance: async (req, res, next) => {
    try {
      const entrancesData = req.body;
      const entrance = await entranceService.create(entrancesData);
      const house = await houseService.addEntrance(req.params.id, entrance._id);
      return res.json({
        message: "Подъезд добавлен",
        house: house
      });
    } catch (error) {
      next(error);
    }
  },
  getHouseById: async (req, res, next) => {
    try {
      const house = await houseService.getHouseById(req.params.id);
      return res.json(house);
    } catch (error) {
      next(error);
    }
  },
  getFilteredHouses: async (req, res, next) => {
    try {
      let filter = {};
      Object.keys(req.body).map(key => {
        if (req.body[key] !== "") {
          filter[key] = req.body[key];
        }
      });
      const houses = await houseService.getFilteredHouses(filter);
      return res.json(houses);
    } catch (error) {
      next(error);
    }
  },
  getHousesByCompany: async (req, res, next) => {
    try {
      const houses = await houseService.getHousesByCompany(
        req.params.companyId
      );
      return res.json(houses);
    } catch (error) {
      next(error);
    }
  },
  getAllHouses: async (req, res, next) => {
    try {
      const houses = await houseService.getAllHouses();
      return res.json(houses);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = houseController;
