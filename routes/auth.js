const express = require("express");
const { validateBody, authenticate, upload } = require("../midlevares");
const ctrlWrapper = require("../helpers");
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

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(registerSchema),
  ctrlWrapper(register)
);

authRouter.get("/verify/:verificationToken", ctrlWrapper(verifyEmail));

authRouter.post(
  "/verify",
  validateBody(verifySchema),
  ctrlWrapper(resendVerifyEmail)
);

authRouter.post("/login", validateBody(loginSchema), ctrlWrapper(login));

authRouter.get("/current", authenticate, ctrlWrapper(getCurrent));

authRouter.post("/logout", authenticate, ctrlWrapper(logout));

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(updateAvatar)
);

module.exports = authRouter;
