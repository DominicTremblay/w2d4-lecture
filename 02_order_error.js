const processOrder = (customer, callback) => {
  // simulating an error
  const error = `oh no! ${customer}'s Big Juicy Burger is on fire!`;


  // const callback = function(error, message) {
  //   if (error) {
  //     console.log(`Error: ${error}`);
  //     return;
  //   }
  
  //   console.log(`Success: ${message}`);
  // }


  // const error = false;

  const start = Date.now();
  console.log(`${customer} orders a big juicy burger!`);

  setTimeout(() => {
    const timer = (Date.now() - start) / 1000;

    if (error) {
      callback(error, null);
      return; // stop execution
    }

    callback(null, `${customer}\'s big juicy burger is ready!`);

    console.log(`It took ${timer} seconds!`);
  }, 3000);
};

processOrder('Sponge Bob', (error, message) => {
  if (error) {
    console.log(`Error: ${error}`);
    return;
  }

  console.log(`Success: ${message}`);
});

console.log('Sponge Bob waits for his burger...');
