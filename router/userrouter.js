const express = require("express");
const { regform, register, logform, login, dashboard, 
    logout } = require("../controller/usercontroller");

const router = express.Router();

router.get("/", regform);
router.post("/register", register);

router.get("/login", logform)
router.post("/login", login)

router.get("/dashboard", dashboard)

router.get("/logout",logout)

module.exports = router;
