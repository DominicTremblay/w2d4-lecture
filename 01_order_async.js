const processOrder = (customer, callback) => {
  const time = Math.floor(Math.random() * 5000);

  setTimeout(() => {
    callback(
      `${customer}'s big juicy burger is ready!. It took ${time / 1000} secs`
    );
  }, time);
};

processOrder('Sponge Bob', (msg)=>{
  console.log(msg)
});


console.log('Sponge Bob waits for his burger...');
