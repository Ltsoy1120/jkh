const { Router } = require("express");
const router = Router();
const accountController = require("../controllers/account.controller");
const auth = require("../middlewares/auth");
const upload = require("../middlewares/upload");

//api/accounts
router.post(
  "/",
  [
    auth,
    upload.fields([
      {
        name: "docs",
        maxCount: 10
      }
    ])
  ],
  accountController.create
);
router.post("/filter", auth, accountController.getFilteredAccounts);
router.put(
  "/:id",
  [
    auth,
    upload.fields([
      {
        name: "docs",
        maxCount: 10
      }
    ])
  ],
  accountController.edit
);
router.put("/:id/closeAccount", auth, accountController.closeAccount);
router.put("/:id/addPayer", auth, accountController.addPayer);
router.put("/:id/addOwner", auth, accountController.addOwner);
router.put(
  "/:id/addDevice",
  [
    auth,
    upload.fields([
      {
        name: "docs",
        maxCount: 10
      }
    ])
  ],
  accountController.addDevice
);
router.get("/:id", auth, accountController.getAccountById);
router.get(
  "/:companyId/byCompany",
  auth,
  accountController.getAccountsByCompany
);
router.get("/", auth, accountController.getAllAccounts);
router.delete("/:id", auth, accountController.delete);
router.delete(
  "/:id/deleteDevice/:deviceId",
  auth,
  accountController.deleteDevice
);

module.exports = router;
