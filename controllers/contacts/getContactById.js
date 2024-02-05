const { Contact } = require("../../models/index");

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    return res.status(404).json({ message: "Not Found" });
  }
  res.json(result);
};

// const getContactById = async (req, res) => {
//   const { id } = req.params;
//   const result = await Contact.findById(id);
//   if (!result || result.length === 0) {
//     throw HttpError(404);
//   }
//   res.status(200).json(result);
// };

module.exports = getContactById;
