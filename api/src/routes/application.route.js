const { Router } = require("express");
const applicationController = require("../controllers/application.controller");
const router = Router();
const auth = require("../middlewares/auth");
const upload = require("../middlewares/upload");

//api/applications
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
  applicationController.create
);
router.put(
  "/:id/editApplication",
  [
    auth,
    upload.fields([
      {
        name: "files",
        maxCount: 10
      }
    ])
  ],
  applicationController.edit
);
router.put(
  "/:id/inProgressApplication",
  [
    auth,
    upload.fields([
      {
        name: "files",
        maxCount: 10
      }
    ])
  ],
  applicationController.inProgress
);
router.put(
  "/:id/completeApplication",
  [
    auth,
    upload.fields([
      {
        name: "files",
        maxCount: 10
      },
      {
        name: "resultFiles",
        maxCount: 10
      }
    ])
  ],
  applicationController.complete
);
router.put("/:number/cancel", auth, applicationController.cancel);
router.get("/:id", auth, applicationController.getApplicationById);
router.get(
  "/byCompany/:companyId",
  auth,
  applicationController.getApplicationsByCompany
);
router.post("/filter", auth, applicationController.getFilteredApplications);

// router.post(
//     "/",
//     [auth, upload.single("files")],
//     applicationController.create
//   );
//   router.get("/requests/my", auth, applicationController.getMyRequests);
//   router.get("/request/:number", auth, applicationController.getRequestByNumber);

module.exports = router;
