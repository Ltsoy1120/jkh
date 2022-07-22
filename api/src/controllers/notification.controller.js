const notificationService = require("../services/notification.service");

const notificationController = {
  create: async (req, res, next) => {
    try {
      const { theme, text } = req.body;
      const client = req.params.clientId;
      const notifier = req.user.user;

      const notificationData = await notificationService.create(
        theme,
        text,
        client,
        notifier
      );
      return res.status(201).json({
        message: "Уведомление создано",
        notification: notificationData
      });
    } catch (error) {
      next(error);
    }
  },
  getMyNotifications: async (req, res, next) => {
    try {
      const myId = req.user.user;
      const notifications = await notificationService.getMyNotifications(myId);
      return res.json(notifications);
    } catch (error) {
      next(error);
    }
  },
  getFilteredNotifications: async (req, res, next) => {
    try {
      let filter = {};
      Object.keys(req.body).map(key => {
        if (key === "createDate" && req.body.createDate !== "") {
          filter.createDate = {
            $gte: req.body.createDate.from,
            $lte: req.body.createDate.to
          };
        } else if (req.body[key] !== "") {
          filter[key] = req.body[key];
        }
      });
      const notifications = await notificationService.getFilteredNotifications(
        filter
      );
      return res.json(notifications);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = notificationController;
