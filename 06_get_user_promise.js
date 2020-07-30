const faker = require('faker');

const getUser = () => {
  return new Promise((resolve, reject) => {
    const error = 'Cannot get the user';
    // let's add a setTimeout

    if (error) {
      reject(error); // behaves like a return => stops the execution of the function and trigger the catch
    }

    setTimeout(() => {
      const user = {
        userId: faker.random.uuid().substring(0, 6),
        avatar: faker.image.avatar(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        catchPhrase: faker.company.catchPhrase(),
      };

      // What happens if there is an error?
      resolve(user);
    }, 2000);
  });
};

// consuming the promise

getUser()
  // promise is fulfilled. I get the user (success)
  .then((user) => console.log(user))
  // promise is rejected. I got an error.
  .catch((err) => console.log(err));

console.log('Continuing Execution...');
