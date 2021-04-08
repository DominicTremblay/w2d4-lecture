const processOrder = (customer, callback) => {
  // simulating an error
  const error = `You're burger went into flammes`;
  // const error = null;
  if (error) {
    callback(error, null);
    return;
  }

  console.log(`${customer} orders a burger!`);
  setTimeout(() => {
    callback(null, `Burger ready for ${customer}`);
  }, 3000);
};

// How do we handle errors with async code using callbacks?

processOrder('Sponge Bob', (error, message) => {
  // checking if we have an error or not
  // error is falsy (null, undefined, or '') => we do not have an error
  // error is a string => we do have an error
  if (error) {
  // custom error message if we want to throw an error
  // throw Error('This is my error message');
    console.log(`error: ${error}`);
  } else {
    console.log(message);
  }
});
