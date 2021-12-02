const processOrder = (customer, callback) => {
  // simulate an error

  // const error = `Oh no! ${customer}'s juicy burger burst into flammes!`;
  const error = '';

  console.log(`${customer} orders a big juicy burger!`);

  // async operation (API call, writing to file)
  setTimeout(() => {
    if (error) {
      callback(error, null);
      return; // exit the function
    }
    callback(null, `${customer}\' big juicy burger is ready!`);
  }, 3000);

};

// start execution here
processOrder('Sponge Bob', (error, message) => {
  if (error) {
    console.log(`Error: ${error}`);
    return;
  }

  console.log(`Everything ok: ${message}`);
});

console.log('Sponge Bob waits for his burger...');
