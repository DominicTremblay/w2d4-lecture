const processOrder = (customer, callback) => {

  // const callback =  function(message) {
  //   console.log(message)
  // }


  // simulate an async operations
  setTimeout(() => {

    callback (`${customer} Big Juicy Burger is Ready!`)

  }, 3000)

};

processOrder('Sponge Bob', message => console.log(message));



console.log('Sponge Bob waits for his burger...');
