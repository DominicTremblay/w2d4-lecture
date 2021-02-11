const processOrder = (customer) => {
  console.log(`${customer} orders a burger!`);
  return new Promise((resolve, reject) => {
    const error = true;

    setTimeout(() => {
      if (error) {
        reject('Sorry, your burger burst into flammes!');
      }
      resolve(`Burger ready for ${customer}`);
    }, 3000);
  });
};

// How do we handle errors with async code using callbacks?

processOrder('Sponge Bob')
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
