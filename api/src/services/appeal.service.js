const moment = require("moment");
const helpers = require("../helpers");
const Appeal = require("../models/Appeal");

const appealService = {
  create: async appealData => {
    const today = moment().format();
    const lastNumber = await Appeal.find().sort({ number: -1 }).limit(1);
    let number = 0;
    if (!lastNumber[0]) {
      number = 1;
    } else {
      number = lastNumber[0].number + 1;
    }
    appealData.number = number;
    appealData.createDate = today;
    const appeal = await Appeal.create(appealData);
    return appeal;
  },
  edit: async (appealId, appealData) => {
    const appeal = await Appeal.findByIdAndUpdate(appealId, appealData);
    return appeal;
  },
  cancel: async number => {
    const appeal = await Appeal.findOne({ number: number });
    appeal.status = "Отменено";
    await appeal.save();
    return appeal;
  },
  getAppealsByCompany: async companyId => {
    const appeals = await Appeal.find({
      company: companyId
    })
      .populate({
        path: "account",
        populate: {
          path: "payer",
          model: "Subject"
        }
      })
      .populate("dispatcher")
      .populate("performer");
    await helpers.buildExcelFile(appeals);
    return appeals;
  },
  getFilteredAppeals: async filter => {
    console.log("getFilteredAppeals", filter);

    const appeals = await Appeal.find(filter)
      .populate({
        path: "account",
        populate: {
          path: "payer",
          model: "Subject"
        }
      })
      .populate("dispatcher")
      .populate("performer");

    return appeals;
  },
  getMyAppeals: async myId => {
    const appeals = await Appeal.find({ sender: myId }).populate("performer");
    return appeals;
  },
  getAppealById: async id => {
    const appeal = await Appeal.findById(id)
      .populate({
        path: "account",
        populate: {
          path: "payer",
          model: "Subject"
        }
      })
      .populate("dispatcher")
      .populate("contractor")
      .populate("performer");
    return appeal;
  },
  getAppealByNumber: async number => {
    const appeal = await Appeal.findOne({ number: number }).populate(
      "performer"
    );
    console.log("appeal", appeal);
    return appeal;
  }
};

module.exports = appealService;
