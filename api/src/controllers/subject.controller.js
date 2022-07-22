const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/api-error");
const { nanoid } = require("nanoid");
const subjectService = require("../services/subject.service");
const propertyService = require("../services/property.service");
const accountService = require("../services/account.service");
const Subject = require("../models/Subject");

const subjectController = {
  create: async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ApiError.BadRequest(
            "Некорректные данные при создании субъекта",
            errors.array()
          )
        );
      }
      const subjectData = req.body;
      const candidate = await Subject.findOne({ email: subjectData.email });
      let subject;
      if (candidate) {
        subject = candidate;
      } else {
        const subjectPassword = nanoid(8);
        subjectData.password = subjectPassword;
        console.log("subjectPassword", subjectData.password);
        subject = await subjectService.create(subjectData);
      }

      return res.json({
        message: "Субъект создан",
        subject: subject
      });
    } catch (error) {
      next(error);
    }
  },
  editSubject: async (req, res, next) => {
    const subjectData = req.body;
    try {
      const subject = await subjectService.editSubject(
        req.params.id,
        subjectData
      );
      return res.json(subject);
    } catch (error) {
      next(error);
    }
  },
  deleteSubject: async (req, res, next) => {
    try {
      const propeties = await propertyService.getPropertiesBySubject(
        req.params.id
      );
      propeties.forEach(async property => {
        await propertyService.delete(property._id);
        await accountService.deleteOwner(property.account, property.subject);
      });
      const deletedSubject = await subjectService.deleteSubject(req.params.id);
      return res.json({
        message: "Субъект удален",
        subject: deletedSubject
      });
    } catch (error) {
      next(error);
    }
  },
  addProperty: async (req, res, next) => {
    try {
      const propertyData = req.body;
      if (!Array.isArray(propertyData.docs) && propertyData.docs) {
        const docs = [];
        docs.push(propertyData.docs);
        propertyData.docs = docs;
      } else if (!propertyData.docs) {
        propertyData.docs = [];
      }
      if (req.files) {
        req.files.docs &&
          req.files.docs.forEach(doc => {
            propertyData.docs.push(doc.filename);
          });
      }
      const account = await accountService.getAccountByNumber(
        propertyData.accountNumber
      );
      propertyData.address = account.address;
      propertyData.numberOfApartment = account.numberOfApartment;
      propertyData.account = account._id;

      const property = await propertyService.create(propertyData);
      const subject = await subjectService.addProperty(
        req.params.id,
        property._id
      );

      await accountService.addOwner(account._id, req.params.id);

      return res.json({
        message: "Собственность добавлена",
        subject: subject
      });
    } catch (error) {
      next(error);
    }
  },
  deleteProperty: async (req, res, next) => {
    try {
      const property = await propertyService.getPropertyById(
        req.params.propertyId
      );
      await accountService.deleteOwner(property.account, req.params.id);

      const subject = await subjectService.deleteProperty(
        req.params.id,
        req.params.propertyId
      );

      return res.json({
        message: "Собственность удалена",
        subject: subject
      });
    } catch (error) {
      next(error);
    }
  },
  addRegister: async (req, res, next) => {
    try {
      const registerData = req.body;
      if (!Array.isArray(registerData.docs) && registerData.docs) {
        const docs = [];
        docs.push(registerData.docs);
        registerData.docs = docs;
      } else if (!registerData.docs) {
        registerData.docs = [];
      }
      if (req.files) {
        req.files.docs &&
          req.files.docs.forEach(doc => {
            registerData.docs.push(doc.filename);
          });
      }
      const account = await accountService.getAccountByNumber(
        registerData.registerAccountNumber
      );
      registerData.registerAccount = account._id;

      const subject = await subjectService.addRegister(
        req.params.id,
        registerData
      );

      return res.json({
        message: "Регистрация добавлена",
        subject: subject
      });
    } catch (error) {
      next(error);
    }
  },
  editRegister: async (req, res, next) => {
    try {
      const registerData = req.body;
      if (!Array.isArray(registerData.docs) && registerData.docs) {
        const docs = [];
        docs.push(registerData.docs);
        registerData.docs = docs;
      } else if (!registerData.docs) {
        registerData.docs = [];
      }
      if (req.files) {
        req.files.docs &&
          req.files.docs.forEach(doc => {
            registerData.docs.push(doc.filename);
          });
      }
      const account = await accountService.getAccountByNumber(
        registerData.registerAccountNumber
      );
      registerData.registerAccount = account._id;

      const subject = await subjectService.editRegister(
        req.params.id,
        registerData
      );

      return res.json({
        message: "Регистрация отредактирована",
        subject: subject
      });
    } catch (error) {
      next(error);
    }
  },
  getSubjectById: async (req, res, next) => {
    try {
      const subject = await subjectService.getSubjectById(req.params.id);
      return res.json(subject);
    } catch (error) {
      next(error);
    }
  },
  getSubjectsByCompany: async (req, res, next) => {
    try {
      const companyId = req.params.companyId;
      const subjects = await subjectService.getSubjectsByCompany(companyId);
      return res.json(subjects);
    } catch (error) {
      next(error);
    }
  },
  getFilteredSubjects: async (req, res, next) => {
    try {
      let filter = {};
      Object.keys(req.body).map(key => {
        if (
          req.body[key] &&
          req.body[key] !== "" &&
          key !== "status" &&
          key !== "address" &&
          key !== "numberOfApartment"
        ) {
          filter[key] = req.body[key];
        } else if (
          req.body[key] &&
          req.body[key] !== "" &&
          key === "status" &&
          req.body.status === "Активен"
        ) {
          filter.isActive = true;
        } else if (
          req.body[key] &&
          req.body[key] !== "" &&
          key === "status" &&
          req.body.status === "Неактивен"
        ) {
          filter.isActive = false;
        }
      });

      let propertyFilter = {};
      Object.keys(req.body).map(key => {
        if (
          req.body[key] &&
          req.body[key] !== "" &&
          (key === "address" || key === "numberOfApartment")
        ) {
          propertyFilter[key] = req.body[key];
        }
      });
      const properties = await propertyService.getFilteredProperties(
        propertyFilter
      );
      let propertiesId = [];
      properties.forEach(property => propertiesId.push(property._id));
      filter.properties = { $in: propertiesId };
      const subjects = await subjectService.getFilteredSubjects(filter);

      return res.json(subjects);
    } catch (error) {
      next(error);
    }
  }

  //   login: async (req, res, next) => {
  //     try {
  //       const { email, password } = req.body;
  //       const authData = await userService.login(email, password);
  //       res.cookie("refreshToken", authData.refreshToken, {
  //         maxAge: 30 * 24 * 60 * 60 * 1000,
  //         httpOnly: true
  //       });
  //       return res.json({
  //         message: "Пользователь успешно залогинен",
  //         authData: authData
  //       });
  //     } catch (error) {
  //       next(error);
  //     }
  //   },
  //   logout: async (req, res, next) => {
  //     try {
  //       const { refreshToken } = req.cookies;
  //       const token = await userService.logout(refreshToken);
  //       res.clearCookie("refreshToken");
  //       return res.json({ message: "Пользователь разлогинен", token });
  //     } catch (error) {
  //       next(error);
  //     }
  //   },
  //   // refresh не работает
  //   refresh: async (req, res, next) => {
  //     console.log("refresh=====1", req.headers.cookie);
  //     try {
  //       const refreshToken = req.headers.cookie;
  //       console.log("refreshToken=====1", refreshToken);

  //       const authData = await userService.refresh(refreshToken);
  //       console.log("authData=====1", authData);

  //       res.cookie("refreshToken", authData.refreshToken, {
  //         maxAge: 30 * 24 * 60 * 60 * 1000,
  //         httpOnly: true
  //       });
  //       return res.json({
  //         message: "RefreshToken перезаписан",
  //         authData: authData
  //       });
  //     } catch (error) {
  //       next(error);
  //     }
  //   },
  //   getUsers: async (req, res, next) => {
  //     try {
  //       const users = await userService.getAllUsers();
  //       return res.json(users);
  //     } catch (error) {
  //       next(error);
  //     }
  //   },
  //   getMe: async (req, res, next) => {
  //     try {
  //       const myId = req.user.user;
  //       console.log("myId", myId);

  //       const user = await userService.getMe(myId);
  //       return res.json(user);
  //     } catch (error) {
  //       next(error);
  //     }
  //   },

  //   editUser: async (req, res, next) => {
  //     const userData = req.body;
  //     try {
  //       const user = await userService.editUser(req.params.id, userData);
  //       console.log("user", user);
  //       return res.json(user);
  //     } catch (error) {
  //       next(error);
  //     }
  //   },
};

module.exports = subjectController;
