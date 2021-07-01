const processOrder = (customer, callback) => {
  // simulating an error
  const error = `There was an error`;

  console.log(`${customer} orders a burger!`);
  setTimeout(() => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, `Burger ready for ${customer}`);
    }
  }, 3000);
};

// How do we handle errors with async code using callbacks?

processOrder('Sponge Bob', (error, message) => {
  if (error) {
    console.log(error);
  } else {
    console.log(message);
  }
});

console.log('Sponge Bob waits for his burger...');
