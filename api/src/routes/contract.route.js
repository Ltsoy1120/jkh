const { Router } = require("express");
const router = Router();
const contractController = require("../controllers/contract.controller");
const auth = require("../middlewares/auth");
const upload = require("../middlewares/upload");

//api/contracts
router.post(
  "/",
  [
    auth,
    upload.fields([
      {
        name: "scans",
        maxCount: 10
      }
    ])
  ],
  contractController.create
);
router.post("/filter", auth, contractController.getFilteredContracts);
router.put(
  "/:id",
  [
    auth,
    upload.fields([
      {
        name: "scans",
        maxCount: 10
      }
    ])
  ],
  contractController.edit
);
router.get("/:id", auth, contractController.getContractById);
router.get(
  "/:companyId/byCompany",
  auth,
  contractController.getContractsByCompany
);
router.get("/", auth, contractController.getAllContracts);
router.delete("/:id", auth, contractController.delete);

module.exports = router;
