const processOrder = (customer, callback) => {
  // callback = message => console.log(message)

  console.log(`${customer} orders a burger!`);

  setTimeout(() => {
    undeclared;
    callback(`${customer}'s burger is ready!`);
  }, 3000);
};

try {
  processOrder('Sponge Bob', (message) => console.log(message));
} catch (err) {
  console.log(err.message);
}

console.log('Sponge Bob waits for his burger...');
