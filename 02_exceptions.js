const processOrder = (customer, callback) => {
  // What happens if this functions throws an error?

  console.log(`${customer} orders a burger!`);
  undeclared; // Error is thrown

  // setTimeout(() => {
  //   callback(`Burger ready for ${customer}`);
  // }, 3000);
};

try {
  processOrder('Sponge Bob', (message) => console.log(message));
} catch (error) {
  console.log(error.message);
}

console.log('Sponge Bob eats the burger');
