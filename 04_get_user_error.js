const faker = require('faker');

const getUser = (cb) => {

  setTimeout(() => {

    const user = {
      userId: faker.random.uuid().substring(0, 6),
      avatar: faker.image.avatar(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      catchPhrase: faker.company.catchPhrase(),
    };
  
    throw new Error('Could not get the user');
  
    cb(user);

  }, 1000);

  
};

try {
  getUser((user) => console.log(user));
} catch (err) {
  console.log(err);
}

console.log('Continue Execution...');
