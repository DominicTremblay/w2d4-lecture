// create a promise to be returned
const processOrder = (customer) => {
  console.log(`${customer} orders a burger!`);

  return new Promise((resolve, reject) => {
    const error = false;

    setTimeout(() => {
      if (error) {
        reject(`${customer}'s big juicy burger bursts into flammes!`);
      }

      resolve(`${customer}'s big juicy burger is ready!`);
    }, 3000);
  });
};

// consume the promise

processOrder('SpongeBob')
  // handling of success
  .then((msg) => console.log(`Success: ${msg}`))
  // handling of errors
  .catch((err) => console.log(`Error: ${err}`));
