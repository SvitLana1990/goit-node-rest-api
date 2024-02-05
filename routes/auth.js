const express = require("express");
const { validateBody } = require("../midlevares/index");
const ctrlWrapper = require("../helpers/index.js");
const { register, login } = require("../controllers/auth/index.js");
const { registerSchema, loginSchema } = require("../schemas/index");

const router = express.Router();

router.post("/register", validateBody(registerSchema), ctrlWrapper(register));

router.post("/login", validateBody(loginSchema), ctrlWrapper(login));

// authRouter.get("/current", authenticate, ctrl.getCurrentUser);
// authRouter.post("/logout", authenticate, ctrl.logoutUser);
// authRouter.patch(
//   "/:id/subscription",
//   authenticate,
//   validateBody(userSchemas.updateSubscriptionSchema),
//   ctrl.updateSubscriptionUser
// );

module.exports = router;
