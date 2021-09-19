exports.handler = async (event) => {
  console.log(event);
  //const email = JSON.parse(event.body).payload.email;

  console.log(`Recieved a submission: ${email}`);
};
