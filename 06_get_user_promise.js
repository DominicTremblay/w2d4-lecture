const faker = require('faker');

const getUser = () => {
  return new Promise((resolve, reject) => {
    const error = 'Could not get the user';

    setTimeout(() => {
      const user = {
        userId: faker.random.uuid().substring(0, 6),
        avatar: faker.image.avatar(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        catchPhrase: faker.company.catchPhrase(),
      };

      if (error) {
        reject(error);
      } else {
        resolve(user);
      }
    }, 1000);
  });
};

// Consuming the promise
getUser()
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

console.log('Continue Execution...');
