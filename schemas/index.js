const {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
} = require("./contactsSchemas");

const { registerSchema, loginSchema } = require("./usersSchemas");

module.exports = {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
  registerSchema,
  loginSchema,
};
