const executorFct = (resolveFct, rejectFct) => {
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

console.log(promiseObj);

// 2. consuming the promise

promiseObj
  .then(msg => console.log(`Success: ${msg}`))
  .catch(err => console.log(`Error: ${err}`));

  