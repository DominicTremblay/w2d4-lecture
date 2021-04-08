// Bob's Burger with a promise

// 1. create an executor function (async)

const executorFct = (resolveFct, rejectFct) => {
  console.log(`customer orders a burger!`);

  // simulating an error
  // const error = null;
  const error = `You're burger went into flammes`;

  // async statement
  setTimeout(() => {
    if (error) {
      // error case => reject
      rejectFct(error);
    } else {
      // success case => resolve
      resolveFct('The burger is ready!');
    }
  }, 3000);

  // success case

  // error case
};

// 2. create a promise object
const promiseObj = new Promise(executorFct);

console.log(promiseObj);

// 3. consuming the promise

promiseObj
  .then((result) => {
    // success case
    console.log(`Success: ${result}`);
  })
  .catch((err) => {
    // error case
    console.log(`Error: ${err}`);
  });
