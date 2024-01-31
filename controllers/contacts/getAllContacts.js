const Contact = require("../../models/contacts");

const getAllContacts = async (req, res) => {
  const result = await Contact.find({}, "-updatedAt");
  if (!result) {
    return res.status(404).json({ message: "Not Found" });
  }
  res.json(result);
};

module.exports = getAllContacts;
