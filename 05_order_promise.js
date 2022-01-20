// return a promise object
const processOrder = (customer) => {
  
  return new Promise((resolve, reject) => {
    // async operation
    
    setTimeout(() => {
      const error = false;
      
      if (error) {
        reject(`${customer}'s burger has been switched to a veggie burger!`);
      }
      
      resolve(`${customer}'s big juicy burger is ready!`);
    }, 3000);
  });
};

// 2. consuming the promise
processOrder('SpongeBob')
// success
.then((result) => console.log('result:', result))
// fail
.catch((error) => console.log('error:', error));

console.log(`SpongeBob orders a burger!`);
  