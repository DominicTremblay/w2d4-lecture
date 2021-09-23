const { array } = require("assert-plus");

const executorFct = (resolveFct, rejectFct) => {
  const error = false;

  // async operation
  setTimeout(() => {
    // call (execute) either the resolve or the reject function
    if (error) {
      // Failure value
      rejectFct('Failed!😖');
    } else {
      // success value
      resolveFct('Success!😃');
    }
  }, 3000);
};

// 1. creating a promise object
const promiseObj = new Promise(executorFct);

// 2. consuming the promise
promiseObj
  .then((message) => {
    // success case (resolve state)
    console.log(`Success: ${message}`);
    return 123 
  })
  .then((number) =>{
    console.log({number});
  })
  .catch((err) => {
    //failure state (reject state)
    console.log(`Error: ${err}`);
  });




  
