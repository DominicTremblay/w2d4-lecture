const processOrder = (customer) => {
  console.log(`${customer} orders a burger!`);

  return new Promise((resolve, reject) => {
    const error = false;

    setTimeout(() => {
      if (error) {
        reject(error);
      }

      resolve(`${customer}'s big juicy burger is ready!`);
    }, 3000);
  });
};

processOrder('Sponge Bob') // <= promiseObj
  .then((message) => console.log(`Success: ${message}`))
  .catch((error) => console.log(`Error: ${error}`));
