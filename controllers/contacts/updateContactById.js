const { Contact } = require("../../models");

const updateContactById = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  if (Object.keys(body).length === 0) {
    return res.status(400).json({
      message: "Body must have at least one of field: name, email, phone",
    });
  }
  const result = await Contact.findByIdAndUpdate(id, body, { new: true });
  if (!result) {
    return res.status(404).json({ message: "Not Found" });
  }
  res.status(200).json(result);
};

module.exports = updateContactById;
