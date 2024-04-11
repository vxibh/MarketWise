import express from "express"
import dotenv from "dotenv"
const app = express();

dotenv.config({path:"backend/config.env"});

//using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//importing routes
import authRouter from "./routes/authUser.routes.js";
import adminRouter from "./routes/admin.routes.js";
//using routes
app.use("/api/v1/user", authRouter);
app.use("/api/v1/admin",adminRouter);

export default app;