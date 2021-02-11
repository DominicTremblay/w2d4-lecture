const executorFct = (resolve, reject) => {
  const error = false;

  setTimeout(() => {
    if (error) {
      reject('Sorry, your burger burst into flammes!');
    }
    resolve(`Burger ready for ${customer}`);
  }, 3000);
};

const processOrder = (customer) => {
  console.log(`${customer} orders a burger!`);

  return new Promise(executorFct);
};

// a bit of refactoring

// How do we handle errors with async code using a promise?
// => We need to consume the promise

const promiseObj = processOrder('SpongeBob');

