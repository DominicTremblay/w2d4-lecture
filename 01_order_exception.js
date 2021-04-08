const processOrder = (customer, callback) => {
  // What happens if this functions throws an error?

  
  console.log(`${customer} orders a burger!`);
  
  setTimeout(() => {
    undeclared; // will throw an error
    callback(`Burger ready for ${customer}`);
  }, 3000);
};

// How do we handle an error thrown?
try {
  // statements we want to execute
  processOrder('Sponge Bob', (message) => console.log(message));
} catch (err) {
  // error is thrown => catched here
  // catch is not going to work with asynchronous code
  console.log(`Error: ${err.message}`)
}


console.log('Sponge Bob eats the burger');
