const { Router } = require("express");
const receptionController = require("../controllers/reception.controller");
const router = Router();
const auth = require("../middlewares/auth");
const upload = require("../middlewares/upload");

// api/receptions
router.post(
  "/",
  [
    auth,
    upload.fields([
      {
        name: "files",
        maxCount: 10
      }
    ])
  ],
  receptionController.create
);
router.put(
  "/:id/edit",
  [
    auth,
    upload.fields([
      {
        name: "files",
        maxCount: 10
      }
    ])
  ],
  receptionController.edit
);
router.put(
  "/:id/confirm",
  [
    auth,
    upload.fields([
      {
        name: "files",
        maxCount: 10
      }
    ])
  ],
  receptionController.confirm
);
router.put(
  "/:id/complete",
  [
    auth,
    upload.fields([
      {
        name: "files",
        maxCount: 10
      }
    ])
  ],
  receptionController.complete
);
router.put("/:number/cancel", auth, receptionController.cancel);
router.post("/byDate", auth, receptionController.getReceptionsByDate);
router.post("/filter", auth, receptionController.getFilteredReceptions);
router.get("/byCompany/:id", auth, receptionController.getReceptionsByCompany);
router.get("/:id", auth, receptionController.getReceptionById);

// router.get("/my", auth, appealController.getMyAppeals);

// router.get("/appeal/:number", auth, appealController.getAppealByNumber);
// router.get("/appeal/:number/cancel", auth, appealController.cancel);

module.exports = router;
