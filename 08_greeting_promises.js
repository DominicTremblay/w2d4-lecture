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

// Select a random greeting after a delay (simulating a request to an API)
// Sends back the error if any, otherwise sends back the greeting
const getGreeting = () => {
  const greetings = [
    'Hey',
    'Hi',
    'Yo',
    "What's Up",
    'Howdy',
    'Hi-Ya',
    'Howdy-Do',
    'Bonjour',
  ];
  const greeting = arrSample(greetings);
  const error = errorSample();

  console.log('Selecting a greeting...');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject(error);
      } else {
        resolve(greeting);
      }
    }, 2000);
  });
};

// sayHello sould return how a user is greeting another user
// For example, the function could print out "Yoshi says: What's Up Mario"
// If the greeting user and the greeted user are the same, the function needs to print a message like the following example: "Peach says Howdy to himself/herself"

// The users and the greeting need to be random each time by calling getUser and getGreeting
// However, there for each call to getUser or getGreeting, there's possibility of an error
// The error, if any, needs to be print out instead (ex. "My dog’s depressed.")

// Make the appropriate calls to each function and handle any error using ** promises **

const sayHello = () => {
  let user1;
  let greeting;
  let user2;

  getUser()
    .then((firstUser) => {
      user1 = firstUser;
      return getGreeting(); // this result is being passed to the next .then
    })
    .then((randomGreeting) => {
      greeting = randomGreeting;

      return getUser(); // this result is being passed to the next .then
    })
    .then((secondUser) => {
      user2 = secondUser;

      // checking if user1 and user2 are the same user
      if ((user1 = user2)) {
        console.log(`${user1} says: ${greeting} to himself/herself`);
      } else {
        console.log(`${user1} says: ${greeting} to ${user2}`);
      }
    })
    .catch((err) => {
      // will catch any error in any of those function calls above
      console.log(`Error: ${err}`);
    });
};

sayHello();
