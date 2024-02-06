const { Contact } = require("../../models");

const createContact = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  if (!result) {
    return res.status(404).json({ message: "Not found" });
  }
  res.status(201).json(result);
};

module.exports = createContact;
