const Device = require("../models/Device");

const deviceService = {
  create: async deviceData => {
    const device = await Device.create(deviceData);
    return device;
  },
  edit: async (deviceId, deviceData) => {
    const device = await Device.findById(deviceId);
    device.currentData
      ? (deviceData.lastData = device.currentData)
      : deviceData.lastData;
    await Device.findByIdAndUpdate(deviceId, deviceData);
    return device;
  },
  delete: async deviceId => {
    const device = await Device.findByIdAndRemove(deviceId);
    return device;
  },
  getMyDevices: async myId => {
    const devices = await Device.find({ homeowner: myId });
    return devices;
  },
  getDeviceByNumber: async number => {
    const device = await Device.findOne({ number: number });
    return device;
  },
  getDeviceById: async deviceId => {
    const device = await Device.findById(deviceId).populate("account");
    return device;
  },
  getDevicesByCompany: async companyId => {
    const devices = await Device.find({ company: companyId }).populate(
      "account"
    );
    console.log("devices", devices);

    return devices;
  },
  getFilteredDevices: async filter => {
    const devices = await Device.find(filter);
    return devices;
  }
};

module.exports = deviceService;
