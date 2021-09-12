require("dotenv").config();

// import 'dotenv';
// import * as fetch from 'node-fetch';

const fetch = require("node-fetch");
const { BUTTONDOWN_TOKEN } = process.env;

exports.handler = async (event) => {
  const email = JSON.parse(event.body).payload.email;

  console.log(`Recieved a submission: ${email}`);

  return fetch("https://api.buttondown.email/v1/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${BUTTONDOWN_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(`Submitted to Buttondown:\n ${data}`);
    })
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};
