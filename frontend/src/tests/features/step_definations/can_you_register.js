const { expect } = require("chai");
const { Given, When, Then } = require("@cucumber/cucumber");
const axios = require("axios");

const canRegister = async (name, email, password) => {
  const data = {
    name,
    email,
    password,
  };

  const response = await axios.post(
    "http://localhost:5000/api/users/register",
    data
  );

  console.log(response.status);

  if (response.status === 201) {
    return "Success";
  } else if (!response.status || response.status === 400) {
    return "Fail";
  }
};

Given("register this account for user {string}", function (givenUsername) {
  this.name = givenUsername;
});

Given("this email {string}", function (givenEmail) {
  this.email = givenEmail;
});

Given("this password {string}", function (givenPassword) {
  this.password = givenPassword;
});

When("I ask to register an account", function () {
  this.response = canRegister(this.name, this.email, this.password);
});

Then("I should be replied back {string}", function (expectedResponse) {
  expect(this.response).to.be.equal(expectedResponse);
});
