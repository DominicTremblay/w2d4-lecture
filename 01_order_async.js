const processOrder = (customer, callback) => {
  const time = Math.floor(Math.random() * 5000); // 2

  setTimeout(() => { // 4
    callback(`${customer}\'s big juicy burger is ready!`); 
  }, time);
};

processOrder('Sponge Bob', (msg) => { //1
  console.log('=================') // 6
  console.log(msg); // 7
});

console.log('Sponge Bob waits for his burger...'); //5