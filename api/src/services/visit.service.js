const Visit = require("../models/Visit");

const visitService = {
  create: async visitData => {
    const lastNumber = await Visit.find().sort({ number: -1 }).limit(1);
    if (!lastNumber[0]) {
      visitData.number = 1;
    } else {
      visitData.number = lastNumber[0].number + 1;
    }
    const visit = await Visit.create(visitData);
    return visit;
  },
  getVisitsByDate: async date => {
    const visits = await Visit.find({ date });
    return visits;
  },
  getMyVisits: async myId => {
    const visits = await Visit.find({ homeowner: myId }).populate(
      "responsiblePerson"
    );
    return visits;
  },
  getFilteredVisits: async filter => {
    const visits = await Visit.find(filter);
    return visits;
  },
  cancel: async number => {
    const visit = await Visit.findOne({ number: number });
    visit.status = "Отменено";
    await visit.save();
    return visit;
  },
  getVisitByNumber: async number => {
    const visit = await Visit.findOne({ number: number }).populate(
      "responsiblePerson"
    );
    console.log("visit", visit);
    return visit;
  }
};

module.exports = visitService;
