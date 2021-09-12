import * as dotenv from 'dotenv';
import * as fetch from 'node-fetch';

const { BUTTONDOWN_TOKEN } = process.env;
dotenv.config();

exports.handler = async (event) => {
  const email = JSON.parse(event.body).payload.email;

  console.log(`Recieved a submission: ${email}`);

  try {
    await fetch("https://api.buttondown.email/v1/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Token ${BUTTONDOWN_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })

    console.log(`Submitted to Buttondown:\n ${data}`);

  } catch (error) {
    console.log(`erro es -> ${error}`);
    return ({ statusCode: 422, body: String(error) })
  }

};
