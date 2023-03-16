const processOrder = (customer) => {
  console.log(`${customer} orders a burger!`);
  return new Promise((resolve, reject) => {
    const error = false;

    setTimeout(() => {
      if (error) {
        reject(`Oh no! ${customer}'s big juicy burger has burst into flammes!`);
      }

      resolve(`${customer}'s big juicy burger is ready!`);
    }, 3000);
  });
};

// consuming the promise (using it!)
processOrder('SpongeBob')
  .then((msg) => console.log(`Success: ${msg}`))
  .catch((err) => console.log(`Error: ${err}`));
