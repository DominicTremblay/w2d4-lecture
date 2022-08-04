const executorFct = (resolve, reject) => {

  console.log(`Customer is ordering a big juicy burger!`)
  // simulating an error (we decide)
  const error = false;
  const time = Math.floor(Math.random() * 5000);

  // async

  setTimeout(() => {
    if (error) {
      reject(error);
    }

    resolve(`Customer big juicy burger is ready!. it took ${time} ms`);
  }, time);
};

const processOrder = (customer) => {
  console.log(`${customer} orders a burger!`);

  // Create the promise object

  const promiseObj = new Promise(executorFct);
  // return a promise object
  return promiseObj;
};

processOrder('Sponge Bob')
  .then((msg) => {
    console.log(`Success: ${msg}`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
