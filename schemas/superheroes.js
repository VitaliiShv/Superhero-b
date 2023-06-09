const Joi = require("joi");

const addSchema = Joi.object({
  nickname: Joi.string().required().messages({
    "any.required": `"title" is required`,
  }),
  real_name: Joi.string().required().messages({
    "any.required": `"author" is required`,
    "string.empty": `"author" cannot be empty`,
    "string.base": `"author" must be string`,
  }),
  origin_description: Joi.string().required().messages({
    "any.required": `"author" is required`,
    "string.empty": `"author" cannot be empty`,
    "string.base": `"author" must be string`,
  }),
  superpowers: Joi.string().required().messages({
    "any.required": `"author" is required`,
    "string.empty": `"author" cannot be empty`,
    "string.base": `"author" must be string`,
  }),
  catch_phrase: Joi.string().required().messages({
    "any.required": `"author" is required`,
    "string.empty": `"author" cannot be empty`,
    "string.base": `"author" must be string`,
  }),
  Images: Joi.string().required().messages({
    "any.required": `"author" is required`,
    "string.empty": `"author" cannot be empty`,
    "string.base": `"author" must be string`,
  }),
  // Joi.string().pattern(//)
});

module.exports = { addSchema };
