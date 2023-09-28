const executorFct = (resolve, reject) => {
  const error = true;

  setTimeout(() => {
    if (error) {
      reject(`customer's big juicy burger is ready!`);
    }

    resolve(`customer's big juicy burger bursts into flammes!`);
  }, 3000);
};

// create a promise to be returned
const processOrder = (customer) => {
  console.log(`${customer} orders a burger!`);

  const promiseObj = new Promise(executorFct);

  return promiseObj;
};

const promiseObj = processOrder('SpongeBob');

// consume the promise

promiseObj
  // handling of success
  .then((msg) => console.log(`Success: ${msg}`))
  // handling of errors
  .catch((err) => console.log(`Error: ${err}`));
