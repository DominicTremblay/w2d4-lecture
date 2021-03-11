const processOrder = (customer, callback) => {
  const error = true;

  console.log(`${customer} orders a burger!`);
  setTimeout(() => {
    if (error) {
      console.log('Sorry your burger burned out!')
      return;
      // callback('Sorry your burger burned out!', null);
    } else {
      callback(null, `Burger ready for ${customer}`);
    }
  }, 3000);
};

// How do we handle errors with async code using callbacks?

processOrder('Sponge Bob', (err, message) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(message);
  }
});


const getPage = (url, callback) {

  request(url, (error, response, body) => {

    if (error) {
      callback('Sorry there was an error');
    } else {

      if (response.statusCode !== 200) {
        callback('sorry different issue')

      } else {
        // check for empty response still
        if(empty) {
          callback('sorry did not retrieve the result')
        } else {
          callback(null, JSON.parse(body));
        }

      }
  

    }

  })


}


getPage('http://www.whatever.com', (err, result) => {

  if(err) {
    console.log(err)
  } else {
    console.log(result)
  }

})