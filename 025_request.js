const request = require('request');

const processRequest = (callback) => {
  console.log('Intializing request...');
  request(
    'https://jsonplaceholder.typicode.com/todos/1',
    function (error, response, body) {
      // here we know we have the result after a while
      if (error) {
        // deal with that error
        callback(error, null);
      } else {
        // success case
        // const result = JSON.parse(body);
        callback(null, body);
      }
    }
  );

  console.log('After request line');
};

console.log('starting here...');
processRequest((err, content) => {
  if (err) {
    console.log(err);
  } else {
    // success
    console.log(`This is the content: ${content}`);
  }
});
console.log('After process request');
