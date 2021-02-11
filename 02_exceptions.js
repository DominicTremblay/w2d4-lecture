const processOrder = (customer, callback) => {

  // What happens if this functions throws an error?

  console.log(`${customer} orders a burger!`);
  undeclared;

  // setTimeout(() => {
  //   callback(`Burger ready for ${customer}`);
  // }, 3000);
};

processOrder('Sponge Bob', (message) => console.log(message));

console.log('Sponge Bob eats the burger');

