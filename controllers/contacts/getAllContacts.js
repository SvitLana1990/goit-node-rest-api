const { Contact } = require("../../models/index");

const getAllContacts = async (req, res) => {
  const result = await Contact.find({}, "-updatedAt");
  if (!result) {
    return res.status(404).json({ message: "Not Found" });
  }
  res.json(result);
};

// const getAllContacts = async (req, res) => {
//   const { _id: owner } = req.user;
//   const { page = 1, limit = 10, favorite } = req.query;
//   const skip = (page - 1) * limit;
//   let filter = { owner };
//   if (favorite) {
//     filter.favorite = favorite;
//   }
//   const result = await Contact.find(filter, "-createdAt -updatedAt", {
//     skip,
//     limit,
//   }).populate("owner", "name email");
//   res.status(200).json(result);
// };

module.exports = getAllContacts;
