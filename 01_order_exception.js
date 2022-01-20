const processOrder = (customer, callback) => {
  // async operation
  // simulate that operation => setTimeout
  console.log(`${customer} is ordering a big juicy burger!`);

  setTimeout(() => {
    callback(`${customer}'s big juicy burger is ready!`);
  }, 3000);
};

processOrder('Sponge Bob', (order) => console.log('order:', order));

console.log('Sponge Bob waits for his burger...');

