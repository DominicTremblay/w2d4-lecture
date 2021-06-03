const processOrder = (customer) => {
  console.log(`${customer} orders a burger!`);
  // return a promise obj
  return new Promise((resolve, reject) => {
    const error = 'Your burger burst into flammes!';

    setTimeout(() => {
      if (error) {
        reject(error);
      } else {
        resolve('Order is ready!');
      }
    }, 3000);
  });
};

// 1. create the promise object
// const promiseObj = processOrder('SpongeBob');

// 2. consume the promess
processOrder('SpongeBob')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
