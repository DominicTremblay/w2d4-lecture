const processOrder = (customer, callback) => {
  // const error = `oh ${customer}'s burger has burst into flammes!`;
  // const error = '';

  setTimeout(() => {
    // 2
    if (error) {
      callback(error, null);
      return;
    }
    // only this statement is asynchronous
    callback(error, `${customer} big juicy burger is ready!`); //skip => later
  }, 3000);
};

processOrder('Sponge Bob', (error, msg) => {
  if (error) {
    console.log(`Error: ${error}`);
    return;
  }

  console.log(`success: ${msg}`);
}); //1

console.log('Sponge Bob waits for his burger...'); // 3
