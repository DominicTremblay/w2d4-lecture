const request = require('request');

// do an api call

request(
  'https://jsonpaceholder.typicode.com/todos/1',
  function (error, response, body) {

    if (error) {
      console.error('API error:', error.message); // Print the error if one occurred
      return;
    }
    
    if (response.statusCode !== 200) {
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log(`Problem: ${response.statusCode}`)
      return;

    } 

    // good result
    console.log('body:', body); // Print the HTML for the Google homepage.
  }
);
