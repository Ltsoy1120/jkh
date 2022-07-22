const { Router } = require("express");
const router = Router();
const taskController = require("../controllers/task.controller");
const auth = require("../middlewares/auth");
const upload = require("../middlewares/upload");

// api/tasks
router.post(
  "/",
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
  taskController.create
);
router.get("/:id", auth, taskController.getTaskById);
router.put(
  "/:id/editTask",
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
  taskController.edit
);
router.put(
  "/:id/completeTask",
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
  taskController.completeTask
);
router.put("/:id/postponeTask", auth, taskController.postponeTask);
router.put("/:id/cancelTask", auth, taskController.cancelTask);
router.get("/byCompany/:companyId", auth, taskController.getTasksByCompany);
// router.get("/my", auth, receiptController.getMyReceipts);
router.post("/filter", auth, taskController.getFilteredTasks);

// router.post("/receipt/:id/pay", auth, receiptController.payReceipt);

module.exports = router;
