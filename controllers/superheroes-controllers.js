const superHero = require("../models/superHero/superheroes");

const { ctrlWrapper } = require("../utils");
// const { HttpError } = require("../helpers");

const getSuperHeroList = async (req, res) => {
  const result = await superHero.getAllHeroes();
  res.json(result);
};

const getSuperHeroInfo = async (req, res) => {
  const { id } = req.params;
  const result = await superHero.getFullInfo({ id });
  if (!result) {
    throw HttpError(404, `Product with ${id} not found`);
  }
  res.json({
    message: "Delete success",
  });
};

const addSuperHero = async (req, res) => {
  const { id } = req.params;
  const result = await superHero.addItem({ productId: id });
  if (!result) {
    throw HttpError(404, `Product with ${id} not found`);
  }
  res.json({
    message: "Delete success",
  });
};

const editSuperHero = async (req, res) => {
  const { id } = req.params;
  const result = await superHero.editById({ id });
  if (!result) {
    throw HttpError(404, `Product with ${id} not found`);
  }
  res.json({
    message: "Delete success",
  });
};

const removeSuperHero = async (req, res) => {
  const { id } = req.params;
  const result = await superHero.deleteById({ id });
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
