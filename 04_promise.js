const executorFct = (resolveFct, rejectFct) => {
  const error = true;

  // we need an async operation

  setTimeout(() => {
    if (error) {
      rejectFct('Failed!😖');
    }

    resolveFct('Success!😃');
  }, 3000);
};

// 1. creating a promise object

const promiseObj = new Promise(executorFct);

console.log('promiseObj', promiseObj);

// 2. consuming the promise

promiseObj
  .then((successMsg) => console.log(successMsg))
  .catch((errorMsg) => console.log(errorMsg));
