const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");

const tempDir = path.join(__dirname, "temp");

const multerConfig = multer.diskStorage({
  destination: tempDir,
  // filename: (req, file, cb) => {
  //   cb(null, file.originalname);    //для перейменування файлу
  // },
});

const upload = multer({
  storage: multerConfig,
});

const ctrl = require("../../controllers/superheroes-controllers");

const { validateBody } = require("../../utils");

const schemas = require("../../models/superhero");

const router = express.Router();

router.get("/", ctrl.getSuperHeroList);

router.get("/:id", ctrl.getSuperHeroInfo);

router.post("/", upload.array("images", 10), ctrl.addSuperHero);
//validateBody(schemas.addSchema),

router.put("/:id", ctrl.editSuperHero); // за замовчуванням оновлює повністю обєкт
//validateBody(schemas.addSchema),

// router.patch("/:id", ctrl.editSuperHero); // змінює не всі поля

router.delete("/:id", ctrl.removeSuperHero);

module.exports = router;
