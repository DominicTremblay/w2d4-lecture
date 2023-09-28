const executorFct = (resolveFct, rejectFct) => {
  // async operation in here
  const error = true;

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
  // handling of success
  .then((msg) => console.log(`Success: ${msg}`))
  // handling of errors
  .catch((err) => console.log(`Error: ${err}`));
