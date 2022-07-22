const moment = require("moment");
const AccountLog = require("../models/AccountLog");

const accountLogService = {
  create: async (message, user, account) => {
    const { lastName, name, patronymic, position } = user;
    const logData = {
      createDate: moment().format("DD.MM.YYYY"),
      createTime: moment().format("hh.mm"),
      message: message,
      author: `${lastName} ${name[0]}.${
        patronymic && patronymic[0]
      }. (${position})`,
      account: account
    };
    const accountLog = await AccountLog.create(logData);
    return accountLog;
  },
  getAccountLogsByAccount: async accountId => {
    const accountLogs = await AccountLog.find({ account: accountId });
    return accountLogs;
  }
};

module.exports = accountLogService;
