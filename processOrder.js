const processOrder = (customer) => {
  console.log(`${customer} orders a burger!`);

  const promiseObj = new Promise((resolve, reject) => {
    // const error = ``;
    const error = `Sorry ${customer}, your burger burst into flammes!`;

    setTimeout(() => {
      if (error) {
        reject(error);
      }

      resolve(`${customer}, you've got a big juicy burger!`);
    }, 3000);
  });

  return promiseObj;
};

module.exports = processOrder;