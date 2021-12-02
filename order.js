const processOrder = (customer, callback) => {
  // const start = Date.now();
  console.log(`${customer} orders a big juicy burger!`);

  // async operation (API call, writing to file)
  setTimeout(() => {
    callback(`${customer}\' big juicy burger is ready!`);
    // console.log(`it took ${(Date.now() - start) / 1000} seconds `);
  }, 3000);
};

module.exports = processOrder;