// Executor Function

const executorFn = (resolveFn, rejectFn) => {
  const error = '';

  setTimeout(() => {
    if (error) {
      rejectFn(error);
    }

    resolveFn({msg: 'success!'});
  }, 2000);
};

const promiseObj = new Promise(executorFn);

console.log(promiseObj);

// Consuming the Promise

promiseObj
  .then((result) => {
    // promise if fulfilled
    console.log('executing .then => success');
    console.log(result);
  })
  .catch((err) => {
    // promise is rejected
    console.log('Executing catch');
    console.log(err);
  });

  console.log("Continuing the execution here");
