const processOrder = (customer, cb) => {
  const time = Math.floor(Math.random() * 5000);
  const error = false;

  setTimeout(() => {
    if (error) {
      cb(
        error,
        `Oh no! ${customer}'s big juicy burger has burst into flammes!`
      );
      return;
    }

    cb(error, `${customer}'s big juicy burger is ready!, it took ${time} ms`);
  }, time);
};

console.log('Sponge Bob orders a burger');

processOrder('Sponge Bob', (err, msg) => {

  if (err) {
    console.log(`Error: ${msg}`);
    return;
  }
  console.log(`Success: ${msg}`);
});

console.log('Sponge Bob waits for his burger...');
