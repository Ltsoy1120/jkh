const accountService = require("../services/account.service");
const { nanoid } = require("nanoid");
const userService = require("../services/user.service");
const User = require("../models/User");
const deviceService = require("../services/device.service");
const accountLogService = require("../services/accountLog.service");
const ApiError = require("../exceptions/api-error");
const subjectService = require("../services/subject.service");
const Subject = require("../models/Subject");

const accountController = {
  create: async (req, res, next) => {
    try {
      const accountData = req.body;
      accountData.docs = [];
      if (req.files) {
        req.files.docs &&
          req.files.docs.forEach(doc => {
            accountData.docs.push(doc.filename);
          });
      }
      const account = await accountService.create(accountData);

      const user = await userService.getUserById(req.user.user);
      await accountLogService.create(
        `Создан лицевой счет №${account.number}`,
        user,
        account
      );
      return res.status(201).json({
        message: "Создан лицевой счет",
        account: account
      });
    } catch (error) {
      next(error);
    }
  },
  edit: async (req, res, next) => {
    try {
      const accountData = req.body;
      if (!Array.isArray(accountData.docs) && accountData.docs) {
        const docs = [];
        docs.push(accountData.docs);
        accountData.docs = docs;
      } else if (!accountData.docs) {
        accountData.docs = [];
      }
      if (req.files) {
        req.files.docs &&
          req.files.docs.forEach(doc => {
            accountData.docs.push(doc.filename);
          });
      }
      const account = await accountService.edit(req.params.id, accountData);
      const user = await userService.getUserById(req.user.user);
      await accountLogService.create(
        `Лицевой счет №${account.number} изменен`,
        user,
        account
      );
      return res.json({
        message: "Лицевой счет отредактирован",
        account: account
      });
    } catch (error) {
      next(error);
    }
  },
  closeAccount: async (req, res, next) => {
    try {
      const closingData = req.body;
      const account = await accountService.closeAccount(
        req.params.id,
        closingData
      );
      const user = await userService.getUserById(req.user.user);
      await accountLogService.create(
        `Лицевой счет №${account.number} закрыт`,
        user,
        account
      );
      return res.json({
        message: "Лицевой счет закрыт",
        account: account
      });
    } catch (error) {
      next(error);
    }
  },
  addPayer: async (req, res, next) => {
    try {
      const payerData = req.body;
      const candidate = await Subject.findOne({ email: payerData.email });
      let account;
      if (candidate) {
        account = await accountService.addPayer(req.params.id, candidate._id);
        await Subject.findByIdAndUpdate(candidate._id, payerData);
      } else {
        const payerPassword = nanoid(8);
        payerData.password = payerPassword;
        console.log("password", payerData.password);
        const payer = await subjectService.create(payerData);
        account = await accountService.addPayer(req.params.id, payer.user._id);
      }
      const user = await userService.getUserById(req.user.user);
      await accountLogService.create(
        `Лицевому счету №${account.number} добавлен плательщик ${payerData.lastName} ${payerData.name} ${payerData.patronymic}`,
        user,
        account
      );
      return res.json({
        message: "Плательщик добавлен",
        account: account
      });
    } catch (error) {
      next(error);
    }
  },
  addOwner: async (req, res, next) => {
    try {
      const ownerData = req.body;
      const candidate = await Subject.findOne({ email: ownerData.email });
      let account;
      if (candidate) {
        account = await accountService.addOwner(req.params.id, candidate._id);
        await User.findByIdAndUpdate(candidate._id, ownerData);
      } else {
        const ownerPassword = nanoid(8);
        ownerData.password = ownerPassword;
        console.log("password", ownerData.password);
        const owner = await subjectService.create(ownerData);
        account = await accountService.addOwner(req.params.id, owner.user._id);
      }
      const user = await userService.getUserById(req.user.user);
      await accountLogService.create(
        `Лицевому счету №${account.number} добавлен собственник ${ownerData.lastName} ${ownerData.name} ${ownerData.patronymic}`,
        user,
        account
      );
      return res.json({
        message: "Собственник добавлен",
        account: account
      });
    } catch (error) {
      next(error);
    }
  },
  addDevice: async (req, res, next) => {
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
      const account = await accountService.addDevice(req.params.id, deviceData);
      const user = await userService.getUserById(req.user.user);
      await accountLogService.create(
        `Лицевому счету №${account.number} добавлен прибор учета №${deviceData.number}`,
        user,
        account
      );
      return res.json({
        message: "Прибор учета добавлен",
        account: account
      });
    } catch (error) {
      next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const account = await accountService.delete(req.params.id);
      return res.json({
        message: "Лицевой счет",
        account: account
      });
    } catch (error) {
      next(error);
    }
  },
  deleteDevice: async (req, res, next) => {
    try {
      await deviceService.delete(req.params.deviceId);
      const account = await accountService.deleteDevice(
        req.params.id,
        req.params.deviceId
      );
      const user = await userService.getUserById(req.user.user);
      await accountLogService.create(
        `Из лицевого счета №${account.number} удален прибор учета`,
        user,
        account
      );
      return res.json({
        message: "Прибор учета удален",
        account: account
      });
    } catch (error) {
      next(error);
    }
  },
  getAccountById: async (req, res, next) => {
    try {
      const account = await accountService.getAccountById(req.params.id);
      return res.json(account);
    } catch (error) {
      next(error);
    }
  },
  getFilteredAccounts: async (req, res, next) => {
    try {
      let filter = {};
      Object.keys(req.body).map(key => {
        if (req.body[key] && req.body[key] !== "") {
          filter[key] = req.body[key];
        }
      });
      const accounts = await accountService.getFilteredAccounts(filter);
      return res.json(accounts);
    } catch (error) {
      next(error);
    }
  },
  getAccountsByCompany: async (req, res, next) => {
    try {
      const accounts = await accountService.getAccountsByCompany(
        req.params.companyId
      );
      return res.json(accounts);
    } catch (error) {
      next(error);
    }
  },
  getAllAccounts: async (req, res, next) => {
    try {
      const accounts = await accountService.getAllAccounts();
      return res.json(accounts);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = accountController;
