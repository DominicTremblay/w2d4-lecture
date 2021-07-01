const processOrder = (customer, callback) => {

  // const callback = (message) => console.log(message)

  console.log(`${customer} orders a burger!`);
  
  setTimeout(() => {
    // what about if we have an error?
    undeclared;
    // trigger something when the setTimout is over => callback
    callback(`${customer}'s order is ready!`);
  }, 3000);
  console.log('Sponge Bob waits for his burger...');

};

try {
  processOrder('Sponge Bob', (msg) => console.log(msg));
} catch(err) {
  console.log(err.message)
}
console.log("Continue execution here");