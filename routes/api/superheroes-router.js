const express = require("express");

const ctrl = require("../../controllers/superheroes-controllers");

const { validateBody } = require("../../utils");

const schemas = require("../../models/superhero");

const router = express.Router();

router.get("/", ctrl.getSuperHeroList);

router.get("/:id", ctrl.getSuperHeroInfo);

router.post("/", ctrl.addSuperHero);
//validateBody(schemas.addSchema),

router.put("/:id", ctrl.editSuperHero); // за замовчуванням оновлює повністю обєкт
//validateBody(schemas.addSchema),

// router.patch("/:id", ctrl.editSuperHero); // змінює не всі поля

router.delete("/:id", ctrl.removeSuperHero);

module.exports = router;
