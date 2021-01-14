const upperCaseAsync = (inputStr) => {
  return new Promise((resolve, reject) => {
    const error = false;

    setTimeout(() => {
      if (error) {
        reject('Cannot convert to uppercase');
      }

      resolve(inputStr.toUpperCase());
    }, 3000);
  });
};

upperCaseAsync('Sponge Bob')
  .then((upperCaseName) => (`Hello ${upperCaseName}`))
  .then(hello => console.log(hello))
  .catch((err) => console.log('Error:', err));
