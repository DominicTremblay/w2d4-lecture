const processOrder = (customer, callback) => {
  const start = Date.now();
  console.log(`${customer} orders a big juicy burger!`);

  setTimeout(() => {
    // const error = `${customer}'s burger has been switched to a veggie burger!`;
    const error = false;
    const timer = (Date.now() - start) / 1000;

    if (error) {
      // send bacck the error
      callback(error, null);
    } else {
      //send the success message
      callback(null, `${customer}'s big juicy burger is ready!`);
    }

    console.log(`It took ${timer} seconds!`);
  }, 3000);
};

processOrder('Sponge Bob', (errorMsg, order) => {
  if (errorMsg) {
    console.log(`Error: ${errorMsg}`);
  } else {
    console.log(`Success: ${order}`);
  }
});
console.log('Sponge Bob waits for his burger...');
