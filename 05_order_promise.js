const executorFct = (resolve, reject) => {
  // const error = `oh ${'Bob'}'s burger has burst into flammes!`;
  const error = '';

  setTimeout(() => {
    if (error) {
      reject(error);
    }
    resolve(`${'Bob'} big juicy burger is ready!`);
  }, 3000);
};

const processOrder = (customer) => {
  console.log(`${customer} orders a burger!`);
  const promiseObj = new Promise(executorFct);
  return promiseObj;
};

// equivalent of promiseObj
processOrder('Sponge Bob')
  .then((msg) => console.log(`Success: ${msg}`))
  .catch((error) => console.log(`Error: ${error}`));
