const ApiError = require("../exceptions/api-error");
const tokenService = require("../services/token.service");

module.exports = function (req, res, next) {
  try {
    const accessToken = req.headers.authorization.split(" ")[1];
    if (!accessToken) {
      return next(ApiError.UnauthorizedError());
    }
    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
      return next(ApiError.UnauthorizedError());
    }
    console.log("userData", userData);

    req.user = userData;
    next();
  } catch (error) {
    return next(ApiError.UnauthorizedError());
  }
};
