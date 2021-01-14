const upperCaseAsync = (inputStr, callback) => {
  setTimeout(() => {
    const error = 'Error within the setTimout Bob!'; // simulating an error
    // const error = false;

    if (error) {
      // do something => callback with that error
      // exit the function
      // callback with an error
      callback(error);
      return;
    }

    // Success: there is no error
    callback(null, inputStr.toUpperCase());
  }, 3000);
};

// How do we handle errors with async code ?
upperCaseAsync('SpongeBob Squarepants', (err, str) => {
  if (err) {
    console.log(`Error:${err}`);
  } else {
    console.log(`Yeah it works: ${str}`);
  }
});
