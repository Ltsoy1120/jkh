const Receipt = require("../models/Receipt");

const receiptService = {
  create: async data => {
    const receipt = await Receipt.create(data);
    return receipt;
  },
  getFilteredReceipts: async filter => {
    const devicedata = await Receipt.find(filter)
      .populate("device")
      .populate("homeowner")
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
      });
    return devicedata;
  },
  getMyReceipts: async myId => {
    const receipts = await Receipt.find({ homeowner: myId }).populate("device");
    return receipts;
  },
  getReceipById: async id => {
    const receipt = await Receipt.findById(id)
      .populate("device")
      .populate("homeowner")
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
      });
    return receipt;
  },
  getReceiptsByCompany: async companyId => {
    const receipt = await Receipt.find({ company: companyId })
      .populate("device")
      .populate("homeowner")
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
      });
    return receipt;
  },
  payReceipt: async id => {
    const receipt = await Receipt.findById(id);
    receipt.status = "Оплачена";
    await receipt.save();
    return receipt;
  }
};

module.exports = receiptService;
