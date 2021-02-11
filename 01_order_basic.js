const processOrder = (customer, callback) => {

  // callback = (message) => console.log(message)


  console.log(`${customer} orders a burger!`); //1
  setTimeout(() => {
    // after 3 secs 
    callback(`Burger ready for ${customer}`);
  }, 0);
};

// What is going to be the output of the function execution?

processOrder('Sponge Bob', (message) => console.log(message)); //3 console.log

// 2
console.log('Sponge Bob eats the burger');