const moment = require("moment");
const Notification = require("../models/Notification");

const notificationService = {
  create: async (theme, text, client, notifier) => {
    const today = moment().format();
    const lastNumber = await Notification.find().sort({ number: -1 }).limit(1);
    let number = 0;
    if (!lastNumber[0]) {
      number = 1;
    } else {
      number = lastNumber[0].number + 1;
    }
    const appeal = await Notification.create({
      number,
      theme,
      text,
      client,
      notifier,
      createDate: today
    });
    return appeal;
  },
  getMyNotifications: async myId => {
    const notifications = await Notification.find({ client: myId });
    return notifications;
  },
  getFilteredNotifications: async filter => {
    const notifications = await Notification.find(filter);
    console.log("notifications", notifications);

    return notifications;
  }
};

module.exports = notificationService;
