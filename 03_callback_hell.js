// Using multiple callbacks
// Error handling with callbacks

const { name } = require('ejs');

// Returns a random element from an array
const arrSample = (list) => {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
};

// Simulating a potential error message
// will return an error message or null
const errorSample = () => {
  const errors = [
    'I got my fingers stuck in a bowling ball.',
    null,
    null,
    null,
    null,
    'I broke my little toe.',
    null,
    null,
    null,
    null,
    'My dog’s depressed.',
    null,
    null,
    null,
    null,
    'A chicken attacked my mother.',
    null,
    null,
    null,
    null,
    'I have a new puppy and I need to play with him.',
    null,
    null,
    null,
    null,
  ];

  return arrSample(errors);
};

// Select a random user after a delay (simulating a request to an API)
// Sends back the error if any, otherwise sends back the user
const getUser = (callback) => {
  const users = [
    'Yoshi',
    'Mario',
    'Luigi',
    'Peach',
    'Bowser',
    'Wario',
    'Rosalina',
    'Toadette',
  ];
  const user = arrSample(users);
  const error = errorSample();

  console.log('Getting the user...');
  setTimeout(() => {
    if (error) {
      callback(error);
    } else {
      callback(null, user);
    }
  }, 2000);
};

// Select a random meal after a delay (simulating a request to an API)
// Sends back the error if any, otherwise sends back the meal
const getOrder = (callback) => {
  const menu = [
    'Burger',
    'Poutine',
    'Veggie Dogs',
    'Sub',
    'Pizza',
    'Burrito',
    'Burger Beyond Meat',
    'Smoked Meat',
  ];
  const order = arrSample(menu);
  const error = errorSample();

  console.log('Getting your order...');

  setTimeout(() => {
    if (error) {
      callback(error);
    } else {
      callback(null, order);
    }
  }, 3000);
};

// placeOrder sould return how a waiter is delivering the order to the customer

// For example, the function could print out "Toadette takes the order of Rosalina"
// and then "Toadette is delivering a Sub to Rosalina"

// The users and the order need to be random each time by calling getUser and getOrder
// However, there for each call to getUser or getOrder, there's possibility of an error
// The error, if any, needs to be print out instead (ex. "My dog’s depressed.")

// Make the appropriate calls to each function and handle any error

// Bonus:
// If the names of the customer and the waiter are the same, the function needs to print a message like the following example: "Hey employees cannot order for themselves!"

const placeOrder = () => {
  // getUser => get a random name, custmer or waiter
  // getOrder => random meal

  // provide a random user name or an error message
  getUser((errMsg, waiterName) => {
    if (errMsg) {
      console.log(`Error: ${errMsg}`);
      return;
    }

    getOrder((errMsg, meal) => {
      if (errMsg) {
        console.log(`Error: ${errMsg}`);
        return;
      }

      // here we have access to both waiterName and meal

      getUser((errMsg, customerName) => {
        if (errMsg) {
          console.log(`Error: ${errMsg}`);
          return;
        }
        // here we have access to all: waiterName and meal and customerName

        // "Toadette takes the order of Rosalina"
        // and then "Toadette is delivering a Sub to Rosalina"

        console.log(`${waiterName}  takes the order of ${customerName}`);

        console.log(`${waiterName} is delivering a ${meal} to ${customerName}`);
      });
    });
  });
};

placeOrder();
