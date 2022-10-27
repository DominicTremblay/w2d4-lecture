const executorFct = (resolveFct, rejectFct) => {

  const error = true;


  setTimeout(() => {

    if (error) {
      rejectFct("Failed!😖")
    }

    resolveFct("Success!😃")

  }, 3000);


};

// 1. creating a promise object

const promiseObj = new Promise(executorFct);

// 2. consuming the promise

// console.log({promiseObj});

promiseObj
  .then(result => console.log(`Success: ${result}`))
  .catch(err => console.log(`Error: ${err}`));




