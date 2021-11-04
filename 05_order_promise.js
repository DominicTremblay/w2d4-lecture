// const processOrder = require('./processOrder');

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


processOrder('Sponge Bob')
  .then((message) => console.log(message))
  .catch((err) => console.log(err));


