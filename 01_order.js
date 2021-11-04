const processOrder = (customer, callback) => {
  // const error = `Sorry ${customer}, your burger burst into flammes!`;
  const error ='';

  console.log(`${customer} orders a juicy burger!`);

  // any operation that takes time
  // any IO opreations, API call, reading from file, anything that takes time
  setTimeout(() => {
    if (error) {
      callback(error, null);
      // return => exit the function, we don't want to return a value
      return;
    }

    callback(null, `${customer}'s juicy burger is ready!'`);
  }, 3000);
};

processOrder('Sponge Bob', (err, order) => {
  if (err) {
    console.log(`Error: ${err}`);
    return;
  }

  console.log('Order from callback fct:', order);
});

console.log('Sponge Bob waits for his burger...');
