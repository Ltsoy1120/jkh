const moment = require("moment");
const helpers = require("../helpers");
const Application = require("../models/Application");

const applicationService = {
  create: async applicationData => {
    const lastNumber = await Application.find().sort({ number: -1 }).limit(1);
    let number = 0;
    if (!lastNumber[0]) {
      number = 1;
    } else {
      number = lastNumber[0].number + 1;
    }
    applicationData.createDate = moment().format();
    applicationData.number = number;
    const application = await Application.create(applicationData);
    return application;
  },
  edit: async (applicationId, applicationData) => {
    const application = await Application.findByIdAndUpdate(
      applicationId,
      applicationData
    );
    return application;
  },
  cancel: async (number, reasonData) => {
    const application = await Application.findOne({ number: number });
    application.reasonForCancel = reasonData.reasonForCancel;
    application.status = "Отменена";
    await application.save();
    return application;
  },
  getFilteredApplications: async filter => {
    const applications = await Application.find(filter)
      .populate({
        path: "account",
        populate: {
          path: "payer",
          model: "Subject"
        }
      })
      .populate("dispatcher")
      .populate("performer");
    await helpers.buildExcelFile(applications);
    return applications;
  },
  getMyRequests: async myId => {
    const applications = await Application.find({ applicant: myId }).populate(
      "performer"
    );
    return applications;
  },
  getApplicationsByCompany: async companyId => {
    const applications = await Application.find({
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
    await helpers.buildExcelFile(applications);
    return applications;
  },
  getApplicationById: async id => {
    const application = await Application.findById(id)
      .populate("dispatcher")
      .populate("contractor")
      .populate("performer");
    return application;
  },
  getRequestByNumber: async number => {
    const application = await Application.findOne({ number: number }).populate(
      "performer"
    );
    return application;
  }
};

module.exports = applicationService;
