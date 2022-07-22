const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport(
  {
    host: "smtp.mail.ru",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "jhktest@mail.ru",
      pass: "HdIOnad92NqyC3uv8Wjf" // пароль для внешнего приложения, пароль аккаунта jhk08072022test
    }
  },
  {
    from: "Mailer Test <jhktest@mail.ru>"
  }
);

const mailer = message => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log("Email sent: ", info);
  });
};

module.exports = mailer;
