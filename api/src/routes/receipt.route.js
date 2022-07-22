const { Router } = require("express");
const router = Router();
const receiptController = require("../controllers/receipt.controller");
const auth = require("../middlewares/auth");
const upload = require("../middlewares/upload");

// api/receipts
router.post("/", [auth, upload.single("file")], receiptController.create);
router.get("/my", auth, receiptController.getMyReceipts);
router.get("/byCompany/:id", auth, receiptController.getReceiptsByCompany);
router.post("/filter", auth, receiptController.getFilteredReceipts);
// router.get("/receipt/:id", auth, receiptController.getReceipById);
// router.post("/receipt/:id/pay", auth, receiptController.payReceipt);

module.exports = router;
