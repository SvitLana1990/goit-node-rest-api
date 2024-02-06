const { Contact } = require("../../models");

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) {
    return res.status(404).json({ message: "Not found" });
  }
  res.status(200).json(result);
};

module.exports = deleteContact;
