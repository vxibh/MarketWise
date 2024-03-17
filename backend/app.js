import express from "express"
import dotenv from "dotenv"
const app = express();

dotenv.config({path:"backend/config.env"});

//using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//importing routes
const authRouter = require("./routes/authUser.routes.js");
//using routes
app.use("/api/v1/user", authRouter);

export default app;