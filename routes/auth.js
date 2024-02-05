const express = require("express");
const { validateBody, authenticate } = require("../midlevares");
const ctrlWrapper = require("../helpers");
const { register, login, logout, getCurrent } = require("../controllers/auth");
const { registerSchema, loginSchema } = require("../schemas");

const router = express.Router();

router.post("/register", validateBody(registerSchema), ctrlWrapper(register));

router.post("/login", validateBody(loginSchema), ctrlWrapper(login));

router.get("/current", authenticate, ctrlWrapper(getCurrent));

router.post("/logout", authenticate, ctrlWrapper(logout));

module.exports = router;
