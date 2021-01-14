const upperCaseAsync = (inputStr, callback) => {
  setTimeout(() => {
    callback(inputStr.toUpperCase());
  }, 3000);
};

upperCaseAsync('Sponge Bob', (upperCaseName) => console.log(upperCaseName));

// What is going to be the output of the function execution?
// SPONGE BOB