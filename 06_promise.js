

const executorFct = (resolveFct, rejectFct) => {
  const error = false;

  setTimeout(() => {
    if (error) {
      rejectFct('Failed!😖');
    } else {
      resolveFct('Success!😃');
    }
  }, 3000);
};

const promiseObj = new Promise(executorFct);

// consume the promise


promiseObj
  .then((result)=> {
    // success case
    console.log(result);

  })
  .catch((err)=>{
    // failed case
    console.log(`Error (catch): ${err}`)
  })


