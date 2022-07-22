const moment = require("moment");
const bcrypt = require("bcrypt");
const tokenService = require("./token.service");
const ApiError = require("../exceptions/api-error");
const User = require("../models/User");
const Token = require("../models/Token");
const mailer = require("../nodemailer");
const companyService = require("./company.service");
const Company = require("../models/Company");

const userService = {
  register: async userData => {
    const candidate = await User.findOne({ email: userData.email });

    if (candidate) {
      throw ApiError.BadRequest("Такой пользователь уже существует");
    }
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user = await User.create({
      lastName: userData.lastName,
      name: userData.name,
      patronymic: userData.patronymic,
      email: userData.email,
      password: hashedPassword,
      registerDate: moment().format(),
      dateOfBirth: userData.dateOfBirth,
      avatar: userData.avatar,
      address: userData.address,
      account: userData.account,
      phones: userData.phones,
      position: userData.position,
      role: userData.role,
      // typeOfPayer: userData.typeOfPayer,
      company: userData.company,
      contractor: userData.contractor,
      department: userData.department,
      isActive: userData.isActive,
      subordinates: userData.subordinates,
      typesOfRequests: userData.typesOfRequests,
      nameOfRequests: userData.nameOfRequests,
      sendPassword: userData.sendPassword,
      fullnameInParent: userData.fullnameInParent,
      basisForAppointment: userData.basisForAppointment
      // startDateOfOwnership: userData.startDateOfOwnership,
      // shareOfOwnership: userData.shareOfOwnership,
      // statusOfOwnership: userData.statusOfOwnership
    });
    const company = await Company.findById(userData.company);

    const message = {
      to: userData.email,
      subject: `Поздравляем! Вы успешно зарегистрированы на сайте компании ${company.name}`,
      text: `Поздравляем, Вы успешно зарегистрированы на сайте компании ${company.name}!
  
      Данные Вашей учетной записи:
      login: ${userData.email}
      password: ${userData.password}
  
      Даннное письмо не требует ответа.`
    };
    console.log(message);
    mailer(message);

    const tokens = tokenService.generateTokens({ user: user._id });
    await tokenService.saveToken(user._id, tokens.refreshToken);

    return { ...tokens, user };
  },
  login: async (email, password) => {
    console.log("email", email);

    const user = await User.findOne({ email });
    console.log("user", user);
    if (!user) {
      throw ApiError.BadRequest("Пользователь не найден");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw ApiError.BadRequest("Неверный логин или пароль");
    }
    const tokens = tokenService.generateTokens({ user: user._id });
    await tokenService.saveToken(user._id, tokens.refreshToken);
    return { ...tokens, user };
  },
  logout: async refreshToken => {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  },
  refresh: async refreshToken => {
    if (!refreshToken) {
      return { message: "Пользователь не авторизован" };
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    console.log("userData=====", userData);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    console.log("tokenFromDb=====", tokenFromDb);

    if (!userData || !tokenFromDb) {
      return { message: "Пользователь не авторизован" };
    }
    const user = await User.findById(userData.user);
    const tokens = tokenService.generateTokens({ user: user._id });
    await tokenService.saveToken(user._id, tokens.refreshToken);
    return { ...tokens, userId: user._id };
  },
  editUser: async (userId, userData) => {
    const user = await User.findByIdAndUpdate(userId, userData);
    await user.save();
    return user;
  },
  deleteUser: async user => {
    const token = await Token.findOne({ user });
    const refreshToken = token.refreshToken;
    await tokenService.removeToken(refreshToken);
    const deletedUser = await User.findByIdAndRemove(user);
    return deletedUser;
  },
  getAllUsers: async () => {
    const users = await User.find();
    return users;
  },
  getMe: async myId => {
    const user = await User.findById(myId).populate({
      path: "company",
      populate: {
        path: "offices",
        model: "Office"
      }
    });
    console.log(user);
    return user;
  },
  getUserById: async id => {
    const user = await User.findById(id);
    return user;
  },
  getEmployeesByCompany: async companyId => {
    const employees = await User.find({ role: "employee", company: companyId });
    return employees;
  },
  getEmployeesByContractor: async contractorId => {
    const employees = await User.find({
      role: "employee",
      contractor: contractorId
    });
    return employees;
  },
  getFilteredEmployees: async filter => {
    const employees = await User.find(filter);

    return employees;
  }
};
module.exports = userService;
