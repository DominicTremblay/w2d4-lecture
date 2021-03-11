const processOrder = (customer, callback) => {

  // What happens if this functions throws an error?

  console.log(`${customer} orders a burger!`);
  
  setTimeout(() => {
    undeclared; // will trhow an error
    callback(`Burger ready for ${customer}`);
  }, 3000);
};

try {
  processOrder('Sponge Bob', (message) => console.log(message));
} catch(err) {
  console.log(err.message);
}

console.log('Sponge Bob eats the burger');

