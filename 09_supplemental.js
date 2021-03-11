const getOrder = () => {
  const error = false;

  return new Promise((resolve, reject) => {
    // creation part

    setTimeout(() => {
      if (error) {
        reject();
      } else {
        resolve();
      }
    }, 3000);
  });
};

// consuming part
getOrder()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err)); // promiseObj
