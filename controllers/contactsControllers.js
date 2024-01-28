const ctrlWrapper = require("../helpers/ctrlWrapper.js");
const Contact = require("../models/contacts.js");

const getAllContacts = async (req, res) => {
  const result = await Contact.find({}, "-updatedAt");
  if (!result) {
    return res.status(404).json({ message: "Not Found" });
  }
  res.json(result);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    return res.status(404).json({ message: "Not Found" });
  }
  res.json(result);
};

const createContact = async (req, res) => {
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
  const result = await Contact.findByIdAndUpdate(id, body, { new: true });
  if (!result) {
    return res.status(404).json({ message: "Not Found" });
  }
  res.json(result);
};

const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  if (Object.keys(body).length === 0) {
    return res
      .status(400)
      .json({ message: "Body must have at least one field" });
  }
  const result = await Contact.findByIdAndUpdate(id, body, { new: true });
  if (!result) {
    return res.status(404).json({ message: "Not Found" });
  }
  res.json(result);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);
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
  updateStatusContact: ctrlWrapper(updateStatusContact),
  deleteContact: ctrlWrapper(deleteContact),
};
