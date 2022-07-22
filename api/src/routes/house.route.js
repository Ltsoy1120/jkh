const { Router } = require("express");
const router = Router();
const houseController = require("../controllers/house.controller");
const auth = require("../middlewares/auth");
const upload = require("../middlewares/upload");

//api/houses
router.post("/", auth, houseController.create);
router.post("/filter", auth, houseController.getFilteredHouses);
router.put(
  "/:id",
  [
    auth,
    upload.fields([
      {
        name: "docs",
        maxCount: 10
      },
      {
        name: "photos",
        maxCount: 10
      }
    ])
  ],
  houseController.edit
);
router.get("/:id", auth, houseController.getHouseById);
router.get("/:companyId/byCompany", auth, houseController.getHousesByCompany);
router.get("/", auth, houseController.getAllHouses);
router.delete("/:id", auth, houseController.delete);

module.exports = router;
