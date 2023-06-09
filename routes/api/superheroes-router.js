const express = require("express");

const ctrl = require("../../controllers/superheroes-controllers");

const { validateBody } = require("../../utils");

const schemas = require("../../schemas/superheroes");

const router = express.Router();

router.get("/", ctrl.getSuperHeroList);

router.get("/:id", ctrl.getSuperHeroInfo);

router.post("/", validateBody(schemas.addSchema), ctrl.addSuperHero);

router.put("/:id", validateBody(schemas.addSchema), ctrl.editSuperHero);

router.delete("/:id", ctrl.removeSuperHero);

module.exports = router;
