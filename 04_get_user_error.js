const faker = require('faker');

const getUser = (cb) => {
  const error = 'Could not get the user';

  setTimeout(() => {
    if (error) {
      cb(error, null);
    } else {
      const user = {
        userId: faker.random.uuid().substring(0, 6),
        avatar: faker.image.avatar(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        catchPhrase: faker.company.catchPhrase(),
      };

      cb(user);
    }
  }, 2000);
};

getUser((error, user) => {

  if (error) {
    console.log(error);
  } else {
    console.log(user);
  }

  console.log(user)
});

console.log('Continue Execution...');
