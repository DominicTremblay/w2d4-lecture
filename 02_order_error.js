const processOrder = (customer, callback) => {
  const error = false;
  
  console.log(`${customer} orders a burger!`);
  setTimeout(() => {
    callback(`Burger ready for ${customer}`);
  }, 3000);
};

// How do we handle errors with async code using callbacks?

processOrder('Sponge Bob', (message) => console.log(message));