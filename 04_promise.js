const executorFct = (resolveFct, rejectFct) => {
  const error = true;

  // async operation

  setTimeout(() => {
    if (error) {
      rejectFct('Failed!😖');
    }

    resolveFct('Success!😃');
  }, 3000);
};

// 1. creating a promise object
const promiseObj = new Promise(executorFct);
// 2. consuming the promise

promiseObj
  .then((msg) => console.log(`Fulfilled: ${msg}`))
  .catch((err) => console.log(`Rejected: ${err}`));
