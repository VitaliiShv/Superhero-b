const { SuperHero } = require("../models/superhero");

const { ctrlWrapper } = require("../utils");
const { HttpError } = require("../helpers");

const getSuperHeroList = async (req, res) => {
  const result = await SuperHero.find();
  res.json(result);
};

const getSuperHeroInfo = async (req, res) => {
  const { id } = req.params;
  const result = await SuperHero.findById(id);
  if (!result) {
    throw HttpError(404, `Hero with ${id} not found`);
  }
  res.json(result);
};

const addSuperHero = async (req, res) => {
  const result = await SuperHero.create(req.body);
  res.status(201).json(result);
};

const editSuperHero = async (req, res) => {
  const { id } = req.params;
  const result = await SuperHero.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, `Hero with ${id} not found`);
  }
  res.json(result);
};

const removeSuperHero = async (req, res) => {
  const { id } = req.params;
  const result = await SuperHero.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, `Product with ${id} not found`);
  }
  res.json({
    message: "Delete success",
  });
};

module.exports = {
  removeSuperHero: ctrlWrapper(removeSuperHero),
  editSuperHero: ctrlWrapper(editSuperHero),
  addSuperHero: ctrlWrapper(addSuperHero),
  getSuperHeroInfo: ctrlWrapper(getSuperHeroInfo),
  getSuperHeroList: ctrlWrapper(getSuperHeroList),
};
