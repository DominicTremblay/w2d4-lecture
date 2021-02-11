const processOrder = (customer) => {
  const start = Date.now();
  console.log(`${customer} orders a big juicy burger!`);

  setTimeout(() => {
    const timer = (Date.now() - start) / 1000;
    console.log(`${customer}\'s big juicy burger is ready!`);
    console.log(`It took ${timer} seconds!`);
    
  }, 3000);
};

processOrder('Sponge Bob');

console.log('Sponge Bob waits for his burger...');