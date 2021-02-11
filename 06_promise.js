const executorFct = (resolveFct, rejectFct) => {
  const error = false; // 2

  setTimeout(() => {
    if (error) {
      rejectFct('Failed!😖');
    } else {
      resolveFct('Success!😃'); // 3
    }
  }, 3000);
};

// creating a promise object
const promiseObj = new Promise(executorFct); // 1

console.log(promiseObj); //3 pending

