const executorFct = (resolveFct, rejectFct) => {
  const error = true;

  setTimeout(() => {
    if (error) {
      // error case
      rejectFct('Failed!😖');
    } else {
      // success case
      resolveFct('Success!😃');
    }
  }, 3000);
};

// 1. creating a promise object
const promiseObj = new Promise(executorFct);

// 2. consuming the promise
// 2 methods : .then .catch

promiseObj
  .then((result) => {
    // success case
    console.log('result:', result);
  })
  .catch((err) => {
    // error case
    console.log(`Error: ${err}`);
  });
