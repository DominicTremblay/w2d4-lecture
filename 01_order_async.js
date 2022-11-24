const processOrder = (customer, callback) => {
  setTimeout(() => {
    // 2

    // only this statement is asynchronous
   callback(`${customer} big juicy burger is ready!`); //skip => later
  }, 3000);
};

processOrder('Sponge Bob', (msg) => console.log(msg)); //1

console.log('Sponge Bob waits for his burger...'); // 3
