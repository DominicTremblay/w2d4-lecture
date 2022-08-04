const executorFct = (resolveFct, rejectFct) => {
  const error = false;

  const time = Math.floor(Math.random() * 5000);

  // async operation

  setTimeout(() => {
    if (error) {
      rejectFct('Failed!😖'); // exit the function
    }

    resolveFct('Success!😃');
  }, time);
};

// 1. creating a promise object

const promiseObj = new Promise(executorFct);

console.log('State:', promiseObj);

// 2. consuming the promise
promiseObj
  // success => getting the value being passed by the resolve fct call
  .then((msg) => {
    console.log(`Success: ${msg}`);
  })
  // error => getting the value being passed by the reject fct call
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
