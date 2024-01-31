const getAllContacts = require("./getAllContacts");
const getContactById = require("./getContactById");
const createContact = require("./createContact");
const updateContactById = require("./updateContactById");
const deleteContact = require("./deleteContact");
const updateStatusContact = require("./updateStatusContact");

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContactById,
  deleteContact,
  updateStatusContact,
};
