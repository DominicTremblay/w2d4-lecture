const processOrder = (customer) => {
  console.log(`${customer} orders a burger!`);

  // Creating the promise
  return new Promise((resolve, reject) => {
    const error = `Oh no ${customer}, the burger burst into flammes!`;

    // const error = '';

    // async opreation

    setTimeout(() => {
      if (error) {
        reject(error);
      }

      resolve(`${customer}'burger is ready!`);
    }, 3000);
  });
};

// Consuming the promise
// this call is being replaced by the returned value => promiseObj
processOrder('Sponge Bob')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

console.log('Sponge Bob wants to order a burger!');
