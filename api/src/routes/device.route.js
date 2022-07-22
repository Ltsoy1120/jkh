const { Router } = require("express");
const router = Router();
const deviceController = require("../controllers/device.controller");
const auth = require("../middlewares/auth");
const upload = require("../middlewares/upload");

//api/devices
// router.post(
//   "/",
//   [
//     auth,
//     upload.fields([
//       {
//         name: "docs",
//         maxCount: 10
//       }
//     ])
//   ],
//   accountController.create
// );
// router.post("/devices", auth, deviceController.create);

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
  deviceController.edit
);
router.get("/:id", auth, deviceController.getDeviceById);
router.get("/my", auth, deviceController.getMyDevices);
router.get("/:number", auth, deviceController.getDeviceByNumber);
router.get("/:companyId/byCompany", auth, deviceController.getDevicesByCompany);
router.post("/filter", auth, deviceController.getFilteredDevices);

// router.get("/", auth, deviceController.getAllAccounts);
// router.delete("/:id", auth, deviceController.delete);

module.exports = router;
