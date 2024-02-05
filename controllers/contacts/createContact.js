const { Contact } = require("../../models/index");

const createContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

// const createContact = async (req, res) => {
//   const { _id: owner } = req.user;
//   const result = await Contact.create({ ...req.body, owner });
//   if (!result) {
//     throw HttpError(404);
//   }
//   res.status(201).json(result);
// };

module.exports = createContact;
