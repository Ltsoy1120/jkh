const { Router } = require("express");
const router = Router();
const taskController = require("../controllers/task.controller");
const auth = require("../middlewares/auth");

// api/taskNotices
router.post("/", auth, taskController.createTaskNotice);
router.get(
  "/byCompany/:companyId",
  auth,
  taskController.getTaskNoticeByCompany
);

module.exports = router;
