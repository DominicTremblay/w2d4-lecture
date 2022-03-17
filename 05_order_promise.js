const executorFct = (resolve, reject) => {
  const error = false;

  setTimeout(() => {
    if (error) {
      reject(error);
    }

    resolve(`Customer's big juicy burger is ready!`);
  }, 3000);
};

const processOrder = (customer) => {
  console.log(`${customer} orders a burger!`);

  const promiseObj = new Promise(executorFct);
  return promiseObj;
};

processOrder('Sponge Bob') // <= promiseObj
  .then((message) => console.log(`Success: ${message}`))
  .catch((error) => console.log(`Error: ${error}`));
