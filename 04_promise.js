const executorFct = (resolveFct, rejectFct) => {
  // const error = 'Your burger burst into flammes!';
  const error = '';

  // asynchronous processing here

  setTimeout(() => {
    if (error) {
      //failed
      rejectFct('Failed!😖');
    } else {
      //success
      resolveFct('Success!😃');
    }
  }, 2000);
};

// 1. creating a promise object

const promiseObj = new Promise(executorFct);


// 2. consuming the promise

promiseObj
  .then((result)=> {
    // success case
    console.log("Success (.then):", result);
    return "Hey, this is what's next"
  })
  .catch((err)=> {
    // error case
    console.log("Error (.catch):", err);
  })