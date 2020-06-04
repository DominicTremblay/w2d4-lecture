const faker = require('faker')


  const user = {
    userId: faker.random.uuid().substring(0,6),
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    catchPhrase: faker.company.catchPhrase(),
  }
