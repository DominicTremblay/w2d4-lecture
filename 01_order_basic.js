const processOrder = (customer, callback) => {
  console.log(`${customer} orders a burger!`);
  setTimeout(() => {
    callback(`Burger ready for ${customer}`);
  }, 3000);
};

processOrder('Sponge Bob', (message) => console.log(message));

// What is going to be the output of the function execution?
