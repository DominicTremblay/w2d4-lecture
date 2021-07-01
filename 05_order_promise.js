const processOrder = (customer) => {
  console.log(`${customer} orders a burger!`);

  const promiseObj = new Promise((resolve, reject) => {
    const error = `Your burger burst into flammes!`;

    setTimeout(() => {
      if (error) {
        reject(`Your burger burst into flammes!`);
      } else {
        resolve(`Your burger is ready`);
      }
    }, 3000);
  });

  return promiseObj;
};

processOrder('SpongeBob')
  .then((message) => console.log(message))
  .catch((err) => {
    
    console.log(err)
  });
  
console.log("execution here")