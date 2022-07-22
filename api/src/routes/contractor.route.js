const express = require("express");
const contractorController = require("../controllers/contractor.controller");
const router = express.Router();
const auth = require("../middlewares/auth");
const upload = require("../middlewares/upload");

// api/contractors
router.post(
  "/",
  [auth, upload.single("logo")],
  contractorController.addContractor
);
router.put("/:id/addHead", auth, contractorController.addHead);
router.put("/:id/addRequisites", auth, contractorController.addRequisites);
router.put("/:id/addTypesOfWork", auth, contractorController.addTypesOfWork);
router.put(
  "/:id/editContractor",
  [auth, upload.single("file")],
  contractorController.editContractor
);
router.put("/:id/editHead", auth, contractorController.editHead);
router.put("/:id/editRequisites", auth, contractorController.editRequisites);
router.put("/:id/editTypesOfWork", auth, contractorController.editTypesOfWork);
router.get("/:id", auth, contractorController.getContractorById);
router.get("/", auth, contractorController.getAllContractors);
router.get(
  "/:companyId/byCompany",
  auth,
  contractorController.getContractorsByCompany
);
router.delete(
  "/:id/deleteContractor",
  auth,
  contractorController.deleteContractor
);

module.exports = router;
