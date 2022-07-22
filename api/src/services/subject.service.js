const moment = require("moment");
const bcrypt = require("bcrypt");
const tokenService = require("./token.service");
const ApiError = require("../exceptions/api-error");
const Token = require("../models/Token");
const Subject = require("../models/Subject");
const propertyService = require("./property.service");

const subjectService = {
  create: async subjectData => {
    const hashedPassword = await bcrypt.hash(subjectData.password, 10);
    const subject = await Subject.create({
      registerDate: moment().format(),
      email: subjectData.email,
      password: hashedPassword,
      lastName: subjectData.lastName,
      name: subjectData.name,
      patronymic: subjectData.patronymic,
      dateOfBirth: subjectData.dateOfBirth,
      gender: subjectData.gender,
      phones: subjectData.phones,
      placeOfWork: subjectData.placeOfWork,
      workPhone: subjectData.workPhone,
      passportSeries: subjectData.passportSeries,
      passportNumber: subjectData.passportNumber,
      departmentCode: subjectData.departmentCode,
      dateOfIssue: subjectData.dateOfIssue,
      issuedBy: subjectData.workPhone,
      type: subjectData.type,
      isActive: subjectData.isActive,
      company: subjectData.company
    });
    return subject;
  },
  editSubject: async (subjectId, subjectData) => {
    const subject = await Subject.findByIdAndUpdate(subjectId, subjectData);
    return subject;
  },
  deleteSubject: async subjectId => {
    const token = await Token.findOne({ user: subjectId });
    if (token) {
      const refreshToken = token.refreshToken;
      await tokenService.removeToken(refreshToken);
    }
    const subject = await Subject.findByIdAndRemove(subjectId);
    return subject;
  },
  addProperty: async (subjectId, propertyId) => {
    const subject = await Subject.findById(subjectId);
    subject.properties.push(propertyId);
    await subject.save();
    return subject;
  },
  deleteProperty: async (subjectId, propertyId) => {
    const subject = await Subject.findById(subjectId).populate("properties");
    subject.properties.pull(propertyId);
    await subject.save();
    await propertyService.delete(propertyId);
    return subject;
  },
  addRegister: async (subjectId, requisitesData) => {
    const subject = await Subject.findByIdAndUpdate(subjectId, requisitesData);
    return subject;
  },
  editRegister: async (subjectId, requisitesData) => {
    const subject = await Subject.findByIdAndUpdate(subjectId, requisitesData);
    return subject;
  },
  getFilteredSubjects: async filter => {
    const subjects = await Subject.find(filter).populate({
      path: "properties",
      populate: {
        path: "account",
        model: "Account"
      }
    });
    return subjects;
  },
  getSubjectById: async id => {
    const subject = await Subject.findById(id)
      .populate({
        path: "properties",
        populate: {
          path: "account",
          model: "Account"
        }
      })
      .populate("registerAccount");
    return subject;
  },
  getSubjectsByCompany: async companyId => {
    const subjects = await Subject.find({ company: companyId }).populate({
      path: "properties",
      populate: {
        path: "account",
        model: "Account"
      }
    });
    return subjects;
  }
  // login: async (email, password) => {
  //   console.log("email", email);

  //   const user = await User.findOne({ email });
  //   console.log("user", user);
  //   if (!user) {
  //     throw ApiError.BadRequest("Пользователь не найден");
  //   }
  //   const isMatch = await bcrypt.compare(password, user.password);
  //   if (!isMatch) {
  //     throw ApiError.BadRequest("Неверный логин или пароль");
  //   }
  //   const tokens = tokenService.generateTokens({ user: user._id });
  //   await tokenService.saveToken(user._id, tokens.refreshToken);
  //   return { ...tokens, user };
  // },
  // logout: async refreshToken => {
  //   const token = await tokenService.removeToken(refreshToken);
  //   return token;
  // },
  // refresh: async refreshToken => {
  //   if (!refreshToken) {
  //     return { message: "Пользователь не авторизован" };
  //   }
  //   const userData = tokenService.validateRefreshToken(refreshToken);
  //   console.log("userData=====", userData);
  //   const tokenFromDb = await tokenService.findToken(refreshToken);
  //   console.log("tokenFromDb=====", tokenFromDb);

  //   if (!userData || !tokenFromDb) {
  //     return { message: "Пользователь не авторизован" };
  //   }
  //   const user = await User.findById(userData.user);
  //   const tokens = tokenService.generateTokens({ user: user._id });
  //   await tokenService.saveToken(user._id, tokens.refreshToken);
  //   return { ...tokens, userId: user._id };
  // },

  // getAllUsers: async () => {
  //   const users = await User.find();
  //   return users;
  // },
  // getMe: async myId => {
  //   const user = await User.findById(myId).populate("company", "name");
  //   console.log(user);
  //   return user;
  // },

  // getEmployeesByContractor: async contractorId => {
  //   const employees = await User.find({
  //     role: "employee",
  //     contractor: contractorId
  //   });
  //   console.log("employees", employees);
  //   return employees;
  // },
};
module.exports = subjectService;
