const executorFct = (resolveFct, rejectFct) => {
  const error = false;

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
// triggered when resolve is being executed
.then((result) => {
  console.log(result);
  console.log(promiseObj);

  })
  // triggered when reject is being executed
  .catch((error) => {
    console.log(error);
  console.log(promiseObj);

  });
