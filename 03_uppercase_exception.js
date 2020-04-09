const upperCaseAsync = (inputStr, callback) => {

  setTimeout(() =>{

    callback(inputStr.toUpperCase())
    undeclared; // triggering an error
  }, 3000)


};

// Trying try catch block

try {
  upperCaseAsync('Sponge Bob', (upperCaseName) => console.log(upperCaseName));
} catch(err) {
  console.log('Error:', err.message)
}
