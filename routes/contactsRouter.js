const express = require("express");
const ctrlWrapper = require("../helpers/index.js");
const {
  validateBody,
  isValidId,
  authenticate,
} = require("../midlevares/index.js");

const {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
} = require("../schemas/index.js");

const {
  getAllContacts,
  getContactById,
  createContact,
  updateContactById,
  updateStatusContact,
  deleteContact,
} = require("../controllers/contacts/index.js");

const contactsRouter = express.Router();

contactsRouter.get("/", authenticate, ctrlWrapper(getAllContacts));

contactsRouter.get(
  "/:id",
  authenticate,
  isValidId,
  ctrlWrapper(getContactById)
);

contactsRouter.delete(
  "/:id",
  authenticate,
  isValidId,
  ctrlWrapper(deleteContact)
);

contactsRouter.post(
  "/",
  authenticate,
  validateBody(createContactSchema),
  ctrlWrapper(createContact)
);

contactsRouter.put(
  "/:id",
  authenticate,
  validateBody(updateContactSchema),
  isValidId,
  ctrlWrapper(updateContactById)
);

contactsRouter.patch(
  "/:id/favorite",
  authenticate,
  validateBody(updateFavoriteSchema),
  isValidId,
  ctrlWrapper(updateStatusContact)
);

module.exports = contactsRouter;
