const { expect } = require("chai");
const axios = require("axios");
const { Given } = require("@cucumber/cucumber");

// const { Builder, By, Key, until } = require("selenium-webdriver");
// const chrome = require("selenium-webdriver/chrome");

Given("Get fake data from JSONPlaceholder", async () => {
  // for get request
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  //   console.log(response.data);
  expect(response.data.title).to.be.equal("delectus aut autem");

  // for post request
  // const data = {
  //   name: "Kamal Ojha",
  //   email: "kamal1234@test.com",
  //   password: "123456",
  // };

  // const response = await axios.post(
  //   "http://localhost:5000/api/users/register",
  //   data
  // );

  // expect(response.data.email).to.be.equal("kamal1234@test.com");
});


