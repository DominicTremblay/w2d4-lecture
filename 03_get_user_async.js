const faker = require('faker');

const getUser = (cb) => {
  // let's add a setTimeout

  setTimeout(() => {
    const user = {
      userId: faker.random.uuid().substring(0, 6),
      avatar: faker.image.avatar(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      catchPhrase: faker.company.catchPhrase(),
    };

    // What happens if there is an error?
    throw new Error('Could not get the user');

    cb(user);
  }, 2000);
};

try {
  getUser((user) => console.log(user));
} catch (err) {
  console.log(err.message);
}

console.log('Continuing Execution...');
