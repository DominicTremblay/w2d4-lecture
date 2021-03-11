const processOrder = (customer, callback) => {

  // const callback = (message) => console.log(message);


  console.log(`${customer} orders a burger!`);
  setTimeout(() => {
    callback(`Burger ready for ${customer}`);
    return "Thank you! Come again!"
  }, 3000);

  return "We're not open yet!"
};

const response = processOrder('Sponge Bob', (message) => console.log(message));
console.log(response);
// What is going to be the output of the function execution?
