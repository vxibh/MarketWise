import  express  from "express";
import { addAdmin,authAdmin } from "../controller/admin.controller.js";
const router = express.Router();

router.route("/register").post(addAdmin);
router.route("/login").post(authAdmin);

export default router;