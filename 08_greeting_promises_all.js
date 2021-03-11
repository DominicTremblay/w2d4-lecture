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
  // functions are now promise
  // getUser() => getOrder() => getUser()

  
  Promise
    .all([getUser(), getOrder(), getUser()])
    .then(result => {
      // result is an array
      console.log(`${result[2]} gets a ${result[1]} from ${result[0]}`);

    })
    .catch(err => console.log(err));


  // getUser()
  //   .then((user1) => {
  //     // access to user 1
  //     username1 = user1;
  //     return getOrder(); // pass it to the next .then
  //   })
  //   .then((meal) => {
  //     // access to meal
  //     selectedMeal = meal;
  //     return getUser(); // pass it to the next .then
  //   })
  //   .then((user2) => {
  //     // access to user2
  //     username2 = user2;
  //     console.log(
  //       `${username2} has ordered a ${selectedMeal} from ${username1}`
  //     );
  //   })
  //   .catch((err) => console.log(`Error: ${err}`));
};

placeOrder();
