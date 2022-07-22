const accountService = require("../services/account.service");
const deviceService = require("../services/device.service");

const deviceController = {
  // create: async (req, res, next) => {
  //   try {
  //     const deviceData = req.body;
  //     const device = await deviceService.create(deviceData);
  //     return res.status(201).json({
  //       message: "Счетчик зарегистрирован",
  //       device: device
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // },
  edit: async (req, res, next) => {
    try {
      const deviceData = req.body;
      const {
        firstData,
        firstDataT1,
        firstDataT2,
        firstDataT3,
        firstDataDay,
        firstDataNight
      } = deviceData;
      if (!Array.isArray(deviceData.docs) && deviceData.docs) {
        const docs = [];
        docs.push(deviceData.docs);
        deviceData.docs = docs;
      } else if (!deviceData.docs) {
        deviceData.docs = [];
      }
      if (req.files) {
        req.files.docs &&
          req.files.docs.forEach(doc => {
            deviceData.docs.push(doc.filename);
          });
      }
      if (deviceData.tariff === "Многотарифный") {
        deviceData.lastDataT1 = firstDataT1;
        deviceData.lastDataT2 = firstDataT2;
        deviceData.lastDataT3 = firstDataT3;
        deviceData.differenceT1 = deviceData.lastDataT1 - firstDataT1;
        deviceData.differenceT2 = deviceData.lastDataT2 - firstDataT2;
        deviceData.differenceT3 = deviceData.lastDataT3 - firstDataT3;
      } else if (deviceData.tariff === "Двухтарифный") {
        deviceData.lastDataDay = firstDataDay;
        deviceData.lastDataNight = firstDataNight;
        deviceData.differenceDay = deviceData.lastDataDay - firstDataDay;
        deviceData.differenceNight = deviceData.lastDataNight - firstDataNight;
      } else {
        deviceData.lastData = firstData;
        deviceData.difference = deviceData.lastData - firstData;
      }
      const device = await deviceService.edit(req.params.id, deviceData);
      return res.json({
        message: "Прибор учета отредактирован",
        device: device
      });
    } catch (error) {
      next(error);
    }
  },
  getDeviceById: async (req, res, next) => {
    try {
      const device = await deviceService.getDeviceById(req.params.id);
      return res.json(device);
    } catch (error) {
      next(error);
    }
  },
  getDevicesByCompany: async (req, res, next) => {
    try {
      const devices = await deviceService.getDevicesByCompany(
        req.params.companyId
      );
      return res.json(devices);
    } catch (error) {
      next(error);
    }
  },
  getFilteredDevices: async (req, res, next) => {
    try {
      const account = await accountService.getAccountByNumber(
        req.body.accountNumber
      );
      let filter = {};
      Object.keys(req.body).map(key => {
        if (req.body[key] && req.body[key] !== "") {
          if (key === "accountNumber") {
            filter.account = account._id;
          }
          filter[key] = req.body[key];
        }
      });
      const devices = await deviceService.getFilteredDevices(filter);
      return res.json(devices);
    } catch (error) {
      next(error);
    }
  },
  getMyDevices: async (req, res, next) => {
    try {
      const myId = req.user.user;
      const devices = await deviceService.getMyDevices(myId);
      return res.json(devices);
    } catch (error) {
      next(error);
    }
  },
  getDeviceByNumber: async (req, res, next) => {
    try {
      const device = await deviceService.getDeviceByNumber(req.params.number);
      return res.json(device);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = deviceController;
