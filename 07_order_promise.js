const processOrder = (customer) => {
  console.log(`${customer} orders a burger!`); // 2
  return new Promise((resolve, reject) => {
    const error = false; // 3

    setTimeout(() => {
      if (error) {
        reject('Sorry, your burger burst into flames!');
      }
      resolve(`Burger ready for ${customer}`); // 4
      
    }, 3000);
  });
};

// How do we handle errors with async code using callbacks?
const promiseObj = processOrder("Sponge Bob"); // 1

console.log(promiseObj); // pending state because the promise takes 3 seconds to resolve

// consume the promiseObj?
promiseObj
// after 3 seconds.
  .then(message => console.log(`success! ${message}`))// 5
  .catch(err => console.log(`Error! ${err}`)); 

  console.log("Bobs eats the burger!");