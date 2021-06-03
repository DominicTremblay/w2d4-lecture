const executorFct = (resolveFct, rejectFct) => {
  // simulate the error
  const error = 'You got an error';
  // async code

  setTimeout(() => {
    if (error) {
      rejectFct('Failed!😖');
    } else {
      resolveFct('Success!😃');
    }
  }, 3000);
};

// 1. creating a promise object

const promiseObj = new Promise(executorFct);

// 2. consuming the promise

promiseObj
  .then((result) => {
    // success
    console.log(`Success: ${result}`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
