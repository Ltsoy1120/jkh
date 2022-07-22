const { Router } = require("express");
const router = Router();
const taskTypeController = require("../controllers/taskType.controller");
const auth = require("../middlewares/auth");

// api/taskTypes
router.post("/", auth, taskTypeController.create);
router.put("/:id/disable", auth, taskTypeController.disable);
router.put("/:id/edit", auth, taskTypeController.edit);
router.get("/:id", auth, taskTypeController.getTaskTypeById);
router.get(
  "/byCompany/:companyId",
  auth,
  taskTypeController.getTaskTypesByCompany
);

module.exports = router;
