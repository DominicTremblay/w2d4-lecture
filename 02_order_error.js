const processOrder = (customer, callback) => {
  const error = true;
  console.log(`${customer} orders a burger!`);
  setTimeout(() => {
    if (!error) {
      // success case
      callback(null, `Burger ready for ${customer}`);
    } else {
      // error case
      callback(`Sorry, your burger burst into flammes!`, null);
    }
  }, 3000);
};

// How do we handle errors with async code using callbacks?

processOrder('Sponge Bob', (error, message) => {
  if (error) {
    console.log(`Error: ${error}`);
    return;
  }

  console.log(`Success: ${message}`);
});

console.log('Sponge Bob waits for his burger...');
