const processOrder = (customer, callback) => {
  // What happens if this functions throws an error?
const error = true;
// const callback = (err, message) => console.log(message)

  console.log(`${customer} orders a burger!`);

  setTimeout(() => {
    if (error) {
      // error case
      callback("sorry we're out of burgers!", null);
    } else {
      // success case
      callback(null, `Burger ready for ${customer}`);
    }
  }, 3000);
};

// Usually we would use a try catch block to catch any thrown errors
// add an error parameter to our callback
// by convention: 1st parameter is always the error
processOrder('Sponge Bob', (err, message) => {
  if (err) {
    // error case
    console.log("Error:", err);
  } else {
    // success case
    console.log("Message:", message)
  }
});

console.log('Sponge Bob eats the burger');


