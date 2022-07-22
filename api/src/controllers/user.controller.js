const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/api-error");
const { nanoid } = require("nanoid");
const userService = require("../services/user.service");

const userController = {
  register: async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ApiError.BadRequest(
            "Некорректные данные при регистрации",
            errors.array()
          )
        );
      }
      const userData = req.body;
      const authData = await userService.register(userData);
      res.cookie("refreshToken", authData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true
      });
      return res.status(201).json({
        message: `Пользователь создан успешно! Данные учетной записи отправлены на email: ${userData.email}`,
        authData: authData
      });
    } catch (error) {
      next(error);
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const authData = await userService.login(email, password);
      res.cookie("refreshToken", authData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true
      });
      return res.json({
        message: "Пользователь успешно залогинен",
        authData: authData
      });
    } catch (error) {
      next(error);
    }
  },
  logout: async (req, res, next) => {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.json({ message: "Пользователь разлогинен", token });
    } catch (error) {
      next(error);
    }
  },
  // refresh не работает
  refresh: async (req, res, next) => {
    console.log("refresh=====1", req.headers.cookie);
    try {
      const refreshToken = req.headers.cookie;
      console.log("refreshToken=====1", refreshToken);

      const authData = await userService.refresh(refreshToken);
      console.log("authData=====1", authData);

      res.cookie("refreshToken", authData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true
      });
      return res.json({
        message: "RefreshToken перезаписан",
        authData: authData
      });
    } catch (error) {
      next(error);
    }
  },
  getUsers: async (req, res, next) => {
    try {
      const users = await userService.getAllUsers();
      return res.json(users);
    } catch (error) {
      next(error);
    }
  },
  getMe: async (req, res, next) => {
    try {
      const myId = req.user.user;
      console.log("myId", myId);

      const user = await userService.getMe(myId);
      return res.json(user);
    } catch (error) {
      next(error);
    }
  },
  addEmployee: async (req, res, next) => {
    try {
      const employeeData = req.body;
      const employeePassword = nanoid(8);
      employeeData.password = employeePassword;
      console.log("password", employeeData.password);
      employeeData.role = "employee";
      const employee = await userService.register(employeeData);

      return res.json({
        message: `Сотрудник добавлен успешно! Данные учетной записи отправлены на email: ${employeeData.email}`,
        user: employee
      });
    } catch (error) {
      next(error);
    }
  },
  getEmployeesByCompany: async (req, res, next) => {
    try {
      const companyId = req.params.companyId;
      const users = await userService.getEmployeesByCompany(companyId);
      return res.json(users);
    } catch (error) {
      next(error);
    }
  },
  getEmployeesByContractor: async (req, res, next) => {
    try {
      const contractorId = req.params.contractorId;
      const users = await userService.getEmployeesByContractor(contractorId);
      return res.json(users);
    } catch (error) {
      next(error);
    }
  },
  getFilteredEmployees: async (req, res, next) => {
    try {
      let filter = {};
      console.log("req.body", req.body);

      Object.keys(req.body).map(key => {
        if (key === "registerDate" && req.body.registerDate !== "") {
          filter.registerDate = {
            $gte: req.body.registerDate.from,
            $lte: req.body.registerDate.to
          };
        } else if (req.body[key] !== "") {
          filter[key] = req.body[key];
        }
      });
      console.log("filter", filter);
      const employees = await userService.getFilteredEmployees(filter);
      console.log("employees", employees);

      return res.json(employees);
    } catch (error) {
      next(error);
    }
  },
  getUserById: async (req, res, next) => {
    try {
      const user = await userService.getUserById(req.params.id);
      return res.json(user);
    } catch (error) {
      next(error);
    }
  },
  editEmployee: async (req, res, next) => {
    console.log("getUserById", req.params.id);
    const employeeData = req.body;
    try {
      const user = await userService.editUser(req.params.id, employeeData);
      console.log("employee", user);

      return res.json(user);
    } catch (error) {
      next(error);
    }
  },
  editUser: async (req, res, next) => {
    const userData = req.body;
    try {
      const user = await userService.editUser(req.params.id, userData);
      console.log("user", user);
      return res.json(user);
    } catch (error) {
      next(error);
    }
  },
  deleteUser: async (req, res, next) => {
    try {
      const user = await userService.deleteUser(req.params.id);
      return res.json({
        message: "Пользователь удален",
        user: user
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = userController;
