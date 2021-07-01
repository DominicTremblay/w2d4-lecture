const executorFct = (resolveFct, rejectFct) => {
  const error = 'there was an error!';

  // async opreation

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



// 2. consuming the promise (using it), after the async is completed

promiseObj
  .then((result) => {
    // Successs
    console.log(result);
  })
  .catch((err) => {
    // Error
    console.log(err);
  });
