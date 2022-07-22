const { Router } = require("express");
const appealController = require("../controllers/appeal.controller");
const router = Router();
const auth = require("../middlewares/auth");
const upload = require("../middlewares/upload");

// api/appeals
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
  appealController.create
);
router.put(
  "/:id/editAppeal",
  [
    auth,
    upload.fields([
      {
        name: "files",
        maxCount: 10
      }
    ])
  ],
  appealController.edit
);
router.put(
  "/:id/doneAppeal",
  [
    auth,
    upload.fields([
      {
        name: "files",
        maxCount: 10
      }
    ])
  ],
  appealController.done
);
router.get("/my", auth, appealController.getMyAppeals);
router.post("/filter", auth, appealController.getFilteredAppeals);
// router.get("/appeal/:number", auth, appealController.getAppealByNumber);
// router.get("/appeal/:number/cancel", auth, appealController.cancel);
router.get("/:id", auth, appealController.getAppealById);
router.get("/byCompany/:companyId", auth, appealController.getAppealsByCompany);

// router.put(
//   "/:id/inProgressApplication",
//   [
//     auth,
//     upload.fields([
//       {
//         name: "files",
//         maxCount: 10
//       }
//     ])
//   ],
//   applicationController.inProgress
// );

// router.put("/:number/cancel", auth, applicationController.cancel);

// router.post(
//     "/",
//     [auth, upload.single("files")],
//     applicationController.create
//   );
//   router.get("/requests/my", auth, applicationController.getMyRequests);
//   router.get("/request/:number", auth, applicationController.getRequestByNumber);

module.exports = router;
