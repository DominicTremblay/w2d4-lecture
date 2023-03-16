const processOrder = (customer, cb) => {
  const time = Math.floor(Math.random() * 5000);

  setTimeout(() => {
    cb(`${customer}'s big juicy burger is ready!, it took ${time} ms`);
  }, time);
};

console.log('Sponge Bob orders a burger');

processOrder('Sponge Bob', msg=> console.log(msg));

console.log('Sponge Bob waits for his burger...');
