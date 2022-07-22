const devicedataService = require("../services/devicedata.service");

const devicedataController = {
  create: async (req, res, next) => {
    try {
      const deviceData = req.body;
      if (deviceData.currentData) {
        deviceData.difference = deviceData.currentData - deviceData.lastData;
      } else if (deviceData.currentDataDay && deviceData.currentDataNight) {
        deviceData.differenceDay =
          deviceData.currentDataDay - deviceData.lastDataDay;
        deviceData.differenceNight =
          deviceData.currentDataNight - deviceData.lastDataNight;
      } else {
        deviceData.differenceT1 =
          deviceData.currentDataT1 - deviceData.lastDataT1;
        deviceData.differenceT2 =
          deviceData.currentDataT2 - deviceData.lastDataT2;
        deviceData.differenceT3 =
          deviceData.currentDataT3 - deviceData.lastDataT3;
      }
      const devicedata = await devicedataService.create(deviceData);
      return res.status(201).json({
        message: "Показания записаны",
        devicedata: devicedata
      });
    } catch (error) {
      next(error);
    }
  },
  getMyDeviceData: async (req, res, next) => {
    try {
      const myId = req.user.user;
      const devicedata = await devicedataService.getMyDeviceData(myId);
      return res.json(devicedata);
    } catch (error) {
      next(error);
    }
  },
  getFilteredDeviceData: async (req, res, next) => {
    try {
      let filter = {};
      Object.keys(req.body).map(key => {
        if (req.body[key] !== "") {
          filter[key] = req.body[key];
        }
      });

      const devicedata = await devicedataService.getFilteredDeviceData(filter);
      return res.json(devicedata);
    } catch (error) {
      next(error);
    }
  },
  getDeviceDataByDevice: async (req, res, next) => {
    try {
      const devicedata = await devicedataService.getDeviceDataByDevice(
        req.params.id
      );
      return res.json(devicedata);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = devicedataController;
