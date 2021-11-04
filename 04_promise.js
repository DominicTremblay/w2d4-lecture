
// 1. creating a promise object


const promiseObj = new Promise((resolvefct, rejectFct) => {
  const error = false;

  setTimeout(() => {
    if (error) {
      rejectFct('Failed!😖');
    }

    resolvefct({msg: 'Success!😃', user: 'Sponge Bob'});
  }, 3000);

});

// 2. consuming the promise
promiseObj
  .then((result) => console.log(`Success: ${result.user} ${result.msg}`))
  .catch((err) => console.log(`Error: ${err}`));
