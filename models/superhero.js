const { Schema, model } = require("mongoose");

const Joi = require("joi");

const { handleMongooseError } = require("../utils");

const superheroShema = new Schema(
  {
    nickname: { type: String, required: [true, "nickname is required"] },
    real_name: { type: String, required: true },
    origin_description: { type: String, required: true },
    superpowers: { type: String, required: true },
    catch_phrase: { type: String, required: true },
    images: { type: Array },
  },
  { versionKey: false, timestamps: true }
);

superheroShema.post("save", handleMongooseError);

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
  images: Joi.string().required().messages({
    "any.required": `"author" is required`,
    "string.empty": `"author" cannot be empty`,
    "string.base": `"author" must be string`,
  }),
  // Joi.string().pattern(//)
});

const schemas = { addSchema };

const SuperHero = model("superhero", superheroShema, "superheroes");

module.exports = { SuperHero, schemas };
