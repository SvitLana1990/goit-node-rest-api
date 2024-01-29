const express = require("express");
const validateBody = require("../midlevares/validateBody.js");
const {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
} = require("../schemas/contactsSchemas.js");
const {
  getAllContacts,
  getContactById,
  deleteContact,
  createContact,
  updateContactById,
  updateStatusContact,
} = require("../controllers/contactsControllers.js");
const isValidId = require("../midlevares/isValidId.js");

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", isValidId, getContactById);

contactsRouter.delete("/:id", isValidId, deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put(
  "/:id",
  validateBody(updateContactSchema),
  isValidId,
  updateContactById
);

contactsRouter.patch(
  "/:id/favorite",
  validateBody(updateFavoriteSchema),
  isValidId,
  updateStatusContact
);

module.exports = contactsRouter;
