const processOrder = (customer, callback) => {
  const time = Math.floor(Math.random() * 5000); // 2

  // process that takes some time => we don't know how long
  // async operation => setTimeout, request to an api, read/write to a file
  // trigger => execute the callback when the async operation is over

  setTimeout(() => { // 3
    callback(`${customer}'s big juicy burger is ready!. it took ${time} ms`); //5
  }, 0);

  console.log(`Let's start cooking!`); //4


};

processOrder('Sponge Bob', (msg) => console.log(msg)); //1

console.log('Sponge Bob waits for his burger...');
