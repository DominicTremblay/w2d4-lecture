const processOrder = (customer, callback) => {
  // What happens if this functions throws an error?

  console.log(`${customer} orders a burger!`);

  setTimeout(() => {
    callback(`Burger ready for ${customer}`);
    undeclared;
  }, 3000);
};

try {
  processOrder('Sponge Bob', (message) => console.log(message));
} catch (err) {
  console.log('Sorry, burger burst into flammes!');
}

console.log('Sponge Bob waits for his burger...');
