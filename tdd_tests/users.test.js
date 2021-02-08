const request = require("supertest");
const express = require("express");

require("dotenv").config();

// const request = require("supertest");

// import userRoutes from "../backend/routes/userRoutes.js";
const userRouters = require("../backend/routes/userRoutes.js");

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);

require("./setup");

describe("Test of User router", () => {
  test("Testing user registration", () => {
    return request(app)
      .post("/api/users/register")
      .send({
        name: "Kamal Ojha",
        email: "kamal@test.com",
        password: "123456",
      })
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
