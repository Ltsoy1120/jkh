const ApiError = require("../exceptions/api-error");
const Account = require("../models/Account");
const Device = require("../models/Device");
const deviceService = require("./device.service");

const accountService = {
  create: async accountData => {
    const account = await Account.findOne({ number: accountData.number });
    if (account) {
      throw ApiError.BadRequest("Лицевой счет с таким номером уже существует");
    }
    const newAccount = await Account.create(accountData);
    return newAccount;
  },
  edit: async (accountId, accountData) => {
    const account = await Account.findByIdAndUpdate(accountId, accountData);
    return account;
  },
  closeAccount: async (accountId, closingData) => {
    const account = await Account.findById(accountId);
    account.closeDate = closingData.closeDate;
    account.reasonOfClosing = closingData.reasonOfClosing;
    account.commentOfClosing = closingData.commentOfClosing;
    await account.save();
    return account;
  },
  addPayer: async (accountId, payerId) => {
    console.log("addPayer", accountId, payerId);

    const account = await Account.findById(accountId);
    account.payer = payerId;
    await account.save();
    return account;
  },
  addOwner: async (accountId, ownerId) => {
    const account = await Account.findById(accountId);
    account.owners.push(ownerId);
    await account.save();
    return account;
  },
  deleteOwner: async (accountId, ownerId) => {
    const account = await Account.findById(accountId);
    account.owners.pull(ownerId);
    await account.save();
    return account;
  },
  addDevice: async (accountId, deviceData) => {
    const device = await Device.findOne({ number: deviceData.number });
    if (device) {
      throw ApiError.BadRequest("Прибор учета с таким номером уже существует");
    }
    const newDevice = await deviceService.create(deviceData);
    const account = await Account.findById(accountId);
    account.devices.push(newDevice._id);
    await account.save();
    return account;
  },
  delete: async accountId => {
    const account = await Account.findByIdAndRemove(accountId);
    return account;
  },
  deleteDevice: async (accountId, deviceId) => {
    const account = await Account.findById(accountId);
    account.devices.filter(device => device._id !== deviceId);
    return account;
  },
  getAccountById: async id => {
    const account = await Account.findById(id)
      .populate("payer")
      .populate({
        path: "owners",
        populate: {
          path: "properties",
          model: "Property"
        }
      })
      .populate("devices");
    console.log("account", account);
    return account;
  },
  getAccountByNumber: async accountNumber => {
    const account = await Account.findOne({ number: accountNumber });
    return account;
  },
  getAccountByFilter: async filter => {
    const account = await Account.findOne(filter);
    return account;
  },
  getAccounts: async () => {
    const accounts = await Account.find();
    return accounts;
  },
  getFilteredAccounts: async filter => {
    const accounts = await Account.find(filter)
      .populate("payer")
      .populate("owners")
      .populate("devices");
    return accounts;
  },
  getAccountsByCompany: async companyId => {
    const accounts = await Account.find({ company: companyId })
      .populate("payer")
      .populate("owners")
      .populate("devices");
    return accounts;
  },
  getAllAccounts: async () => {
    const accounts = await Account.find();
    return accounts;
  }
};

module.exports = accountService;
