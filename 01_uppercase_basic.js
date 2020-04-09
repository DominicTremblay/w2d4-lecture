const upperCaseAsync = (inputStr, callback) => {

  setTimeout(() =>{

    callback(inputStr.toUpperCase())

  }, 3000)


};

upperCaseAsync('Sponge Bob', (upperCaseName) => console.log(upperCaseName));
