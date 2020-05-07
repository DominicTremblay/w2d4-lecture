const faker = require('faker');

const getUser = (cb) => {
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
      cb(error, null);
    } else {
      cb(null, user);
    }
  }, 1000);
};

getUser((error, user) => {
  if (error) {
    console.log(error);
  } else {
    console.log(user);
  }
});

console.log('Continue Execution...');
