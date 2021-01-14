const upperCaseAsync = (inputStr) => {
  return new Promise((resolve, reject) => {
    const error = true;

    setTimeout(() => {
      if (error) {
        reject('Cannot convert to uppercase');
      }

      resolve(inputStr.toUpperCase());
    }, 3000);
  });
};

// What is this returning? promise object

upperCaseAsync("SpongeBob Squarepants")
  .then((result) => {
    // success
    console.log(result);
  })
  .catch(function (err) {
    console.log(`Error: ${err}`);
  });

// .catch((err) => {
//   // failed
//   console.log(`Error: ${err}`);
// });
