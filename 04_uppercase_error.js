const upperCaseAsync = (inputStr, callback) => {
  setTimeout(() => {
    const error = true; // trigerring an error

    callback(inputStr.toUpperCase());
  }, 3000);
};

upperCaseAsync('Sponge Bob', (upperCaseName) => {
  console.log(upperCaseName);
});
