const processOrder = function (customer, cb) {
  const time = Math.floor(Math.random() * 5000); // 3
  const error = false;

  // asyc operations
  setTimeout(() => {
    if (error) {
      cb(error, `${customer}'s big juicy burger bursts into flammes!`);
    } else {
      cb(
        error, `${customer}'s big juicy burger is ready!. It took ${time / 1000} secs`
      ); // 5
    }
  }, time);
};

console.log('SpongeBob orders a burger');

processOrder('SpongeBob', (errorMsg, msg) => {
  if (errorMsg) {
    console.log(`Error: ${msg}`);
  } else {
    console.log(`Success! ${msg}`);
  }
});

console.log('SpongeBob waits for his burger...');
