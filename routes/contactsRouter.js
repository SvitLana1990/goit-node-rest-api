const express = require("express");
const ctrlWrapper = require("../helpers/index.js");
const { validateBody, isValidId } = require("../midlevares/index.js");

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

contactsRouter.get("/", ctrlWrapper(getAllContacts));

contactsRouter.get("/:id", isValidId, ctrlWrapper(getContactById));

contactsRouter.delete("/:id", isValidId, ctrlWrapper(deleteContact));

contactsRouter.post(
  "/",
  validateBody(createContactSchema),
  ctrlWrapper(createContact)
);

contactsRouter.put(
  "/:id",
  validateBody(updateContactSchema),
  isValidId,
  ctrlWrapper(updateContactById)
);

contactsRouter.patch(
  "/:id/favorite",
  validateBody(updateFavoriteSchema),
  isValidId,
  ctrlWrapper(updateStatusContact)
);

module.exports = contactsRouter;
