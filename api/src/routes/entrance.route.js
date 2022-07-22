const express = require("express");
const router = express.Router();
const entranceController = require("../controllers/entrance.controller");
const auth = require("../middlewares/auth");

//api/entrances
router.post("/", auth, entranceController.create);
router.post("/filter", auth, entranceController.getFilteredEntrances);
router.put("/:id", auth, entranceController.edit);
router.delete("/:id", auth, entranceController.delete);
router.get("/:houseId/byHouse", auth, entranceController.getEntrancesByHouse);
router.get("/:id", auth, entranceController.getEntranceById);

module.exports = router;
