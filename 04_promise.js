const executorFct = (resolveFct, rejectFct) => {

  const error = false;

  // some async operation

  setTimeout(() => {

    if (error) {
      rejectFct("Failed!😖")
    }

    resolveFct("Success!😃")


  }, 3000);


};

// 1. creating a promise object

const promiseObj = new Promise(executorFct)


// 2. consuming the promise
promiseObj
// 1 of these methods will get executed after 3 seconds.
  .then((error) => console.log(error))
  .catch((error) => console.log(error));







