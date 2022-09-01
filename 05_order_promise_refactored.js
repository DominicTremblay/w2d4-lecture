const processOrder = (customer) => {
  console.log(`${customer} orders a burger!`);

  return new Promise((resolve, reject) => {
    const error = false;
    // const error = `Oh no! ${customer}'s burger burst into flammes!`;
    const time = Math.floor(Math.random() * 5000);

    //async operation
    setTimeout(() => {
      if (error) {
        reject(error);
      }

      resolve(`${customer}'s big juicy burger is ready!. it took ${time} ms`);
    }, time);

    console.log(`Let's start cooking!`);
  });

};

processOrder('SpongeBob')
  .then((successMsg) => console.log(`Success: ${successMsg}`))
  .catch((errMsg) => console.log(`Error: ${errMsg}`));
