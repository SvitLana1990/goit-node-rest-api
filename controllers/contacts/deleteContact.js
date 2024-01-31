const Contact = require("../../models/contacts");

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) {
    return res.status(404).json({ message: "Not Found" });
  }
  res.json(result);
};

module.exports = deleteContact;
