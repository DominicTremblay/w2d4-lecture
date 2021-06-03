const processOrder = require('./process_order');
// How do we handle errors with async code using callbacks?

processOrder('Sponge Bob', (error, message) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(`success: ${message}`);
  }
});
console.log('Sponge Bob waits for his burger...');
