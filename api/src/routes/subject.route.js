const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();
const subjectController = require("../controllers/subject.controller");
const auth = require("../middlewares/auth");
const upload = require("../middlewares/upload");

//api/subjects
router.post(
  "/",
  auth,
  [check("email", "Некорректный email").isEmail()],
  subjectController.create
);
router.put("/:id/editSubject", auth, subjectController.editSubject);
router.put(
  "/:id/addProperty",
  [
    auth,
    upload.fields([
      {
        name: "docs",
        maxCount: 10
      }
    ])
  ],
  subjectController.addProperty
);
router.put(
  "/:id/addRegister",
  [
    auth,
    upload.fields([
      {
        name: "registerDocs",
        maxCount: 10
      }
    ])
  ],
  subjectController.addRegister
);
router.put(
  "/:id/editRegister",
  [
    auth,
    upload.fields([
      {
        name: "registerDocs",
        maxCount: 10
      }
    ])
  ],
  subjectController.addRegister
);
router.get("/:id", auth, subjectController.getSubjectById);
router.get(
  "/byCompany/:companyId",
  auth,
  subjectController.getSubjectsByCompany
);
router.post("/filter", auth, subjectController.getFilteredSubjects);
router.delete(
  "/:id/deleteProperty/:propertyId",
  auth,
  subjectController.deleteProperty
);
router.delete("/:id", auth, subjectController.deleteSubject);

module.exports = router;
