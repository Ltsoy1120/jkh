const moment = require("moment");
const Reception = require("../models/Reception");

const receptionService = {
  create: async receptionData => {
    const lastNumber = await Reception.find().sort({ number: -1 }).limit(1);
    if (!lastNumber[0]) {
      receptionData.number = 1;
    } else {
      receptionData.number = lastNumber[0].number + 1;
    }
    receptionData.createDate = moment().format();
    const reception = await Reception.create(receptionData);
    return reception;
  },
  edit: async (receptionId, receptionData) => {
    const reception = await Reception.findByIdAndUpdate(
      receptionId,
      receptionData
    );
    return reception;
  },
  cancel: async (number, reasonData) => {
    const reception = await Reception.findOne({ number: number });
    reception.reasonForCancel = reasonData.reasonForCancel;
    reception.status = "Отменен";
    await reception.save();
    return reception;
  },
  getReceptionsByDate: async filter => {
    const receptions = await Reception.find(filter);
    return receptions;
  },
  getReceptionById: async id => {
    const reception = await Reception.findById(id)
      .populate({
        path: "account",
        populate: {
          path: "payer",
          model: "Subject"
        }
      })
      .populate("office")
      .populate("responsiblePerson");
    return reception;
  },
  getReceptionsByCompany: async companyId => {
    const receptions = await Reception.find({
      company: companyId
    })
      .populate("office")
      .populate({
        path: "account",
        populate: {
          path: "payer",
          model: "Subject"
        }
      })
      .populate({
        path: "account",
        populate: {
          path: "owners",
          model: "Subject"
        }
      })
      .populate("responsiblePerson");
    return receptions;
  },
  getMyVisits: async myId => {
    const receptions = await Reception.find({ homeowner: myId }).populate(
      "responsiblePerson"
    );
    return receptions;
  },
  getFilteredReceptions: async filter => {
    const receptions = await Reception.find(filter)
      .populate("office")
      .populate({
        path: "account",
        populate: {
          path: "payer",
          model: "Subject"
        }
      })
      .populate({
        path: "account",
        populate: {
          path: "owners",
          model: "Subject"
        }
      })
      .populate("responsiblePerson");
    return receptions;
  },
  getVisitByNumber: async number => {
    const reception = await Reception.findOne({ number: number }).populate(
      "responsiblePerson"
    );
    console.log("visit", reception);
    return reception;
  }
};

module.exports = receptionService;
