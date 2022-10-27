const processOrder = (customer, callback) => {
  // const error = `Oh no! ${customer}'s burger burst into flammes!`;
  const error = '';
  const time = Math.floor(Math.random() * 5000); // 2

  setTimeout(() => {
    // 4
    if (error) {
      // we have a problem
      callback(error, null);
    } else {
      // we don't have an error
      callback(null, `${customer}\'s big juicy burger is ready!`);
    }
  }, time);
};

processOrder('Sponge Bob', (err, msg) => {

  if (err) {
    console.log(`Error: ${err}`);
    return;
  } 
  console.log(`Success: ${msg}`);

});

console.log('Sponge Bob waits for his burger...');
