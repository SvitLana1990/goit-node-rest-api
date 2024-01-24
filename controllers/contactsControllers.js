const contacts = require("../services/contactsServices.js");
const ctrlWrapper = require("../helpers/ctrlWrapper.js");
const Contact = require("../models/contacts.js");

const getAllContacts = async (req, res) => {
  const result = await contacts.listContacts();
  // const result = await Contact.find();
  if (!result) {
    return res.status(404).json({ message: "Not Found" });
  }
  res.json(result);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.getContactById(id);
  if (!result) {
    return res.status(404).json({ message: "Not Found" });
  }
  res.json(result);
};

const createContact = async (req, res) => {
  // const result = await contacts.addContact(req.body);
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const updateContactById = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  if (Object.keys(body).length === 0) {
    return res
      .status(400)
      .json({ message: "Body must have at least one field" });
  }
  const result = await contacts.updateContactById(id, body);
  if (!result) {
    return res.status(404).json({ message: "Not Found" });
  }
  res.json(result);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.removeContact(id);
  if (!result) {
    return res.status(404).json({ message: "Not Found" });
  }
  res.json(result);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
  createContact: ctrlWrapper(createContact),
  updateContactById: ctrlWrapper(updateContactById),
  deleteContact: ctrlWrapper(deleteContact),
};
