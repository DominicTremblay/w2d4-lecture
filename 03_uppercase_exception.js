const upperCaseAsync = (inputStr, callback) => {

  setTimeout(() =>{

    callback(inputStr.toUpperCase())
    undeclared; // triggering an error
  }, 3000)


};

upperCaseAsync('Sponge Bob', (upperCaseName) => console.log(upperCaseName));
