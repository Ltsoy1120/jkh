const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");
const companyController = require("../controllers/company.controller");
const notificationController = require("../controllers/notification.controller");
const officeController = require("../controllers/office.controller");
const userController = require("../controllers/user.controller");
const visitController = require("../controllers/visit.controller");
const auth = require("../middlewares/auth");
const upload = require("../middlewares/upload");
const subjectRoute = require("./subject.route");
const contractorRoute = require("./contractor.route");
const houseRoute = require("./house.route");
const entranceRoute = require("./entrance.route");
const apartmentRoute = require("./apartment.route");
const contractRoute = require("./contract.route");
const accountRoute = require("./account.route");
const deviceRoute = require("./device.route");
const devicedataRoute = require("./devicedata.route");
const accountLogController = require("../controllers/accountLog.controller");
const propertyController = require("../controllers/property.controller");
const applicationRoute = require("./application.route");
const appealRoute = require("./appeal.route");
const receptionRoute = require("./reception.route");
const receiptRoute = require("./receipt.route");
const taskTypeRoute = require("./taskType.route");
const taskNoticeRoute = require("./taskNotice.route");
const taskRoute = require("./task.route");

// /api/register
router.post(
  "/register",
  [
    check("email", "Некорректный email").isEmail(),
    check("password", "Минимальная длина пароля 6 символов").isLength({
      min: 6
    })
  ],
  userController.register
);
router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.get("/refresh", userController.refresh);

// /api/users
router.get("/users", auth, userController.getUsers);
router.get("/users/me", auth, userController.getMe);
router.get("/users/:id", auth, userController.getUserById);
router.get(
  "/users/employees/:companyId",
  auth,
  userController.getEmployeesByCompany
);
router.get(
  "/users/employees/:contractorId/byContractor",
  auth,
  userController.getEmployeesByContractor
);
router.post(
  "/users/employees/filter",
  auth,
  userController.getFilteredEmployees
);
router.post(
  "/users/addEmployee",
  [auth, upload.single("avatar")],
  userController.addEmployee
);
router.put("/users/:id/editEmployee", auth, userController.editEmployee);
router.put("/users/:id/editUser", auth, userController.editUser);
router.delete("/users/:id", auth, userController.deleteUser);

// api/companies
router.post(
  "/companies",
  [auth, upload.single("logo")],
  companyController.create
);
router.get("/companies", auth, companyController.getCompanies);
router.put("/companies/:id/addLeader", auth, companyController.addLeader);
router.put(
  "/companies/:id/addRequisites",
  auth,
  companyController.addRequisites
);
router.put("/companies/:id/addOffice", auth, companyController.addOffice);
router.put(
  "/companies/:companyId/addContractor/:contractorId",
  auth,
  companyController.addContractor
);
router.post(
  "/companies/:companyId/addNewContractor",
  [auth, upload.single("logo")],
  companyController.addNewContractor
);
router.put("/companies/:id/editLeader", auth, companyController.editLeader);
router.put(
  "/companies/:id/editRequisites",
  auth,
  companyController.editRequisites
);
router.put(
  "/companies/:id/editCompany",
  [auth, upload.single("file")],
  companyController.editCompany
);
router.put("/company/:id/deleteLeader", auth, companyController.deleteLeader);
// router.put(
//   "/company/:id/deleteRequisites",
//   auth,
//   companyController.deleteRequisites
// );
router.put(
  "/company/:id/deleteOffice/:officeId",
  auth,
  companyController.deleteOffice
);
router.delete(
  "/company/:id/deleteCompany",
  auth,
  companyController.deleteCompany
);
router.get("/company/:id", auth, companyController.getCompanyById);
router.get(
  "/company/:id/contractors",
  auth,
  companyController.getCompanyWithContractors
);

// api/offices
router.get("/office/:id", auth, officeController.getOfficeById);
router.put("/office/:id", auth, officeController.edit);
router.get(
  "/offices/byCompany/:id",
  auth,
  officeController.getOfficesByCompany
);

// api/requests
// router.post(
//   "/requests",
//   [auth, upload.single("file")],
//   requestController.create
// );
// router.get("/requests/my", auth, requestController.getMyRequests);
// router.post("/requests/filter", auth, requestController.getFilteredRequests);
// router.get("/request/:number", auth, requestController.getRequestByNumber);
// router.get("/request/:number/cancel", auth, requestController.cancel);

// api/visits
router.post("/visits", [auth, upload.single("file")], visitController.create);
router.get("/visits/my", auth, visitController.getMyVisits);
router.post("/visits/filter", auth, visitController.getFilteredVisits);
router.get("/visits/:date", auth, visitController.getVisitsByDate);
router.get("/visit/:number", auth, visitController.getVisitByNumber);

// api/notifications
router.get(
  "/notifications/my",
  auth,
  notificationController.getMyNotifications
);
router.post(
  "/notifications/filter",
  auth,
  notificationController.getFilteredNotifications
);
router.post("/notifications/:clientId", auth, notificationController.create);

// api/acccountlogs
router.get(
  "/acccountlogs/:id/byAccount",
  auth,
  accountLogController.getAccountLogsByAccount
);

// api/properties
router.put(
  "/properties/:id/editProperty",
  [
    auth,
    upload.fields([
      {
        name: "docs",
        maxCount: 10
      }
    ])
  ],
  propertyController.edit
);
router.get("/properties/:id", auth, propertyController.getPropertyById);
router.get(
  "/properties/byAccount/:id",
  auth,
  propertyController.getPropertyByAccount
);

router.use("/subjects", subjectRoute);
router.use("/contractors", contractorRoute);
router.use("/houses", houseRoute);
router.use("/entrances", entranceRoute);
router.use("/apartments", apartmentRoute);
router.use("/contracts", contractRoute);
router.use("/accounts", accountRoute);
router.use("/devices", deviceRoute);
router.use("/devicedata", devicedataRoute);
router.use("/applications", applicationRoute);
router.use("/appeals", appealRoute);
router.use("/receptions", receptionRoute);
router.use("/receipts", receiptRoute);
router.use("/taskTypes", taskTypeRoute);
router.use("/taskNotices", taskNoticeRoute);
router.use("/tasks", taskRoute);

module.exports = router;
