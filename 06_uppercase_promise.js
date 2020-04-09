// Let transforming this using promises

const upperCaseAsync = (inputStr, callback) => {
  setTimeout(() => {
    const error = false;

    if (error) {
      callback('cannot convert to uppercase');
      return;
    }

    callback(null, inputStr.toUpperCase());
  }, 3000);
};

upperCaseAsync('Sponge Bob', (err, upperCaseName) => {
  if (err) {
    console.log('Error:', err);
    return;
  }

  console.log(upperCaseName);
});
