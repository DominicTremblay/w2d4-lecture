const processOrder = (customer, callback) => {
  // What happens if this functions throws an error?

  console.log(`${customer} orders a burger!`);

  setTimeout(() => {
    callback(`Burger ready for ${customer}`);
    undeclared; // will throw an error
  }, 3000);
};

// Usually we would use a try catch block to catch any thrown errors

processOrder('Sponge Bob', (message) => console.log(message));

console.log('Sponge Bob eats the burger');
