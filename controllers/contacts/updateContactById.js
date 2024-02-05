const { Contact } = require("../../models/index");

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
  res.json(result);
};

// const updateContact = async (req, res) => {
//   const { id } = req.params;
//   const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
//   if (!result) {
//     throw HttpError(404);
//   }
//   if (!req.body || Object.keys(req.body).length === 0) {
//     throw HttpError(400, "Body must have at least one field");
//   }
//   res.status(200).json(result);
// };

module.exports = updateContactById;
