const Device = require("../models/Device");
const DeviceData = require("../models/DeviceData");

const devicedataService = {
  create: async data => {
    const devicedata = await DeviceData.create(data);
    console.log("data", data);
    const device = await Device.findById(data.device);

    if (data.tariff === "Однотарифный") {
      device.lastData = data.currentData;
      device.difference = data.difference;
    } else if (data.tariff === "Двухтарифный") {
      device.lastDataDay = data.currentDataDay;
      device.lastDataNight = data.currentDataNight;
      device.differenceDay = data.differenceDay;
      device.differenceNight = data.differenceNight;
    } else {
      device.lastDataT1 = data.currentDataT1;
      device.lastDataT2 = data.currentDataT2;
      device.lastDataT3 = data.currentDataT3;
      device.differenceT1 = data.differenceT1;
      device.differenceT2 = data.differenceT2;
      device.differenceT3 = data.differenceT3;
    }
    await device.save();

    return devicedata;
  },
  //   cancel: async number => {
  //     const appeal = await Appeal.findOne({ number: number });
  //     appeal.status = "Отменено";
  //     await appeal.save();
  //     return appeal;
  //   },
  getFilteredDeviceData: async filter => {
    const devicedata = await DeviceData.find(filter).populate("device");
    return devicedata;
  },
  getMyDeviceData: async myId => {
    const devicedata = await DeviceData.find({ homeowner: myId }).populate(
      "device"
    );
    return devicedata;
  },
  getDeviceDataByDevice: async id => {
    console.log("id", id);

    const devicedata = await DeviceData.find({ device: id }).populate("device");
    console.log("devicedata", devicedata);
    return devicedata;
  }
};

module.exports = devicedataService;
