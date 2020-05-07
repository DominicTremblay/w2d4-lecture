const faker = require('faker');

const getUser = () => {


  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const error = '';

      const user = {
        userId: faker.random.uuid().substring(0, 6),
        avatar: faker.image.avatar(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        catchPhrase: faker.company.catchPhrase(),
      };

      if (error) {
        reject(error);
      }

      resolve(user);
    }, 1000);
  });
};

// Consume the promise

getUser()
  .then(user => {
    // success case
    console.log("Success",user);
  })
  .catch(err => {
    console.log("catch", err);
  })

  console.log('promiseObj', promiseObj);