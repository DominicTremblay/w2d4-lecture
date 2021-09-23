const processOrder = (customer, callback) => {
  const error = ``;

  setTimeout(() => {
    if (error) {
      callback(`${error}`, null);
      return;
    }
    // callback(null, `${customer} gets a good burger!`);
    return `${customer} gets a good burger!`
  }, 3000);

  return false;
};

const getMessage = (error, message) => {
  if (error) { // true if it's a string, falsy if not
    console.log(`Error: ${error}`);
    return;
  }

  console.log(message);
}

const result = processOrder('Sponge Bob', getMessage);

console.log('Sponge Bob waits for his burger...');
