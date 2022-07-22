const jwt = require("jsonwebtoken");
const Token = require("../models/Token");
const config = require("config");

const tokenService = {
  generateTokens: payload => {
    const accessToken = jwt.sign(
      payload,
      config.get("jwtAccessSecret", { expiresIn: "15s" })
    );
    const refreshToken = jwt.sign(
      payload,
      config.get("jwtRefreshSecret", { expiresIn: "30d" })
    );
    return { accessToken, refreshToken };
  },
  validateAccessToken: token => {
    try {
      const userData = jwt.verify(token, config.get("jwtAccessSecret"));
      return userData;
    } catch (error) {
      return null;
    }
  },
  validateRefreshToken: token => {
    try {
      const userData = jwt.verify(token, config.get("jwtRefreshSecret"));
      return userData;
    } catch (error) {
      return null;
    }
  },
  saveToken: async (userId, refreshToken) => {
    const tokenData = await Token.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await Token.create({ user: userId, refreshToken });
    return token;
  },
  removeToken: async refreshToken => {
    const tokenData = await Token.deleteOne({ refreshToken });
    return tokenData;
  },
  findToken: async refreshToken => {
    const tokenData = await Token.findOne({ refreshToken });
    return tokenData;
  }
};
module.exports = tokenService;
