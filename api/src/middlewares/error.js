const ApiError = require("../exceptions/api-error");

module.exports = function (err, req, res, next) {
  console.log("err", err);
  if (err instanceof ApiError) {
    console.log("err!!!!!", err.status);
    console.log("message!!!!!", err.message);

    return res.json({
      status: err.status,
      message: err.message,
      errors: err.errors
    });
  }
  return res
    .status(500)
    .json({ message: "Непредвиденная ошибка, попробуйте снова" });
};
