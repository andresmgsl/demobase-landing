exports.handler = async (event) => {
  console.log(event, event.body);
  const email = JSON.parse(event.body).email;

  console.log(`Recieved a submission: ${email}`);
};
