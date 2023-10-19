const executorFct = (resolve, reject) => {
  const error = true;
  setTimeout(() => {
    if (error) {
      reject(`customer's big juicy burger has burst into flammes!`);
    }

    resolve(`customer's big juicy burger is ready!`);
  }, 3000);

};

const processOrder = (customer) => {
  console.log(`${customer} orders a burger!`);
  const promiseObj = new Promise(executorFct);
  return promiseObj;
};


processOrder('SpongeBob')
.then((msg) => console.log(`Fulfilled: ${msg}`))
.catch((err) => console.log(`Rejected: ${err}`));