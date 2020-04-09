// Let transforming this using promises

const upperCaseAsync = (inputStr) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      // reject => error
      if (error) {
        reject('cannot convert to uppercase');
      }

      // resolve => no error
      resolve(inputStr.toUpperCase());
    }, 3000);
  });

};

upperCaseAsync('Sponge Bob')
  .then((name) => {
    console.log(`In the first then here: ${name}`);
    // return "Peach";
  })
  // .then((name) => {
  //   console.log(`Hello ${name}`);
  // })
  .catch((err) => console.log(err));
