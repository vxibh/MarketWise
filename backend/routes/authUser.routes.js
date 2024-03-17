const express = require("express");
const { createUser,loginUser } = require("../controller/user.controller.js");
const router = express.Router();

// registering and logining in user by post method
router.route("/register").post(createUser);
router.route("/login").post(loginUser);

module.exports = router;