const mongoose = require("mongoose");
const request = require("supertest");

const app = require("../../app");

const { DB_HOST_TEST, PORT } = process.env;

describe("test api/superhero/ route", () => {
  let server = null;
  beforeAll(async () => {
    server = app.listen(PORT);
    await mongoose.connect(DB_HOST_TEST);
  });
  afterAll(async () => {
    server.close();
    await mongoose.connection.close();
  });

  test("should return a list of superheroes", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});
