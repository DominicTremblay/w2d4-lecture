const processOrder = (customer) => {
  console.log(`${customer} orders a burger!`);

  // create a promise object
  return new Promise((resolve, reject) => {
    // don't know about var customer?? not in scope
    const error = false;

    // async operation

    setTimeout(() => {
      if (error) {
        //failure
        reject(error);
      } else {
        // success
        resolve(`${customer} gets his burger!`);
      }
    }, 3000);
  });
};

// consuming part
processOrder('SpongeBob') // gets repaced by a promise obj
  .then((result) => {
    // resolved state
    console.log(result);
  })
  .catch((err) => {
    // rejected state
    console.log(`Error: ${err}`);
  });
