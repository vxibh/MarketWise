const express = require("express");
const { createUser } = require("../controller/registerUser.controller.js");
const router = express.Router();


router.route("/register").post(createUser);

module.exports = router;