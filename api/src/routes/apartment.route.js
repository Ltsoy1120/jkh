const express = require("express");
const router = express.Router();
const apartmentController = require("../controllers/apartment.controller");
const auth = require("../middlewares/auth");

//api/apartments
router.post("/", auth, apartmentController.create);
router.post("/filter", auth, apartmentController.getFilteredApartments);
router.put("/:id", auth, apartmentController.edit);
router.delete("/:id", auth, apartmentController.delete);
router.get("/:houseId/byHouse", auth, apartmentController.getApartmentsByHouse);
router.get("/:id", auth, apartmentController.getApartmentById);

module.exports = router;
