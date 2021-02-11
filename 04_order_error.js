const processOrder = (customer, callback) => {


  
  const error = 'Sorry your burger burst into flames!'; // 1

  // const error = false;

  console.log(`${customer} orders a burger!`); // 2
  setTimeout(() => {

    if (!error) {
      callback(null, `Burger ready for ${customer}`);
    } else {
      callback(error, null); // 4
    }

  }, 3000);


};

// How do we handle errors with async code using callbacks?

const returnValue = processOrder('Sponge Bob', (err, message) => {
  if (err) {
    console.log(`Error: ${err}`); // 5
  } else {
    console.log(`Message: ${message}`);
  }
});

console.log("Bob eats the burger"); // 3

// code finishes here
