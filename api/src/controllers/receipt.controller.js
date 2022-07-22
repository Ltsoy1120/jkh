const moment = require("moment");
const receiptService = require("../services/receipt.service");

const receiptController = {
  create: async (req, res, next) => {
    try {
      const receiptData = req.body;
      receiptData.createDate = moment().format();

      if (req.file) {
        receiptData.file = req.file.filename;
      }
      const receipt = await receiptService.create(receiptData);

      return res.status(201).json({
        message: "Квитанция создана",
        receipt: receipt
      });
    } catch (error) {
      next(error);
    }
  },
  getMyReceipts: async (req, res, next) => {
    try {
      const myId = req.user.user;
      const receipts = await receiptService.getMyReceipts(myId);
      return res.json(receipts);
    } catch (error) {
      next(error);
    }
  },
  getReceipById: async (req, res, next) => {
    try {
      const receipt = await receiptService.getReceipById(req.params.id);
      return res.json(receipt);
    } catch (error) {
      next(error);
    }
  },
  getReceiptsByCompany: async (req, res, next) => {
    try {
      const receipt = await receiptService.getReceiptsByCompany(req.params.id);
      return res.json(receipt);
    } catch (error) {
      next(error);
    }
  },
  getFilteredReceipts: async (req, res, next) => {
    try {
      let filter = {};
      Object.keys(req.body).map(key => {
        if (req.body[key] !== "") {
          filter[key] = req.body[key];
        }
      });

      const receipts = await receiptService.getFilteredReceipts(filter);
      return res.json(receipts);
    } catch (error) {
      next(error);
    }
  },
  payReceipt: async (req, res, next) => {
    try {
      const receipt = await receiptService.payReceipt(req.params.id);
      return res.json(receipt);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = receiptController;
