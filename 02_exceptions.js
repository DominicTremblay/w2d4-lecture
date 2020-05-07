const faker = require('faker');

const getUser = (cb) => {

  const user = {
    userId: faker.random.uuid().substring(0,6),
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    catchPhrase: faker.company.catchPhrase(),
  }

  // An error happened

  throw new Error("Cannot get the user!");
 
  cb(user);
}

try {
  getUser(user => console.log(user));

} catch(err) {
  console.log(err.message);
}


  


console.log('Continue Execution...');
