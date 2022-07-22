const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");
// const path = require("path");
const cookieParser = require("cookie-parser");
const router = require("./src/routes/index.js");
const error = require("./src/middlewares/error.js");

const PORT = config.get("port") || 5000;
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);
app.use(express.static("public"));
app.use(cookieParser());
app.use("/api", router);
app.use(error);

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Mongoose connected!");
    app.listen(PORT, () => {
      console.log(`App has been started on port ${PORT}`);
    });
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
}

start();
