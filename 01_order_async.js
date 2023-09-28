const processOrder = function (customer, cb) {
  const time = Math.floor(Math.random() * 5000); // 3

  setTimeout(() => {
    // asyc opeerations
    cb(
      `${customer}'s big juicy burger is ready!. It took ${time / 1000} secs`
    ); // 5
  }, time);
  
};

console.log('SpongeBob orders a burger'); // 1

processOrder('SpongeBob', (msg) => console.log(msg)); // 2

console.log('SpongeBob waits for his burger...'); // 4
