const upperCaseAsync = (inputStr, callback) => {

  setTimeout(() => {
    // simulate an error
    const error = false; // trigerring an error

    if (error) {
      // error
      callback("Error: Bob you're not allowed!", null);

    } else {
      // no error
      callback(null, inputStr.toUpperCase());
    }


  }, 3000);


  // next statement
  // return undefined

};

upperCaseAsync('Sponge Bob', (err, upperCaseName) => {
 
  if (err) {
    console.log(err)
    return;
  }
 
  console.log(upperCaseName);
});

// continue here
