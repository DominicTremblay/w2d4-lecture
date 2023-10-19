const processOrder = (customer, callback) => {
  const time = Math.floor(Math.random() * 5000);

  const error = false;

  setTimeout(() => {
    if (error) {
      callback(`${customer}'s big juicy burger has burst into flammes!`, null);
    } else {
      callback(
        null,
        `${customer}'s big juicy burger is ready!. It took ${time / 1000} secs`
      );
    }
  }, time);
};

processOrder('Sponge Bob', (error, msg) => {
  if (error) {
    console.log(`Error: ${error}`);
    return;
  }
  console.log(`Success: ${msg}`);
});

console.log('Sponge Bob waits for his burger...');
