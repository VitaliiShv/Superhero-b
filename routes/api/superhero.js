const express = require("express");

const ctrl = require("../../controllers/superhero-controllers");

const router = express.Router();

router.get("/", ctrl.getSuperHeroList);

router.get("/:id", ctrl.getSuperHeroInfo);

router.post("/", ctrl.addSuperHero);

router.put("/:id", ctrl.editSuperHero);

router.delete("/:id", ctrl.removeSuperHero);

module.exports = router;
