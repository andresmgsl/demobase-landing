require("dotenv").config();
const fetch = require('node-fetch');

const { BUTTONDOWN_TOKEN } = process.env;

exports.handler = async (event) => {
  const email = JSON.parse(event.body).email;

  console.log(`Recieved a submission: ${email}`);

  return fetch("https://api.buttondown.email/v1/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${BUTTONDOWN_TOKEN}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    },
    body: JSON.stringify({ email }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(`Submitted to Buttondown:\n ${data}`);
    })
    .catch((error) => {
      console.log(`el error es: ${error}`)
      return { statusCode: 422, body: String(error) };
    });
};
