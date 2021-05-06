const processOrder = (customer) => {
  console.log(`${customer} orders a burger!`);

  return new Promise((resolve, reject) => {
    const error = false;

    setTimeout(() => {
      if (error) {
        reject('Sorry, your burger burst into flammes!');
      }
      resolve(`Burger ready for Bob`);
    }, 3000);
  });

};

// a bit of refactoring

processOrder('SpongeBob')
  .then((result) => {
    // success case
    console.log('Success (.then):', result);
    return "Hey, this is what's next";
  })
  .catch((err) => {
    // error case
    console.log('Error (.catch):', err);
  });
