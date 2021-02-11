const processOrder = (customer, callback) => {
  // What happens if this functions throws an error?

  console.log(`${customer} orders a burger!`);

  setTimeout(() => {
    callback(`Burger ready for ${customer}`);
    undeclared;
  }, 3000);
};

processOrder('Sponge Bob', (message) => console.log(message));

console.log('Sponge Bob waits for his burger...');
