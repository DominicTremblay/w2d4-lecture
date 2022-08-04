const processOrder = (customer, callback) => {
  const time = Math.floor(Math.random() * 5000); // 2

  // const error = `Oh no! ${customer}'s burger burst into flammes!`;

  const error = false;

  // process that takes some time => we don't know how long
  // async operation => setTimeout, request to an api, read/write to a file
  // trigger => execute the callback when the async operation is over

  setTimeout(() => {
    if (error) {
      callback(error, null); 
    } else {
      callback(error, `${customer}'s big juicy burger is ready!. it took ${time} ms`); //5
    }
  }, 0);

  console.log(`Let's start cooking!`); //4
};

processOrder('Sponge Bob', (err, msg) => {

  // getting an error or success?

  if (err) {
    console.log(`Error: ${err}`);
  } else {
    // success
    console.log(`Success: ${msg}`)
  }

} ); //1

console.log('Sponge Bob waits for his burger...');
