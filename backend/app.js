const express = require("express");
const app = express();

require("dotenv").config({path:"backend/config.env"});

//using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//importing routes
const authRouter = require("./routes/authUser.routes.js");
//using routes
app.use("/api/v1/user", authRouter);

module.exports = app;