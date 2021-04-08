// Bob's Burger with a promise

const processOrder = () => {
  return new Promise((resolve, reject) => {
    console.log(`customer orders a burger!`);

    // simulating an error
    // const error = null;
    const error = `You're burger went into flammes`;

    // async statement
    setTimeout(() => {
      if (error) {
        // error case => reject
        reject(error);
      } else {
        // success case => resolve
        resolve('The burger is ready!');
      }
    }, 3000);

  });
};

// 3. consuming the promise

processOrder()
  .then((message) => {
    // success case
    console.log(`Success: ${message}`);
  })
  .catch((err) => {
    // error case
    console.log(`Error: ${err}`);
  });
