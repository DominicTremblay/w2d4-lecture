const executorFct = (resolve, reject) => {
  const error = false;

  setTimeout(() => {
    if (error) {
      reject('Failed!😖');
    }

    resolve('Success!😃');
  }, 3000);
};

const processOrder = (customer) => {
  console.log(`${customer} orders a burger!`);
  const promiseObj = new Promise(executorFct);
  return promiseObj;
};

processOrder('Sponge Bob')
  .then((result) => console.log(`Success: ${result}`))
  .catch((err) => console.log(`Error: ${err}`));
