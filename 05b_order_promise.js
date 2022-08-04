const processOrder = (customer) => {
  console.log(`${customer} orders a burger!`);

  // Create the promise object

  const promiseObj = new Promise((resolve, reject) => {
    console.log(`${customer} is ordering a big juicy burger!`);
    // simulating an error (we decide)
    const error = `Oh no! ${customer}'s burger burst into flammes!`;
    const time = Math.floor(Math.random() * 5000);

    // async

    setTimeout(() => {
      if (error) {
        reject(error);
      }

      resolve(`${customer} big juicy burger is ready!. it took ${time} ms`);
    }, time);
  });
  // return a promise object
  return promiseObj;
};

processOrder('Sponge Bob')
  .then((msg) => {
    console.log(`Success: ${msg}`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
