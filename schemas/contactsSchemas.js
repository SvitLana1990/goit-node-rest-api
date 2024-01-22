const Joi = require("joi");

const createContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.number().required(),
});

const updateContactSchema = Joi.object({});

module.exports = { createContactSchema, updateContactSchema };
