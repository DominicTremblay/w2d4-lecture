const faker = require('faker');

const getUser = (cb) => {
  const user = {
    userId: faker.random.uuid().substring(0, 6),
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    catchPhrase: faker.company.catchPhrase(),
  };

  cb(user);
};

getUser((user) => console.log(user));

console.log('Continuing Execution...');
