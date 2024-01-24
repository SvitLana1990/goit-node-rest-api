const express = require("express");
const validateBody = require("../midlevares/validateBody.js");
const {
  createContactSchema,
  updateContactSchema,
} = require("../schemas/contactsSchemas.js");
const {
  getAllContacts,
  getContactById,
  deleteContact,
  createContact,
  updateContactById,
} = require("../controllers/contactsControllers.js");

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", getContactById);

contactsRouter.delete("/:id", deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put(
  "/:id",
  validateBody(updateContactSchema),
  updateContactById
);

module.exports = contactsRouter;
