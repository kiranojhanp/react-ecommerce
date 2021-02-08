const { expect } = require("chai");
const axios = require("axios");
const { Given } = require("@cucumber/cucumber");

Given("Register an user account", async () => {
  const data = {
    name: "Kamal Ojha",
    email: "kamal1@test.com",
    password: "123456",
  };
  // for get request
  const response = await axios.post(
    "http://localhost:5000/api/users/register",
    data
  );
  //   console.log(response.data);

  const value = "";

  if (response.status === 201) {
    value = "Already registered";
  } else if (response.status === 200) {
    value = "Success";
  } else {
    value = "Failed";
  }
  expect(value).to.be.equal("Success");
});
