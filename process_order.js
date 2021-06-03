const processOrder = (customer, callback) => {
  // simulating an error
  const error = false;

  console.log(`${customer} orders a burger!`);
  setTimeout(() => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, `Burger ready for ${customer}`);
    }
  }, 3000);
};


module.exports = processOrder;