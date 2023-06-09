const express = require("express");
const cors = require("cors");
require("dotenv").config();

const heroRouter = require("./routes/api/hero");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/hero", heroRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
