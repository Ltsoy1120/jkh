const { Router } = require("express");
const router = Router();
const devicedataController = require("../controllers/devicedata.controller");
const auth = require("../middlewares/auth");

//api/devicedata
router.post("/", auth, devicedataController.create);
router.get("/my", auth, devicedataController.getMyDeviceData);
router.post("/filter", auth, devicedataController.getFilteredDeviceData);
router.get("/bydevice/:id", auth, devicedataController.getDeviceDataByDevice);

module.exports = router;
