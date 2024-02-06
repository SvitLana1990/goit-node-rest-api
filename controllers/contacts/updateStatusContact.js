const { Contact } = require("../../models");

const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  if (Object.keys(body).length === 0) {
    return res
      .status(400)
      .json({ message: "Body must have one field: favorite" });
  }
  const result = await Contact.findByIdAndUpdate(id, body, { new: true });
  if (!result) {
    return res.status(404).json({ message: "Not Found" });
  }
  res.status(200).json(result);
};

module.exports = updateStatusContact;
