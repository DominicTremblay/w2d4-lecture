
const processOrder = (customer) => {
  console.log(`${customer} orders a burger!`);
  const promiseObj = new Promise((resolve, reject) => {
    const error = `Oh no! ${customer}'s burger burst into flammes!`;
  
    setTimeout(() => {
      if (error) {
        reject(error);
      }
  
      resolve(`${customer}\'s big juicy burger is ready!`);
    }, 3000);
  });
  return promiseObj;
};

processOrder('Sponge Bob')
  .then((result) => console.log(`Success: ${result}`))
  .catch((err) => console.log(`Error: ${err}`));
