const express = require("express");
const { validateBody, authenticate, upload } = require("../midlevares");
const ctrlWrapper = require("../helpers");
const {
  register,
  login,
  logout,
  getCurrent,
  updateAvatar,
} = require("../controllers/auth");
const { registerSchema, loginSchema } = require("../schemas");

const router = express.Router();

router.post("/register", validateBody(registerSchema), ctrlWrapper(register));

router.post("/login", validateBody(loginSchema), ctrlWrapper(login));

router.get("/current", authenticate, ctrlWrapper(getCurrent));

router.post("/logout", authenticate, ctrlWrapper(logout));

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(updateAvatar)
);

module.exports = router;
