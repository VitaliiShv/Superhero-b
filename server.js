const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://Vitalii:S8hDbi4qiO8pFdPn@cluster0.3rbis32.mongodb.net/superheroes-collection?retryWrites=true&w=majority";

//S8hDbi4qiO8pFdPn

// const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(3030))
  .catch((error) => console.log(error.message));
