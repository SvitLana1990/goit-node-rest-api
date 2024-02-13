const express = require("express");
const { validateBody, authenticate, upload } = require("../midlevares");
const { ctrlWrapper } = require("../helpers");
const {
  register,
  login,
  logout,
  getCurrent,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
} = require("../controllers/auth");
const { registerSchema, loginSchema, verifySchema } = require("../schemas");

const router = express.Router();

router.post("/register", validateBody(registerSchema), ctrlWrapper(register));

router.get("/verify/:verificationToken", ctrlWrapper(verifyEmail));

router.post(
  "/verify",
  validateBody(verifySchema),
  ctrlWrapper(resendVerifyEmail)
);

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
