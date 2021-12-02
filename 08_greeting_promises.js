// Using multiple callbacks
// Error handling with callbacks

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
const getUser = () => {
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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject(error);
      } else {
        resolve(user);
      }
    }, 2000);
  });
};

// Select a random meal after a delay (simulating a request to an API)
// Sends back the error if any, otherwise sends back the meal
const getOrder = () => {
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

  return new Promise((resolve, reject) => {
    console.log('Selecting a meal...');
    setTimeout(() => {
      if (error) {
        reject(error);
      } else {
        resolve(order);
      }
    }, 3000);
  });
};

// For example, the function could print out "Toadette takes the order of Rosalina"
// and then "Toadette is delivering a Sub to Rosalina"

// The users and the order need to be random each time by calling getUser and getOrder
// However, there for each call to getUser or getOrder, there's possibility of an error
// The error, if any, needs to be print out instead (ex. "My dog’s depressed.")

// Make the appropriate calls to each function and handle any error using ** promises **

const placeOrder = () => {


  Promise.all([getUser(), getOrder(),   getUser()])
  // this will trigger when all the 3 promises resolved
  .then(results => {
    console.log(results); // <= [ 'Luigi', 'Veggie Dogs', 'Wario' ]
    const waiter = results[0];
    const meal = results[1];
    const customer = results[2];
    console.log(`${waiter} is taking the order of ${customer}`);
    console.log(`${waiter} is delivering a ${meal} to ${customer}`);
  })
  .catch(err =>{

    console.log(`Error: ${err}`)

  })

  
};

placeOrder();
