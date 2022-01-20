const executorFct = (resolve, reject) => {
  // async operation
  setTimeout(() => {
    const error = true;

    if (error) {
      // fail
      reject('Failed!😖');
    }

    resolve('Success!😃');
  }, 3000);
};

// 1. creating a promise object
const promiseObj = new Promise(executorFct);
console.log(promiseObj);

// 2. consuming the promise
promiseObj
  // success
  .then((result) => console.log('result:', result))
  // fail
  .catch((error) => console.log('error:', error));

  console.log('I am executing!!! ')