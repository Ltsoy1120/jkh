const accountLogService = require("../services/accountLog.service");

const accountLogController = {
  getAccountLogsByAccount: async (req, res, next) => {
    try {
      const accountLogs = await accountLogService.getAccountLogsByAccount(
        req.params.id
      );
      return res.json(accountLogs);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = accountLogController;
